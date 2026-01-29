"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Send, CheckCircle, Phone, Mail, MapPin, Clock,
  ArrowRight, Shield, Users, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// Form state types
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// Hero Section
function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary-green/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-green" />
            <span className="text-white/90 text-sm font-medium">Free Wealth Strategy Plan</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-logo font-bold text-white leading-tight mb-6">
            Let&apos;s Build Your
            <span className="block text-primary-green mt-2">Financial Future Together</span>
          </h1>
          <p className="text-xl text-white/80 mb-4 max-w-3xl mx-auto">
            Take the first step toward financial clarity. Schedule your complimentary
            Wealth Strategy Plan and discover exactly where you can optimize your finances.
          </p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Valued at <span className="text-primary-green font-semibold">$5,000</span> — Absolutely FREE
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const services = [
    "Wealth Protection & Insurance",
    "Tax-Advantaged Strategies",
    "Cash Flow Optimization",
    "Business Planning",
    "Retirement Planning",
    "General Consultation",
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us how we can help";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-primary-green/10 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-primary-green" />
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-logo font-bold text-dark-navy mb-4">
          Thank You for Reaching Out!
        </h3>
        <p className="text-warm-gray mb-6 max-w-md mx-auto">
          We&apos;ve received your message and will be in touch within 24 hours to schedule
          your complimentary Wealth Strategy Plan.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-warm-gray">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary-blue" />
            <span>Response within 24 hours</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl"
    >
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-logo font-bold text-dark-navy mb-2">
          Get Your Free Wealth Plan
        </h2>
        <p className="text-warm-gray">
          Fill out the form below and one of our wealth strategists will contact you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-dark-navy mb-2">
              First Name *
            </label>
            <motion.div
              animate={{
                scale: focusedField === "firstName" ? 1.01 : 1,
                boxShadow: focusedField === "firstName"
                  ? "0 0 0 3px rgba(76, 175, 80, 0.1)"
                  : "0 0 0 0px rgba(76, 175, 80, 0)",
              }}
              className="rounded-xl"
            >
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onFocus={() => setFocusedField("firstName")}
                onBlur={() => setFocusedField(null)}
                className={cn(
                  "w-full px-4 py-3 rounded-xl border-2 transition-colors bg-light-gray",
                  errors.firstName
                    ? "border-red-400 focus:border-red-500"
                    : "border-transparent focus:border-primary-green",
                  "focus:outline-none focus:bg-white"
                )}
                placeholder="John"
              />
            </motion.div>
            <AnimatePresence>
              {errors.firstName && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.firstName}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-dark-navy mb-2">
              Last Name *
            </label>
            <motion.div
              animate={{
                scale: focusedField === "lastName" ? 1.01 : 1,
                boxShadow: focusedField === "lastName"
                  ? "0 0 0 3px rgba(76, 175, 80, 0.1)"
                  : "0 0 0 0px rgba(76, 175, 80, 0)",
              }}
              className="rounded-xl"
            >
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onFocus={() => setFocusedField("lastName")}
                onBlur={() => setFocusedField(null)}
                className={cn(
                  "w-full px-4 py-3 rounded-xl border-2 transition-colors bg-light-gray",
                  errors.lastName
                    ? "border-red-400 focus:border-red-500"
                    : "border-transparent focus:border-primary-green",
                  "focus:outline-none focus:bg-white"
                )}
                placeholder="Smith"
              />
            </motion.div>
            <AnimatePresence>
              {errors.lastName && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.lastName}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark-navy mb-2">
            Email Address *
          </label>
          <motion.div
            animate={{
              scale: focusedField === "email" ? 1.01 : 1,
              boxShadow: focusedField === "email"
                ? "0 0 0 3px rgba(76, 175, 80, 0.1)"
                : "0 0 0 0px rgba(76, 175, 80, 0)",
            }}
            className="rounded-xl"
          >
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className={cn(
                "w-full px-4 py-3 rounded-xl border-2 transition-colors bg-light-gray",
                errors.email
                  ? "border-red-400 focus:border-red-500"
                  : "border-transparent focus:border-primary-green",
                "focus:outline-none focus:bg-white"
              )}
              placeholder="john@example.com"
            />
          </motion.div>
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark-navy mb-2">
            Phone Number *
          </label>
          <motion.div
            animate={{
              scale: focusedField === "phone" ? 1.01 : 1,
              boxShadow: focusedField === "phone"
                ? "0 0 0 3px rgba(76, 175, 80, 0.1)"
                : "0 0 0 0px rgba(76, 175, 80, 0)",
            }}
            className="rounded-xl"
          >
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              className={cn(
                "w-full px-4 py-3 rounded-xl border-2 transition-colors bg-light-gray",
                errors.phone
                  ? "border-red-400 focus:border-red-500"
                  : "border-transparent focus:border-primary-green",
                "focus:outline-none focus:bg-white"
              )}
              placeholder="(555) 123-4567"
            />
          </motion.div>
          <AnimatePresence>
            {errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.phone}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Service Interest */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-dark-navy mb-2">
            Service of Interest
          </label>
          <motion.div
            animate={{
              scale: focusedField === "service" ? 1.01 : 1,
              boxShadow: focusedField === "service"
                ? "0 0 0 3px rgba(76, 175, 80, 0.1)"
                : "0 0 0 0px rgba(76, 175, 80, 0)",
            }}
            className="rounded-xl"
          >
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              onFocus={() => setFocusedField("service")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-primary-green transition-colors bg-light-gray focus:outline-none focus:bg-white cursor-pointer"
            >
              <option value="">Select a service (optional)</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </motion.div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark-navy mb-2">
            How Can We Help? *
          </label>
          <motion.div
            animate={{
              scale: focusedField === "message" ? 1.01 : 1,
              boxShadow: focusedField === "message"
                ? "0 0 0 3px rgba(76, 175, 80, 0.1)"
                : "0 0 0 0px rgba(76, 175, 80, 0)",
            }}
            className="rounded-xl"
          >
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              rows={4}
              className={cn(
                "w-full px-4 py-3 rounded-xl border-2 transition-colors bg-light-gray resize-none",
                errors.message
                  ? "border-red-400 focus:border-red-500"
                  : "border-transparent focus:border-primary-green",
                "focus:outline-none focus:bg-white"
              )}
              placeholder="Tell us about your financial goals, concerns, or questions..."
            />
          </motion.div>
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300",
            "bg-primary-green text-white hover:bg-primary-green-dark",
            "shadow-lg hover:shadow-xl",
            "flex items-center justify-center gap-2",
            "cursor-pointer",
            isSubmitting && "opacity-70 cursor-not-allowed"
          )}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Get My Free Wealth Plan</span>
              <Send className="w-5 h-5" />
            </>
          )}
        </motion.button>

        <p className="text-center text-sm text-warm-gray">
          By submitting this form, you agree to receive communications from Built For Life Financial.
        </p>
      </form>
    </motion.div>
  );
}

// Contact Info Sidebar
function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: "(123) 456-7890",
      href: "tel:+1234567890",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@builtforlife.com",
      href: "mailto:info@builtforlife.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Annapolis, MD",
      href: null,
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: null,
    },
  ];

  const trustIndicators = [
    { icon: Users, value: "4,500+", label: "Clients Served" },
    { icon: Shield, value: "98%", label: "Client Retention" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="space-y-6"
    >
      {/* Contact Details Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
        <h3 className="text-xl font-logo font-bold text-dark-navy mb-6">Get In Touch</h3>
        <div className="space-y-4">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary-blue" />
              </div>
              <div>
                <p className="text-sm text-warm-gray">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-medium text-dark-navy hover:text-primary-blue transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium text-dark-navy">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Indicators Card */}
      <div className="bg-gradient-to-br from-primary-blue to-dark-navy rounded-3xl p-6 md:p-8 text-white">
        <h3 className="text-xl font-logo font-bold mb-6">Trusted by Thousands</h3>
        <div className="grid grid-cols-2 gap-4">
          {trustIndicators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-2">
                <item.icon className="w-6 h-6 text-primary-green" />
              </div>
              <p className="text-2xl font-bold text-primary-green">{item.value}</p>
              <p className="text-sm text-white/70">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* What to Expect Card */}
      <div className="bg-light-gray rounded-3xl p-6 md:p-8">
        <h3 className="text-xl font-logo font-bold text-dark-navy mb-4">What to Expect</h3>
        <div className="space-y-3">
          {[
            "60-minute comprehensive strategy session",
            "Personalized financial analysis",
            "Tax optimization opportunities",
            "Clear action plan for next 90 days",
            "No pressure, no obligation",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
              <span className="text-warm-gray">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Main Contact Page
export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form - Takes more space */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-dark-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-logo font-bold text-white mb-4">
              Prefer to Speak With Someone Directly?
            </h2>
            <p className="text-white/70 mb-6">
              Our team is ready to answer your questions and help you get started.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(123) 456-7890</span>
              </a>
              <a
                href="mailto:info@builtforlife.com"
                className="inline-flex items-center gap-2 bg-primary-green hover:bg-primary-green-dark text-white px-6 py-3 rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@builtforlife.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
