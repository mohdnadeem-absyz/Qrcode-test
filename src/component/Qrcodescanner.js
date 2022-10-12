import React from "react";
import { Box } from "@mui/system";
// import "./qrcodeScanner.css";
import "./style.css";
// import generi from "../../../../images/static/generic_profile.png";

const Qrcodescanner = () => {
  return (
    <>
      <Box>
        <Box className="image-class">{/* <img  alt="profile-image" /> */}</Box>
        <Box className="overall-content">
          <Box className="inner-class-one">
            <p>Name</p>
            <p>Event</p>
            <p>No Of Events registered</p>
            <p>Date</p>
            <p>Time</p>
            <p>Event Place</p>
          </Box>
          <Box>
            <p>XyzJJDAKJASSANJaojAJS kxaj</p>
            <p>Abcd Event</p>
            <p>5</p>
            <p>--/--/----</p>
            <p>--:--</p>
            <p>stwxyz place</p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Qrcodescanner;
