"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log("🚀 ~ handleLogin ~ res:", res)

    if (res?.error) {
      alert("登录失败");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-10 max-w-md mx-auto">
      <h1 className="text-xl font-bold">登录</h1>

      <input
        className="border p-2"
        placeholder="邮箱"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2"
        type="password"
        placeholder="密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-blue-500 text-white p-2" onClick={handleLogin}>
        登录
      </button>
    </div>
  );
}