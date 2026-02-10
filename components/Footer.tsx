import Link from "next/link";

export default function Footer() {
  const socials = [
    { label: "GitHub", href: "https://github.com/OlaHenrik08" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ola-henrik-bj%C3%B8rntvedt-582164388/e" },
  ];

  return (
    <footer className="border-t border-[#2a2a2a] mt-32">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-[#4a4842] tracking-wide">
          © {new Date().getFullYear()} Ola Henrik Bjørntvedt. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-xs text-[#4a4842] hover:text-[#c8a96e] transition-colors duration-300 tracking-wide uppercase"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
