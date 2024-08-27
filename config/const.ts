import { 
  HomeIcon, 
  LineChartIcon, 
  PackageIcon, 
  SettingsIcon, 
  ShoppingCartIcon, 
  UserIcon, 
  UsersIcon 
} from "lucide-react";

export const DEFAULT_LOGIN_REDIRECT = "/user";

export const menuItems = [
  {
    href: "/dashboard",
    icon: HomeIcon,  // Assuming this is the main dashboard
    label: "Dashboard",
    isActive: true,
    isAdditional: false,
    isBottom: false,
  },
  {
    href: "/user",
    icon: UsersIcon,  // Represents user management, focusing on multiple users
    label: "User Management",
    isActive: true,
    isAdditional: false,
    isBottom: false,
  },
  {
    href: "/empmang",
    icon: UsersIcon,  // Represents multiple users, suitable for Employee Management
    label: "Employee Management",
    isActive: true,
    isAdditional: false,
    isBottom: false,
  },
  {
    href: "/newapplication",
    icon: PackageIcon,  // Typically used for packages, suitable for new applications
    label: "New Applications",
    isActive: true,
    isAdditional: false,
    isBottom: false,
  },
  {
    href: "/reports",
    icon: LineChartIcon,  // Suitable for reports and analytics
    label: "Reports & Analytics",
    isActive: true,
    isAdditional: false,
    isBottom: false,
  },
  {
    href: "/client",
    icon: UserIcon,  // Appropriate for individual client management
    label: "Client Management",
    isActive: true,
    isAdditional: false,
    isBottom: false,
  },
  {
    href: "/user",
    icon: SettingsIcon,  // Settings icon is universally recognized
    label: "Settings",
    isActive: true,
    isAdditional: false,
    isBottom: true,
  },
];
