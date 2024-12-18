"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  ChatBubbleLeftIcon,
  PaperAirplaneIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import {
  Popover,
  Transition,
  PopoverPanel,
  Dialog,
  Disclosure,
  DisclosureButton,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  HomeIcon,
  icons,
  Key,
  PhoneIcon,
  PlayCircleIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NavBarOptions = [
  { name: "Flights", href: "#" },
  { name: "Car Rentals", href: "#" },
  { name: "Attractions", href: "#" },
  { name: "Flight + Hotel", href: "#" },
];

const Products = [
  {
    name: "Book a stay",
    description: "Find the perfect place to stay",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a Flight",
    description: "speaking of flights",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Contact our support team",
    description: "Your customer service is our priority",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];

const callToAction = [
  { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
  { name: "contact support", href: "#", icon: PhoneIcon },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#013B94]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <Image
              alt="Booking.com logo"
              className="h-12 w-auto"
              src="/logo.svg"
              width={48}
              height={48}
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Stays{" "}
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {Products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <item.icon
                          className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                          aria-hidden="true"
                        ></item.icon>
                      </div>

                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-[#013B94]"
                        >
                          {item.name}
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-[#013B94]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 divide-x divide-gray-900 bg-gray-50">
                  {callToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013B94] hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-[#013B94]"
                        aria-hidden="true"
                      ></item.icon>
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {NavBarOptions.map((navBar, index) => (
            <a
              key={index}
              href={navBar.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {navBar.name}
            </a>
          ))}
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log In <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10">
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013B94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900">
            <div className="flex items-center justify-between">
              <a href="" className="-m-1.5 p-1.5">
                <span className="sr-only"> Step Booking</span>
                <Image
                  className="h-8 w-auto"
                  src="/logo.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only"> Close Menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true"></XMarkIcon>
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500">
                <div className=" space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                          Stays
                          <ChevronDownIcon
                            className={cn(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          ></ChevronDownIcon>
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...Products, ...callToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  {NavBarOptions.map((navBar, index) => (
                    <a
                      key={index}
                      href={navBar.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                    >
                      {navBar.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
}

export default Header;
