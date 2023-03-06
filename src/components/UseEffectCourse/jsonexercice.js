import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isConnected, setIsConnected] = useState(navigator.onLine);

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

  if (!isConnected) {
    return <div>You are currently offline.</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default DataFetcher;
