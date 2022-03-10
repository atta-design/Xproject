import "./App.css";
import React from "react";
import Person from "./components/person";
import EditForms from "./components/EditForms";
import { Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "vazir",
    },
  });

  var id;
  React.useMemo(() => (id = prompt("enete", "")), []);

  return (
    <div>
      {id ? (
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Person id={id} />} />
            <Route path="/edit" element={<EditForms />} />
            
          </Routes>
        </ThemeProvider>
      ) : (
        <div>eeee</div>
      )}
    </div>
  );
}

export default App;
