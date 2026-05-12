"use client"
import { aiTools } from "@/app/data/aiData";
import runAudit from "@/app/lib/auditRules";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from 'next/navigation'
const SpendForm = () => {
    const router = useRouter();
    const planOptions = {
        ChatGPT: ["Plus", "Team", "Enterprise"],
        Claude: ["Pro", "Team", "Enterprise"],
        Cursor: ["Pro", "Business"],
        Gemini: ["Pro", "Ultra"],
    };
    const [auditResults, setAuditResults] = useState([]);
    const [loading, setLoading] = useState(false)
    const [tools, setTools] = useState([
        {
            tool: "",
            currentPlan: "",
            monthlySpend: "",
            activeSeats: "",
            teamSize: "",
            useCase: ""
        }
    ]);

    // add another 
    const addAnother = () => {

        setTools([...tools, {
            tool: "",
            currentPlan: "",
            monthlySpend: "",
            activeSeats: "",
            teamSize: "",
            useCase: ""
        }])
    }

    // handle submit form..
    const handleSubmit = async (e) => {
        e.preventDefault();
        for (let tool of tools) {
            if (
                !tool.tool ||
                !tool.currentPlan ||
                !tool.monthlySpend ||
                !tool.activeSeats ||
                !tool.teamSize ||
                !tool.useCase
            ) {
                toast.error("Please fill all fields");
                return;
            }
        }
        try {
            setLoading(true);
            const results = tools.map((tool) => runAudit(tool));
            console.log(results);
            setAuditResults(results)
            const res = await axios.post("/api/gemini", {
                auditResults: results,
            });
            console.log(res.data);
            toast.success("Audit completed successfully");
            router.push("/result")
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <Toaster />
            <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Add Your AI Tool
                    </h2>
                    <p className="text-sm text-gray-500 mt-2 leading-5">
                        Provide details about your current AI subscriptions for a precision
                        audit of your team’s efficiency.
                    </p>
                </div>
                <form className="mt-8 space-y-6">
                    {
                        tools.map((tool, index) => {
                            return (
                                <div key={index}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
                                        <div className="mt-3">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                AI Tool
                                            </label>
                                            <select
                                                value={tool.tool}
                                                onChange={(e) => {
                                                    const updatedTools = [...tools];
                                                    updatedTools[index].tool = e.target.value;
                                                    setTools(updatedTools);
                                                }}
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                <option value="">Select a tool</option>
                                                {aiTools.map((item) => (
                                                    <option key={item.id} value={item.toolName}>
                                                        {item.toolName}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="mt-3">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Current Plan
                                            </label>
                                            <select
                                                value={tool.currentPlan}
                                                onChange={(e) => {
                                                    const updatedTools = [...tools];
                                                    updatedTools[index].currentPlan = e.target.value;
                                                    setTools(updatedTools);
                                                }}
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                {
                                                    planOptions[tool.tool]?.map((plan) => {
                                                        return (
                                                            <option key={plan.id} value={plan}>
                                                                {plan}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="mt-3">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Monthly Spend (USD)
                                            </label>
                                            <input
                                                type="number"
                                                value={tool.monthlySpend}
                                                onChange={(e) => {
                                                    const updatedTools = [...tools];
                                                    updatedTools[index].monthlySpend = e.target.value;
                                                    setTools(updatedTools);
                                                }}
                                                placeholder="$ 0.00"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div className="mt-3">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Active Seats
                                            </label>
                                            <input
                                                type="number"
                                                value={tool.activeSeats}
                                                onChange={(e) => {
                                                    const updatedTools = [...tools];
                                                    updatedTools[index].activeSeats = e.target.value;
                                                    setTools(updatedTools);
                                                }}
                                                placeholder="e.g. 25"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Total Team Size
                                        </label>
                                        <input
                                            type="number"
                                            value={tool.teamSize}
                                            onChange={(e) => {
                                                const updatedTools = [...tools];
                                                updatedTools[index].teamSize = e.target.value;
                                                setTools(updatedTools);
                                            }}
                                            placeholder="Total employees in department"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="mt-3">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Primary Use Case
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={tool.useCase}
                                            onChange={(e) => {
                                                const updatedTools = [...tools];
                                                updatedTools[index].useCase = e.target.value;
                                                setTools(updatedTools);
                                            }}
                                            placeholder="e.g. Technical documentation, customer support automation, or internal data analysis"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm resize-none outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                            );
                        })
                    }
                    <div className="flex items-center justify-between pt-2">
                        <button
                            type="button" onClick={addAnother}
                            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer"
                        >
                            <Plus size={16} />
                            Add Another Tool
                        </button>
                        <button
                            type="submit" onClick={handleSubmit}
                            disabled={loading}
                            className={`text-white px-6 py-3 rounded-lg text-sm font-medium ${loading ? "cursor-not-allowed bg-blue-400" : "cursor-pointer bg-blue-600 hover:bg-blue-700"}`}
                        >
                            {
                                loading ? "Run Audit..." : "Run Audit"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SpendForm;