
import { getCurrentUser } from '@/lib/user';
import { NextResponse } from "next/server";

export function withApiHandler(handler: (req: Request, email: string) => Promise<Response>) {
    
  return async (req: Request) => {
    try {
      // login check
      const user = await getCurrentUser();
      console.log("🚀 ~ withApiHandler ~ user:", user)
      if (!user?.email) {
        return NextResponse.json({ error: 'unLogin' }, {
          status: 401,
          headers: { 'location': '/auth/signin' },
        });
      }
      const resp = await handler(req, user?.email);
      return resp;
    } catch (err: any) {
      console.log("🚀 ~ withApiHandler ~ err:", err)
      return NextResponse.json({ error: err?.message }, {
        status: 500,
        headers: { 'content-type': 'application/json' },
      });
    }
  };
}