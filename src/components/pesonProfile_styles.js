import { Button, Box, styled, Typography } from "@mui/material";
import "../App.css";
import Img from "./img/image.png";

export const Header = styled(Box)({
  position: "relative",
  width: "100%",
  height: 125,
  backgroundColor: "#305986",
  borderRadius: " 0px 0px 20px 20px;",
});
export const EditBtn = styled(Button)({
  position: "absolute",
  width: "90px",
  height: "45px",
  left: " 8%",
  top: " 14px",
  bottom: " 20%",
  fontFamily: "CustomFontBold",
  fontWeight: "700bold",
  fontStyle: "normal",
  fontSize: "14px",
  lineHeight: "24px",
  textAlign: "right",
  color: "#FFFFFF",
  flex: "none",
  order: 0,
  flexGrow: 0,
  margin: "0px 6px",
  border: "solid 2px white",
  borderRadius: "30px 30px 30px 30px",
  "@media screen and (min-width: 713px)": {
    left: "10%",
  },
  "@media screen and (max-width: 326px)": {
    width: "80px",
    height: "45px",
    left: "3%",
  },
});
export const Title = styled(Typography)({
  position: "absolute",
  width: "119px",
  height: "32px",
  left: " 65%",
  top: " 23px",
  bottom: " 20%",
  fontStyle: "normal",
  fontFamily: "CustomFontBold",
  fontWeight: "700bold",
  fontSize: "21px",
  lineHeight: "150%",
  textAlign: "center",
  letterSpacing: "0.02em",
  color: "#FFFFFF",
  "@media screen and (max-width: 349px)": {
    width: "120px",
    fontSize: "17px",
    left: "60%",
  },
  "@media screen and (min-width: 630px)": {
    width: "120px",
    fontSize: "17px",
    left: "80%",
  },
});
export const PersonInfo = styled(Box)({
  position: "relative",
  width: "90%",
  height: 238,
  padding: "0 0 5 0",
  top: -54,
  margin: "0 auto",
  backgroundColor: "#FFFFFF",
  borderRadius: " 25px 25px 15px 15px;",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.05)",
});
export const Profile = styled(Box)({
  position: "absolute",
  width: "90px",
  height: "90px",
  left: "70%",
  top: " 10px",
  borderRadius: "50% ",
  "@media screen and (max-width: 349px)": {
    left: "70%",
    width: "70px",
    height: "70px",
  },
  "@media screen and (min-width: 600px)": {
    left: "75%",
  },
  "@media screen and (min-width: 1500px)": {
    left: "90%",
  },

  backgroundImage: `url(${Img})`,
});

export const ControlPanel = styled(Box)({
  position: "relative",
  width: "90%",
  margin: "10px auto",
  padding: "0 0 5 0",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  top: -54,
  backgroundColor: "#FFFFFF",
  borderRadius: " 25px 25px 15px 15px;",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
});

export const ChoiceOptions = styled(Box)({
  display: "flex",
  justifyContent: "end",
  fontStyle: "normal",
  fontWeight: 500,
  fontFamily: "CustomFontBold",
  fontSize: "14px",
  textAlign: "right",
  height: "24px",
  flex: "none",
  order: "0",
  flexGrow: "0",
  margin: " 15px 17px",
  cursor: "pointer",
  color: "#353535",
});
