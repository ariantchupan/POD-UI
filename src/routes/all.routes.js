import { lazy } from "react";

const DashboardPage = lazy(() => import("../pages/dashboard/Dashboard.page"));
//Auth
const LoginPage = lazy(() => import("../pages/auth/login/Login.page"));

export const allRoutes = [
  {
    path: "/",
    component: DashboardPage,
  },
  //Auth
  {
    path: "/auth/login",
    component: LoginPage,
  },
];
