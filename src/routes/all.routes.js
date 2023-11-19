import { lazy } from "react";
//Dashboard
const DashboardPage = lazy(() => import("../pages/dashboard/Dashboard.page"));
const ServicesPage = lazy(() => import("../pages/dashboard/Services.page"));
//Auth
const LoginPage = lazy(() => import("../pages/auth/login/Login.page"));

export const allRoutes = [
  {
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    path: "/dashboard/services",
    component: ServicesPage,
  },
  //Auth
  {
    path: "/auth/login",
    component: LoginPage,
  },
];
