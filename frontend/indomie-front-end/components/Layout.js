import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
