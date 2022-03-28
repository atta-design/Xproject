import "./App.css";
import React, { useEffect } from "react";
import Person from "./components/personProfile";
import EditForms from "./components/EditForms";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./components/redux/userInformation";
import { fetchBirthday } from './components/redux/userBirthday'
function App() {
   const birthDay = useSelector((state) => state.profile.balance);
  const data = useSelector((state) => state.users.users);
 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchBirthday());
  }, [dispatch]);

  let id;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useMemo(
    () =>
      data.length !== 0  &&
      localStorage.getItem("login") !== data[data.length - 1].myId &&
      (id = prompt("آیدی خود را وارد کنید", "")) &&
      localStorage.setItem("login", id),
    [data.length !== 0]
  );

  return (
    <div className="app">
      {localStorage.getItem("login") ===
      (data.length !== 0&& birthDay.length !==0 && data[data.length - 1].myId) ? (
        <Routes>
          <Route path="/" element={<Person />} />
          <Route path="/edit" element={<EditForms />} />
        </Routes>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
