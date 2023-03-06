import { Flex, Box, Button } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Flex bg="gray.300" justify="space-between" wrap="wrap" gap={2}>
        <Box w="150px" h="50px" bg="red">
          test 1
        </Box>

        <Box w="150px" h="50px" bg="yellow">
          test 1
        </Box>
        <Box w="150px" h="50px" bg="blue">
          test 1
        </Box>
        <Box w="150px" h="50px" bg="red">
          test 1
        </Box>

        <Box w="150px" h="50px" bg="yellow">
          test 1
        </Box>
        <Box w="150px" h="50px" bg="white">
          <Button colorScheme="purple">Sign In </Button>
        </Box>
      </Flex>
    </>
  );
};
export default NavBar;
