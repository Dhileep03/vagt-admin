import { HomeIcon, LineChartIcon, PackageIcon, SettingsIcon, ShoppingCartIcon, UserIcon, UsersIcon } from "lucide-react";

export const DEFAULT_LOGIN_REDIRECT = "/user";



export const menuItems = [
  {
    href: "/dashboard",
    icon: UserIcon,
    label: "Dashboard",
    isActive: true,
    isAdditional: false, // primary sidebar item
    isBottom: false, // optional: indicates this item should not be placed at the bottom
  },
  {
    href: "/settings",
    icon: SettingsIcon,
    label: "Settings",
    isActive: false,
    isAdditional: false,
    isBottom: true, // this item will be placed at the bottom of the sidebar
  },
  ]