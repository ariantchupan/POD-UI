import { lazy } from "react";
//Dashboard
const DashboardPage = lazy(() => import("../pages/dashboard/Dashboard.page"));
const ServicesPage = lazy(() => import("../pages/dashboard/Services.page"));
const ComercialPage = lazy(() => import("../pages/dashboard/Comercial.page"));
//Auth
const LoginPage = lazy(() => import("../pages/auth/login/Login.page"));
//My assets
const MachineryPage = lazy(() => import("../pages/myAssets/Machinery.page"));

export const allRoutes = [
  {
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    path: "/dashboard/services",
    component: ServicesPage,
  },
  {
    path: "/dashboard/commercial",
    component: ComercialPage,
  },
  //Auth
  {
    path: "/auth/login",
    component: LoginPage,
  },
  //My assets
  {
    path: "/my-assets/machinery",
    component:MachineryPage
  },
];
