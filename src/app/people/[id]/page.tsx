import { PersonCard } from "@/src/widgets";
import { HomeButton } from "@/src/shared/ui";
import { PEOPLE_ROUTE } from "@/src/app/constants";

export default function PersonPage({ params }: { params: { id: string } }) {
  return (
    <>
      <HomeButton sx={{ mb: "1rem" }} path={PEOPLE_ROUTE} />
      <PersonCard id={params.id} />
    </>
  );
}
