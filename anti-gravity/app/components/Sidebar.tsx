"use client";

import { FileText, LayoutDashboard, Settings, PenTool } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
    {
        title: "대시보드",
        href: "/",
        icon: LayoutDashboard,
    },
    {
        title: "사업계획서 작성",
        href: "/write",
        icon: PenTool,
    },
    {
        title: "내 문서",
        href: "/documents",
        icon: FileText,
    },
    {
        title: "설정",
        href: "/settings",
        icon: Settings,
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-screen w-64 flex-col border-r bg-gray-50/50">
            <div className="p-6">
                <h1 className="text-xl font-bold tracking-tight text-gray-900">
                    페이퍼 메이커
                </h1>
                <p className="text-xs text-gray-500">AI 사업계획서 도우미</p>
            </div>
            <nav className="flex-1 space-y-1 px-4">
                {items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-blue-100 text-blue-700"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.title}
                        </Link>
                    );
                })}
            </nav>
            <div className="p-4 border-t">
                <div className="rounded-lg bg-blue-50 p-4">
                    <h4 className="text-sm font-semibold text-blue-900">도움이 필요하신가요?</h4>
                    <p className="mt-1 text-xs text-blue-700">
                        성공적인 사업계획서 작성 가이드를 확인하세요.
                    </p>
                </div>
            </div>
        </div>
    );
}
