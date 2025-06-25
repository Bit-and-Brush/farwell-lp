import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState, type PropsWithChildren } from "react";

export default function MobileNavMenu({ children }: PropsWithChildren) {
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
            <ul className="flex flex-col gap-5 text-center">{children}</ul>
          </nav>
        </div>
      </div>
    </>
  );
}
