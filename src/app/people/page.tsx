import { useParamsStore } from "@/src/shared/store";
import { CacheButton, ColorModeButton } from "@/src/shared/ui";
import { isServerCacheEnabled } from "@/src/shared/ui/CacheButton";
import { PeopleCard } from "@/src/widgets";

export default async function PeoplePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const pageIndex =
    typeof searchParams.page === "string" ? +searchParams.page : 0;

  useParamsStore.setState({ search, pageIndex });

  return (
    <>
      <div className="flex flex-row items-center space-x-4 mb-4">
        <ColorModeButton />
        <CacheButton enabled={await isServerCacheEnabled()} />
      </div>
      <PeopleCard />
    </>
  );
}
