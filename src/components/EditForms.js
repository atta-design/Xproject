import React, { useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { Header } from "./peson_styles";
import {
  Content,
  Return,
  Profile,
  BirthdayBox,
  InnerProfile,
  Input,
  TextInput,
} from "./EditForms_styles";
import TextField from "@mui/material/TextField";
import { FormGroup } from "@mui/material";
import { EditBtn } from "./peson_styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./redux/userReducer";
import { fetchprofile } from "./redux/useAmount";
import { useNavigate } from "react-router-dom";
import {
  DateTimeInput,
  DateTimeInputSimple,
  DateInput,
  DateInputSimple,
} from "react-hichestan-datetimepicker";
import "../App.css";
import fleshIcon from "../icons/wflesh.png";
import pen from "../icons/pen.png";
import per from "../icons/per.png";
import camera from "../icons/cam.png";
import icon_a from "../icons/@ (2).png";
import { borderRadius } from "@mui/system";

const EditForms = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [myDateTime, setmyDateTime] = useState("");
  const [myid, setmyid] = useState("1");
  new Date(myDateTime).toLocaleDateString("fa-IR");

  const dispatch = useDispatch();
  let navigat = useNavigate();
  const handleChange = (event) => {
    setmyDateTime(event.target.value);
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
          myid: myid,
        })
        .catch((err) => alert(err));
    } else {
      alert("وارد کردن نام الزامی است");
    }

    axios.post(`http://localhost:9000/profile`, {
      myDateTime: myDateTime,
    });

    dispatch(fetchUsers());
    dispatch(fetchprofile());

    navigat("/");
  };

  function handel() {
    var txt;
    if (window.confirm("آیا مطمئن هستید که تغییرات داده شده ثبت نشود؟")) {
      txt = "You pressed OK!";
      navigat("/");
    } else {
      txt = "You pressed Cancel!";
    }
  }

  return (
    <div>
      <Header>
        <Return onClick={handel}>
          بازگشت
          <img className="returnIcon" src={fleshIcon} />
        </Return>
        <EditBtn onClick={handleSend}>
          ذخیره
          <img className="saveIcon" src={pen} />
        </EditBtn>
        <Profile onClick={() => console.log("proflie")}>
          <img className="perIcon" src={per} />
          <InnerProfile onClick={() => console.log("Editproflie")}>
            <img className="camIcon" src={camera} />
          </InnerProfile>
        </Profile>
      </Header>
      <Content>
        <div
          style={{
            border: "1px solid #E5E5E5",
            width: "320px",
            height: "0px",
            position: "absolute",
            top: "64px",
            left: "20px",
          }}
        ></div>
        <FormGroup sx={{ marginTop: "60px" }}>
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
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Input
              sx={{
                width: "276px",
                marginLeft: "0px",
                borderRadius: "0px 6px 6px 0px",
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
              <img src={icon_a} className="usernameIcon" />
            </Box>
          </div>
          <label>معرفی کوتاه</label>
          <TextField
            sx={{
              width: "320px",
              backgroundColor: "#F3F3F3",
              margin: "0 auto",
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
