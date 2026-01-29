"use client";

import { motion } from "framer-motion";
import { 
  Shield, Calculator, Wallet, Briefcase, 
  GraduationCap, CheckCircle, ArrowRight, Clock, Users,
  Target, Laptop
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Hero Section
function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary-green/20 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-logo font-bold text-white leading-tight mb-6">
            Comprehensive Financial Strategies
            <span className="block text-primary-green mt-2">Built For Your Life</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            We don&apos;t sell products. We build integrated wealth systems that protect what you&apos;ve earned, optimize what you&apos;re paying in taxes, and create lasting prosperity for generations.
          </p>
          <Button href="/contact" size="lg" pulse>
            Schedule My FREE Wealth Strategy Plan
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Introduction Section
function IntroSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Traditional Approach */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform rotate-1" />
            <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-logo font-bold text-warm-gray">Most Financial Firms</h3>
              </div>
              <p className="text-warm-gray leading-relaxed mb-6">
                Specialize in <span className="font-semibold">one thing</span>: investments, insurance, or tax preparation. They hand you a piece of the puzzle and call it a plan.
              </p>
              <div className="space-y-3">
                {["Fragmented advice", "Siloed strategies", "Reactive approach", "Product-focused"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-warm-gray">
                    <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs">✕</span>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-green rounded-3xl transform -rotate-1" />
            <div className="relative bg-gradient-to-br from-dark-navy to-primary-blue rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-logo font-bold text-white">We Do Something Different</h3>
              </div>
              <p className="text-white/90 leading-relaxed mb-6">
                We <span className="font-semibold text-primary-green">integrate every aspect</span> of your financial life into one cohesive strategy that works together.
              </p>
              <div className="space-y-3">
                {[
                  "Tax optimization ↔ Insurance planning",
                  "Cash flow ↔ Retirement funding",
                  "Asset protection ↔ Legacy planning",
                  "Education-first approach"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary-green flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Central Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-3xl md:text-4xl font-logo font-bold bg-gradient-to-r from-primary-blue via-primary-green to-primary-blue bg-[length:200%_auto] bg-clip-text text-transparent"
          >
            Because wealth isn&apos;t built in silos. It&apos;s built through systems.
          </motion.p>
        </motion.div>

        {/* Visual Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-primary-green/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h4 className="text-center text-lg font-semibold text-dark-navy mb-8">Our Integrated Approach</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: Shield, label: "Wealth Protection", color: "from-blue-500 to-blue-600" },
                  { icon: Calculator, label: "Tax Strategy", color: "from-green-500 to-green-600" },
                  { icon: Wallet, label: "Cash Flow", color: "from-primary-blue to-primary-blue-dark" },
                  { icon: Briefcase, label: "Business Planning", color: "from-primary-green to-primary-green-dark" },
                  { icon: Laptop, label: "Technology", color: "from-blue-600 to-primary-blue" },
                  { icon: GraduationCap, label: "Education", color: "from-green-600 to-primary-green" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center p-5 rounded-xl bg-light-gray hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className={cn("w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3 shadow-md", item.color)}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm font-medium text-dark-navy text-center">{item.label}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-8 text-center"
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-blue to-primary-green text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                  <Target className="w-5 h-5" />
                  All Working Together For You
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Service Detail Component
interface ServiceDetailProps {
  id: string;
  icon: React.ElementType;
  number: number;
  title: string;
  problem: string;
  approach: string[];
  benefits: string[];
  highlight?: { value: string; label: string };
  subsections?: { title: string; items: string[] }[];
}

function ServiceDetail({
  id,
  icon: Icon,
  number,
  title,
  problem,
  approach,
  benefits,
  highlight,
  subsections,
}: ServiceDetailProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id={id} className={cn("py-20", number % 2 === 0 ? "bg-light-gray" : "bg-white")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-blue to-primary-green flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-sm font-medium text-primary-green uppercase tracking-wider">
                Service #{number}
              </span>
              <h2 className="text-3xl md:text-4xl font-logo font-bold text-dark-navy mt-1">
                {title}
              </h2>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="bg-blue-50 border-l-4 border-primary-blue rounded-r-xl p-6 mb-8">
            <p className="text-dark-navy leading-relaxed">{problem}</p>
          </div>

          {/* Our Approach */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-dark-navy mb-4">Our Approach:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {approach.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-blue/5 to-primary-green/5 rounded-xl p-4 border border-primary-blue/20"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-dark-navy text-sm leading-relaxed">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Subsections if any */}
          {subsections && subsections.length > 0 && (
            <div className="mb-8">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary-blue font-medium hover:underline cursor-pointer mb-4"
              >
                {isExpanded ? "Show Less Details" : "Show More Details"}
              </button>
              
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {subsections.map((sub, index) => (
                    <div key={index} className="bg-white rounded-xl p-5 border border-gray-100">
                      <h4 className="font-semibold text-dark-navy mb-3">{sub.title}</h4>
                      <ul className="space-y-2">
                        {sub.items.map((item, i) => (
                          <li key={i} className="text-sm text-warm-gray flex items-start gap-2">
                            <span className="text-primary-green">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          )}

          {/* Benefits */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
            <h3 className="text-xl font-semibold text-dark-navy mb-4">What You Get:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary-blue" />
                  </div>
                  <span className="text-warm-gray">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight if any */}
          {highlight && (
            <div className="bg-gradient-to-r from-primary-blue to-primary-green rounded-xl p-6 text-center text-white mb-8">
              <p className="text-3xl font-logo font-bold mb-1">{highlight.value}</p>
              <p className="text-white/80">{highlight.label}</p>
            </div>
          )}

          {/* CTA */}
          <div className="text-center">
            <Button href="/contact" size="lg">
              Schedule My FREE Wealth Strategy Plan
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Services Data
const services: ServiceDetailProps[] = [
  {
    id: "wealth-protection",
    icon: Shield,
    number: 1,
    title: "Wealth Protection & Insurance Planning",
    problem: "If you die tomorrow, does that policy actually replace your income for 20+ years? Does it cover the mortgage, college costs, and your spouse's retirement? Most individuals are either drastically under-insured, paying for coverage they don't need, or have the wrong structure entirely.",
    approach: [
      "Comprehensive insurance needs analysis based on your actual financial picture",
      "Income replacement calculation (how much your family needs to maintain their lifestyle)",
      "Debt elimination planning (mortgage, car loans, student loans)",
      "Future obligations assessment (college funding, retirement gap)",
      "Design the right structure - sometimes term, sometimes permanent, often a strategic combination",
    ],
    benefits: [
      "Complete coverage analysis (life, disability, long-term care)",
      "Gap identification (where you're vulnerable)",
      "Policy structure recommendations (term vs. permanent, riders, guarantees)",
      "Tax-efficient design (cash value growth, tax-free distributions)",
      "Ongoing reviews as life changes (new kids, promotions, home purchases)",
    ],
  },
  {
    id: "tax-strategies",
    icon: Calculator,
    number: 2,
    title: "Tax-Advantaged Wealth Strategies",
    problem: "Your CPA files your taxes every April. They tell you what you owe. But they're not building proactive strategies to reduce that burden year after year. Meanwhile, wealthy individuals pay lower effective rates using strategies you've never even heard of.",
    approach: [
      "We don't file your taxes (that's your CPA's job)",
      "We coordinate with them to implement proactive, legal tax reduction strategies",
      "Multi-year tax strategy roadmap",
      "Documentation and implementation support",
    ],
    benefits: [
      "Annual tax projection and planning (not just reactive filing)",
      "Coordination with your CPA and attorney",
      "Multi-year tax strategy roadmap",
      "Strategies that save 10-20% on effective tax rate",
      "Documentation and implementation support",
    ],
    highlight: {
      value: "$8,700",
      label: "Average First-Year Tax Savings",
    },
    subsections: [
      {
        title: "For W-2 Employees",
        items: [
          "Roth vs. Traditional 401(k) optimization",
          "Backdoor and Mega Backdoor Roth conversions",
          "Tax-loss harvesting in taxable accounts",
          "HSA maximization",
          "Charitable giving strategies",
        ],
      },
      {
        title: "For Business Owners",
        items: [
          "Cash value life insurance for tax-free growth",
          "Captive insurance companies (831(b) plans)",
          "Defined benefit and cash balance pension plans",
          "Cost segregation and bonus depreciation",
          "S-Corp vs. LLC structuring",
        ],
      },
      {
        title: "For High-Income Professionals",
        items: [
          "Deferred compensation strategies",
          "1031 exchanges (real estate)",
          "Tax-efficient retirement income sequencing",
          "Estate tax minimization (GRATs, IDGTs, CRTs)",
        ],
      },
    ],
  },
  {
    id: "cash-flow",
    icon: Wallet,
    number: 3,
    title: "Cash Flow & Liquidity Optimization",
    problem: "Money comes in. Money goes out. You're not sure where it all goes. Worse, you've got thousands sitting in a 401(k) you can't touch without penalties. When a real estate deal pops up or your kid needs college tuition, you're stuck. Your money is trapped.",
    approach: [
      "Phase 1: Diagnose the Leaks - Spending analysis, debt audit, tax drag identification",
      "Phase 2: Optimize Deployment - Emergency fund structuring, debt payoff strategy, savings allocation",
      "Phase 3: Create Strategic Liquidity - Infinite banking, HELOC strategies, cash value life insurance",
      "Phase 4: Automate and Monitor - Systematic contributions, real-time dashboards, quarterly reviews",
    ],
    benefits: [
      "Clear understanding of your cash flow (income, expenses, surplus)",
      "Strategic debt management (pay off what hurts, leverage what helps)",
      "Liquid capital reserves you can access without IRS penalties",
      "Systems that run automatically in the background",
      "Peace of mind knowing you have options",
    ],
  },
  {
    id: "business-planning",
    icon: Briefcase,
    number: 4,
    title: "Business & Professional Planning",
    problem: "You're a business owner, entrepreneur, or high-income professional. Your financial situation is more complex than a W-2 employee's. Most financial advisors don't understand your world. They give you generic advice designed for corporate employees.",
    approach: [
      "Strategies customized to your business structure and income type",
      "Coordination between personal and business financial plans",
      "Asset protection to shield personal wealth from business liabilities",
      "Tax optimization across both personal and business entities",
      "Succession and exit planning (so you can retire or sell on your terms)",
    ],
    benefits: [
      "Business entity structuring optimization",
      "Owner compensation strategies (salary vs. distributions vs. benefits)",
      "Qualified retirement plans (401(k), profit-sharing, cash balance)",
      "Key person insurance and buy-sell agreements",
      "Succession planning and exit strategies",
    ],
    subsections: [
      {
        title: "For Business Owners",
        items: [
          "Business entity structuring (S-Corp, C-Corp, LLC)",
          "Owner compensation strategies",
          "Qualified retirement plans",
          "Key person insurance",
          "Succession planning",
        ],
      },
      {
        title: "For High-Income Professionals",
        items: [
          "Stock compensation optimization (RSUs, ISOs, ESPPs)",
          "Deferred compensation analysis",
          "Malpractice and liability protection",
          "Contract negotiation support",
        ],
      },
      {
        title: "For Real Estate Investors",
        items: [
          "1031 exchange planning",
          "Cost segregation strategies",
          "Entity structuring for liability protection",
          "Financing strategies",
        ],
      },
    ],
  },
  {
    id: "technology",
    icon: Laptop,
    number: 5,
    title: "Financial Technology & Automation",
    problem: "You have accounts scattered everywhere. 401(k) with Fidelity. IRA with Vanguard. Life insurance with three different companies. Bank accounts at two institutions. No central view of your financial picture. You're making decisions in the dark.",
    approach: [
      "Financial Dashboard - Aggregated view of all accounts, real-time tracking, visual progress toward goals",
      "Planning Tools - Tax projection calculators, retirement income modeling, college funding scenarios",
      "Secure Document Vault - Centralized storage, accessible 24/7, encrypted and secure",
      "Automated Workflows - Contribution schedules, rebalancing alerts, policy reminders, tax planning check-ins",
    ],
    benefits: [
      "One place to see your entire financial picture",
      "Transparency and real-time access",
      "Reduced administrative burden (we handle the coordination)",
      "Confidence that nothing is falling through the cracks",
      "Technology that enhances (not replaces) human guidance",
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    number: 6,
    title: "Financial Education & Strategy Coaching",
    problem: "You've watched YouTube videos. Read articles. Listened to podcasts. You're consuming information, but you're not executing. There are so many different approaches. It's confusing. You need someone to translate knowledge into action specific to YOUR life.",
    approach: [
      "Educational Workshops on tax optimization, insurance, college funding, retirement planning, estate planning",
      "One-on-One Strategy Sessions with deep-dive into your specific situation",
      "Ongoing Accountability with quarterly check-ins and annual strategy updates",
      "Resource Library with guides, checklists, calculators, and video explanations",
    ],
    benefits: [
      "Clear understanding of financial concepts",
      "Confidence to make informed decisions",
      "Accountability partner who keeps you on track",
      "Work with a trusted advisor who respects your intelligence",
      "Empowered to make smart choices for your future",
    ],
  },
];

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
            Ready to Build Financial Freedom For Life?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            The best time to optimize your financial strategy was five years ago. <span className="text-primary-green font-semibold">The second-best time is today.</span>
          </p>

          <div className="mb-4">
            <Button href="/contact" size="lg" pulse>
              Schedule My FREE Wealth Strategy Plan
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <p className="text-white/60 text-sm">
            Limited Availability: We only accept 12 new clients per month
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Main Services Page
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <IntroSection />
      {services.map((service) => (
        <ServiceDetail key={service.id} {...service} />
      ))}
      <FinalCTA />
    </>
  );
}
