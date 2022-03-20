import { Button, Box, styled } from "@mui/material";
import "../App.css";

export const Content = styled(Box)({
  position: "relative",
  width: "100%",
  margin: "0 auto",
  height: "663px",
  top: -30,
  background: "#FFFFFF",
  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
  borderRadius: "25px 25px 0px 0px",
});
export const Return = styled(Button)({
  position: "absolute",
  left: "70%",
  top: " 20px",
  fontFamily: "CustomFont",
  color: "#FFFFFF",
  "@media screen and (min-width: 630px)": {
    left: "80%",
  },
});
export const Input = styled("input")({
  border: "none",
  width: "320px",
  height: "30px",
  backgroundColor: "#F3F3F3",
  borderRadius: "8px",
  padding: "8px 16px 8px 8px",
  margin: "0 auto",
  "&:focus": {
    border: "none",
    zIndex: 99,
  },

  "@media screen and (max-width: 349px)": {
    width: "200px",
  },
});
export const Profile = styled(Box)({
  position: "relative",
  width: "100px",
  height: "100px",
  margin: "0 auto",
  display: "flex",
  top: " 48px",
  borderRadius: "50% ",
  backgroundColor: "#AB47BC",
  zIndex: 8,
  border: "white solid 4px",
  "@media screen and (max-width: 349px)": {
    width: "70px",
    height: "70px",
  },
});
export const InnerProfile = styled(Box)({
  position: "absolute",
  display: "flex",
  width: "34px",
  height: "34px",
  left: " 75.6px",
  top: " 62px",
  borderRadius: "50% ",
  backgroundColor: "#55A6FF",
  zIndex: 9,
  border: "white solid 4px",
  "@media screen and (max-width: 349px)": {
    width: "24px",
    height: "24px",
    left: " 46px",
    top: " 52.6px",
  },
});

export const BirthdayBox = styled(Box)({
  position: "absolute",
  width: "200px",
  height: "100px",
  top: "555px",
  left: "125px",
  "@media screen and (max-width: 349px)": {
    left: "50px",
    width: "200px",
  },
});
