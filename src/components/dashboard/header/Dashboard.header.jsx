import React from "react";
import {
  DashboardHeaderAction,
  DashboardHeaderContainer,
  DashboardImageAction,
  SearchBox,
  SearchInput,
} from "./dashboardheader.styles";
import { IconButton } from "@mui/material";
import SearchIcon from "../../../assets/icons/Search.icon";

const DashboardHeader = ({ action }) => {
  return (
    <DashboardHeaderContainer>
      <SearchBox>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <SearchInput placeholder="این جا جستجو کنید" />
      </SearchBox>
      <DashboardHeaderAction>
        <span>{action.name}</span>
        <DashboardImageAction src={action.image} alt={action.name} />
      </DashboardHeaderAction>
    </DashboardHeaderContainer>
  );
};

export default DashboardHeader;
