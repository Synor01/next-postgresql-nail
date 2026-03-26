
import { prisma } from '@/lib/prisma'
import { formatHomeData } from "./format";
import { success, error } from "@/lib/response";
import { withApiHandler } from "@/utils/withApiHandler";
import dayjs from 'dayjs';

export const GET = withApiHandler(async (req: Request, email) => {
    const today = dayjs().format('YYYY-MM-DD')
    const start = dayjs().startOf("month").format("YYYY-MM-DD")
    const end = dayjs().endOf("month").format("YYYY-MM-DD")
    if (!email) {
        return Response.json(error("unauthorized"), { status: 402 })
    }
    const resToday = await prisma.post.findMany({
        where: {
            date: today,
            authorId: email,
        }
    });
    // jwt鉴权
    if (resToday?.length && resToday[0].authorId !== email) {
        return Response.json(error("auth error"), {status: 402});
    }
    const resMonth = await prisma.post.findMany({
        where: {
            date: {
                gte: start,
                lte: end,
            },
            authorId: email,
        }
    });

    const res = formatHomeData(resToday, resMonth);
    return Response.json(success(res), {status: 200});
})