import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
