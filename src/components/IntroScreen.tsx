import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { Box, Center } from "native-base";
import introLogo from "../../assets/intro.json";

export default function IntroScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const animation = useRef<LottieView | null>(null);

  const current = new Date().getSeconds();
  useEffect(() => {
    //     navigate to home route after 6 seconds
    const interval = setInterval(() => {
      if (new Date().getSeconds() - current > 6) {
        navigation.navigate("Home");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      flex="1"
      justifyContent="center"
      alignItems="center"
      background={"#fff"}
    >
      <Center>
        <LottieView
          ref={animation}
          source={introLogo}
          autoPlay
          loop={false}
          style={{ width: 300, height: 300 }}
        />
      </Center>
    </Box>
  );
}
