import { Box } from "native-base";
import { FC, PropsWithChildren } from "react";
import useDarkMode from "../hooks/useDarkMode";

const Themer: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { bg,color} = useDarkMode();
  return (
    <Box flex="1" safeArea bg={bg}
        color ={color}
    >
      {children}
    </Box>
  );
};

export default Themer;
