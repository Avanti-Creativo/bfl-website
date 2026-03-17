"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeadline } from "@/components/ui/SectionHeadline";

const partners = [
  { name: "Financial Legacy Builders" },
  { name: "360 Veteran" },
  { name: "Prime Ethos" },
  { name: "LegalShield" },
  { name: "Wealth Guaranteed" },
  { name: "Digital Accelerant" },
  { name: "National Gold Consultants" },
  { name: "Korman Elite Holdings" },
  { name: "Visionary Flow Solutions" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const gradients = [
  "from-blue-500 to-blue-700",
  "from-emerald-500 to-emerald-700",
  "from-purple-500 to-purple-700",
  "from-amber-500 to-amber-700",
  "from-cyan-500 to-cyan-700",
  "from-rose-500 to-rose-700",
  "from-indigo-500 to-indigo-700",
  "from-teal-500 to-teal-700",
  "from-orange-500 to-orange-700",
];

// Hero Section
function ReferralHubHero() {
  return (
    <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary-green/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-primary-blue/20 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-logo font-bold text-white leading-tight mb-6">
            Your Network Is Your Net Worth.
            <span className="block text-primary-green mt-2">
              Start Earning From Both.
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            As a Built For Life agent, your value doesn&apos;t stop at the
            financial strategies you offer &mdash; it extends to every
            conversation, every client need, and every gap in their plan that
            you&apos;re positioned to fill.
          </p>
          <Button href="#partners" size="lg" pulse>
            Browse Our Partners
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Intro Section
function IntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <SectionHeadline
              title="Expand What You Offer Without Expanding Your Workload"
              centered
            />
            <p className="text-lg text-warm-gray leading-relaxed">
              The BFL Referral Hub exists to expand what you can offer without
              expanding your workload. Every partner inside this hub has been
              vetted for quality, integrity, and agent-friendly compensation
              structures.
            </p>
            <p className="text-lg text-warm-gray leading-relaxed">
              These are companies that serve your clients well and reward you for
              the introduction. Browse our trusted partners below, learn what
              they offer, and start turning referrals into residual income.
            </p>

            <div className="bg-gradient-to-r from-primary-blue/10 to-primary-green/10 rounded-2xl p-8 mt-8">
              <p className="text-2xl font-logo font-bold text-dark-navy">
                Vetted for quality. Built for agents.
                <span className="block text-primary-blue mt-1">
                  Designed for residual income.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Partner Card Component
function PartnerCard({
  partner,
  index,
}: {
  partner: { name: string };
  index: number;
}) {
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover flex flex-col items-center text-center"
    >
      {/* Logo Placeholder */}
      <div
        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg`}
      >
        <span className="text-2xl font-logo font-bold text-white">
          {getInitials(partner.name)}
        </span>
      </div>

      <h3 className="text-xl font-logo font-bold text-dark-navy mb-4">
        {partner.name}
      </h3>

      <div className="mt-auto pt-2">
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-green text-white font-semibold rounded-lg hover:bg-primary-green-dark transition-colors duration-200 cursor-pointer">
          Learn More & Refer
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

// Partners Grid Section
function PartnersSection() {
  return (
    <section className="py-20 bg-light-gray" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Our Trusted Partners"
          subtitle="Browse our vetted partners and start turning referrals into residual income."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.name} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTA() {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary-green/20 blur-3xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-logo font-bold text-white mb-6">
            Ready to Grow Your Network
            <span className="block text-primary-green">
              and Your Income?
            </span>
          </h2>

          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Every referral is an opportunity to serve your clients better while
            building residual income. Start exploring our partners today.
          </p>

          <Button href="#partners" size="lg" pulse>
            Explore Partners
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Main Referral Hub Page
export default function ReferralHubPage() {
  return (
    <>
      <ReferralHubHero />
      <IntroSection />
      <PartnersSection />
      <FinalCTA />
    </>
  );
}
