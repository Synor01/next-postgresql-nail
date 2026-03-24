
import { withApiHandler } from "@/utils/withApiHandler";
import { success } from "@/lib/response";
import { prisma } from "@/lib/prisma";

export const GET = withApiHandler(async (request: Request) => {
  const url = new URL(request.url);
  const type = url.searchParams.get("type") || '';
  const res = await prisma.post.findMany({
    where: {
      type
    }
  })
  return Response.json(success(res, '查询成功'), { status: 200 });
});