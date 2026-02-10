"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const contactDetails = [
  {
    label: "E-post",
    value: "olahenrik08@gmail.com",
    href: "mailto:olahenrik08@gmail.com",
    icon: "✉",
  },
  {
    label: "Telefon",
    value: "+47 46 29 29 11",
    href: "tel:+4746292911",
    icon: "↗",
  },
  {
    label: "Byed",
    value: "Skien, Norge",
    href: null,
    icon: "◎",
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/OlaHenrik08",
    icon: "⌂",
  },
];

export default function ContactPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-6 pt-32 pb-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="section-label">Kontakt</p>
          <h1 className="text-5xl md:text-6xl font-display text-[#e8e6e1] leading-tight">
            La oss snakke
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          {/* Left: message */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-[#7a7872] text-lg leading-relaxed">
              Jeg er alltid åpen for nye muligheter — være det et prosjekt, et
              samarbeid, en lærlingplass eller bare en god samtale om teknologi.
            </p>
            <p className="text-[#7a7872] leading-relaxed">
              Som motivert VGS-elev søker jeg lærlingplass eller stilling innen
              utvikling. Jeg har praktisk erfaring med både frontend- og
              backend-utvikling, og ønsker å videreutvikle ferdighetene mine i et
              profesjonelt miljø.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <Link href="mailto:olahenrik08@gmail.com" className="btn-primary">
                Send meg en e-post
                <span className="text-lg leading-none">→</span>
              </Link>
            </div>

            {/* CV download */}
            <div className="pt-8 border-t border-[#2a2a2a] mt-10">
              <p className="text-[#4a4842] text-sm mb-4">
                Ønsker du å se min CV?
              </p>
              <Link
                href="/cv.pdf"
                download="cv (1).pdf"
                className="btn-outline"
              >
                Last ned CV
              </Link>
            </div>
          </div>

          {/* Right: contact details */}
          <div className="md:col-span-2">
            <div className="space-y-3">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="card p-5 flex items-center gap-5 hover:border-[#c8a96e]/30 transition-colors duration-500"
                >
                  {/* Icon circle */}
                  <div className="w-10 h-10 rounded-sm border border-[#2a2a2a] flex items-center justify-center text-[#c8a96e] text-sm flex-shrink-0">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-[#4a4842] tracking-widest uppercase mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={item.href.startsWith("mailto") || item.href.startsWith("tel") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="text-[#e8e6e1] text-sm hover:text-[#c8a96e] transition-colors duration-300 truncate block"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-[#e8e6e1] text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
