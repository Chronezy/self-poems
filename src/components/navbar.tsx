"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Главная",
      link: "#main",
    },
    {
      name: "Творчество",
      link: "#poems",
    },
    {
      name: "Контакт",
      link: "/contact",
    },
  ];
  return (
    <div className="relative hidden md:flex w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
