"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { improveText } from "@/lib/gemini";

interface SectionEditorProps {
    title: string;
    description: string;
    placeholder?: string;
}

export function SectionEditor({ title, description, placeholder }: SectionEditorProps) {
    const [content, setContent] = useState("");
    const [isImproving, setIsImproving] = useState(false);

    const handleImprove = async () => {
        if (!content) return;

        setIsImproving(true);
        try {
            const improvedText = await improveText(content, title);
            setContent(improvedText);
        } catch (error) {
            console.error("Failed to improve text:", error);
            alert("AI 첨삭 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            setIsImproving(false);
        }
    };

    return (
        <div className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
            <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
            </div>

            <div className="relative">
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={placeholder}
                    className="min-h-[200px] w-full rounded-lg border border-gray-200 p-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-y"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                    {content.length} 자
                </div>
            </div>

            <div className="flex justify-end gap-3">
                <button
                    className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                >
                    임시 저장
                </button>
                <button
                    onClick={handleImprove}
                    disabled={isImproving || !content}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-all"
                >
                    <Sparkles className="h-4 w-4" />
                    {isImproving ? "분석 중..." : "AI 첨삭"}
                </button>
            </div>
        </div>
    );
}
