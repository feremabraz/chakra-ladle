import { Button, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Download } from "phosphor-react";
import * as React from "react";

const MotionFlex = motion(Flex);

export const GetButton = () => {
  const [hovered, setHovered] = React.useState(true);
  return (
    <Button
      onPointerEnter={() => setHovered(false)}
      onPointerLeave={() => setHovered(true)}
    >
      <Flex>
        <MotionFlex
          alignItems="center"
          justifyContent="center"
          animate={{
            paddingRight: !hovered ? "0.75rem" : 0,
            width: !hovered ? "1.75rem" : 0,
            overflow: "hidden",
          }}
        >
          <Download />
        </MotionFlex>
        <Text color="muted">Get Code</Text>
      </Flex>
    </Button>
  );
};
