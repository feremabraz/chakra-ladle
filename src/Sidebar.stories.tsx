import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Progress,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Logo } from "./Logo.stories";
import { NavButton } from "./NavButton.stories";
import { UserProfile } from "./UserProfile.stories";
import {
  HouseSimple,
  MagnifyingGlass,
  ChartBar,
  CheckSquare,
  BookBookmark,
  Gear,
  Users,
  Question,
} from "phosphor-react";

export const Sidebar = () => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-surface"
      overflowY="auto"
      boxShadow={useColorModeValue("md", "sm-dark")}
      maxW={{ base: "full", sm: "xs" }}
      py={{ base: "6", sm: "8" }}
      px={{ base: "4", sm: "6" }}
    >
      <Stack justify="space-between" spacing="1">
        <Stack spacing={{ base: "5", sm: "6" }} shouldWrapChildren>
          <Logo
            color={"accent"}
            height={"14"}
            width={"auto"}
            viewBox={"0 0 465 193"}
          />
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon
                as={() => {
                  return <MagnifyingGlass size={20} />;
                }}
                color="muted"
                boxSize="5"
              />
            </InputLeftElement>
            <Input placeholder="Search" />
          </InputGroup>
          <Stack spacing="1">
            <NavButton
              label="Home"
              icon={() => {
                return <HouseSimple size={20} />;
              }}
            />
            <NavButton
              label="Dashboard"
              icon={() => {
                return <ChartBar size={20} />;
              }}
              aria-current="page"
            />
            <NavButton
              label="Tasks"
              icon={() => {
                return <CheckSquare size={20} />;
              }}
            />
            <NavButton
              label="Bookmarks"
              icon={() => {
                return <BookBookmark size={20} />;
              }}
            />
            <NavButton
              label="Users"
              icon={() => {
                return <Users size={20} />;
              }}
            />
          </Stack>
        </Stack>
        <Stack spacing={{ base: "5", sm: "6" }}>
          <Stack spacing="1">
            <NavButton
              label="Help"
              icon={() => {
                return <Question size={20} />;
              }}
            />
            <NavButton
              label="Settings"
              icon={() => {
                return <Gear size={20} />;
              }}
            />
          </Stack>
          <Box bg="bg-subtle" px="4" py="5" borderRadius="lg">
            <Stack spacing="4">
              <Stack spacing="1">
                <Text fontSize="sm" fontWeight="medium">
                  Almost there
                </Text>
                <Text fontSize="sm" color="muted">
                  Fill in some more information about you and your person.
                </Text>
              </Stack>
              <Progress
                value={80}
                size="sm"
                aria-label="Profile Update Progress"
              />
              <HStack spacing="3">
                <Button variant="link" size="sm">
                  Dismiss
                </Button>
                <Button variant="link" size="sm" colorScheme="blue">
                  Update profile
                </Button>
              </HStack>
            </Stack>
          </Box>
          <Divider />
          <UserProfile name="Christoph Winston" email="chris@chakra-ui.com" />
        </Stack>
      </Stack>
    </Flex>
  </Flex>
);
