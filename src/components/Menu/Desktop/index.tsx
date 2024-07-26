"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components: { href: string; description: string }[] = [
  {
    href: "/",
    description: "Departamento 1",
  },
  {
    href: "/",
    description: "Departamento 2",
  },
  {
    href: "/",
    description: "Departamento 3",
  },
  {
    href: "/",
    description: "Departamento 3",
  },
  {
    href: "/",
    description: "Departamento 4",
  },
];

export function DesktopMenu() {
  return (
    <div className="max-w-container mx-auto px-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-0">
              Todas as categorias
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="w-[900px]">
                <ListItem
                  href="/"
                  className="text-black font-semibold hover:underline"
                >
                  Categoria 1
                </ListItem>

                <ListItem
                  href="/"
                  className="text-black font-semibold hover:underline py-2"
                >
                  Categoria 2
                </ListItem>

                <ListItem
                  href="/"
                  className="text-black font-semibold hover:underline py-2"
                >
                  Caterogia 3
                </ListItem>

                <ListItem
                  href="/"
                  className="text-black font-semibold hover:underline py-2"
                >
                  Caterogia 4
                </ListItem>

                <ListItem
                  href="/"
                  className="text-black font-semibold hover:underline py-2"
                >
                  Caterogia 5
                </ListItem>

                <ListItem
                  href="/"
                  className="text-black font-semibold hover:underline py-2"
                >
                  Caterogia 6
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Categoria 1</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[900px]">
                {components.map((component, index) => (
                  <ListItem key={index} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Categoria 2</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[900px]">
                {components.map((component, index) => (
                  <ListItem key={index} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Categoria 3</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[900px]">
                {components.map((component, index) => (
                  <ListItem key={index} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Categoria 4</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[900px]">
                {components.map((component, index) => (
                  <ListItem key={index} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Categoria 5</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[900px]">
                {components.map((component, index) => (
                  <ListItem key={index} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
