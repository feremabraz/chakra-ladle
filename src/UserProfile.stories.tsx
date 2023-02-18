import { Box, HStack, Text } from "@chakra-ui/react";
import Avatar from "boring-avatars";

interface UserProfileProps {
  name: string;
  email: string;
}

export const UserProfile = (props: UserProfileProps) => {
  const { name, email } = props;
  return (
    <HStack spacing="3" ps="2">
      <Avatar name={name} variant="beam" size="40" />
      <Box>
        <Text fontWeight="medium" fontSize="sm">
          {name}
        </Text>
        <Text color="muted" fontSize="sm">
          {email}
        </Text>
      </Box>
    </HStack>
  );
};

UserProfile.args = {
  name: "Hello",
  email: "jvVY8@example.com",
};
