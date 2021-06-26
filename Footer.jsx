import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <footer>
      <p> Copyright by ShapeAI @ {new Date().getFullYear()}</p>
    </footer>
  );
}
export default Footer;
