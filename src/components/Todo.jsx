import React from "react";
import {
  Card,
  CardContent,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import Check from "@mui/icons-material/Check";
import Delete from "@mui/icons-material/Delete";
const Todo = ({ title, checkTodo, id, isCompleted, deleteTodo }) => {
  const markComplete = () => checkTodo(id);
  const delTodo = () => deleteTodo(id);
  const todoStyle = isCompleted
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };
  return (
    <div>
      <Container>
        <Card
          variant="outlined"
          style={{
            marginTop: 35,
            background: "lightgray",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h2" sx={todoStyle}>
              <IconButton onClick={markComplete}>
                <Check
                  style={{
                    color: "green",
                  }}
                />
              </IconButton>
              {title}
              {/* Delete */}
              <IconButton sx={{ float: "right" }} onClick={delTodo}>
                <Delete
                  style={{
                    color: "red",
                  }}
                />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
