import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="flex justify-between px-4 py-4 bg-slate-500 text-white max-w-screen-2xl mx-auto ">
      {/* Logo */}
      <div>
        <h1 className="font-bold text-3xl text-pink-900">H.</h1>
      </div>

      {/* Nav Buttons */}
      <ul className="hidden md:block">
        <li className="space-x-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <ul>
            <li className="space-x-5">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
