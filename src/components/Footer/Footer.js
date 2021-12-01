import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      setCurrentTime(h + ":" + m + ":" + s);
    }, 1000);
  }, [currentTime]);

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">Thời điểm hiện tại: {currentTime}</span>
    </div>
  );
};

export default Footer;
