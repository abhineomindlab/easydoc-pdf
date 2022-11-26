import { Button, Card, Typography } from "@mui/material";
import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function FormPdf({ date, address, title, text, name, setGeneratePdf }) {
  return (
    <>
      <div ref={ref}>
        <Card sx={{ height: "100vh", width: "100vw", padding: "2rem" }}>
          <div className="left">
            <Button onClick={() => setGeneratePdf(false)}>Back</Button>
          </div>
          <Typography variant="h6">{address}</Typography>

          <div className="left">
            <Typography variant="h6">{date}</Typography>
          </div>

          <Typography variant="h5">{title}</Typography>

          <Typography variant="subtitle1">text</Typography>

          <Typography variant="h6">{name}</Typography>
        </Card>
      </div>

      <Pdf targetRef={ref} filename="letter.pdf">
        {({ toPdf }) => (
          <Button onClick={toPdf} variant="contained">
            Download as .pdf
          </Button>
        )}
      </Pdf>
    </>
  );
}

export default FormPdf;
