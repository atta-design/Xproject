import React, { useState,useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { Header } from "./pesonProfile_styles";
import {
  Content,
  Return,
  Profile,
  BirthdayBox,
  InnerProfile,
  Input,
} from "./EditForms_styles";
import TextField from "@mui/material/TextField";
import { FormGroup } from "@mui/material";
import { EditBtn } from "./pesonProfile_styles";
import { useNavigate } from "react-router-dom";
import { DateInput } from "react-hichestan-datetimepicker";
import { fetchUsers } from "./redux/userInformation";
import { fetchProfile } from "./redux/useAmount";
import { fetchBirthday } from "./redux/userBirthday";

import "../App.css";
import fleshIcon from "../icons/arrow.svg";
import pen from "../icons/pencil2.svg";
import profileLogo from "../icons/profileLogo.svg";
import camera from "../icons/cameraLogo.svg";
import icon_atSign from "../icons/@.svg";
import {useSelector, useDispatch} from "react-redux";

const EditForms = () => {
 
    const data = useSelector((state) => state.users.users);
    const birthDay = useSelector((state) => state.profile.balance);
    const dispatch = useDispatch();
  const [firstname, setFirstName] = useState(data[0].firstname);
  const [lastname, setLastName] = useState(data[0].lastname);
  const [username, setUserName] = useState( data[0].username);
  const [bio, setBio] = useState(data[0].bio);
  const [birthDate, setBirthDate] = useState(birthDay[0].birthDate);
  const [myId, setMyId] = useState("1");
  new Date(birthDate).toLocaleDateString("fa-IR");

  let navigate = useNavigate();

  const handleChange = (event) => {
    setBirthDate(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchUsers());
      dispatch(fetchProfile());
      dispatch(fetchBirthday())
        
  
    }, 2000);
  //    birthDay.length!==0&&
  // setBirthDate(birthDay[0].birthDate)
 
  }, [dispatch]);
  // useEffect(()=>{
  //   setBirthDate(Birth)
  // },[birthDate])
 
  /*_________________________________Send Personal Information_______________________________________*/
  const handleSend = () => {
    if (firstname) {
      axios
        .patch(`http://localhost:9000/posts/1`, {
          firstname: firstname,
          lastname: lastname,
          username: username,
          bio: bio,
          myId: myId,
        })
        .catch((err) => alert(err));
    } else {
      alert("وارد کردن نام الزامی است");
    }
    /*_________________________________Send Birthday_______________________________________*/
    axios
      .patch(`http://localhost:9000/profile/1`, {
        birthDate: birthDate,
      })
      .catch((err) => alert(err));

    navigate("/");
  };

  /*_________________________________Confirm for return to the person profile page_______________________________________*/
  function handelConfirm() {
    if (window.confirm("آیا مطمئن هستید که تغییرات داده شده ثبت نشود؟")) {
      navigate("/");
    }
  }

  return (
    <div>
      <Header>
        <Return onClick={handelConfirm}>
          بازگشت
          <img className="returnIcon" src={fleshIcon} alt="icon" />
        </Return>
        <EditBtn onClick={handleSend}>
          ذخیره
          <img className="saveIcon" src={pen} alt="icon" />
        </EditBtn>
        <Profile onClick={() => console.log("Profile")}>
          <img className="PersonIcon" src={profileLogo} alt="icon" />
          <InnerProfile onClick={() => console.log("EditProfile")}>
            <img className="camIcon" src={camera} alt="icon" />
          </InnerProfile>
        </Profile>
      </Header>
      <Content>
        <div className="BorderLine" />

        <FormGroup>
          <label>نام</label>
          <Input
            type="text"
            dir="rtl"
            placeholder="نام را وارد کنید"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label> نام خانوادگی</label>
          <Input
            type="text"
            dir="rtl"
            placeholder="نام خانوادگی را وارد کنید"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label>نام کاربری</label>
          <div
            style={{
              display: "inline-flex",
              flexDirection: "row-reverse",
              margin: "0 auto",
            }}
          >
            <Input
              sx={{
                width: "276px",
                marginLeft: "0px",
                borderRadius: "0px 6px 6px 0px",
                "@media screen and (max-width: 349px)": {
                  width: "150px",
                },
              }}
              minLength="5"
              maxLength="30"
              type="text"
              dir="ltr"
              placeholder="username..."
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Box
              sx={{
                width: "44px",
                height: "45px",
                backgroundColor: "#F3F3F3",
                borderRadius: "6px 0px 0px 6px",
                borderRight: "2px solid #E4E4E4",
                marginLeft: "7px",
              }}
            >
              <img src={icon_atSign} className="usernameIcon" alt="icon" />
            </Box>
          </div>
          <label>معرفی کوتاه</label>
          <TextField
            sx={{
              width: "320px",
              backgroundColor: "#F3F3F3",
              margin: "0 auto",

              "@media screen and (max-width: 349px)": {
                width: "200px",
              },
            }}
            inputProps={{ style: { fontFamily: "CustomFont" } }}
            className="textField"
            type="text"
            multiline
            rows={2}
            dir="rtl"
            placeholder="خودتان را مختصر معرفی کنید..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <div className="lengthTxt">{bio.length}/120</div>
          <label>تاریخ تولد</label>
          <BirthdayBox>
            <DateInput
              value={birthDate}
              name={"birthDate"}
              onChange={handleChange}
              placeholder={'...لطفا انتخاب کنید'}
            />
          </BirthdayBox>
        </FormGroup>
      </Content>
    </div>
  );
};

export default EditForms;
