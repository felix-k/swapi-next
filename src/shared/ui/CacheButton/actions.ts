"use server";

import { cookies } from "next/headers";

const SERVER_CACHE = "server-cache";

export async function toggleServerCache() {
  const cookieStore = cookies();
  const serverCache = cookieStore.get(SERVER_CACHE);
  const enabled = !!(serverCache?.value === "enabled");

  enabled
    ? cookieStore.set(SERVER_CACHE, "disabled")
    : cookieStore.set(SERVER_CACHE, "enabled");

  return !enabled;
}

export async function isServerCacheEnabled() {
  const cookieStore = cookies();
  const serverCache = cookieStore.get(SERVER_CACHE);

  return !!(serverCache?.value === "enabled");
}
