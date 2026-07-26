"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";
import { navigationLinks } from "@/data/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Accredian
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navigationLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-medium text-gray-700 transition hover:text-blue-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Button>Book Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-gray-200 py-5 lg:hidden">
            <ul className="flex flex-col gap-5">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Image
  src="/images/logo.png"
  alt="Accredian"
  width={170}
  height={42}
  priority
/>

            <Button className="mt-6 w-full">
              Book Demo
            </Button>
          </div>
        )}
      </Container>
    </header>
  );
}