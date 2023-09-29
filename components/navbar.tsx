"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import { AuthContext } from "@/context/AuthContext";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";

import { Button } from "@nextui-org/react";

import NextLink from "next/link";

export const Navbar = () => {
  const router = useRouter();
  const { user, logout } = useContext(AuthContext);

  const closeSession = () => {
    if (logout) {
      logout();
      router.push("/");
    }
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">
              Bienvenido {user?.name}
              <span className="font-extralight text-xs ml-3">
                ({user?.email})
              </span>
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <Button color="primary" variant="bordered" onClick={closeSession}>
          Cerrar sesión
        </Button>
      </NavbarContent>
    </NextUINavbar>
  );
};
