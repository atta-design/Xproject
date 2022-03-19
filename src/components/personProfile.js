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
  PersonInfo2,
  BackUp,
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
  const handel = () => {
    navigate("/edit");
  };
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProfile());
  }, [dispatch]);

    console.log(data);
    const handleExit=()=>{
      localStorage.setItem("login", '')
      window.location.reload()
    }
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
            <EditBtn onClick={handel}>
              ویرایش
              <img className="eIcon" src={pencilIcon} alt='Icon'/>
            </EditBtn>
          </Header>

          <PersonInfo>
            <div style={{ display: "flex" }}>
              <Profile onClick={() => console.log("profile")} />
              <div className="name">
                {data.length !== 0 && (
                  <span>{data[data.length - 1].firstname}</span>
                )}

                {data.length !== 0 && (
                  <span>{data[data.length - 1].lastname}</span>
                )}
              </div>
              <div className="phone">
                {data.length !== 0 && (
                  <span>{data[data.length - 1].phone}</span>
                )}
              </div>
            </div>
            <div className="username">
              <span className="userTitle">نام کاربری</span>
              {data.length !== 0 && (
                <span className="userValue">
                  {data[data.length - 1].username.length !== 0 ? (
                    data[data.length - 1].username
                  ) : (
                    <span className="userValue" onClick={handel}>
                      برای این حساب نام کاربری انتخاب کنید
                    </span>
                  )}
                </span>
              )}
              <span className="userTitle">معرفی کوتاه</span>
              {data.length !== 0 && (
                <span className="userValue">
                  {data[data.length - 1].bio.length !== 0 ? (
                    data[data.length - 1].bio
                  ) : (
                    <span className="userValue" onClick={handel}>
                      خودتان رو مختصر معرفی کنید
                    </span>
                  )}
                </span>
              )}
            </div>
          </PersonInfo>
          <PersonInfo2>
            <ChoiceOptions
                    onClick={() => console.log("contacts")}>
              <div>مخاطبین </div>
              <img className="icon" src={ContactsIcon} alt='Icon'/>
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
              <img className="icon" src={FolderIcon} alt='Icon' />
            </ChoiceOptions>
            <ChoiceOptions onClick={() => console.log("saved massages")}>
              <div>پیام های ذخیره شده </div>
              <img className="icon" src={saveIcon} alt='Icon'/>
            </ChoiceOptions>
            <ChoiceOptions onClick={() => console.log("settings")}>
              <div>تنظیمات </div>
              <img className="icon" src={settingIcon} alt='Icon'/>
            </ChoiceOptions>
          </PersonInfo2>
          <BackUp>
            <ChoiceOptions onClick={() => console.log("back up")}>
              <div>پشتیبانی </div>
              <img className="icon" src={BackUpIcon} alt='Icon' />
            </ChoiceOptions>
            <ChoiceOptions onClick={() => console.log("rules and conditions")}>
              <div>شرایط و قوانین</div>
              <img className="icon" src={rulesIcon} alt='Icon' />
            </ChoiceOptions>
            <ChoiceOptions onClick={handleExit}>
              <div>خروج از حساب کاربری</div>
              <img className="icon" src={exitIcon} alt='Icon' />
            </ChoiceOptions>
          </BackUp>
        </div>
      )}
    </>
  );
};

export default Person;
