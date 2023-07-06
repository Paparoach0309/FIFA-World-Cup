import { Box, Flex, Container, Heading, useColorMode } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Box as="header" py={2} bg={colorMode === "dark" ? "gray.400" : "gray.200"}>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="lg" color="blackAlpha.600">Чемпионат мира по футболу</Heading>
          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
