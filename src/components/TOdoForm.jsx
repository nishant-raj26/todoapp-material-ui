import {
  Button,
  Container,
  FormControl,
  TextField,
  useScrollTrigger,
} from "@mui/material";
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [texts, setTexts] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(texts);
    setTexts("");
  };
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="I will do this"
            required={true}
            value={texts}
            onChange={(e) => setTexts(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              marginTop: 1,
            }}
          >
            {" "}
            ADD TODO{" "}
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default TodoForm;
