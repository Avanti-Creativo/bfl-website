"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = {
  company: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Wealth Protection", href: "/services#wealth-protection" },
    { label: "Tax Strategies", href: "/services#tax-strategies" },
    { label: "Cash Flow Optimization", href: "/services#cash-flow" },
    { label: "Business Planning", href: "/services#business-planning" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclosures", href: "/disclosures" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/built-for-life-financial-agency-insurance-financial-policy/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/BuiltForLifeFinancial/", label: "Facebook" },
];

export function Footer() {
  const pathname = usePathname();
  const [isReferralHubDomain, setIsReferralHubDomain] = useState(false);

  useEffect(() => {
    setIsReferralHubDomain(
      window.location.hostname.includes("bflreferralhub")
    );
  }, []);

  const hideCta =
    pathname.startsWith("/referral-hub") ||
    pathname.startsWith("/careers") ||
    isReferralHubDomain;

  return (
    <footer className="bg-dark-navy text-white">
      {/* CTA Section - hidden on referral hub, careers/agents pages, and bflreferralhub.com */}
      {!hideCta && (
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-logo font-bold mb-2">
                  Ready to Build Your Financial Future?
                </h3>
                <p className="text-white/70">
                  Schedule your COMPLIMENTARY Financial Needs Analysis today.
                </p>
              </div>
              <Button href="/contact" size="lg" pulse>
                Get My COMPLIMENTARY Wealth Plan
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo variant="light" className="mb-4" />
            <p className="text-white/70 mb-6 max-w-sm">
              Delivering the sophisticated wealth strategies high-net-worth individuals need to protect, optimize, and transfer wealth built for life.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70">
                <MapPin size={16} className="flex-shrink-0" />
                <span>Annapolis, MD</span>
              </li>
              <li>
                <a
                  href="tel:+14434064778"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  <span>(443) 406-4778</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bflagency.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  <span>info@bflagency.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Built For Life Financial Agency. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
