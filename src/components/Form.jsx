import React, { useState } from "react";

import { Button, Paper, TextField } from "@mui/material";

export default function Form({ addTodo }) {
   const [text, setText] = useState("");
   const [id, setId] = useState(0);

   const todoCreate = (text) => {
      const todoObj = { text: text, id: id };
      if (todoObj.text !== "") {
         setId(id + 1);
         addTodo(todoObj);
         document.getElementById("outlined-basic").value = null;
      }
   };

   return (
      <Paper style={{ padding: "1em" }} elevation={10}>
         <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
               id="outlined-basic"
               label="Task"
               variant="outlined"
               fullWidth
               onChange={(e) => setText(e.target.value)}
            />
            <Button variant="text" onClick={() => todoCreate(text)}>
               Add
            </Button>
         </div>
      </Paper>
   );
}
