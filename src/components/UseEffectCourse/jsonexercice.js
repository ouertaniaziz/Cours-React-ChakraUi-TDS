import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SimpleGrid,
  Image,
  Text,
  Button,
  Box,
  Center,
  Divider,
  VStack,
  useToast,
} from "@chakra-ui/react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isConnected, setIsConnected] = useState(navigator.onLine);
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(
        (response) => {
          setData(response.data);
        },
        (error) => {
          setError(error);
        }
      );
    };

    // fetch data on component mount
    fetchData();

    // fetch data every 1 seconds
    const intervalId = setInterval(fetchData, 1000);

    // clean up the interval
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleOnline = () => {
      setIsConnected(true);
    };

    const handleOffline = () => {
      setIsConnected(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleBuyClick = (title) => {
    toast({
      title: "Purchase successful!",
      description: `You have successfully purchased "${title}".`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  if (!isConnected) {
    return <div>You are currently offline.</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth={250}>
        {data.map((item) => (
          <Box
            key={item.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src="https://picsum.photos/200/300" alt="Product image" />

            <Box p="6">
              <Text fontWeight="bold" fontSize="2xl" mb="2">
                {item.title}
              </Text>
              <Text>{item.body}</Text>
            </Box>

            <Box p="6" borderTopWidth="1px">
              <Button onClick={() => handleBuyClick(item.title)}>Buy</Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    );
  }
}

export default DataFetcher;
