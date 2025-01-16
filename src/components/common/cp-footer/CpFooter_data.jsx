import {
  ABOUT_US_ROUTE,
  CONTACTS_ROUTE,
  FEATURES_ROUTE,
  SERVICES_ROUTE,
  TESTIMONIALS_ROUTE,
  TRACK_ORDER_ROUTE,
  BLOG_TRACK_ROUTE,
  ORDER_ROUTE,
  TERMS_CONDITION_ROUTE,
  PRIVACY_POLICY_ROUTE,
  RETURN_CANCELLATION_ROUTE,
  REFUND_POLICY_ROUTE,
  FAQ_ROUTE,
  CARRIER_ROUTE,
  WALLET_ROUTE,
  SUPPORT,
  RESOURCE,
  PARTNER,
} from "../../../utils/constants";

export const socialLinks = [
  {
    href: "https://facebook.com",
    src: "../../images/footer/facebook-icon.png",
    alt: "Facebook",
  },
  {
    href: "https://twitter.com",
    src: "../../images/footer/twitter-icon.png",
    alt: "Twitter",
  },
  {
    href: "https://instagram.com",
    src: "../../images/footer/instagram-icon.png",
    alt: "Instagram",
  },
  {
    href: "https://linkdin.com",
    src: "../../images/footer/linkdin-icon.png",
    alt: "Lindin",
  },
];

export const linksColumn2 = [
  { name: "Our Services", link: "#home", route: SERVICES_ROUTE },
  { name: "About Us", link: "#about", route: ABOUT_US_ROUTE },
  { name: "Resource", link: "#features", route: RESOURCE },
  { name: "Track Your Order", link: "#contact", route: CONTACTS_ROUTE },
  { name: "Support", like: "#trackorder", route: SUPPORT },
  { name: "Partner With Us", link: "#testimonials", route: PARTNER },
];

export const linksColumn3 = [
  { name: "Contact Us", link: "#order", route: CONTACTS_ROUTE },
  {
    name: "Terms and Conditions",
    link: "#termscondition",
    route: TERMS_CONDITION_ROUTE,
  },
  {
    name: "Privacy and Policy",
    link: "#privacypolicy",
    route: PRIVACY_POLICY_ROUTE,
  },
  // {
  //   name: "Return & Cancellation Policy",
  //   link: "#returncancellation",
  //   route: RETURN_CANCELLATION_ROUTE,
  // },
  // { name: "Refund Policy", link: "#refundpolicy", route: REFUND_POLICY_ROUTE },
  { name: "FAQ's", link: "#faqs", route: FAQ_ROUTE },
  { name: "Carrier", link: "#carrier", route: CARRIER_ROUTE },
  // { name: "Wallet", link: "#wallet", route: WALLET_ROUTE },
  { name: "Blog", link: "#blogtrack", route: RESOURCE },
];

export const contactInfo = {
  address: {
    icon: "../../images/footer/location.png",
    text: "223, Sahar Cargo Estate, J B Nagar, Andheri East, Mumbai - 400099",
  },
  email: {
    icon: "../../images/footer/email.svg",
    text: "sales@buckletrack.in",
  },
  phone: { icon: "../../images/footer/phone.png", text: "+91-022-2821-3835" },
  whatsapp: {
    icon: "../../images/footer/whatsapp.svg",
    text: "+91-987-654-3210",
  },
};
