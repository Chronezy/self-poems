"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./ui/button";

export default function DrawerDemo() {
  return (
    <div className="relative top-10">
      <Drawer>
        <DrawerTrigger className="fixed z-10 top-2 md:hidden right-4">
          {" "}
          <RxHamburgerMenu className="w-8 h-8" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
            <DrawerClose>
              <a href="#main">
                <Button variant="default">На главную</Button>
              </a>
            </DrawerClose>
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
