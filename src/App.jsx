import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import TodoList from "./TodoList";
import Navbar from "./Navbar";
import TodoListWithCustomHook from "./TodoListWithCustomHook";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList />
      <br></br>
      <TodoListWithCustomHook />
    </>
  );
}

export default App;
