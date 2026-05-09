import { ArrowRight } from "lucide-react";

const stepsData = [
    {
        id: "01",
        title: "Connect Your Accounts",
        description:
            "Securely link your finance stack via Plaid or direct API integrations with common AI vendors.",
    },
    {
        id: "02",
        title: "Analyze Usage",
        description:
            "Our engine scrubs through logs to find underutilized licenses and overlapping tool capabilities.",
    },
    {
        id: "03",
        title: "Execute Savings",
        description:
            "Review the audit report and apply recommendations directly through our interface to start saving immediately.",
    },
];

export default function EfficiencySteps() {
    return (
        <section className="py-20 bg-[#f8f8fc]">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-center text-4xl font-bold text-gray-900 mb-16">
                    Three Steps to Efficiency
                </h2>
                <div className="grid md:grid-cols-3 gap-10 items-start relative">
                    {stepsData.map((step, index) => (
                        <div key={step.id} className="relative text-center">
                            <h1 className="text-8xl font-bold text-gray-200 mb-4">
                                {step.id}
                            </h1>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-lg leading-8 max-w-xs mx-auto">
                                {step.description}
                            </p>
                            {index !== stepsData.length - 1 && (
                                <div className="hidden md:block absolute top-20 -right-8 text-gray-300">
                                    <ArrowRight size={28} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}