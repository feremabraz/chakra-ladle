import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Navbar } from "./Navbar.stories";
import { Sidebar } from "./Sidebar.stories";
import { Download } from "phosphor-react";

export const App = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex
      as="section"
      direction={{ base: "column", lg: "row" }}
      height="100vh"
      bg="bg-canvas"
      overflowY="auto"
    >
      {isDesktop ? <Sidebar /> : <Navbar />}
      <Box bg="bg-surface" pt={{ base: "0", lg: "3" }} flex="1">
        <Box
          bg="bg-canvas"
          borderTopLeftRadius={{ base: "none", lg: "2rem" }}
          height="full"
        >
          <Container py="8" height="full">
            <Stack spacing={{ base: "8", lg: "6" }} height="full">
              <Stack
                spacing="4"
                direction={{ base: "column", lg: "row" }}
                justify="space-between"
                align={{ base: "start", lg: "center" }}
              >
                <Stack spacing="1">
                  <Heading
                    size={useBreakpointValue({ base: "xs", lg: "sm" })}
                    fontWeight="medium"
                  >
                    Dashboard
                  </Heading>
                  <Text color="muted">
                    All important metrics at a glance, if you do not believe it
                    try it.
                  </Text>
                </Stack>
                <HStack spacing="3">
                  <Button variant="secondary" leftIcon={<Download size={20} />}>
                    Download
                  </Button>
                  <Button variant="primary">Create</Button>
                </HStack>
              </Stack>
              <Box
                bg="bg-surface"
                borderRadius="lg"
                borderWidth="1px"
                height="full"
              />
            </Stack>
          </Container>
        </Box>
      </Box>
    </Flex>
  );
};
