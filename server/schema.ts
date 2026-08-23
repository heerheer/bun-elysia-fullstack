import {t} from "elysia";
import {z} from "zod";

export const schema = t.Object({
    message:t.String(),
    runtime:t.String(),
    framework:t.Optional(t.String({title:"Framework",description: "The framework used"})),
})

export const schemaZod = z.object({
    message:z.string(),
    runtime:z.string(),
    framework:z.string().meta({title: "Framework"}).describe("The framework used").optional(),
}).loose()