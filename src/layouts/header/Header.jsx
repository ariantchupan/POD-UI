import React from "react";
import { HeaderContainer, UserButton } from "./header.styles";
import LogoIcon from "../../assets/icons/Logo.icon";
import UserIcon from "../../assets/icons/User.icon";
import ArrowDownIcon from "../../assets/icons/ArrowDown.icon";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoIcon />
      <UserButton>
        <UserIcon />
        <span>سیمین سرمدی</span>
        <ArrowDownIcon />
      </UserButton>
    </HeaderContainer>
  );
};

export default Header;
