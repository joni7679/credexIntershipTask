const PRICING = {
  ChatGPT: {
    Plus: 20,
    Team: 30,
    Enterprise: 60,
  },
  Claude: {
    Pro: 20,
    Team: 30,
    Enterprise: 60,
  },
  Cursor: {
    Pro: 20,
    Business: 40,
  },
  Gemini: {
    Pro: 20,
    Ultra: 30,
  },
};

const USE_CASE_ALTERNATIVES = {
  Coding: "Cursor",
  Writing: "Claude",
  Research: "Gemini",
  "Data Analysis": "ChatGPT",
  Marketing: "Claude",
  "Customer Support": "ChatGPT",
  "General Productivity": "ChatGPT",
};

const PLAN_TIERS = {
  ChatGPT: ["Plus", "Team", "Enterprise"],
  Claude: ["Pro", "Team", "Enterprise"],
  Cursor: ["Pro", "Business"],
  Gemini: ["Pro", "Ultra"],
};

const SMALL_TEAM_LIMIT = 5;
const LARGE_TEAM_LIMIT = 50;
const OVERPRICE_TOLERANCE = 1.1;

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function findSupportedValue(value, options) {
  const normalizedValue = normalizeText(value);

  return options.find((option) => normalizeText(option) === normalizedValue) || "";
}

function toNonNegativeNumber(value) {
  const number = Number(value);

  return Number.isFinite(number) && number > 0 ? number : 0;
}

function getBillableSeats(activeSeats, teamSize) {
  return Math.max(1, activeSeats || teamSize || 1);
}

function getPlanPrice(tool, plan) {
  return PRICING[tool]?.[plan] ?? 0;
}

function getPlanCost(tool, plan, seats) {
  return getPlanPrice(tool, plan) * seats;
}

function getRecommendedPlan(tool, currentPlan, teamSize, activeSeats) {
  const tiers = PLAN_TIERS[tool];

  if (!tiers) {
    return "";
  }

  if (tool === "Cursor") {
    return teamSize > SMALL_TEAM_LIMIT || activeSeats > SMALL_TEAM_LIMIT
      ? "Business"
      : "Pro";
  }

  if (teamSize >= LARGE_TEAM_LIMIT || activeSeats >= LARGE_TEAM_LIMIT) {
    return tiers.includes("Enterprise") ? "Enterprise" : tiers[tiers.length - 1];
  }

  if (teamSize > SMALL_TEAM_LIMIT || activeSeats > SMALL_TEAM_LIMIT) {
    return tiers.includes("Team") ? "Team" : tiers[tiers.length - 1];
  }

  if (["Enterprise", "Team", "Business", "Ultra"].includes(currentPlan)) {
    return tiers[0];
  }

  return currentPlan || tiers[0];
}

function getReason({
  action,
  tool,
  currentPlan,
  recommendedPlan,
  alternativeTool,
  useCase,
  isOverpriced,
  isOversized,
}) {
  if (action === "downgrade") {
    if (isOverpriced && isOversized) {
      return `${currentPlan} is oversized for the team and current spend is above expected ${tool} pricing.`;
    }

    if (isOverpriced) {
      return `Current spend is above expected ${tool} ${currentPlan} pricing.`;
    }

    return `${currentPlan} is more capacity than this team needs; ${recommendedPlan} should cover the current usage.`;
  }

  if (action === "upgrade") {
    return `${recommendedPlan} is a better fit for the team size and governance needs.`;
  }

  if (action === "switch") {
    return `${alternativeTool} is a stronger fit for ${useCase} and can reduce the monthly subscription cost.`;
  }

  return `${tool} ${currentPlan} is appropriately sized for the current team and use case.`;
}

export function runAudit(toolData) {
  const tools = Object.keys(PRICING);
  const useCases = Object.keys(USE_CASE_ALTERNATIVES);

  const tool = findSupportedValue(toolData?.tool, tools);
  const currentPlan = findSupportedValue(
    toolData?.currentPlan,
    Object.keys(PRICING[tool] || {})
  );
  const useCase = findSupportedValue(toolData?.useCase, useCases);
  const monthlySpend = toNonNegativeNumber(toolData?.monthlySpend);
  const activeSeats = toNonNegativeNumber(toolData?.activeSeats);
  const teamSize = toNonNegativeNumber(toolData?.teamSize);
  const seats = getBillableSeats(activeSeats, teamSize);

  if (!tool || !currentPlan) {
    throw new Error("Unsupported tool or current plan.");
  }

  if (!useCase) {
    throw new Error("Unsupported use case.");
  }

  const alternativeTool = USE_CASE_ALTERNATIVES[useCase];
  const expectedCurrentCost = getPlanCost(tool, currentPlan, seats);
  const recommendedPlan = getRecommendedPlan(
    tool,
    currentPlan,
    teamSize,
    activeSeats
  );
  const recommendedCost = getPlanCost(tool, recommendedPlan, seats);
  const alternativePlan = getRecommendedPlan(
    alternativeTool,
    "",
    teamSize,
    activeSeats
  );
  const alternativeCost = getPlanCost(alternativeTool, alternativePlan, seats);
  const currentCost = monthlySpend || expectedCurrentCost;
  const isOverpriced =
    expectedCurrentCost > 0 && currentCost > expectedCurrentCost * OVERPRICE_TOLERANCE;
  const currentTierIndex = PLAN_TIERS[tool].indexOf(currentPlan);
  const recommendedTierIndex = PLAN_TIERS[tool].indexOf(recommendedPlan);
  const isOversized = recommendedTierIndex < currentTierIndex;
  const needsUpgrade = recommendedTierIndex > currentTierIndex;
  const switchSavesMoney =
    alternativeTool !== tool && alternativeCost > 0 && alternativeCost < currentCost;

  let action = "keep";
  let recommendation = "Keep Current Plan";
  let projectedCost = currentCost;

  if (isOversized || isOverpriced) {
    action = "downgrade";
    recommendation = `Downgrade to ${recommendedPlan}`;
    projectedCost = recommendedCost;
  } else if (needsUpgrade) {
    action = "upgrade";
    recommendation = `Upgrade to ${recommendedPlan}`;
    projectedCost = recommendedCost;
  } else if (switchSavesMoney) {
    action = "switch";
    recommendation = `Switch to ${alternativeTool} ${alternativePlan}`;
    projectedCost = alternativeCost;
  }

  const savings = Math.max(0, Math.round((currentCost - projectedCost) * 100) / 100);

  return {
    tool,
    currentPlan,
    recommendation,
    action,
    savings,
    annualSavings: Math.round(savings * 12 * 100) / 100,
    reason: getReason({
      action,
      tool,
      currentPlan,
      recommendedPlan,
      alternativeTool,
      useCase,
      isOverpriced,
      isOversized,
    }),
    alternativeTool,
  };
}

export default runAudit;
