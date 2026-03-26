"use strict"
import React from "react";
import { Home, User } from "lucide-react";
import { AddCircleOutline } from "antd-mobile-icons";
import { useRouter } from "next/navigation";
import { useIsLogin } from "@/lib/clientUser";

export const Footer = () => {
    const { isLogined} = useIsLogin();
    const router = useRouter();
    return <footer className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto /80 backdrop-blur-sm border-t border-gray-100 rounded-t-3xl" >
        <div className="flex justify-around items-center h-16">
            <div className="text-pink-500 flex flex-col items-center gap-1" onClick={() => router.push('/')}>
                <Home size={24} fill="currentColor" />
            </div>
            <AddCircleOutline className="w-16 h-16 bg-pink-500 rounded-full text-white text-4xl font-light shadow-lg -mt-8 flex items-center justify-center"/>
            <div className="text-pink-400 flex flex-col items-center gap-1" onClick={() => router.push(isLogined ? '/auth/signout' : '/auth/signin')}>
                <User size={24} />
            </div>
        </div>
    </footer >
}