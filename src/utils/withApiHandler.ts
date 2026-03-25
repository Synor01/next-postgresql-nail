
import { getCurrentUser } from '@/lib/user';
import { NextResponse } from "next/server";

export function withApiHandler(handler: (req: Request, email: string) => Promise<Response>) {
  return async (req: Request) => {
    try {
      // login check
      const user = await getCurrentUser();
      if (!user?.email) {
        return NextResponse.json({ error: 'unLogin' }, {
          status: 401,
          headers: { 'location': '/auth/signin' },
        });
      }
      const resp = await handler(req, user?.email);
      return resp;
    } catch (err: unknown) {
      return NextResponse.json({ error: err }, {
        status: 500,
        headers: { 'content-type': 'application/json' },
      });
    }
  };
}