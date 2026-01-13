export type NavLink = {
  id: string;
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];