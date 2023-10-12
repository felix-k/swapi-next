"use client";

import { PersonType } from "@/src/shared/types";
import { usePersonStore } from "./store";

function Preloader({ person }: { person: PersonType }) {
  usePersonStore.setState({ person });
  return null;
}

export default Preloader;
