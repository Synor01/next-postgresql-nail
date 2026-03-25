import { withApiHandler } from "@/utils/withApiHandler";
import { success } from "@/lib/response";
import { prisma } from "@/lib/prisma";


export const DELETE = withApiHandler(async (req: Request, email?: string) => {
  const url = new URL(req.url);
  const id = url.searchParams.get("id") || '';
  const res = await prisma.post.delete({
    where: {
      id,
    }
  })
  return Response.json(success(res, '删除成功'), { status: 200 });
})