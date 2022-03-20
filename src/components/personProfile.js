import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./redux/userInformation";
import { fetchProfile } from "./redux/useAmount";
import { useNavigate } from "react-router-dom";
import ContactsIcon from "../icons/mokhatabin.svg";
import FolderIcon from "../icons/pushe.svg";
import saveIcon from "../icons/save.svg";
import settingIcon from "../icons/setting.svg";
import BackUpIcon from "../icons/poshtibani.svg";
import rulesIcon from "../icons/rules.svg";
import exitIcon from "../icons/exit.svg";
import pencilIcon from "../icons/pencil.svg";

import {
  Header,
  PersonInfo,
  ControlPanel,
  EditBtn,
  Title,
  Profile,
  ChoiceOptions,
} from "./pesonProfile_styles";
import "../App.css";

const Person = () => {
  const data = useSelector((state) => state.users.users);
  const balance = useSelector((state) => state.balance.balance);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handelEdit = () => {
    navigate("/edit");
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchUsers());
      dispatch(fetchProfile());
    }, 2000);
  }, [dispatch]);

  const handleExit = () => {
    localStorage.setItem("login", "exit");
    window.location.reload();
  };

  return (
    <>
      {localStorage.getItem("login") ===
        (data.length !== 0 ? (
          data[data.length - 1].myId
        ) : (
          <div>loading</div>
        )) && (
        <div>
          <Header>
            <Title>پروژه ایکس</Title>
            <EditBtn onClick={handelEdit}>
              ویرایش
              <img className="EditIcon" src={pencilIcon} alt="Icon" />
            </EditBtn>
          </Header>
          {/*_________________________________Person Information_______________________________________*/}
          <PersonInfo>
            <div style={{ display: "flex" }}>
              <Profile onClick={() => console.log("profile")} />
              <div className="name">
                {data.length !== 0 && <span>{data[0].firstname}</span>}

                {data.length !== 0 && <span>{data[0].lastname}</span>}
              </div>
              <div className="phone">
                {data.length !== 0 && <span>{data[0].phone}</span>}
              </div>
            </div>
            <div className="username">
              <span className="userTitle">نام کاربری</span>
              {data.length !== 0 && (
                <span className="userValue">
                  {data[0].username.length !== 0 ? (
                    data[0].username
                  ) : (
                    <span className="userValueAlt" onClick={handelEdit}>
                      برای این حساب نام کاربری انتخاب کنید
                    </span>
                  )}
                </span>
              )}
              <span className="userTitle">معرفی کوتاه</span>
              {data.length !== 0 && (
                <span className="userValue">
                  {data[0].bio.length !== 0 ? (
                    data[0].bio
                  ) : (
                    <span className="userValueAlt" onClick={handelEdit}>
                      خودتان رو مختصر معرفی کنید
                    </span>
                  )}
                </span>
              )}
            </div>
          </PersonInfo>
          {/*_________________________________Control Panel_______________________________________*/}
          <ControlPanel>
            <ChoiceOptions onClick={() => console.log("contacts")}>
              <div>مخاطبین </div>
              <img className="icon" src={ContactsIcon} alt="Icon" />
            </ChoiceOptions>
            <ChoiceOptions onClick={() => console.log("amount")}>
              <div className="mali">
                <div className="amount">
                  (<span style={{ color: "gray" }}>اعتبار:</span>{" "}
                  {balance.length !== 0 && balance[balance.length - 1].amount}
                  تومان)
                </div>
                اطلاعات مالی
              </div>
              <img className="icon" src={FolderIcon} alt="Icon" />
            </ChoiceOptions>
            <ChoiceOptions onClick={() => console.log("saved massages")}>
              <div>پیام های ذخیره شده </div>
              <img className="icon" src={saveIcon} alt="Icon" />
            </ChoiceOptions>
            <ChoiceOptions onClick={() => console.log("settings")}>
              <div>تنظیمات </div>
              <img className="icon" src={settingIcon} alt="Icon" />
            </ChoiceOptions>
          </ControlPanel>
          <ControlPanel>
            <ChoiceOptions onClick={() => console.log("back up")}>
              <div>پشتیبانی </div>
              <img className="icon" src={BackUpIcon} alt="Icon" />
            </ChoiceOptions>
            <ChoiceOptions onClick={() => console.log("rules and conditions")}>
              <div>شرایط و قوانین</div>
              <img className="icon" src={rulesIcon} alt="Icon" />
            </ChoiceOptions>
            <ChoiceOptions onClick={handleExit}>
              <div>خروج از حساب کاربری</div>
              <img className="icon" src={exitIcon} alt="Icon" />
            </ChoiceOptions>
          </ControlPanel>
        </div>
      )}
    </>
  );
};

export default Person;
