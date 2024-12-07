"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ARJUNA", href: "/Arjuna" },
  { name: "COURSES", href: "/services" },
  { name: "About US", href: "/services" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500 px-5 md:px-10",
        scrolled ? "py-5 nav-scroll-animation" : "py-8"
      )}
    >
      <div
        className={cn(
          "max-w-[1440px] mx-auto rounded-full transition-all duration-500",
          scrolled 
            ? "bg-[#0B0B0B]/80 backdrop-blur-md shadow-[0_2px_40px_rgba(0,0,0,0.15)]" 
            : "bg-[#0B0B0B]/50 backdrop-blur-sm"
        )}
      >
        <div className="flex items-center justify-between h-[72px] px-6 md:px-8">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Newrro
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-grow gap-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-item text-[15px] text-white/90 hover:text-white font-normal tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            {/* <Button
              className="bg-white hover:bg-white/90 text-black rounded-full px-8 h-11 text-[15px] font-normal"
            >
              Get Started
            </Button> */}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden mobile-menu mt-3">
          <div className="rounded-2xl bg-[#0B0B0B]/95 backdrop-blur-md shadow-lg border border-white/[0.08] overflow-hidden">
            <div className="px-6 pt-3 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-base text-white/90 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  className="w-full bg-white hover:bg-white/90 text-black rounded-full h-11 text-[15px] font-normal"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}