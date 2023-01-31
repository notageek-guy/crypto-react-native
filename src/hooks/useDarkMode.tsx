import { useColorMode, useColorModeValue } from "native-base";
export default function useDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");
  return { isDark, toggleColorMode, bg, color };
}
