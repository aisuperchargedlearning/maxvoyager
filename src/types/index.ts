export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}