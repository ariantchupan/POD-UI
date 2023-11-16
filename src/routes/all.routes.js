import { lazy } from "react";

const DashboardPage = lazy(() => import("../pages/dashboard/Dashboard.page"));

export const allRoutes = [
  {
    path: "/",
    component: DashboardPage,
  },
];
