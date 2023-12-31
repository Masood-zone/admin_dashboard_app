// General Icons
import uuid from "react-uuid";
// Icon Imports
/*Note the names of the Icons work like storing a picture inside a variable*/
import dashboardIcon from "../svgs/round-space-dashboard.svg";
import analyticsIcon from "../svgs/analytics.svg";
import invoiceIcon from "../svgs/file-invoice.svg";
import scheduleIcon from "../svgs/scheduled.svg";
import messagesIcon from "../svgs/messages.svg";
import notificationIcon from "../svgs/notification-filled.svg";
import settingsIcon from "../svgs/settings-sharp.svg";
import saveIcon from "../svgs/save-icon.svg";
import stockIcon from "../svgs/stock-icon.svg";
import salesIcon from "../svgs/sales-icon.svg";
import jobIcon from "../svgs/job-icon.svg";
import uxIcon from "../images/ux-image.svg";
import bugFixIcon from "../images/bug-fix-image.svg";
import wordPressIcon from "../images/word-press-image.svg";
import mobileDesignIcon from "../images/mobile-design.svg";
import webDevIcon from "../images/web-dev-image.svg";
import uiIcon from "../images/ui-desgining.svg";
// Navbar data
export const menuData = [
  {
    name: "Dashboard",
    link: "/",
    icon: dashboardIcon,
  },
  {
    name: "Analytics",
    link: "/analytics",
    icon: analyticsIcon,
  },
  {
    name: "Invoice",
    link: "/invoice",
    icon: invoiceIcon,
  },
  {
    name: "Schedule",
    link: "/schedule",
    icon: scheduleIcon,
  },
  {
    name: "Messages",
    link: "/messages",
    icon: messagesIcon,
  },
  {
    name: "notification",
    link: "/notification",
    icon: notificationIcon,
  },
  {
    name: "settings",
    link: "/settings",
    icon: settingsIcon,
  },
];

// Top Analytics Card data
export const topAnalyticsData = [
  {
    text: "Favourite Services",
    number: "178+",
    icon: saveIcon,
  },
  {
    text: "New Sales",
    number: "20+",
    icon: stockIcon,
  },
  {
    text: "New Leads",
    number: "190+",
    icon: salesIcon,
  },
  {
    text: "Booked Services",
    number: "12+",
    icon: jobIcon,
  },
];

// Recent Orders data
export const recentOrdersData = [
  {
    orderId: uuid(),
    image: uxIcon,
    serviceName: "Ui/Ux Desgining",
    price: "$178",
    totalOrder: "325",
    totalAmount: "$1,46,660",
  },
  {
    orderId: uuid(),
    image: bugFixIcon,
    serviceName: "Bug Fix",
    price: "$14",
    totalOrder: "53",
    totalAmount: "$46,660",
  },
  {
    orderId: uuid(),
    image: wordPressIcon,
    serviceName: "Wordpress",
    price: "$21",
    totalOrder: "78",
    totalAmount: "$3,46,676",
  },
  {
    orderId: uuid(),
    image: mobileDesignIcon,
    serviceName: "MobileDesign",
    price: "$32",
    totalOrder: "98",
    totalAmount: "$3,46,981",
  },
];

// Top Selling Services
export const topSellingServices = [
  {
    image: webDevIcon,
    text: "Web Developement",
    stars: "5",
    price: "$87",
  },
  {
    image: uiIcon,
    text: "UI/UX Development",
    stars: "3",
    price: "$987",
  },
];
