"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});
export const Navbar = () => {
  return (
    <div className="bg-slate-800 fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <Link href="/">
          <h1
            className={cn(
              "text-xl md-text-3xl font-bold text-white",
              font.className
            )}
          >
            Efe Tamtürk
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-8">
        <Button variant="link">
          <Link className="text-white text-lg" href="/">
            Home
          </Link>
        </Button>

        <Button variant="link">
          <Link className="text-white text-lg" href="/projects">
            Projects
          </Link>
        </Button>
        <Button variant="link">
          <Link className="text-white text-lg" href="/">
            About Me
          </Link>
        </Button>
      </div>
    </div>
  );
};
