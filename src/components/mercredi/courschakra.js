import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const ChakraCours = () => {
  return (
    <>
      <CircularProgress value={40} color="green.400">
        <CircularProgressLabel>40%</CircularProgressLabel>
      </CircularProgress>
      <CircularProgress isIndeterminate color="green.300" />
    </>
  );
};

export default ChakraCours;
