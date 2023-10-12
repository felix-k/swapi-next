import { Suspense } from "react";
import { Divider, Paper, Typography } from "@mui/material";
import { Preloader, fetchPerson } from "@/src/entities/person";
import { Placeholder } from "@/src/shared/ui";
import { Await } from "@/src/shared/lib";
import PersonProfile from "../PersonProfile";

const ProfileCard = ({ id }: { id: string }) => {
  return (
    <Paper sx={{ maxWidth: "md", width: 1 }}>
      <Typography p={2} align={"center"} variant="h5">
        Hero Profile
      </Typography>
      <Divider />
      <Suspense fallback={<Placeholder />}>
        <Await promise={fetchPerson(id)}>
          {(person) => (
            <>
              <Preloader person={person} />
              <PersonProfile />
            </>
          )}
        </Await>
      </Suspense>
    </Paper>
  );
};

export default ProfileCard;
