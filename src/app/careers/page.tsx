"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Sparkles, ArrowRight, AlertTriangle, GraduationCap, Heart, BookOpen,
  Target, Laptop, TrendingUp, Clock, Users, CheckCircle, XCircle,
  Scale, Briefcase, RefreshCw, User, Brain, Send, Award, Star, Crown
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { cn } from "@/lib/utils";

// Form state types
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentFirm: string;
  yearsExperience: string;
  licenses: string[];
  interest: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  interest?: string;
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary-green/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary-blue/20 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-green" />
            <span className="text-white/90 text-sm font-medium">Join Our Team</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-logo font-bold text-white leading-tight mb-6 tracking-wide">
              You&apos;re Successful by Every Measure.{" "}
              <span className="text-primary-green">Except the One That Actually Matters to You.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            You chose this career because you believed in education, integrity, and making a real difference
            in people&apos;s financial lives. Somewhere along the way, the industry made that harder than it should be.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button href="#contact-form" size="lg" pulse>
              Discover A New Path To Success
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-6 items-center"
          >
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-primary-green" />
              <span>Education-First Culture</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-primary-green" />
              <span>Independence With Support</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-primary-green" />
              <span>Values-Aligned Compensation</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  const painPoints = [
    "You're tired of pushing products that pay you well but don't serve your clients' actual needs.",
    "You're exhausted by quarterly pressure and AUM quotas that force short-term thinking.",
    "You've watched colleagues leave the industry—not because they couldn't sell, but because they couldn't stomach what they were selling.",
    "You're successful, but you don't feel successful. Because success without meaning isn't really success at all.",
    "You've considered starting your own practice, but the compliance headaches, technology costs, and operational burden feel overwhelming.",
  ];

  return (
    <section className="py-20 lg:py-28 bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="You're Making Excellent Money at a Prestigious Firm. So Why Haven't You Reached Your True Potential?"
          light
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-lg text-white/80 leading-relaxed">
            You&apos;ve hit every target. Your income would impress most people.
            But deep down, you know something is misaligned.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10"
              >
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/90">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Philosophy Section
function PhilosophySection() {
  const beliefs = [
    {
      icon: GraduationCap,
      title: "Education Over Persuasion",
      description: "When clients truly understand their options, they make better decisions. And better decisions build trust, referrals, and long-term relationships.",
    },
    {
      icon: Heart,
      title: "Client Outcomes Over Product Sales",
      description: "We don't measure success by premium volume or AUM. We measure it by client outcomes: protected families, optimized taxes, and confident retirements.",
    },
    {
      icon: BookOpen,
      title: "Mastery Over Speed",
      description: "We'd rather have advisors who deeply understand five strategies than those who superficially know fifty. Depth creates value; breadth creates confusion.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Most Financial Organizations Recruit Based on Speed and Income. We Start With Something Else."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-lg text-warm-gray leading-relaxed">
            At Built For Life, we believe financial advising should be rooted in education,
            not sales tactics. Our methodology prioritizes long-term client relationships
            over short-term transactions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-blue to-primary-green flex items-center justify-center mb-6">
                <belief.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dark-navy mb-3">{belief.title}</h3>
              <p className="text-warm-gray">{belief.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Differentiators Section
function DifferentiatorsSection() {
  const differentiators = [
    {
      icon: GraduationCap,
      title: "Education-Based Methodology",
      description: "Our advisors don't sell—they teach. When clients understand the 'why' behind strategies, they commit fully and refer enthusiastically.",
    },
    {
      icon: Target,
      title: "Comprehensive Planning (Not AUM-Only)",
      description: "We address insurance, tax optimization, estate planning, and cash flow—not just investment management. This creates stickier relationships and more value for clients.",
    },
    {
      icon: Laptop,
      title: "Technology That Actually Enhances Your Practice",
      description: "Modern CRM, financial planning software, client portals, and marketing support—without the corporate bureaucracy that makes technology feel like a burden.",
    },
    {
      icon: TrendingUp,
      title: "Career Path Built on Mastery",
      description: "Clear progression from Associate to Principal Partner, based on skill development and client outcomes—not just production numbers.",
    },
    {
      icon: Clock,
      title: "Long-Term Thinking (No Quarterly Pressure)",
      description: "We don't chase quarterly numbers. We build practices that serve clients for decades. Your compensation reflects this philosophy.",
    },
    {
      icon: Users,
      title: "Independence With Support",
      description: "Operate with entrepreneurial freedom while having access to compliance, marketing, training, and operational support. The best of both worlds.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="You're Not Leaving a Wirehouse to Join Another Transactional Culture"
          subtitle="Here's what makes Built For Life different from every other opportunity you've considered."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-light-gray rounded-2xl p-6 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="text-lg font-semibold text-dark-navy mb-2">{item.title}</h3>
              <p className="text-warm-gray text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Career Path Section
function CareerPathSection() {
  const levels = [
    {
      icon: Award,
      title: "Associate Protection Guide",
      description: "Entry point for experienced advisors. Focus on learning our education-based methodology and building your first client relationships within our framework.",
    },
    {
      icon: Award,
      title: "Protection Guide",
      description: "Demonstrated mastery of core strategies. You're independently serving clients and beginning to develop your specialization areas.",
    },
    {
      icon: Star,
      title: "Senior Protection Guide",
      description: "Recognized expertise in multiple strategy areas. You're mentoring newer advisors and taking on more complex client situations.",
    },
    {
      icon: Star,
      title: "Wealth Protection Strategist",
      description: "Advanced practitioner handling high-net-worth clients. You're contributing to methodology development and leading client education initiatives.",
    },
    {
      icon: Crown,
      title: "Lead Wealth Strategist",
      description: "Leadership role combining elite client work with team development. You're shaping the firm's strategic direction and mentoring future leaders.",
    },
    {
      icon: Crown,
      title: "Principal Partner",
      description: "Equity ownership and full partnership. You're building your own practice within our framework while contributing to firm-wide growth and culture.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="A Clear, Intentional Path From Associate to Principal Partner"
          subtitle="Unlike firms where advancement means 'hit your numbers,' our career path rewards mastery, mentorship, and meaningful client outcomes."
          light
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary-green text-white flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <level.icon className="w-6 h-6 text-primary-green" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{level.title}</h3>
              <p className="text-white/70 text-sm">{level.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Fit Criteria Section
function FitCriteriaSection() {
  const goodFit = [
    "You've been successful at a wirehouse or traditional firm but feel unfulfilled.",
    "You're motivated by client outcomes, not just income.",
    "You believe financial education should be accessible to more people.",
    "You want to build something meaningful, not just hit quotas.",
    "You're willing to invest in mastering new methodologies.",
    "You think long-term—about your career, your clients, and your legacy.",
  ];

  const notFit = [
    "You're primarily motivated by maximizing short-term income.",
    "You prefer transaction-based relationships over long-term planning.",
    "You're looking for a firm that will just 'stay out of your way.'",
    "You believe sales skills matter more than financial knowledge.",
    "You're not interested in learning new approaches to financial planning.",
    "You want to coast on past success rather than continue growing.",
  ];

  return (
    <section className="py-20 lg:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="We're Not For Everyone. And That's Intentional."
          subtitle="Built For Life works because we're selective about who joins. Here's how to know if this is the right fit."
          centered
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Good Fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-dark-navy mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary-green" />
              </div>
              This May Be a Fit If You...
            </h3>
            <ul className="space-y-4">
              {goodFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                  <span className="text-warm-gray">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not Fit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-dark-navy mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              This May Not Be a Fit If You...
            </h3>
            <ul className="space-y-4">
              {notFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-warm-gray">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Compensation Section
function CompensationSection() {
  const principles = [
    "Compensation that rewards long-term client relationships, not just initial sales",
    "Equity opportunities for advisors who demonstrate mastery and commitment",
    "No 'production minimums' that force you to push products clients don't need",
    "Bonus structures tied to client outcomes and retention, not just volume",
    "Full transparency about how compensation works—no hidden grids or surprise clawbacks",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeadline
            title="We Compensate Professionals in a Way That Aligns With Our Values"
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-blue/5 to-primary-green/5 rounded-2xl p-8 md:p-10 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-blue to-primary-green flex items-center justify-center">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-navy">Values-Aligned Compensation</h3>
                <p className="text-warm-gray">How we structure rewards differently</p>
              </div>
            </div>

            <p className="text-warm-gray mb-6 leading-relaxed">
              We don&apos;t publish specific compensation numbers here because every advisor&apos;s situation is different.
              What we can tell you is that our compensation philosophy is fundamentally different from traditional firms.
            </p>

            <ul className="space-y-4">
              {principles.map((principle, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                  <span className="text-dark-navy">{principle}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Bring Your Book Section
function BringYourBookSection() {
  const supports = [
    {
      icon: Briefcase,
      title: "Compliance Guidance",
      description: "Navigate transition requirements with our experienced compliance team. We know the rules and help you follow them properly.",
    },
    {
      icon: RefreshCw,
      title: "Client Communication Support",
      description: "Professionally crafted transition communications that maintain trust while meeting regulatory requirements.",
    },
    {
      icon: Laptop,
      title: "Technology Onboarding",
      description: "Seamless migration of client data to our systems, with training to get you productive quickly.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Bring Your Book. We'll Help You Transition."
          subtitle="Leaving a firm with an established book of business feels daunting. We've helped many advisors make the move successfully."
          centered
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {supports.map((support, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center mb-4">
                <support.icon className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="text-lg font-semibold text-dark-navy mb-2">{support.title}</h3>
              <p className="text-warm-gray text-sm">{support.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 max-w-3xl mx-auto text-center"
        >
          <p className="text-warm-gray leading-relaxed">
            We understand the complexity of transitioning client relationships. Our team has successfully guided
            advisors through this process many times, and we&apos;ll work with you to create a transition plan
            that protects your relationships and maintains client trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Ideal Advisor Section
function IdealAdvisorSection() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      title: "Current Situation",
      icon: User,
      points: [
        "Established financial advisor with a book of business",
        "Currently earning $200K+ annually",
        "Managing substantial client assets",
        "Feeling unfulfilled despite financial success",
      ],
    },
    {
      title: "Professional Background",
      icon: Briefcase,
      points: [
        "Life and Health licenses (required)",
        "Series 6, 7, or 65/66 (preferred, not required)",
        "5+ years in financial services",
        "Based in the United States",
      ],
    },
    {
      title: "Mindset & Values",
      icon: Brain,
      points: [
        "Believes education should come before recommendations",
        "Thinks long-term about client relationships",
        "Willing to invest in learning new methodologies",
        "Values meaning and impact alongside income",
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="The Ideal Built For Life Advisor"
          subtitle="Here's who thrives in our environment."
          centered
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-6 py-3 rounded-xl font-medium transition-all cursor-pointer flex items-center gap-2",
                activeTab === index
                  ? "bg-primary-blue text-white shadow-lg"
                  : "bg-gray-100 text-dark-navy hover:bg-gray-200"
              )}
            >
              <category.icon className="w-5 h-5" />
              {category.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-light-gray rounded-2xl p-8 md:p-12 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            {(() => {
              const IconComponent = categories[activeTab].icon;
              return (
                <div className="w-14 h-14 rounded-xl bg-primary-blue flex items-center justify-center">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
              );
            })()}
            <h3 className="text-2xl font-logo font-bold text-dark-navy">
              {categories[activeTab].title}
            </h3>
          </div>

          <ul className="space-y-3">
            {categories[activeTab].points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                <span className="text-warm-gray">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "What if my non-compete prevents me from bringing clients?",
      answer: "We'll work with you to understand your specific agreement and develop a compliant transition strategy. Many advisors have successfully navigated non-competes, and our compliance team has experience helping with this process.",
    },
    {
      question: "Will I take an income hit during the transition?",
      answer: "Transitions involve some short-term adjustment, but our compensation structure is designed to reward advisors who build long-term relationships. We'll discuss your specific situation and create a realistic transition plan that accounts for the adjustment period.",
    },
    {
      question: "What if I've never operated as an independent contractor?",
      answer: "Many of our advisors came from W-2 environments. We provide training on the operational and tax aspects of independent practice, and our support systems handle much of the administrative complexity so you can focus on clients.",
    },
    {
      question: "Do I need to be in the DMV area?",
      answer: "While our headquarters is in Annapolis, MD, we work with advisors across the country. Our technology platform and support systems are designed to enable effective remote collaboration.",
    },
    {
      question: "What's the time commitment for training and development?",
      answer: "Initial training is intensive—expect to invest significant time in the first few months learning our methodology. Ongoing development is built into the practice, not added on top. We believe continuous learning makes you more effective, not less productive.",
    },
    {
      question: "How do I know Built For Life is stable and will be around long-term?",
      answer: "We've been serving clients for over a decade with a 98% client retention rate. Our focus on long-term relationships over short-term transactions creates sustainable growth. We're happy to share more about our financial stability during the conversation process.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-light-gray">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Questions Advisors Ask"
          centered
        />

        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="py-20 lg:py-28 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
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
            Ready to Practice the Way You&apos;ve Always Believed You Should?
          </h2>
          <p className="text-xl text-white/80 mb-4">
            You didn&apos;t get into this business to push products. You got into it to help people.
          </p>
          <p className="text-lg text-white/70 mb-8">
            If you&apos;re ready to align your practice with your values, <span className="text-primary-green font-semibold">we should talk.</span>
          </p>

          <Button href="#contact-form" size="lg" pulse>
            Start the Conversation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Agent Contact Form
function AgentContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentFirm: "",
    yearsExperience: "",
    licenses: [],
    interest: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const experienceOptions = [
    { value: "0-2", label: "0-2 years" },
    { value: "3-5", label: "3-5 years" },
    { value: "6-10", label: "6-10 years" },
    { value: "10+", label: "10+ years" },
  ];

  const licenseOptions = [
    { value: "life", label: "Life Insurance" },
    { value: "health", label: "Health Insurance" },
    { value: "series6", label: "Series 6" },
    { value: "series7", label: "Series 7" },
    { value: "series65", label: "Series 65/66" },
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
    if (!formData.interest.trim()) {
      newErrors.interest = "Please tell us why you're interested";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSuccess(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
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

  const handleLicenseChange = (license: string) => {
    setFormData((prev) => ({
      ...prev,
      licenses: prev.licenses.includes(license)
        ? prev.licenses.filter((l) => l !== license)
        : [...prev.licenses, license],
    }));
  };

  if (isSuccess) {
    return (
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-light-gray rounded-3xl p-8 md:p-12 text-center"
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
              Thank You for Your Interest!
            </h3>
            <p className="text-warm-gray mb-6 max-w-md mx-auto">
              We&apos;ve received your information and will be in touch within 48 hours to schedule
              an initial conversation about your career goals.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-warm-gray">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-blue" />
                <span>Response within 48 hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Let's Start a Conversation"
          subtitle="Tell us about yourself and what you're looking for. This is the beginning of a dialogue, not an application."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-light-gray rounded-3xl p-6 md:p-8 lg:p-10"
        >
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
                      "w-full px-4 py-3 rounded-xl border-2 transition-colors bg-white",
                      errors.firstName
                        ? "border-red-400 focus:border-red-500"
                        : "border-transparent focus:border-primary-green",
                      "focus:outline-none"
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
                      "w-full px-4 py-3 rounded-xl border-2 transition-colors bg-white",
                      errors.lastName
                        ? "border-red-400 focus:border-red-500"
                        : "border-transparent focus:border-primary-green",
                      "focus:outline-none"
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
                    "w-full px-4 py-3 rounded-xl border-2 transition-colors bg-white",
                    errors.email
                      ? "border-red-400 focus:border-red-500"
                      : "border-transparent focus:border-primary-green",
                    "focus:outline-none"
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
                    "w-full px-4 py-3 rounded-xl border-2 transition-colors bg-white",
                    errors.phone
                      ? "border-red-400 focus:border-red-500"
                      : "border-transparent focus:border-primary-green",
                    "focus:outline-none"
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

            {/* Current Firm */}
            <div>
              <label htmlFor="currentFirm" className="block text-sm font-medium text-dark-navy mb-2">
                Current Firm/Company
              </label>
              <motion.div
                animate={{
                  scale: focusedField === "currentFirm" ? 1.01 : 1,
                  boxShadow: focusedField === "currentFirm"
                    ? "0 0 0 3px rgba(76, 175, 80, 0.1)"
                    : "0 0 0 0px rgba(76, 175, 80, 0)",
                }}
                className="rounded-xl"
              >
                <input
                  type="text"
                  id="currentFirm"
                  name="currentFirm"
                  value={formData.currentFirm}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("currentFirm")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-primary-green transition-colors bg-white focus:outline-none"
                  placeholder="Optional"
                />
              </motion.div>
            </div>

            {/* Years of Experience */}
            <div>
              <label htmlFor="yearsExperience" className="block text-sm font-medium text-dark-navy mb-2">
                Years of Experience
              </label>
              <motion.div
                animate={{
                  scale: focusedField === "yearsExperience" ? 1.01 : 1,
                  boxShadow: focusedField === "yearsExperience"
                    ? "0 0 0 3px rgba(76, 175, 80, 0.1)"
                    : "0 0 0 0px rgba(76, 175, 80, 0)",
                }}
                className="rounded-xl"
              >
                <select
                  id="yearsExperience"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("yearsExperience")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-primary-green transition-colors bg-white focus:outline-none cursor-pointer"
                >
                  <option value="">Select experience level</option>
                  {experienceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>

            {/* Licenses */}
            <div>
              <label className="block text-sm font-medium text-dark-navy mb-3">
                Licenses Held
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {licenseOptions.map((license) => (
                  <label
                    key={license.value}
                    className={cn(
                      "flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-all",
                      formData.licenses.includes(license.value)
                        ? "bg-primary-green/10 border-2 border-primary-green"
                        : "bg-white border-2 border-transparent hover:border-gray-200"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={formData.licenses.includes(license.value)}
                      onChange={() => handleLicenseChange(license.value)}
                      className="sr-only"
                    />
                    <div
                      className={cn(
                        "w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
                        formData.licenses.includes(license.value)
                          ? "bg-primary-green border-primary-green"
                          : "border-gray-300"
                      )}
                    >
                      {formData.licenses.includes(license.value) && (
                        <CheckCircle className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-sm text-dark-navy">{license.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Interest */}
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-dark-navy mb-2">
                Why are you interested in Built For Life? *
              </label>
              <motion.div
                animate={{
                  scale: focusedField === "interest" ? 1.01 : 1,
                  boxShadow: focusedField === "interest"
                    ? "0 0 0 3px rgba(76, 175, 80, 0.1)"
                    : "0 0 0 0px rgba(76, 175, 80, 0)",
                }}
                className="rounded-xl"
              >
                <textarea
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("interest")}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border-2 transition-colors bg-white resize-none",
                    errors.interest
                      ? "border-red-400 focus:border-red-500"
                      : "border-transparent focus:border-primary-green",
                    "focus:outline-none"
                  )}
                  placeholder="Tell us about what you're looking for in your next career move..."
                />
              </motion.div>
              <AnimatePresence>
                {errors.interest && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.interest}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm text-center"
                >
                  {submitError}
                </motion.div>
              )}
            </AnimatePresence>

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
                  <span>Start the Conversation</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>

            <p className="text-center text-sm text-warm-gray">
              This is a confidential inquiry. Your information will not be shared with your current employer.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function CareersPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <PhilosophySection />
      <DifferentiatorsSection />
      <CareerPathSection />
      <FitCriteriaSection />
      <CompensationSection />
      <BringYourBookSection />
      <IdealAdvisorSection />
      <FAQSection />
      <FinalCTASection />
      <AgentContactForm />
    </>
  );
}
