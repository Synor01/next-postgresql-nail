
import { withApiHandler } from "@/utils/withApiHandler";
import { success, error } from "@/lib/response";
import { prisma } from "@/lib/prisma";
// import { auth } from "@/lib/auth";

export const GET = withApiHandler(async (request: Request, email: string) => {
  const url = new URL(request.url);
  const type = url.searchParams.get("type") || '';
  const res = await prisma.post.findMany({
    where: {
      type,
      authorId: email,
    }
  })
  if (res.length && res[0].authorId !== email) {
    return Response.json(error("unLogin"), {status: 401});
  }
  return Response.json(success(res, '查询成功'), { status: 200 });
});