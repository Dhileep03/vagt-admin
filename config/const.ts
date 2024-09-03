import { BuildingIcon, CarIcon, LineChartIcon, PackageIcon, TruckIcon, UserIcon, UsersIcon } from "lucide-react";


export const DEFAULT_LOGIN_REDIRECT = "/";


interface Feature {
  title: string;
  description: string;
  image?: string;
}

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


export const features: Feature[] = [
  {
    title: "GUARDING SERVICES",
    description:
      "We have a team of professionally trained security personnel's securing an impressive clientele which includes Diplomatic Missions, IT Industry, Multinational Companies, Hotels, Industrial Units, Airlines & Airports, Financial & Educational Institutions, Malls & Multiplexes, BPOs and many more.",
    image: "/security.png",
  },
  {
    title: "EHS Audits",
    description:
      "These services relate to a wide range of areas - from environmental sustainability and occupational safety to chemical, radiation, and biological controls - that support the Institute's accountability for excellent EHS performance, as well as for legal compliance.",
    image: "/cleaning.png",
  },
  {
    title: "BCP Management",
    description:
      "We identify which systems and processes must be sustained, and provide a detailed report of how to maintain them. We guide industries to tackle natural disasters and human error. It is vital for an organization to have a business continuity plan to preserve its health and reputation. A proper BCP decreases the chance of a costly outage.",
    image: "/BCP.png", // Replace with the path to your image
  },
  {
    title: "Trainings",
    description: `
      Physical Security Training,
      Electronic Security Training,
      ISMS,
      ERT,
      EHS,
      ISMS,
      Soft skills,
      Emergency Evacuation drills
    `,
    image: "/training.png", // Replace with the path to your image
  },
  {
    title: "Security Audits",
    description:
      "Conducting comprehensive physical inspection and evaluation of all security systems, controls, and their parameters in a particular public/private property, asset of an organization. Also providing a detailed analysis report with remedial action. Based on the audit, we propose optimization of manpower by implementing technology in place.",
    image: "/Audit.png", // Replace with the path to your image
  },
  {
    title: "PR AND LIAISON SUPPORT",
    description:
      "We provide Public relations (PR) as a distinctive management function that helps establish relationships between organizations. We also provide Liaising services to our clients.",
    image: "/support.png", // Replace with the path to your image
  },
  {
    title: "Electronics Security solution",
    description:
      "We provide service and external product offerings of CCTV cameras, access control systems, entry automation solutions, intrusion detection systems, metal detection solutions, fire detection, and public address systems. Our end-to-end services take care of everything from conducting surveys, analyzing requirements, designing solutions to implementing and installing electronic security solutions.",
    image: "/electric.png", // Replace with the path to your image
  },
  {
    title: "Other Services",
    description: `
      FM services for Residential and Commercial complexes,
      Office upkeep and maintenance,
      Electrical maintenance,
      Plumbing maintenance,
      STP & WTP maintenance services,
      Rodent & Pest control
    `,
    image: "/services.png", // Replace with the path to your image
  },
];