import { z } from "zod";
import { PersonSchema } from "./person";

const PeopleSchema = z.object({
  count: z.number(),
  next: z.nullable(z.string()),
  previous: z.nullable(z.string()),
  results: z.array(PersonSchema),
});

type PeopleType = z.infer<typeof PeopleSchema>;

export { PeopleSchema, type PeopleType };
