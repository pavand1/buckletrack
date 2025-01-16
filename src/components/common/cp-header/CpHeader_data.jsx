// src/mockMenuData.js

import {
  ABOUT_US_ROUTE,
  CONTACTS_ROUTE,
  FEATURES_ROUTE,
  PARTNER,
  RESOURCE,
  SERVICES_ROUTE,
  SUPPORT,
  TESTIMONIALS_ROUTE,
  TRACK_ORDER_ROUTE,
} from "../../../utils/constants";

const mockMenuData = [
  {
    name: "Our Services",
    link: "#services",
    route: SERVICES_ROUTE,
    dropdown: [
      { name: "Surface Transport", link: "#web" },
      { name: "Express Delivery", link: "#design" },
      { name: "Project Transport", link: "#marketing" },
    ],
  },
  // { name: 'Home', link: '#home', route: "/" },
  { name: "About Us", link: "#about", route: ABOUT_US_ROUTE },
  {
    name: "Resource",
    route: RESOURCE,
    link: "#features",
    dropdown: [
      { name: "Blog", link: "#web" },
    ],
  },
  // { name: "Track Order", like: "#trackorder", route: TRACK_ORDER_ROUTE},
  // { name: "Account", link: "#testimonials", route: TESTIMONIALS_ROUTE},
  // { name: 'Contact US', link: '#contact', route: CONTACTS_ROUTE },
  { name: "Support", link: "#support", route: SUPPORT },
  { name: "Partner with us", link: "#partner", route: PARTNER },
];

export default mockMenuData;
