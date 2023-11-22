import { useState } from "react";
import ListItem from "@mui/material/ListItem";

// MUI
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Create } from "@mui/icons-material";

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(input);
    setInput("");
  };
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          onChange={handleChange}
          value={input}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  aria-label="create todo visibility"
                  edge="end"
                >
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
