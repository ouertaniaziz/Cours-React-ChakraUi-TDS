import { Box, Container, Text } from "@chakra-ui/react";
const DashbordChakra = () => {
  const styleTds = {
    bg: "yellow",
    p: "10px",
    color: "black",
    m: "10px",
    filter: "blur(2px)",
    ":hover": {
      bg: "red",
    },
  };
  return (
    <>
      <Container py="50px">
        <Text ml="30px" color="blue.800" fontWeight="400">
          azizazizazizazizazizazizazizazizazizazizazizazizazizazizazizazizazizazizazizazizazizazizaziz
        </Text>
        <Box bg="red.200" p="20px" my="30px">
          <Text color="white"> this is a Box</Text>
        </Box>
        <Box sx={styleTds}>TDS</Box>
      </Container>
    </>
  );
};
export default DashbordChakra;
