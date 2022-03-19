import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import "../App.css";
import Img from "./img/image.png";
export const Header = styled(Box)({
 position: "relative",
  width:'100%',
  height: 125,
  backgroundColor: "#305986",
  borderRadius: " 0px 0px 20px 20px;",

});
export const PersonInfo = styled(Box)({
  position: "relative",
  width: '90%',
  height: 238,
  padding: "0 0 5 0",
  // left: 15,
  top:-30,
  margin:'0 auto',
  backgroundColor: "#FFFFFF",
  borderRadius: " 25px 25px 15px 15px;",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.05)",
});
export const PersonInfo2 = styled(Box)({
  position: "relative",
  width: '90%',
  margin:'0 auto',
  height: 228,
  padding: "0 0 5 0",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  top: -15,
  backgroundColor: "#FFFFFF",
  borderRadius: " 25px 25px 15px 15px;",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
});
export const BackUp = styled(Box)({
  position: "relative",
  width: '90%',
  margin:'0 auto',
  height: 188,
  padding: "0 0 5 0",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  top: -3,
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
  left: " 65%",
  top: " 41px",
  bottom: " 20%",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "21px",
  lineHeight: "150%",
  textAlign: "center",
  letterSpacing: "0.02em",
  color: "#FFFFFF",
  '@media screen and (max-width: 349px)': {
    width: "120px",
    fontSize: "17px",
    left:'60%'
  },

});
export const Profile = styled(Button)({
  position: "absolute",
  width: "90px",
  height: "90px",
  left: "70%",
  top: " 10px",
  borderRadius: "50% ",
  '@media screen and (max-width: 349px)': {
    left:"70%",
    width: "70px",
    height: "70px",
  },
  '@media screen and (min-width: 600px)': {
    left:"75%"
  },
  '@media screen and (min-width: 1500px)': {
    left:"90%"
  },


  backgroundImage: `url(${Img})`,
});


export const ChoiceOptions = styled(Typography)({
  display: "flex",
  justifyContent: "end",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  textAlign: "right",
  // width: "291px",
  height: "24px",
  flex: "none",
  order: "0",
  flexGrow: "0",
  margin: " 15px 17px",
  cursor: "pointer",
});


