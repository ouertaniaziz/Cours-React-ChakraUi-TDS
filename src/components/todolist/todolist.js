import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, { name: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleCheckboxChange = (index) => {
    setTasks((tasks) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return updatedTasks;
    });
  };

  const handleDelete = (index) => {
    setTasks((tasks) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <Box p="6">
      <Heading as="h1" size="xl" mb="6">
        Todo List
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" mb="4">
          <FormControl>
            <FormLabel srOnly>New Task</FormLabel>
            <Input
              type="text"
              placeholder="New Task"
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Add Task
          </Button>
        </Stack>
      </form>
      <Stack spacing="4">
        {tasks.slice(0, 10).map((task, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" p="4">
            <Stack direction="row" align="center" mb="2">
              <Checkbox
                isChecked={task.completed}
                onChange={() => handleCheckboxChange(index)}
              >
                <Text
                  as={task.completed ? "del" : undefined}
                  textDecoration={task.completed ? "line-through" : undefined}
                >
                  {task.name}
                </Text>
              </Checkbox>
              <Button
                size="sm"
                colorScheme="red"
                onClick={() => handleDelete(index)}
              >
                Delete
              </Button>
            </Stack>
          </Box>
        ))}
        {tasks.length > 10 && (
          <Button onClick={() => alert("Not implemented.")}>Show more</Button>
        )}
      </Stack>
      <Text mt="4">
        {tasks.length} task{tasks.length !== 1 ? "s" : ""} in total,{" "}
        {remainingTasks} remaining
      </Text>
    </Box>
  );
}

export default TodoList;
