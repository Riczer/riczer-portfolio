import Link from "next/link";
// import { CodeXmlIcon } from "lucide-react";
import { IconCode } from "@tabler/icons-react";

export function Header() {
  return (
    <header className="bg-primary text-secondary fixed flex justify-center items-center w-screen h-[var(--header-height)] z-10">
      <div className="container flex justify-between">
        <Link
          href="/"
          className="inline-flex gap-2 text-xl font-bold items-center"
        >
          <IconCode size={28} />
          Ricardo Zerpa
        </Link>
        <nav className="inline-flex gap-4">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
        </nav>
      </div>
    </header>
  );
}
