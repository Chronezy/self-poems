import DrawerDemo from "./drawer";

export default function MobileNav() {
  return (
    <div className="flex fixed top-0 w-full h-[50px] bg-white/80  backdrop-blur-sm z-50">
      <div className="p-2 flex w-full justify-between items-center">
        <a href="#main" className="font-extrabold">
          SP
        </a>
        <div>
          <DrawerDemo />
        </div>
      </div>
    </div>
  );
}
