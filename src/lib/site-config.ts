export const siteInfo = {
  name: "MODERNO",
  phone: "+712-339-9294",
  email: "info@moderno-demo.com",
  address: "283 N. Glenwood Street, Levittown, NY",
  hours: "MON-FRI: 10:00 - 18:00",
};

export const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/your-page" },
  { name: "Instagram", href: "https://instagram.com/your-page" },
  { name: "YouTube", href: "https://youtube.com/@your-channel" },
] as const;

export const primaryNavigation = [
  { name: "Homes", href: "/", hasSubmenu: true },
  { name: "Shop", href: "/shop", hasSubmenu: true },
  { name: "Blog", href: "/blog", hasSubmenu: true },
  { name: "Pages", href: "/pages", hasSubmenu: true },
  { name: "Mega", href: "/mega", hasSubmenu: true },
  { name: "Contacts", href: "/contacts", hasSubmenu: false },
];
