import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "lucide-react";

const routes = ROUTES;

type Props = {
  pathname: string;
};

export default function DesktopNavMenu({ pathname }: Props) {
  return (
    <NavigationMenu className="hidden lg:block" viewport={false}>
      <NavigationMenuList className="text-secondary gap-8 text-sm leading-6">
        {routes.map(({ text, children, href }, index) =>
          children ? (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger
                data-state="open"
                className="hover:text-primary/70 flex cursor-pointer items-center"
              >
                {text} <ChevronDownIcon size={18} />
              </NavigationMenuTrigger>
              <NavigationMenuContent asChild>
                <ul className="md:w-max">
                  {children.map(({ text, href }, index) => (
                    <NavigationMenuLink
                      className={cn(
                        "hover:text-primary/70 w-fit cursor-pointer",
                        pathname === href && "text-primary",
                      )}
                      key={index}
                      href={href}
                    >
                      {text}
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className={cn(
                  "hover:text-primary/70 cursor-pointer",
                  pathname === href && "text-primary",
                )}
                href={href}
              >
                {text}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
