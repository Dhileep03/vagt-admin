import { BuildingIcon, CarIcon, LineChartIcon, PackageIcon, TruckIcon, UserIcon, UsersIcon } from "lucide-react";


export const DEFAULT_LOGIN_REDIRECT = "/";

// export const menuItems = [
//   {
//     href: "/dashboard",
//     icon: HomeIcon,  // Assuming this is the main dashboard
//     label: "Dashboard",
//     isActive: true,
//     isAdditional: false,
//     isBottom: false,
//   },
//   {
//     href: "/user",
//     icon: UsersIcon,  // Represents user management, focusing on multiple users
//     label: "User Management",
//     isActive: true,
//     isAdditional: false,
//     isBottom: false,
//   },
//   {
//     href: "/empmang",
//     icon: UsersIcon,  // Represents multiple users, suitable for Employee Management
//     label: "Employee Management",
//     isActive: true,
//     isAdditional: false,
//     isBottom: false,
//   },
//   {
//     href: "/newapplication",
//     icon: PackageIcon,  // Typically used for packages, suitable for new applications
//     label: "New Applications",
//     isActive: true,
//     isAdditional: false,
//     isBottom: false,
//   },
//   {
//     href: "/reports",
//     icon: LineChartIcon,  // Suitable for reports and analytics
//     label: "Reports & Analytics",
//     isActive: true,
//     isAdditional: false,
//     isBottom: false,
//   },
//   {
//     href: "/client",
//     icon: UserIcon,  // Appropriate for individual client management
//     label: "Client Management",
//     isActive: true,
//     isAdditional: false,
//     isBottom: false,
//   },
//   {
//     href: "/user",
//     icon: SettingsIcon,  // Settings icon is universally recognized
//     label: "Settings",
//     isActive: true,
//     isAdditional: false,
//     isBottom: true,
//   },
// ];



// Replace with the actual icon library you're using

export const Items = [
  {
    href: "/dashboard",
    icon: LineChartIcon, // Dashboard usually associated with analytics or charts
    label: "Dashboard",
    isActive: true,
    isAdditional: false,
    isBottom: false,
  },
  {
    href: "/user",
    icon: UserIcon, // User management
    label: "User",
    isActive: true,
    isAdditional: false,
    isBottom: false,
  },
  {
    href: "/society",
    icon: UsersIcon, // Society might represent a group of people, so UsersIcon fits
    label: "Society",
    isActive: true,
    isAdditional: false,
    isBottom: false,
  },
  {
    href: "/guest",
    icon: PackageIcon, // Could represent a guest or external entity
    label: "Guest",
    isActive: true,
    isAdditional: false,
    isBottom: false,
  },
  {
    href: "/apartment",
    icon: BuildingIcon, // Icon representing a building or apartment
    label: "Apartment",
    isActive: true,
    isAdditional: false,
    isBottom: false,
  },
  {
    href: "/vehicle",
    icon: CarIcon, // Vehicle could be represented by a truck or car icon
    label: "Vehicle",
    isActive: true,
    isAdditional: false,
    isBottom: false,
  },
  {
    href: "/watertruck",
    icon: TruckIcon, // Water tanker can be represented with a truck icon
    label: "Water Tanker",
    isActive: true,
    isAdditional: false,
    isBottom: false,
  },
];
