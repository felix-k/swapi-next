import { z } from "zod";
import camelize from "camelize-ts";

const PersonSchema = z
  .object({
    name: z.string(),
    height: z.string(),
    mass: z.string(),
    birth_year: z.string(),
    gender: z.string(),
    films: z.string().array(),
    url: z.string(),
  })
  .transform((value) => ({
    ...camelize(value),
    id: value.url.match(/\/(\d+)\/$/)?.[1] as string,
  }));

type PersonType = z.infer<typeof PersonSchema>;

export { PersonSchema, type PersonType };
