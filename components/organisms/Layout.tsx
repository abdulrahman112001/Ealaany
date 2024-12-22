import React, { ReactNode, FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TobNavbar from "./TobNavbar";

interface LayoutProps {
  children: ReactNode; 
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <TobNavbar/>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
