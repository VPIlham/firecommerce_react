import React from "react";
import FooterComponent from "./footer";
import HeaderComponent from "./header";

const LayoutComponent = (props) => {
  return (
    <div>
      <HeaderComponent />
      <div className="content">{props.children}</div>
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
