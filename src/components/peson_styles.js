import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { borderRadius } from "@mui/system";
import "../App.css";
import Img from "./img/image.png";
export const Header = styled(Box)({
  position: "absolute",
  width: 360,
  height: 125,
  left: 0,
  top: 33,

  backgroundColor: "#305986",
  borderRadius: " 0px 0px 20px 20px;",
});
export const Person_info = styled(Box)({
  position: "absolute",
  width: 330,
  height: 238,
  padding: "0 0 5 0",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  left: 15,
  top: 123,
  backgroundColor: "#FFFFFF",
  borderRadius: " 25px 25px 15px 15px;",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.05)",
});
export const Person_info2 = styled(Box)({
  position: "absolute",
  width: 330,
  height: 218,
  padding: "0 0 5 0",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  left: 15,
  top: 371,
  backgroundColor: "#FFFFFF",
  borderRadius: " 25px 25px 15px 15px;",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
});
export const Poshtibani = styled(Box)({
  position: "absolute",
  width: 330,
  height: 158,
  padding: "0 0 5 0",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  left: 15,
  top: 600,
  backgroundColor: "#FFFFFF",
  borderRadius: " 25px 25px 15px 15px;",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
});
export const EditBtn = styled(Button)({
  position: "absolute",
  width: "90px",
  height: "45px",
  left: " 23px",
  top: " 28%",
  bottom: " 20%",
  fontStyle: "normal",
  fontWeight: "bold",
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
});
export const Title = styled(Button)({
  position: "absolute",
  width: "119px",
  height: "32px",
  left: " 233px",
  top: " 41px",
  bottom: " 20%",

  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "21px",
  lineHeight: "150%",
  textAlign: "center",
  letterSpacing: "0.02em",
  color: "#FFFFFF",
});
export const Profile = styled(Button)({
  position: "absolute",
  width: "100px",
  height: "100px",
  left: " 224.6px",
  top: " 10px",
  borderRadius: "50% ",

  //    background:new URL('./img/112133147.jpg')
  backgroundImage: `url(${Img})`,
});
export const Part = styled(Button)({
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  justifycontent: "flex-end",
  alignItems: "center",
  padding: "13px 10px",

  position: "absolute",
  width: "330px",
  height: "50px",
  left: "0px",
  top: " 0px",
  color: "black",
  /* Nature/white */

  background: "#FFFFFF",
});
export const Text1 = styled(Typography)({
  display: "flex",
  justifyContent: "end",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  // lineHeight: '24px',
  textAlign: "right",
  position: "satic",
  width: "291px",
  height: "24px",
  left: "226px",
  top: "13px",
  color: "black",
  /* Nature/white */
  flex: "none",
  order: "0",
  flexGgrow: "0",
  margin: "15px 17px",
  cursor: "pointer",
});
export const Text2 = styled(Typography)({
  display: "flex",
  justifyContent: "end",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  // lineHeight: '40px',
  textAlign: "right",
  position: "static",
  width: "291px",
  height: "24px",
  left: "62px",
  top: "13px",
  /* Nature/white */
  flex: "none",
  order: "0",
  flexGgrow: "0",
  margin: " 15px 17px",
  cursor: "pointer",
});
export const Text3 = styled(Typography)({
  display: "flex",
  justifyContent: "end",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  // lineHeight: '50px',
  textAlign: "right",

  position: "static",
  width: "291px",
  height: "24px",
  left: "162px",
  top: "13px",
  color: "black",
  /* Nature/white */
  flex: "none",
  order: "0",
  flexGgrow: "0",
  margin: " 15px 17px",
  cursor: "pointer",
});
export const Text4 = styled(Typography)({
  display: "flex",
  justifyContent: "end",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  // lineHeight: '40px',
  textAlign: "right",

  position: "static",
  width: "291px",
  height: "24px",
  left: "162px",
  top: "13px",
  color: "black",
  /* Nature/white */
  flex: "none",
  order: "0",
  flexGgrow: "0",
  margin: " 15px 17px",
  cursor: "pointer",
});
export const Text5 = styled(Typography)({
  display: "flex",
  justifyContent: "end",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  // lineHeight: '24px',
  textAlign: "right",
  position: "static",
  width: "291px",
  height: "24px",
  left: "224px",
  top: "13px",
  /* Nature/white */
  margin: " 15px 17px",
  cursor: "pointer",
});
export const Text6 = styled(Typography)({
  display: "flex",
  justifyContent: "end",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  // lineHeight: '24px',
  textAlign: "right",
  position: "static",
  width: "291px",
  height: "24px",
  left: "189px",
  top: "13px",
  color: "black",
  /* Nature/white */
  margin: " 15px 17px",
  cursor: "pointer",
});

export const Text7 = styled(Typography)({
  display: "flex",
  justifyContent: "end",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  // lineHeight: '24px',
  textAlign: "right",
  position: "static",
  width: "291px",
  height: "24px",
  left: "151px",
  top: "13px",
  /* Nature/white */
  margin: " 15px 17px",
  cursor: "pointer",
});
export const Name = styled(Typography)({
  position: "absolute",
  height: "28px",
  left: "162px",
  top: "31px",
  /* Nature/white */

  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "16px",
  lineHeight: "28px",
  color: "#282828",
  flex: "none",
  order: 0,
  flexGrow: 0,
  margin: " 2px 0px",
});
export const PhoneNumber = styled(Typography)({
  position: "absolute",
  height: "28px",
  left: "119px",
  top: "58px",
  /* Nature/white */

  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "16px",
  lineHeight: "28px",
  color: "gray",
  flex: "none",
  order: 0,
  flexGrow: 0,
  margin: " 2px 0px",
});
