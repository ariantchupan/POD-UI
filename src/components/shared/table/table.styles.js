import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import { themeColors } from "../../../constants/colors";

export const TableBox = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

export const TableHeader = styled(TableHead)(() => ({
  height: 52,
  background: themeColors.card,
  paddingInline: 24,
}));

export const BodyRow = styled(TableRow)(() => ({
  backgroundColor: themeColors.card,
  ":nth-child(odd)": {
    backgroundColor: "rgba(229, 245, 255, 0.5)",
  },
}));

export const TableItem = styled(TableCell)(({ color }) => ({
  whiteSpace: "nowrap",
  fontSize: 14,
  fontWeight: 400,
  color,
  textAlign: "center",
  border: "none",
}));

export const TableContent = styled(TableBody)(() => ({
  backgroundColor: themeColors.page,
  border: `24px solid ${themeColors.page}`,
}));
