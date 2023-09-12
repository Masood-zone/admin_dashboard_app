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
