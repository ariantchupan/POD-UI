import React, { useState } from "react";
import { LayoutContainer, Page, PageContainer } from "./layout.styles";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  const [sidebarWidth, setSidebarWidth] = useState("292px");
  const location = useLocation();

  if (location.pathname.startsWith("/auth")) {
    return (
      <>
        {children}
        <Toaster position="top-center" reverseOrder={false} rtl />
      </>
    );
  }

  return (
    <LayoutContainer>
      <Header />
      <PageContainer sidebarWidth={sidebarWidth}>
        <Sidebar
          sidebarWidth={sidebarWidth}
          setSidebarWidth={setSidebarWidth}
        />
        <Page>{children}</Page>
      </PageContainer>
      <Toaster position="top-center" reverseOrder={false} rtl />
    </LayoutContainer>
  );
};

export default Layout;
