import { ROUTES } from "@/lib/constants";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

const routes = ROUTES;

type Props = {
  pathname: string;
  catalogUrl?: string;
  clientAreaUrl?: string;
};

export default function MobileNavMenu({
  pathname,
  catalogUrl,
  clientAreaUrl,
}: Props) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!sidebarRef.current) return;
    sidebarRef.current.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenuOnClick);
    });
    return () => {
      sidebarRef.current?.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", closeMenuOnClick);
      });
    };
  }, []);

  const openMenuOnClick = () => {
    if (!sidebarRef.current) return;
    sidebarRef.current.style.height = "calc(100vh - 70px)";
    document.body.style.overflow = "hidden";
    setShowMenu(true);
  };

  const closeMenuOnClick = () => {
    if (!sidebarRef.current) return;
    sidebarRef.current.style.height = "0";
    document.body.style.overflow = "auto";
    setShowMenu(false);
  };

  return (
    <>
      {showMenu ? (
        <button
          aria-label="Fechar menu"
          onClick={closeMenuOnClick}
          className="text-secondary lg:hidden"
        >
          <XIcon />
        </button>
      ) : (
        <button
          aria-label="Abrir menu"
          onClick={openMenuOnClick}
          className="text-secondary lg:hidden"
        >
          <MenuIcon />
        </button>
      )}

      <div
        ref={sidebarRef}
        className="bg-background fixed top-[70px] left-0 z-50 h-0 w-screen overflow-x-hidden duration-500"
      >
        <div className="relative flex h-full flex-col items-center justify-evenly px-10">
          <nav className="self-stretch lg:hidden">
            <ul className="flex flex-col gap-5 text-center">
              {routes.map(({ text, children, href }, index) =>
                !children ? (
                  <li key={index}>
                    <a
                      href={href}
                      className={pathname === href ? "text-primary" : ""}
                    >
                      {text}
                    </a>
                  </li>
                ) : (
                  <Collapsible key={index}>
                    <CollapsibleTrigger className="flex w-full items-center justify-center">
                      {text} <ChevronDownIcon size={18} />
                    </CollapsibleTrigger>
                    <CollapsibleContent asChild>
                      <ul className="bg-grey-950 space-y-2.5 rounded-xl py-2">
                        {children.map(({ text, href }, index) => (
                          <li key={index}>
                            <a
                              href={href}
                              className={
                                pathname === href ? "text-primary" : ""
                              }
                            >
                              {text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                ),
              )}
            </ul>
          </nav>
          <div className="mx-auto flex w-full max-w-md items-center justify-center gap-2">
            {catalogUrl && (
              <Button asChild>
                <a
                  href={catalogUrl}
                  download
                  onClick={closeMenuOnClick}
                  title="Ver Catálogo"
                >
                  Ver Catálogo
                </a>
              </Button>
            )}
            {clientAreaUrl && (
              <Button>
                <a
                  title="Área de Clientes"
                  target="_blank"
                  onClick={closeMenuOnClick}
                  href={clientAreaUrl}
                >
                  Área de Clientes
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
