"use client"
import { signOut } from "next-auth/react";
import { Button } from "antd-mobile";

export default function SignOutPage() {

    return <Button
        onClick={() =>
            signOut({ redirect: true, callbackUrl: "/auth/signin" })
        }
    >
        退出登录
    </Button>
}