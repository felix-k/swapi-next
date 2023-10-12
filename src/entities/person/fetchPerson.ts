"use server";

import { PersonSchema } from "@/src/shared/types";
import { isServerCacheEnabled } from "@/src/shared/ui/CacheButton";
import { PEOPLE_ENDPOINT } from "../people";

export async function fetchPerson(id: string) {
  const data = await fetch(`${process.env.API_URL}/${PEOPLE_ENDPOINT}/${id}`, {
    cache: (await isServerCacheEnabled()) ? "force-cache" : "no-store",
  });

  const result = await data.json();
  const person = PersonSchema.parse(result);

  return person;
}
