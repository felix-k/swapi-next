import { Suspense } from "react";
import { Paper, Typography } from "@mui/material";
import { SearchToolbar, Placeholder } from "@/src/shared/ui";
import PeopleTable from "../PeopleTable";
import Progress from "./Progress";

const PeopleCard = () => {
  return (
    <Paper sx={{ maxWidth: "md", width: 1 }}>
      <Typography p={2} align={"center"} variant="h5">
        StarWars Heroes
      </Typography>
      <SearchToolbar />
      <Progress />
      <Suspense fallback={<Placeholder />}>
        <PeopleTable />
      </Suspense>
    </Paper>
  );
};

export default PeopleCard;
