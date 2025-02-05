"use client";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { MdBusinessCenter } from "react-icons/md";
import { HiClipboardList, HiMenu } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { RiVipCrownFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import Container from "./Container";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "es", name: "Español" },
    { code: "ar", name: "العربية" },
    { code: "zh", name: "中文" },
  ];
  return (
    <Container>
      <header className=" relative bg-white shadow-sm">
        <div className="container flex items-center justify-between h-20 gap-8 bg-white">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={"/logo.avif"}
              alt="OYO Logo"
              width={94}
              height={32}
              className="w-52 mix-blend-multiply"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 bg-white">
            <Link
              href="#"
              className="flex items-center gap-2 group hover:text-red-600 transition-colors"
            >
              <div className="flex-shrink-0">
                <RiVipCrownFill className="w-6 h-6 text-red-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Become a Member</span>
                <span className="text-xs text-gray-600">
                  Additional 10% off on stays
                </span>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 group hover:text-red-600 transition-colors"
            >
              <div className="flex-shrink-0">
                <MdBusinessCenter className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">OYO for Business</span>
                <span className="text-xs text-gray-600">
                  Trusted by 5000 Corporates
                </span>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 group hover:text-red-600 transition-colors"
            >
              <div className="flex-shrink-0">
                <HiClipboardList className="w-6 h-6 text-green-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">List your property</span>
                <span className="text-xs text-gray-600">
                  Start earning in 30 mins
                </span>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 group hover:text-red-600 transition-colors"
            >
              <IoCall className="w-6 h-6 text-purple-500" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">0124-6201611</span>
                <span className="text-xs text-gray-600">
                  Call us to Book now
                </span>
              </div>
            </Link>
            {/* <button
              variant="ghost"
              className="flex items-center gap-2 hover:text-red-600 transition-colors"
            >
              <FaGlobe className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium">English</span>
            </button> */}

            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center gap-2 hover:text-red-600 transition-colors">
                <FaGlobe className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium">
                  {languages.find((lang) => lang.code === "en")?.name}
                </span>
                <IoIosArrowDown className="w-4 h-4 text-gray-600" />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  {languages.map((lang) => (
                    <Menu.Item key={lang.code}>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-red-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {lang.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Menu>
            <button
              variant="ghost"
              className="flex items-center gap-2 hover:text-red-600 transition-colors"
            >
              <FaUserCircle className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium">Login / Signup</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors bg-white"
          >
            <HiMenu className="w-6 h-6 text-gray-700" />
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="absolute top-full left-0 right-0 bg-white border-b lg:hidden flex flex-col w-full shadow-lg">
              <Link
                href="#"
                className="flex items-center gap-2 p-4 hover:bg-gray-50 transition-colors bg-white"
              >
                <AiFillStar className="w-6 h-6 text-red-500" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Become a Member</span>
                  <span className="text-xs text-gray-600">
                    Additional 10% off on stays
                  </span>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 p-4 hover:bg-gray-50 transition-colors bg-white"
              >
                <MdBusinessCenter className="w-6 h-6 text-blue-500" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">OYO for Business</span>
                  <span className="text-xs text-gray-600">
                    Trusted by 5000 Corporates
                  </span>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 p-4 hover:bg-gray-50 transition-colors bg-white"
              >
                <HiClipboardList className="w-6 h-6 text-green-500" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    List your property
                  </span>
                  <span className="text-xs text-gray-600">
                    Start earning in 30 mins
                  </span>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 p-4 hover:bg-gray-50 transition-colors bg-white"
              >
                <AiFillStar className="w-6 h-6 text-purple-500" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">0124-6201611</span>
                  <span className="text-xs text-gray-600">
                    Call us to Book now
                  </span>
                </div>
              </Link>
              <button className="flex items-center gap-2 p-4 hover:bg-gray-50 w-full text-left transition-colors bg-white">
                <FaGlobe className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium">English</span>
              </button>

              <button className="flex items-center gap-2 p-4 hover:bg-gray-50 w-full text-left transition-colors bg-white">
                <FaUserCircle className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium">Login / Signup</span>
              </button>
            </nav>
          )}
        </div>
      </header>
    </Container>
  );
}
