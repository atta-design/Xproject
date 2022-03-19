import "./App.css";
import React, {useEffect} from "react";
import Person from "./components/personProfile";
import EditForms from "./components/EditForms";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./components/redux/userInformation";
import {fetchProfile} from "./components/redux/useAmount";

function App() {
  const data = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const theme = createTheme({
    typography: {
      fontFamily: "vazir",
    },
  });
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
   console.log(localStorage.getItem("MyID") )
  console.log( localStorage.getItem("login") )
  // localStorage.setItem("MyID",data.length !== 0 && data[data.length - 1].myId )
  let id;
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useMemo(() =>(console.log(data.length === 0)) &&(console.log(!!(localStorage.getItem("login")=== data[data.length - 1].myId)))
     && (id = prompt("ايدي خود را وارد كنيد", ""))&&localStorage.setItem("login", id), []);


  return (
    <div className="app">
      {localStorage.getItem("login") ? (
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Person  />} />
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
