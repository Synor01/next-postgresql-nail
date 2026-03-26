import { signIn } from "next-auth/react";
import { withApiHandler } from "@/utils/withApiHandler";
import { success } from "@/lib/response";

export const POST = withApiHandler(async (req: Request) => {
    const { email, password } = await req.json();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return Response.json(success(res));
});