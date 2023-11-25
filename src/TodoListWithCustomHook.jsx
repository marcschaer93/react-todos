import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

import List from "@mui/material/List";
import TodoForm from "./TodoForm";
import { Box, Typography } from "@mui/material";

import { useLocalStorageState } from "./hooks/useLocalStorageState";

export default function TodoListWithCustomHook() {
  const [todos, setTodos] = useLocalStorageState("todos2", []);

  const removeTodo = (id) => {
    setTodos((oldTodos) => {
      return oldTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), text: text, completed: false },
      ];
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        ToDo's
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              remove={removeTodo}
              toggle={() => toggleTodo(todo.id)}
            />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}
