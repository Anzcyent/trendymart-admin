import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineAppstore,
  AiOutlineCalendar,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdNotes, MdBackupTable } from "react-icons/md";
import { LuEdit } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiBarChartSquare } from "react-icons/bi";
import { GoNote } from "react-icons/go";

const menuItems = [
  {
    id: 1,
    title: "MAIN",
    items: [
      {
        id: 1,
        name: "Homepage",
        icon: <AiOutlineHome className="sm:mr-2 lg:text-sm text-2xl" />,
        routeUrl: "/",
        disabled: false,
      },
      {
        id: 2,
        name: "Profile",
        icon: <FiUsers className="sm:mr-2 lg:text-sm text-2xl" />,
        routeUrl: "/profile/:id",
        disabled: true,
      },
    ],
  },
  {
    id: 2,
    title: "LISTS",
    items: [
      {
        id: 1,
        name: "Users",
        icon: <FiUsers className="sm:mr-2 lg:text-sm text-2xl" />,
        routeUrl: "/users",
        disabled: false,
      },
      {
        id: 2,
        name: "Products",
        icon: <AiOutlineShoppingCart className="sm:mr-2 lg:text-sm text-2xl" />,
        routeUrl: "/products",
        disabled: false,
      },
      {
        id: 3,
        name: "Orders",
        icon: <MdNotes className="sm:mr-2 lg:text-sm text-2xl" />,
        routeUrl: "/orders",
        disabled: true,
      },
    ],
  },
  {
    id: 3,
    title: "GENERAL",
    items: [
      {
        id: 1,
        name: "Elements",
        icon: <AiOutlineAppstore className="sm:mr-2 lg:text-sm text-2xl" />,
        routeUrl: "/elements",
        disabled: true,
      },
      {
        id: 2,
        name: "Notes",
        icon: <LuEdit className="sm:mr-2 lg:text-sm text-2xl" />,
        routeUrl: "/notes",
        disabled: true,
      },
      {
        id: 3,
        name: "Forms",
        icon: <FaWpforms className="sm:mr-2 lg:text-sm text-2xl" />,
        routeUrl: "/forms",
        disabled: true,
      },
      {
        id: 4,
        name: "Calendar",
        icon: <AiOutlineCalendar className="sm:mr-2 lg:text-sm text-2xl" />,
        routeUrl: "/calendar",
        disabled: true,
      },
    ],
  },
  {
    id: 4,
    title: "MAINTENANCE",
    items: [
      {
        id: 1,
        name: "Settings",
        icon: <FiSettings className="sm:mr-2 lg:text-sm text-2xl" />,
        routeUrl: "/settings",
        disabled: true,
      },
      {
        id: 2,
        name: "Backups",
        icon: <MdBackupTable className="sm:mr-2 lg:text-sm text-2xl" />,
        routeUrl: "/backups",
        disabled: true,
      },
    ],
  },
  {
    id: 5,
    title: "ANALYTICS",
    items: [
      {
        id: 1,
        name: "Charts",
        icon: <BiBarChartSquare className="sm:mr-2 lg:text-sm text-2xl" />,
        routeUrl: "/",
        disabled: false,
      },
      {
        id: 2,
        name: "Logs",
        icon: <GoNote className="sm:mr-2 lg:text-sm text-2xl" />,
        routeUrl: "/",
        disabled: false,
      },
    ],
  },
];

export default menuItems;
