export default function Footer() {
  const navItems = ["About", "Projects", "Contributions", "Timeline", "Awards"];

  return (
    <footer className="h-40 w-full flex flex-col gap-4 items-center justify-center">
      <ul className="flex items-center gap-12">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-black font-semibold"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-sm font-light mt-8">
        © All Rights Reserved | Yooseong Nam
      </p>
    </footer>
  );
}
