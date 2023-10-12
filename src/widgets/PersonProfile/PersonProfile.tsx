"use client";

import { List } from "@mui/material";
import { usePersonStore } from "@/src/entities/person";
import { DialogListItem } from "@/src/shared/ui";
import { PersonType } from "@/src/shared/types";

import {
  BirthDialog,
  GenderDialog,
  HeightDialog,
  MassDialog,
  NameDialog,
} from "../Dialogs";

const PersonProfile = () => {
  const { person } = usePersonStore();

  return (
    <List disablePadding>
      <DialogListItem
        divider
        primary={"Name"}
        secondary={person?.name}
        component={NameDialog}
        value={person}
      />
      <DialogListItem
        divider
        primary={"Height"}
        secondary={person?.height}
        component={HeightDialog}
        value={person}
      />
      <DialogListItem
        divider
        primary={"Mass"}
        secondary={person?.mass}
        component={MassDialog}
        value={person}
      />
      <DialogListItem
        divider
        primary={"Birth"}
        secondary={person?.birthYear}
        component={BirthDialog}
        value={person}
      />
      <DialogListItem
        divider
        primary={"Gender"}
        secondary={person?.gender}
        component={GenderDialog}
        value={person}
      />
    </List>
  );
};

export default PersonProfile;
