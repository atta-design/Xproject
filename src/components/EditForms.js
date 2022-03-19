import React, { useState } from "react";
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
import {  useDispatch } from "react-redux";
import { fetchUsers } from "./redux/userInformation";
import { fetchProfile } from "./redux/useAmount";
import { useNavigate } from "react-router-dom";
import {

  DateInput,

} from "react-hichestan-datetimepicker";
import "../App.css";
import fleshIcon from "../icons/arrow.svg";
import pen from "../icons/pencil2.svg";
import profileLogo from "../icons/profileLogo.svg";
import camera from "../icons/cameraLogo.svg";
import icon_atSign from "../icons/@.svg";


const EditForms = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [myDateTime, setMyDateTime] = useState("");
  const [myId, setMyId] = useState("1");
  new Date(myDateTime).toLocaleDateString("fa-IR");

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleChange = (event) => {
    setMyDateTime(event.target.value);
  };
  const handleSend = () => {
    if (firstname) {
      axios
        .post(`http://localhost:9000/posts`, {
          firstname: firstname,
          lastname: lastname,
          username: username,
          bio: bio,
          // myDateTime:myDateTime
          myId: myId,
        })
        .catch((err) => alert(err));
    } else {
      alert("وارد کردن نام الزامی است");
    }

    axios.post(`http://localhost:9000/profile`, {
      myDateTime: myDateTime,
    });

    dispatch(fetchUsers());
    dispatch(fetchProfile());

      navigate("/");
  };

  function handel() {

    if (window.confirm("آیا مطمئن هستید که تغییرات داده شده ثبت نشود؟")) {

        navigate("/");
    }
  }

  return (
    <div>
      <Header>
        <Return onClick={handel}>
          بازگشت
          <img className="returnIcon" src={fleshIcon} alt='icon' />
        </Return>
        <EditBtn onClick={handleSend}>
          ذخیره
          <img className="saveIcon" src={pen} alt='icon' />
        </EditBtn>
        <Profile onClick={() => console.log("Profile")}>
          <img className="perIcon" src={profileLogo} alt='icon' />
          <InnerProfile onClick={() => console.log("EditProfile")} >
            <img className="camIcon" src={camera} alt='icon' />
          </InnerProfile>
        </Profile>
      </Header>
      <Content>
        <div className='BorderLine'
    // style={{
    //     border: "1px solid #E5E5E5",
    //     width: "320px",
    //     height: "0px",
    //     position: "relative",
    //     top: "64px",
    //     margin:'0px auto 80px auto',
    //   marginBottom:'80px',
    //     '@media screen and (max-width: 349px)': {
    //
    //     width: "200px",
    //
    //
    // }
    // }}
    />
    
        <FormGroup  >
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
          <div style={{ display: "inline-flex", flexDirection: "row-reverse", margin:'0 auto' }}>
            <Input
              sx={{
                width: "276px",
                marginLeft: "0px",
                borderRadius: "0px 6px 6px 0px",
                  '@media screen and (max-width: 349px)': {

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
                  // '@media screen and (max-width: 349px)': {
                  //
                  //     width: "30px",
                  //
                  //
                  // },
                marginLeft: "7px",
              }}
            >
              <img src={icon_atSign} className="usernameIcon" alt='icon' />
            </Box>
          </div>
          <label>معرفی کوتاه</label>
          <TextField
            sx={{
              width: "320px",
              backgroundColor: "#F3F3F3",
              margin: "0 auto",
                '@media screen and (max-width: 349px)': {

                    width: "200px",


                },
            }}
            type="text"
            multiline
            rows={2}
            dir="rtl"
            placeholder="خودتان را مختصر معرفی کنید"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <div className="lengthTxt">{bio.length}/120</div>
          <label>تاریخ تولد</label>
          <BirthdayBox>
            <DateInput
              value={myDateTime}
              name={"myDateTime"}
              onChange={handleChange}
            />
          </BirthdayBox>
        </FormGroup>
      </Content>
    </div>
  );
};

export default EditForms;
