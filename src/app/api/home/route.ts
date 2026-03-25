
import { prisma } from '@/lib/prisma'
import { formatHomeData } from "./format";
import { success, error } from "@/lib/response";
import { withApiHandler } from "@/utils/withApiHandler";
import dayjs from 'dayjs';

export const GET = withApiHandler(async (req: Request, email) => {
    console.log("🚀 ~ email:", email)
    const day = dayjs().format('YYYY-MM-DD');
    const month = dayjs().format('YYYY-MM');
    const resToday = await prisma.post.findMany({
        where: {
            date: day
        }
    });
    console.log("🚀 ~ resToday:", resToday)
    // jwt鉴权
    if (resToday?.length && resToday[0].authorId !== email) {
        return Response.json(error("unLogin"), {status: 401});
    }
    const resMonth = await prisma.post.findMany({
        where: {
            date: {
                gte: `${month}-01`,
                lt: `${month}-32`,
            }
        }
    });

    const res = formatHomeData(JSON.parse(JSON.stringify(resToday)), JSON.parse(JSON.stringify(resMonth)));
    return Response.json(success(res), {status: 200});
})