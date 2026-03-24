import { z } from "zod";
import { ADD_TYPE_VALUE } from "@/types";

export const PostSchema = z.object({
    type: z.enum(ADD_TYPE_VALUE),
    amount: z.number().optional(),
    date: z.iso.date().optional(),
    content: z.string().optional(),
    id: z.number().optional(),
});

export const UpdatePostSchema = z.object({

});