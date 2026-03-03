"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Clock, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Suspense } from "react";

const sourceConfig = {
  contact: {
    heading: "Thank You for Reaching Out!",
    body: "We've received your message and will be in touch to schedule your complimentary Wealth Strategy Plan.",
    responseTime: "Response within 24 hours",
  },
  careers: {
    heading: "Thank You for Your Interest!",
    body: "We've received your information and will be in touch to schedule an initial conversation about your career goals.",
    responseTime: "Response within 48 hours",
  },
} as const;

const fallback = {
  heading: "Thank You!",
  body: "We've received your submission and will be in touch soon.",
  responseTime: "We'll respond shortly",
};

function ThankYouContent() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source") as keyof typeof sourceConfig | null;
  const config = (source && sourceConfig[source]) || fallback;

  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Animated Background */}
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

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary-green" />
            <span className="text-white/90 text-sm font-medium">Submission Received</span>
          </motion.div>

          {/* Animated Checkmark */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full bg-primary-green/20 flex items-center justify-center mx-auto mb-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <CheckCircle className="w-12 h-12 text-primary-green" />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-logo font-bold text-white leading-tight mb-6">
            {config.heading}
          </h1>

          {/* Body */}
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            {config.body}
          </p>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 mb-10"
          >
            <Clock className="w-5 h-5 text-primary-green" />
            <span className="text-white/90 font-medium">{config.responseTime}</span>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button href="/" variant="primary" size="lg">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense>
      <ThankYouContent />
    </Suspense>
  );
}
