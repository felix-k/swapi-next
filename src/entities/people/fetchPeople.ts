"use server";

import { PeopleSchema } from "@/src/shared/types";
import { PAGE_PARAM, PEOPLE_ENDPOINT, SEARCH_PARAM } from "./constants";
import { isServerCacheEnabled } from "@/src/shared/ui/CacheButton";

type FetchPeopleProps = {
  search: string | undefined;
  pageIndex: number;
};

export async function fetchPeople({ pageIndex, search }: FetchPeopleProps) {
  const searchParams = new URLSearchParams(
    `${SEARCH_PARAM}=${search || ""}&${PAGE_PARAM}=${pageIndex + 1}`
  );

  if (!searchParams.get(SEARCH_PARAM)) searchParams.delete(SEARCH_PARAM);

  const data = await fetch(
    `${process.env.API_URL}/${PEOPLE_ENDPOINT}?${searchParams}`,
    { cache: (await isServerCacheEnabled()) ? "force-cache" : "no-store" }
  );

  const result = await data.json();
  const people = PeopleSchema.parse(result);

  return people;
}
