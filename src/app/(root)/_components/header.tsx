"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Network, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function DynamicHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollDirection, isAtTop } = useScrollDirection();

  // Determine if header should be visible
  const isVisible = scrollDirection === "up" || isAtTop || isMenuOpen;

  return (
    <>
      {/* Spacer to prevent content jump when header is fixed */}
      <div className="h-[72px] md:h-[80px]" />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          "border-b bg-white/90 backdrop-blur-md shadow-sm",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isAtTop ? "bg-black text-white" : "bg-white/90"
        )}
      >
        <div className="container mx-auto px-4 py-4 select-none">
          <div className="flex items-center justify-between">
            
            <Link href="/" className="flex items-center space-x-2 group">
              <div>
                <Image
                src={"/logo.png"}
                alt="logo"
                width={100}
                height={50}
                className="md:h-8 h-6 w-auto object-contain "
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 ">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#verticals">Verticals</NavLink>
              <NavLink href="#events">Events</NavLink>
              <NavLink href="#contact">Contact</NavLink>
             <Link href={"/sign-in"}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 ">
                Get Started
              </Button>
             </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6 ">
                <Menu
                  className={cn(
                    "absolute inset-0 w-6 h-6 transition-all duration-200",
                    isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 w-6 h-6 transition-all duration-200",
                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  )}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
              isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <nav className="pt-4 pb-2 border-t mt-4">
              <div className="flex flex-col space-y-4">
                <MobileNavLink
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </MobileNavLink>
                <MobileNavLink
                  href="#verticals"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Verticals
                </MobileNavLink>
                <MobileNavLink
                  href="#events"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </MobileNavLink>
                <MobileNavLink
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </MobileNavLink>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

// Desktop Navigation Link Component
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2 group select-none"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-200 group-hover:w-full" />
    </Link>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2 px-2 rounded-lg hover:bg-blue-50 block"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

// Scroll Progress Bar Component
function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useState(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  });

  return (
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
      <div
        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
