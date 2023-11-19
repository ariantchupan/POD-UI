import BagIcon from "../../assets/icons/Bag.icon";
import DashboardIcon from "../../assets/icons/Dashboard.icon";
import RequestIcon from "../../assets/icons/Request.icon";

export const sidebarData = [
  {
    title: "داشبورد",
    icon: DashboardIcon,
    path: "/dashboard",
  },
  {
    title: "دارایی های من",
    icon: BagIcon,
    path: "/my-assets",
    children: [
      {
        title: "ماشین آلات",
        path: "/my-assets/machinery",
      },
      {
        title: "خدمات",
        path: "/my-assets/services",
      },
    ],
  },
  {
    title: "درخواست های من",
    icon: RequestIcon,
    path: "/my-requests",
    children: [
      {
        title: "ماشین آلات",
        path: "/my-requests/machinery",
      },
      {
        title: "خدمات",
        path: "/my-requests/services",
      },
    ],
  },
];
