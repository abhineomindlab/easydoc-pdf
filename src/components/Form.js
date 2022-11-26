import { Button, Stack, Card, TextField } from "@mui/material";
import { useState } from "react";
import FormPdf from "./FormPdf";

function Form() {
  const [generatePdf, setGeneratePdf] = useState(false);
  const [date, setDate] = useState(null);
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const submitHandler = () => {
    setGeneratePdf(true);
    console.log(address, title, text, name);
  };

  const Form = (
    <Card sx={{ padding: "32px", width: "500px" }} elevation={4}>
      <Stack spacing={4}>
        <input
          type="date"
          className="date_picker"
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          label="Address"
          multiline
          rows={4}
          onChange={(e) => setAddress(e.target.value)}
        />
        {/* Title (input) */}
        <TextField label="Title" onChange={(e) => setTitle(e.target.value)} />
        {/* Text (text area) */}
        <TextField
          label="Text"
          multiline
          rows={4}
          onChange={(e) => setText(e.target.value)}
        />
        {/* Sender name (input) */}
        <TextField
          label="Sender Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" size="large" onClick={submitHandler}>
          Send
        </Button>
      </Stack>
    </Card>
  );

  if (generatePdf)
    return (
      <FormPdf
        setGeneratePdf={setGeneratePdf}
        date={date}
        address={address}
        title={title}
        text={text}
        name={name}
      />
    );

  return Form;
}

export default Form;
