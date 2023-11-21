import React from "react";
import TableMUI from "@mui/material/Table";
import {
  BodyRow,
  TableBox,
  TableContent,
  TableHeader,
  TableItem,
} from "./table.styles";
import { TableContainer, TableRow } from "@mui/material";
import { themeColors } from "../../../constants/colors";

const Table = () => {
  return (
    <TableBox>
      <TableContainer>
        <TableMUI>
          <TableHeader>
            <TableRow>
              <TableItem color={themeColors.primary}>عنوان دستگاه</TableItem>
              <TableItem color={themeColors.tableHeader}>
                محل نگه داری دستگاه
              </TableItem>
              <TableItem color={themeColors.tableHeader}>
                محل فعلی دستگاه
              </TableItem>
              <TableItem color={themeColors.tableHeader}>
                تمایش در سایت
              </TableItem>
              <TableItem color={themeColors.tableHeader}>عملیات</TableItem>
            </TableRow>
          </TableHeader>
          <TableContent>
            <BodyRow>
              <TableItem color={themeColors.tableBody}>
                عنوان دستگاه شماره یک
              </TableItem>
              <TableItem color={themeColors.tableBody}>
                عنوان دستگاه شماره یک
              </TableItem>
              <TableItem color={themeColors.tableBody}>
                عنوان دستگاه شماره یک
              </TableItem>
              <TableItem color={themeColors.tableBody}>
                عنوان دستگاه شماره یک
              </TableItem>
              <TableItem color={themeColors.tableBody}>
                عنوان دستگاه شماره یک
              </TableItem>
            </BodyRow>
            <BodyRow>
              <TableItem color={themeColors.tableBody}>
                عنوان دستگاه شماره یک
              </TableItem>
              <TableItem color={themeColors.tableBody}>
                عنوان دستگاه شماره یک
              </TableItem>
              <TableItem color={themeColors.tableBody}>
                عنوان دستگاه شماره یک
              </TableItem>
              <TableItem color={themeColors.tableBody}>
                عنوان دستگاه شماره یک
              </TableItem>
              <TableItem color={themeColors.tableBody}>
                عنوان دستگاه شماره یک
              </TableItem>
            </BodyRow>
          </TableContent>
        </TableMUI>
      </TableContainer>
    </TableBox>
  );
};

export default Table;
