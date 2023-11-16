import React, { useState } from "react";
import { LayoutContainer, PageContainer } from "./layout.styles";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }) => {
  const [sidebarWidth, setSidebarWidth] = useState("292px");

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
