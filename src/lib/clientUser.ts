"use strict"
import { Session } from "next-auth"
import { useSession } from "next-auth/react"

export const useIsLogin = (): {
    isLogined: boolean,
    session: Session | null,
} => {
  const { data: session, status } = useSession();
  return {
    isLogined: status === "authenticated",
    session,
  }
}