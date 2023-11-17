import React, { useState } from "react";
import { LayoutContainer, PageContainer } from "./layout.styles";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [sidebarWidth, setSidebarWidth] = useState("292px");
  const location = useLocation();

  if (location.pathname.startsWith("/auth")) {
    return <>{children}</>;
  }

  return (
    <LayoutContainer>
      <Header />
      <PageContainer sidebarWidth={sidebarWidth}>
        <Sidebar
          sidebarWidth={sidebarWidth}
          setSidebarWidth={setSidebarWidth}
        />
        {children}
      </PageContainer>
    </LayoutContainer>
  );
};

export default Layout;
