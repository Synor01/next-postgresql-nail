import { withApiHandler } from "@/utils/withApiHandler";
import { success, error } from "@/lib/response";
import { PostSchema } from "@/schemas/post";

import { prisma } from "@/lib/prisma";

export const POST = withApiHandler(async (req: Request) => {
  const body = await req.json()
  const result = PostSchema.safeParse(body);
  if (!result.success) {
    return Response.json(error(result.error.issues[0].message))
  }
  const res = await prisma.post.create({
      data: result.data,
    })
  return Response.json(success({ id: res.id }, '添加成功'), {
    status: 200,
  });
})