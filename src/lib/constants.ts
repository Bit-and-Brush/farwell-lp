/** Website routes used for the navigation */
export const ROUTES = [
  {
    text: "Apresentação",
    children: [
      { text: "Quem Somos", href: "/about" },
      { text: "Missão, Visão e Valores", href: "/about#mission" },
      { text: "Politica da Qualidade", href: "/quality-policy" },
      { text: "A Nossa Equipa", href: "/team" },
      { text: "Instalações", href: "/facilities" },
    ],
  },
  {
    text: "Distribuição Farmacêutica",
    href: "/distribution",
  },
  // {
  //   text: "Diagnósticos",
  //   href: "/diagnostics",
  // },
  {
    text: "Serviços",
    href: "/services",
  },
  {
    text: "Produtos",
    href: "/products",
  },
  {
    text: "Contactos",
    href: "/contact",
  },
];
