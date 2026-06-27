"use client";

import ThemeToggle from "@/components/module/ThemeToggle/ThemeToggle";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TbMenu4 } from "react-icons/tb";

function Navbar() {
  const [isShowNav, setIsShowNav] = useState(false);

  const t = useTranslations("Navbar");

  const links = [
    { href: "/", label: t("navItem1") },
    { href: "/", label: t("navItem2") },
    { href: "/", label: t("navItem3") },
    { href: "/", label: t("navItem4") },
    { href: "/", label: t("navItem5") },
  ];

  return (
    <header className="fixed top-0 right-0 w-full z-70 backdrop-blur-sm">
      <div className=" flex justify-between items-center p-2.5 2xl:container mx-auto">
        {/* logo */}
        <Link href={"/"} className="flex items-center outline-none">
          {/* logo...... */}
          <Image
            src={"/img/logo.webp"}
            width={100}
            height={100}
            alt={t("logoTitle")}
            className={``}
          />
        </Link>

        {/* navbar in large */}
        <nav className="hidden lg:block">
          <ul className="flex justify-around items-center">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="p-2 mx-2 font-semibold text-[14px]  xl:text-[16px]  hover:text-[#6272f5]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* nav in mobile */}
        <div
          className={`lg:hidden fixed z-30 left-0 top-0 h-screen w-full bg-[#0009]  transition-all duration-500 ease-in-out -translate-x-full ${
            isShowNav && "translate-x-0"
          }`}
          onClick={() => setIsShowNav(false)}
        >
          <nav
            aria-label="Main Navigation"
            className="theme-bg flex flex-col p-4 w-75  h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-end">
              <button
                className="theme-text flex items-center justify-center text-2xl transition-all duration-500 ease-in-out hover:rotate-180 cursor-pointer"
                onClick={() => setIsShowNav(false)}
                aria-label="بستن منو"
              >
                <IoClose />
              </button>
            </div>
            {links.map((link, index) => (
              <Link
                href={link.href}
                className="theme-text lg:text-xl xl:text-2xl font-bold  my-2 mx-4 p-2 "
                key={index + 1}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* toggle theme */}
        <div className="flex items-center">
          <button
            className="theme-text cursor-pointer font-bold text-2xl lg:hidden"
            onClick={() => setIsShowNav(true)}
          >
            <TbMenu4 />
          </button>
          <ThemeToggle />

          <a
            href="tel:09198118573"
            className="flex items-center theme-shadow py-2 px-4 m-2 rounded-xl"
          >
            <span>{t("conect_to_me")}</span>
            <span className="px-2">
              <FaAngleRight />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
