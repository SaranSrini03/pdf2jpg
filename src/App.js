import React, { useState } from "react";
import {Helmet} from "react-helmet";

import "./App.css";
import { Grid } from "@mui/material";
import FileInput from "./Components/file-input";
import FileConverter from "./Components/file-converter";

export const primary = "#000000";

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  return (
    <div style={{ height: "100dvh" }}>
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1984334076702409"
         crossorigin="anonymous">
        </script>
        <title>Finter - Pdf2Jpg</title>
      </Helmet>
      <h1 className="title1">Finter</h1>
      <Grid container className="d-flex" sx={{ py: 6, px: 4 }}>
        <Grid item className="box">
          <FileInput onFileChange={(file) => setPdfFile(file)} />
        </Grid>
        {pdfFile && (
          <Grid item sx={{ width: "100%" }}>
            <FileConverter
              pdfUrl={URL.createObjectURL(pdfFile)}
              fileName={pdfFile.name}
            />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default App;
