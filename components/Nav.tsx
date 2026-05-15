import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "#web", label: "Web" },
  { href: "#packages", label: "Packages" },
  { href: "#data", label: "Data" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center text-foreground hover:opacity-80 transition-opacity"
        >
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-foreground/85 transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden h-10 items-center justify-center rounded-full border border-line-strong px-5 text-[14px] font-medium text-foreground transition-colors hover:bg-white/5 md:inline-flex"
          >
            Log in
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-blue px-5 text-[14px] font-semibold text-foreground transition-colors hover:bg-blue-2"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}
