"use client";

import { useState } from "react";
import { createContainer } from "react-tracked";

const useDialogState = () => useState<{ [k: string]: any }>({});

export const { Provider, useTracked, useUpdate } =
  createContainer(useDialogState);
