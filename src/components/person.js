import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./redux/userReducer";
import { fetchprofile } from "./redux/useAmount";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useNavigate } from "react-router-dom";
import icon1 from "../icons/mo.png";
import icon2 from "../icons/pushe.png";
import icon3 from "../icons/save.png";
import icon4 from "../icons/setting.png";
import icon5 from "../icons/po.png";
import icon6 from "../icons/rule.png";
import icon7 from "../icons/exit.png";
import icon8 from "../icons/edit.png";

import {
  Header,
  Person_info,
  Person_info2,
  Poshtibani,
  EditBtn,
  Title,
  Profile,
  Text1,
  Text2,
  Text3,
  Text4,
  Text5,
  Text6,
  Text7,
} from "./peson_styles";
import "../App.css";

const Person = ({ id }) => {
  const data = useSelector((state) => state.users.users);
  const balance = useSelector((state) => state.balance.balance);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handel = () => {
    navigate("/edit");
  };
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchprofile());
  }, []);
  {
    console.log(data);
  }
  return (
    <>
      {id ==
        (data.length !== 0 ? (
          data[data.length - 1].myid
        ) : (
          <div>loading</div>
        )) && (
        <div>
          <Header>
            <Title>پروژه ایکس</Title>
            <EditBtn onClick={handel}>
              ویرایش
              <img className="eicon" src={icon8} />
            </EditBtn>
          </Header>

          <Person_info>
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
              <span className="usertitle">نام کاربری</span>
              {data.length !== 0 && (
                <span className="uservalue">
                  {data[data.length - 1].username.length !== 0 ? (
                    data[data.length - 1].username
                  ) : (
                    <span className="uservalue" onClick={handel}>
                      برای این حساب نام کاربری انتخاب کنید
                    </span>
                  )}
                </span>
              )}
              <span className="usertitle">معرفی کوتاه</span>
              {data.length !== 0 && (
                <span className="uservalue">
                  {data[data.length - 1].bio.length !== 0 ? (
                    data[data.length - 1].bio
                  ) : (
                    <span className="uservalue" onClick={handel}>
                      خودتان رو مختصر معرفی کنید
                    </span>
                  )}
                </span>
              )}
            </div>
          </Person_info>
          <Person_info2>
            <Text1 onClick={() => console.log("contacts")}>
              <div>مخاطبین </div>
              <img className="icon" src={icon1} />
            </Text1>
            <Text2 onClick={() => console.log("amount")}>
              <div className="mali">
                <div className="amount">
                  (<span style={{ color: "gray" }}>اعتبار:</span>{" "}
                  {balance.length !== 0 && balance[balance.length - 1].amount}
                  تومان)
                </div>
                اطلاعات مالی
              </div>
              <img className="icon" src={icon2} />
            </Text2>
            <Text3 onClick={() => console.log("saved massges")}>
              <div>پیام های ذخیره شده </div>
              <img className="icon" src={icon3} />
            </Text3>
            <Text4 onClick={() => console.log("settings")}>
              <div>تنظیمات </div>
              <img className="icon" src={icon4} />
            </Text4>
          </Person_info2>
          <Poshtibani>
            <Text5 onClick={() => console.log("back up")}>
              <div>پشتیبانی </div>
              <img className="icon" src={icon5} />
            </Text5>
            <Text6 onClick={() => console.log("rules and conditions")}>
              <div>شرایط و قوانین</div>
              <img className="icon" src={icon6} />
            </Text6>
            <Text7 onClick={() => window.location.reload()}>
              <div>خروج از حساب کاربری</div>
              <img className="icon" src={icon7} />
            </Text7>
          </Poshtibani>
        </div>
      )}
    </>
  );
};

export default Person;
