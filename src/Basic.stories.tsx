import { Box, Button } from "@chakra-ui/react";

export const Hello = () => <h2>Simple Story</h2>;
export const Responsive = () => {
  return (
    <Box
      backgroundColor="#000"
      color="#FFF"
      p={6}
      fontFamily="arial"
      fontSize="28px"
      border="1px solid black"
    >
      Header
      <Button
        borderRadius={8}
        fontFamily="arial"
        fontSize="22px"
        mt={6}
      >
        Ladle
      </Button>
    </Box>
  );
};
Responsive.meta = {
  width: 'xsmall',
};
