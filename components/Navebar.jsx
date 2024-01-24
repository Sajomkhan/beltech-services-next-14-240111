"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Home", link: "/" },
  { title: "Services", link: "/services" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-50 border-b-2 border-gray-300">
      <div className="wrapper flex h-16 items-center gap-8  ">
        {/* -----------------------Logo-------------------------- */}
        <a className="block text-primary-600" href="/">
          <span className="sr-only">Home</span>
          <h3 className="text-primary font-bold">Beltech Services</h3>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          {/* -----------------------Nav-------------------------- */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    className={`text-gray-600 transition hover:underline capitalize ${
                      pathname === item.link ? "underline" : ""
                    }`}
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* -----------------------Authentication-------------------------- */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a className="hidden md:block btn_primary" href="/login">
                Login
              </a>
              <a className="hidden md:block btn_primary_b" href="/register">
                Register
              </a>
            </div>

            {/* -----------------------for Small Device-------------------------- */}
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
