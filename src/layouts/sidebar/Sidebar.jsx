import React, { useEffect, useState } from "react";
import {
  SidebarContainer,
  SidebarMenuItem,
  SidebarMenuList,
  SidebarToggle,
} from "./sidebar.styles";
import ArrowRightIcon from "../../assets/icons/ArrowRight.icon";
import { sidebarData } from "./sidebar.data";
import { useLocation } from "react-router-dom";
import { themeColors } from "../../constants/colors";
import { Stack } from "@mui/material";
import Collapse from "./Collapse";
import SidebarDivider from "../../assets/icons/SidebarDivider";
import ProfileIcon from "../../assets/icons/Profile.icon";
import WalletIcon from "../../assets/icons/Wallet.icon";
import SupportIcon from "../../assets/icons/Support.icon";

const Sidebar = ({ sidebarWidth, setSidebarWidth }) => {
  const [activePath, setActivePath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <SidebarContainer>
      <SidebarToggle
        state={sidebarWidth === "292px" ? "open" : "close"}
        onClick={() =>
          setSidebarWidth((prevState) =>
            prevState === "292px" ? "110px" : "292px"
          )
        }
      >
        <ArrowRightIcon />
      </SidebarToggle>
      <SidebarMenuList sidebar={sidebarWidth === "292px" ? "open" : "close"}>
        {sidebarData.map(({ title, icon: Icon, path, children }, index) =>
          children?.length && sidebarWidth === "292px" ? (
            <Collapse
              key={index}
              Icon={Icon}
              activePath={activePath}
              child={children}
              title={title}
              sidebarWidth={sidebarWidth}
            />
          ) : (
            <SidebarMenuItem
              key={index}
              to={path}
              state={activePath === path ? "active" : "deactive"}
              sidebar={sidebarWidth === "292px" ? "open" : "close"}
            >
              <Stack direction="row" spacing={1}>
                <Icon
                  width={sidebarWidth === "110px" ? "32px" : null}
                  height={sidebarWidth === "110px" ? "32px" : null}
                  color={
                    sidebarWidth === "110px"
                      ? activePath === path
                        ? themeColors.card
                        : themeColors.menu
                      : activePath === path
                      ? themeColors.primary
                      : themeColors.menu
                  }
                />
                <span
                  style={{
                    display: sidebarWidth === "110px" ? "none" : "block",
                  }}
                >
                  {title}
                </span>
              </Stack>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenuList>
      <SidebarDivider />
      <Stack
        spacing="8px"
        alignItems="center"
        width={sidebarWidth === "292px" ? "100%" : 80}
        marginInline="auto"
      >
        <SidebarMenuItem
          to="/profile"
          state={activePath === "/profile" ? "active" : "deactive"}
          sidebar={sidebarWidth === "292px" ? "open" : "close"}
        >
          <Stack direction="row" spacing={1}>
            <ProfileIcon
              width={sidebarWidth === "110px" ? "32px" : null}
              height={sidebarWidth === "110px" ? "32px" : null}
              color={
                sidebarWidth === "110px"
                  ? activePath === "/profile"
                    ? themeColors.card
                    : themeColors.menu
                  : activePath === "/profile"
                  ? themeColors.primary
                  : themeColors.menu
              }
            />
            <span
              style={{
                display: sidebarWidth === "110px" ? "none" : "block",
              }}
            >
              پروفایل
            </span>
          </Stack>
        </SidebarMenuItem>
        <SidebarMenuItem
          to="/wallet"
          state={activePath === "/wallet" ? "active" : "deactive"}
          sidebar={sidebarWidth === "292px" ? "open" : "close"}
        >
          <Stack direction="row" spacing={1}>
            <WalletIcon
              width={sidebarWidth === "110px" ? "32px" : null}
              height={sidebarWidth === "110px" ? "32px" : null}
              color={
                sidebarWidth === "110px"
                  ? activePath === "/wallet"
                    ? themeColors.card
                    : themeColors.menu
                  : activePath === "/wallet"
                  ? themeColors.primary
                  : themeColors.menu
              }
            />
            <span
              style={{
                display: sidebarWidth === "110px" ? "none" : "block",
              }}
            >
              کیف پول
            </span>
          </Stack>
        </SidebarMenuItem>
      </Stack>
      <SidebarDivider />
      <Stack
        spacing="8px"
        alignItems="center"
        width={sidebarWidth === "292px" ? "100%" : 80}
        marginInline="auto"
      >
        <SidebarMenuItem
          to="/support"
          state={activePath === "/support" ? "active" : "deactive"}
          sidebar={sidebarWidth === "292px" ? "open" : "close"}
        >
          <Stack direction="row" spacing={1}>
            <SupportIcon
              width={sidebarWidth === "110px" ? "32px" : null}
              height={sidebarWidth === "110px" ? "32px" : null}
              color={
                sidebarWidth === "110px"
                  ? activePath === "/support"
                    ? themeColors.card
                    : themeColors.menu
                  : activePath === "/support"
                  ? themeColors.primary
                  : themeColors.menu
              }
            />
            <span
              style={{
                display: sidebarWidth === "110px" ? "none" : "block",
              }}
            >
              پشتیبانی
            </span>
          </Stack>
        </SidebarMenuItem>
      </Stack>
    </SidebarContainer>
  );
};

export default Sidebar;
