import { Box } from "native-base";
import React from "react";
import Crypto from "./Crypto";
import DarkModeToggle from "./DarkModeToggle";

import Themer from "../theme/Themer";
export default function Home() {
  return (
    <Themer>
      <DarkModeToggle />
      <Crypto />
    </Themer>
  );
}
