import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import Home from "./src/components/Home";
import IntroScreen from "./src/components/IntroScreen";
import ThemeProvider from "./src/theme/ThemeProvider";

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Navigator initialRouteName="splash">
          <Screen
            options={{ headerShown: false }}
            name="splash"
            component={IntroScreen}
          />
          <Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
        </Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
