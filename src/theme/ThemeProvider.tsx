import React from "react";

import { NativeBaseProvider, ColorMode } from "native-base";

import type { StorageManager } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ThemeProvider({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme?: any;
}) {
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem("@my-app-color-mode");
        return val === "dark" ? "dark" : "light";
      } catch (e) {
        console.log(e);
        return "light";
      }
    },
    set: async (
      value:
        | ColorMode
        | ((prevVar: ColorMode) => ColorMode)
        | undefined
        | null
        | string
        | any
    ) => {
      try {
        await AsyncStorage.setItem("@my-app-color-mode", value);
      } catch (e) {
        console.log(e);
      }
    },
  };

  return (
    <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </NativeBaseProvider>
  );
}
