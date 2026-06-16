"use client";

import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const menuIconRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target as Node) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  const navItems = ["About", "Projects", "Contributions", "Timeline", "Awards"];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-20 bg-black/80 backdrop-blur-md text-white px-6 py-2 rounded-full z-50">
      <a
        href="#"
        className="text-white text-xl font-semibold whitespace-nowrap transition-all duration-300 hover:text-[#c1e8ef] hover:scale-105"
      >
        Yooseong Nam
      </a>

      {/* 데스크탑 네비게이션 */}
      <ul ref={navRef} className={`hidden sm:flex gap-8 ${menuOpen ? "!flex flex-col absolute top-full mt-4 w-full px-4 py-4 bg-black/90 rounded-3xl text-center" : ""}`}>
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="relative text-white font-light after:absolute after:content-[''] after:w-0 after:left-0 after:h-[5px] after:top-[25px] after:rounded-full after:transition-all after:duration-300 after:bg-gradient-to-r after:from-[#009dff] after:to-[#ff00ff] hover:after:w-full"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* 모바일 햄버거 - span으로 감싸서 Font Awesome CSS 간섭 방지 */}
      <span ref={menuIconRef} className="sm:hidden cursor-pointer" onClick={() => setMenuOpen((prev) => !prev)}>
        <i className="fa-solid fa-bars text-3xl" />
      </span>

      <a
        href="https://github.com/meteorqz6"
        target="_blank"
        className="hidden sm:block px-6 py-3 rounded-full font-medium text-white whitespace-nowrap transition-all duration-300 bg-gradient-to-r from-[#009dff] to-[#ff00ff] hover:from-[#ff00ff] hover:to-[#009dff] hover:scale-103"
      >
        Visit Github
      </a>

      {/* 모바일 메뉴 드롭다운 */}
      {menuOpen && (
        <ul className="sm:hidden absolute top-full mt-4 w-full left-0 px-4 py-4 bg-black/90 rounded-3xl flex flex-col text-center gap-6">
          {navItems.map((item) => (
            <li key={item} className="py-2">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white font-light"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
