"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Users,
  MessageSquareQuote,
  DollarSign,
  Phone,
  Mail,
  Globe,
  CheckCircle,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getPartnerBySlug } from "../partners-data";
import Link from "next/link";

export default function PartnerDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const partner = getPartnerBySlug(slug);

  if (!partner) {
    return (
      <section className="relative pt-32 pb-20 bg-hero-gradient min-h-screen">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-logo font-bold text-white mb-6">
            Partner Not Found
          </h1>
          <p className="text-white/80 mb-8">
            The partner you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button href="/referral-hub">Back to Referral Hub</Button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary-green/20 blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/referral-hub"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Referral Hub
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-logo font-bold text-white leading-tight mb-4">
              {partner.name}
            </h1>
            <p className="text-xl text-primary-green font-semibold">
              {partner.founder}, {partner.founderTitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who They Are */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                <Info className="w-6 h-6 text-primary-blue" />
              </div>
              <h2 className="text-3xl font-logo font-bold text-dark-navy">
                Who They Are
              </h2>
            </div>
            <div className="space-y-4">
              {partner.whoTheyAre.map((paragraph, i) => (
                <p key={i} className="text-lg text-warm-gray leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who to Refer */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-green" />
              </div>
              <h2 className="text-3xl font-logo font-bold text-dark-navy">
                Who to Refer
              </h2>
            </div>
            <p className="text-lg text-warm-gray leading-relaxed mb-6">
              {partner.whoToRefer.intro}
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-primary-blue uppercase tracking-wider mb-4">
                Best For
              </h3>
              <ul className="space-y-3">
                {partner.whoToRefer.bestFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                    <span className="text-dark-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Refer */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <MessageSquareQuote className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-logo font-bold text-dark-navy">
                How to Refer
              </h2>
            </div>
            <div className="space-y-4">
              {partner.howToRefer.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.startsWith("\u201c")
                      ? "bg-primary-blue/5 border-l-4 border-primary-blue rounded-r-xl p-4"
                      : ""
                  }
                >
                  <p
                    className={
                      line.startsWith("\u201c")
                        ? "text-dark-navy font-medium italic text-lg"
                        : "text-warm-gray leading-relaxed text-lg"
                    }
                  >
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      {partner.benefits && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary-green" />
                </div>
                <h2 className="text-3xl font-logo font-bold text-dark-navy">
                  Benefits
                </h2>
              </div>
              <div className="bg-light-gray rounded-2xl p-8 space-y-4">
                {partner.benefits.learnMoreLink && (
                  <a
                    href={partner.benefits.learnMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-primary-blue font-bold hover:underline text-lg"
                  >
                    CLICK HERE TO LEARN MORE ABOUT {partner.name.toUpperCase()}
                  </a>
                )}
                {partner.benefits.commissionType && (
                  <p className="text-lg text-dark-navy">
                    <span className="font-bold">Commission type:</span>{" "}
                    {partner.benefits.commissionType}
                  </p>
                )}
                {partner.benefits.commissionAmount && (
                  <p className="text-lg text-dark-navy">
                    <span className="font-bold">Commission amount:</span>{" "}
                    {partner.benefits.commissionAmount}
                  </p>
                )}
                {partner.benefits.additionalTerms && (
                  <p className="text-lg text-dark-navy">
                    <span className="font-bold">Additional terms:</span>{" "}
                    {partner.benefits.additionalTerms}
                  </p>
                )}
                {partner.benefits.affiliateSignUpLink && (
                  <a
                    href={partner.benefits.affiliateSignUpLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-red-600 font-bold hover:underline text-lg mt-4"
                  >
                    CLICK HERE TO SIGN UP AS AN AFFILIATE
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Referral Fee */}
      <section className="py-16 bg-dark-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-green/20 flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-8 h-8 text-primary-green" />
            </div>
            <h2 className="text-3xl font-logo font-bold text-white mb-4">
              Referral Fee
            </h2>
            <p className="text-2xl text-primary-green font-semibold">
              {partner.referralFee}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-logo font-bold text-dark-navy mb-8 text-center">
              Contact
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-lg mx-auto">
              <p className="text-xl font-semibold text-dark-navy mb-6">
                {partner.contact.name}
              </p>
              <div className="space-y-4">
                {partner.contact.phone && (
                  <a
                    href={`tel:${partner.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-3 text-warm-gray hover:text-primary-blue transition-colors"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    {partner.contact.phone}
                  </a>
                )}
                {partner.contact.email && (
                  <a
                    href={`mailto:${partner.contact.email}`}
                    className="flex items-center gap-3 text-warm-gray hover:text-primary-blue transition-colors"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    {partner.contact.email}
                  </a>
                )}
                {partner.contact.website && (
                  <a
                    href={`https://${partner.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-warm-gray hover:text-primary-blue transition-colors"
                  >
                    <Globe className="w-5 h-5 flex-shrink-0" />
                    {partner.contact.website}
                  </a>
                )}
              </div>
            </div>

            {/* Extras */}
            {partner.extras && partner.extras.length > 0 && (
              <div className="mt-8 max-w-lg mx-auto">
                {partner.extras.map((extra, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                  >
                    <h3 className="text-sm font-semibold text-primary-blue uppercase tracking-wider mb-2">
                      {extra.label}
                    </h3>
                    <p className="text-warm-gray">{extra.content}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Disclosure */}
      {partner.disclosure && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Disclosure
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {partner.disclosure}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Back CTA */}
      <section className="py-16 bg-hero-gradient relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-logo font-bold text-white mb-6">
              Ready to Make This Referral?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Reach out to {partner.contact.name} directly or explore more
              partners in the hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {partner.contact.email ? (
                <Button
                  href={`mailto:${partner.contact.email}`}
                  size="lg"
                  pulse
                >
                  Contact {partner.contact.name}
                </Button>
              ) : partner.contact.phone ? (
                <Button
                  href={`tel:${partner.contact.phone.replace(/[^0-9+]/g, "")}`}
                  size="lg"
                  pulse
                >
                  Call {partner.contact.name}
                </Button>
              ) : null}
              <Button href="/referral-hub" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-blue">
                Browse All Partners
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
