import { Box, IconButton } from "native-base";
import useDarkMode from "../hooks/useDarkMode";
import { Ionicons } from "@expo/vector-icons";
export default function DarkModeToggle() {
  const { toggleColorMode, isDark } = useDarkMode();
  return (
    <Box  display="flex" flexDirection="row" justifyContent="flex-end">
      <IconButton
        icon={
          <Ionicons name="moon" size={24} color={isDark ? "white" : "black"} />
        }
        onPress={toggleColorMode}
      />
    </Box>
  );
}
