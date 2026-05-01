"use client";

import { motion } from "framer-motion";
import { 
  Shield, Landmark, Calculator, Users, 
  Target, CheckCircle, ArrowRight, Building2, Briefcase,
  Lock, AlertTriangle, DollarSign, LineChart,
  Wallet, FileText, GraduationCap, Clock
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { StatCard } from "@/components/ui/StatCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-logo font-bold text-white leading-tight mb-6 tracking-wide">
                A Clear Financial Strategy That{" "}
                <span className="text-primary-green">Protects You</span>, Optimizes Your Taxes, and Builds Lasting Wealth
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/90 mb-8"
            >
              Get Your COMPLIMENTARY Financial Needs Analysis and Discover Exactly Where You&apos;re Leaving Money on the Table
              <span className="block text-primary-green font-semibold mt-2">(Valued at $5,000)</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/contact" size="lg" pulse>
                Schedule My COMPLIMENTARY Wealth Strategy Plan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-6 items-center"
            >
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-5 h-5 text-primary-green" />
                <span>4,500+ Clients Served</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-5 h-5 text-primary-green" />
                <span>$41.6M Tax Savings</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-5 h-5 text-primary-green" />
                <span>5/5 Star Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="aspect-video bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/k8quo3JpOO4"
                title="BFL Main Website Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
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

// Pain Points Section
function PainPointsSection() {
  const painPoints = [
    "You just wrote another substantial quarterly estimated tax check and have no idea if you're optimized or leaving hundreds of thousands on the table.",
    "You have significant wealth concentrated in company stock or business equity, and you're paralyzed between the risk if you hold and the massive tax bill if you diversify.",
    "Your estate could face substantial tax exposure when you die, but you're not sure what's actually protected.",
    "You're paying significant fees to financial professionals who send reports but have never once proactively brought you a tax strategy or addressed your actual complexities with real solutions.",
  ];

  return (
    <section className="py-20 lg:py-28 bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="You've Built Significant Wealth Through Excellence. Is Your Financial Strategy Operating at the Same Level?"
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
            You&apos;ve accumulated substantial net worth through relentless focus on your career or business.
            You&apos;re doing everything you&apos;re &ldquo;supposed&rdquo; to do.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-logo font-bold text-white text-center mb-8"
          >
            Here&apos;s what keeps you up at 3 AM:
          </motion.h3>

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

// Problem Section
function ProblemSection() {
  const problems = [
    {
      icon: Lock,
      title: "The 401(k) Industrial Complex",
      description: "Locks your money away for decades while Wall Street collects fees whether you win or lose.",
    },
    {
      icon: DollarSign,
      title: "Commission-Driven Strategists",
      description: "Push expensive products that pay them the most, not strategies that serve you best.",
    },
    {
      icon: FileText,
      title: "The Tax Code Complexity",
      description: "Written by and for the wealthy, with loopholes kept deliberately complex so middle-class individuals never learn them.",
    },
    {
      icon: AlertTriangle,
      title: "Conventional Wisdom Trap",
      description: "Advice parroted by wealth gurus keeps you trapped in a cycle of deferred dreams.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Here's the truth nobody tells you:"
          centered
        />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-dark-navy mb-2">{problem.title}</h3>
              <p className="text-warm-gray">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 text-center"
        >
          <p className="text-xl text-dark-navy mb-2">
            That&apos;s an average of
          </p>
          <p className="text-5xl md:text-6xl font-logo font-bold text-red-600 mb-2">
            $100,000+
          </p>
          <p className="text-xl text-dark-navy">
            bleeding out of your financial future.
          </p>
          <p className="text-warm-gray mt-4 max-w-2xl mx-auto">
            Because nobody ever taught you the alternative.
          </p>
        </motion.div>

        <div className="text-center mt-12">
          <Button href="/contact" size="lg">
            Schedule My COMPLIMENTARY Wealth Strategy Plan
          </Button>
        </div>
      </div>
    </section>
  );
}

// Wealthy Strategies Section
function WealthyStrategiesSection() {
  const strategies = [
    {
      icon: Landmark,
      title: "Strategy #1: They Become Their Own Bank (Infinite Banking)",
      description: "You put money in a savings account earning 0.5% interest. Then you turn around and pay a bank 7% interest on a car loan.",
      expanded: "Wealthy individuals use properly structured life insurance policies to create their own banking system. They store wealth in tax-advantaged vehicles, borrow against it tax-free when opportunities arise, and never ask permission from a bank or the IRS to access their own capital. Same dollars. Completely different outcomes.",
    },
    {
      icon: Calculator,
      title: "Strategy #2: They Optimize for Taxes FIRST",
      description: "You've been taught to chase investment returns. Beat the market. Find the hot stock. Meanwhile, you're losing 30-40% of your gains to taxes every year.",
      expanded: "Wealthy individuals focus on keeping what they make. Tax-loss harvesting. Roth conversions. Strategic charitable giving. Cash value life insurance. 1031 exchanges. Strategies that save 15-20% on their effective tax rate. Saving 15% in taxes beats chasing an extra 2% in returns every single time.",
    },
    {
      icon: Wallet,
      title: "Strategy #3: They Prioritize Liquidity and Control",
      description: "You've been told to lock everything in a 401(k) until you're 59½. Can't touch it without penalties. Can't use it for opportunities.",
      expanded: "Wealthy individuals keep capital accessible. When a real estate deal pops up, they have cash. When markets crash, they buy. When their kid needs college tuition, they don't beg the IRS for penalty-free withdrawals. Trapped money isn't wealth. It's a future promise that might not materialize.",
    },
    {
      icon: Shield,
      title: "Strategy #4: They Use Insurance as a Wealth-Building Tool",
      description: "You bought term life insurance because someone said 'buy term and invest the difference.'",
      expanded: "Wealthy individuals use permanent insurance (designed correctly) as a tax-free growth vehicle, estate planning tool, asset protection strategy, and liquidity source. Same product category. Completely different application.",
    },
    {
      icon: Target,
      title: "Strategy #5: They Coordinate Everything",
      description: "Your 401(k) doesn't talk to your life insurance. Your CPA files taxes but doesn't build a proactive strategy.",
      expanded: "Wealthy individuals integrate everything: tax strategy, asset protection, cash flow optimization, insurance, investments, and estate planning. Every piece works together. The strategies are there. You've just never had someone willing to teach you.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="What The Wealthy Know"
          subtitle="The Wealthy don't just 'invest more' or 'work harder.' They use completely different strategies that most people have never even heard of."
          centered
        />

        <div className="space-y-6">
          {strategies.map((strategy, index) => (
            <ServiceCard
              key={index}
              icon={strategy.icon}
              title={strategy.title}
              description={strategy.description}
              expandedContent={strategy.expanded}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/contact" size="lg">
            Schedule My COMPLIMENTARY Wealth Strategy Plan
          </Button>
        </div>
      </div>
    </section>
  );
}

// Company Introduction Section
function CompanySection() {
  const differentiators = [
    {
      icon: GraduationCap,
      title: "We Educate Before We Recommend",
      description: "You'll understand the 'why' behind every strategy without the complex jargon or pressure. If we can't explain it, we don't recommend it.",
    },
    {
      icon: Target,
      title: "We Build Systems, Not Sell Products",
      description: "We design comprehensive financial strategies that integrate tax optimization, wealth protection, cash flow management, and legacy planning.",
    },
    {
      icon: LineChart,
      title: "We're Technology-Enabled",
      description: "Financial dashboards. Planning tools. Secure document access. You get the clarity of fintech with the wisdom of a trusted financial strategist.",
    },
    {
      icon: Users,
      title: "We're Mission-Driven",
      description: "Financial education shouldn't be reserved for people who already have money. Hard-working individuals deserve the same strategies the wealthy use.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Built For Life Financial Agency"
          subtitle="Where High-Net-Worth Individuals Access the Sophisticated Strategies They Deserve"
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 mb-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-dark-navy leading-relaxed">
            We&apos;re not a traditional wealth management firm. We don&apos;t operate in silos, focusing on investments while ignoring the strategies that actually move the needle: <span className="font-semibold text-primary-blue">tax optimization, estate planning, asset protection, and coordinated execution</span>. We&apos;re a comprehensive wealth strategy firm built specifically for successful executives, business owners, and professionals with substantial net worth. Our mission: Deliver the sophisticated, proactive, coordinated wealth strategies that individuals at your level need but rarely receive from traditional strategists.
          </p>
        </motion.div>

        <h3 className="text-2xl font-logo font-bold text-dark-navy text-center mb-8">
          Here&apos;s How We&apos;re Different:
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue to-primary-green flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-dark-navy mb-2">{item.title}</h4>
              <p className="text-warm-gray">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-blue to-dark-navy rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value={4500} suffix="+" label="Clients Served" light />
            <StatCard value={41.6} prefix="$" suffix="M" decimals={1} label="Tax Savings" light />
            <StatCard value={5} suffix="/5" label="Star Rating" light />
            <StatCard value={98} suffix="%" label="Client Retention" light />
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="/contact" size="lg">
            Schedule My COMPLIMENTARY Wealth Strategy Plan
          </Button>
        </div>
      </div>
    </section>
  );
}

// Who We Serve Section
function WhoWeServeSection() {
  const [activeTab, setActiveTab] = useState(0);

  const personas = [
    {
      title: "The Successful Professional",
      icon: Briefcase,
      points: [
        "Corporate executives, physicians, attorneys, engineers, contractors",
        "High income but getting destroyed by taxes (35-50% effective rate)",
        "Money trapped in retirement accounts you can't access without penalties",
        "Tried working with strategists before and was underwhelmed",
        "Want sophisticated tax strategies, not just investment management",
      ],
    },
    {
      title: "The Business Owner",
      icon: Building2,
      points: [
        "Entrepreneurs, small business owners, franchisees, self-employed",
        "Navigating complexity: lumpy income, business deductions, retirement plans",
        "Need asset protection strategies to shield personal wealth",
        "Want to optimize both personal and business financial structures",
        "Looking for a partner who understands entrepreneurial challenges",
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Is Built For Life Right for You?"
          subtitle="We work with individuals and business owners across the country"
          centered
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {personas.map((persona, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-6 py-3 rounded-xl font-medium transition-all cursor-pointer",
                activeTab === index
                  ? "bg-primary-blue text-white shadow-lg"
                  : "bg-gray-100 text-dark-navy hover:bg-gray-200"
              )}
            >
              {persona.title}
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
              const IconComponent = personas[activeTab].icon;
              return (
                <div className="w-14 h-14 rounded-xl bg-primary-blue flex items-center justify-center">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
              );
            })()}
            <h3 className="text-2xl font-logo font-bold text-dark-navy">
              {personas[activeTab].title}
            </h3>
          </div>
          
          <ul className="space-y-3">
            {personas[activeTab].points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                <span className="text-warm-gray">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Not Right For Everyone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 max-w-3xl mx-auto"
        >
          <h4 className="text-xl font-semibold text-dark-navy mb-4">We&apos;re NOT Right for Everyone</h4>
          <p className="text-warm-gray mb-4">We only work with people who:</p>
          <ul className="space-y-2 text-warm-gray">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
              Value education and want to understand their strategy
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
              Are willing to make changes if the current approach isn&apos;t working
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
              Think long-term (we&apos;re building legacies, not chasing quick wins)
            </li>
          </ul>
        </motion.div>

        <div className="text-center mt-12">
          <Button href="/contact" size="lg">
            Schedule My COMPLIMENTARY Wealth Strategy Plan
          </Button>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I absolutely love working with this team! They do what is right for the client! BFL is an amazing agency! They took the time to educate us about how money can work for us, and helped us set up a retirement plan.",
      name: "Ashley Harrison",
      title: "Verified Client",
    },
    {
      quote: "The service that you receive at BFL Agency is more like an experience. The services provided and the attention to detail given to each client is some of the best I've seen in the industry today.",
      name: "Michael Mastrangelo",
      title: "Verified Client",
    },
    {
      quote: "It is great to work with an agency whose main priority is educating their clients and asking enough questions to specifically design a plan that fits their needs. Highly recommend!",
      name: "Dianne Loflin",
      title: "Verified Client",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Real People. Real Results."
          centered
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value={4500} suffix="+" label="Clients Served" />
            <StatCard value={41.6} prefix="$" suffix="M" decimals={1} label="Total Tax Savings" />
            <StatCard value={127} label="Five-Star Reviews" />
            <StatCard value={98} suffix="%" label="Client Retention" />
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="/contact" size="lg">
            Schedule My COMPLIMENTARY Wealth Strategy Plan
          </Button>
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    {
      icon: LineChart,
      title: "Your Current Financial Snapshot",
      description: "Where you stand today: income, expenses, assets, liabilities, insurance coverage, tax situation",
    },
    {
      icon: Target,
      title: "Your Blind Spots",
      description: "The top 3-5 areas where you're losing money right now",
    },
    {
      icon: Calculator,
      title: "Your Tax Optimization Opportunities",
      description: "Specific strategies to reduce your tax burden by 10-20% (legally and ethically)",
    },
    {
      icon: Shield,
      title: "Your Protection Gaps",
      description: "Are you over-insured, under-insured, or mis-insured? We'll show you exactly what you need",
    },
    {
      icon: FileText,
      title: "Your Custom Roadmap",
      description: "A clear, step-by-step action plan for the next 90 days",
    },
    {
      icon: Users,
      title: "Your Questions Answered",
      description: "No sales pitch. Just honest answers in plain English",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" id="schedule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title={<>Here&apos;s What Happens Next: Your<br />Complimentary Wealth Strategy Plan</>}
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-green to-accent-green rounded-2xl p-6 md:p-8 text-center text-white mb-12 max-w-2xl mx-auto"
        >
          <Clock className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <p className="text-2xl font-logo font-bold mb-2">
            60-minute comprehensive session
          </p>
          <p className="text-xl">
            Valued at <span className="font-bold">$5,000</span> - Absolutely COMPLIMENTARY
          </p>
        </motion.div>

        <h3 className="text-3xl md:text-4xl font-logo font-bold text-dark-navy text-center mb-8">
          Here&apos;s What You&apos;ll Discover:
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-light-gray rounded-2xl p-6 relative"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary-blue" />
              </div>
              <h4 className="text-lg font-semibold text-dark-navy mb-2">{step.title}</h4>
              <p className="text-warm-gray text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/contact" size="lg" pulse>
            Schedule My COMPLIMENTARY Wealth Strategy Plan
          </Button>
        </div>
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-logo font-bold text-white mb-6">
            Stop Leaving Money on the Table. Start Building the Future You Deserve.
          </h2>
          <p className="text-xl text-white/80 mb-4">
            Every month you wait is another month of unnecessary losses. Another month of opportunity cost.
          </p>
          <p className="text-lg text-white/70 mb-8">
            The best time to fix your financial strategy was five years ago. <span className="text-primary-green font-semibold whitespace-nowrap">The second-best time is right now.</span>
          </p>

          <div className="mb-8">
            <Button href="/contact" size="lg" pulse>
              Schedule My COMPLIMENTARY Wealth Strategy Plan
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(76, 175, 80, 0.3)",
                "0 0 40px rgba(76, 175, 80, 0.5)",
                "0 0 20px rgba(76, 175, 80, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative bg-gradient-to-r from-primary-green/20 to-primary-blue/20 backdrop-blur-sm rounded-xl p-6 inline-block border border-primary-green/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-green/10 to-transparent rounded-xl animate-shimmer" />
            <p className="relative text-white font-medium text-lg">
              <span className="text-primary-green font-bold">Limited Availability:</span> We only accept <span className="text-white font-bold text-xl">12</span> new clients per month to maintain quality and personalized service.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "Do I need to be wealthy to work with you?",
      answer: "No. We work with individuals earning $50K+. If you're ready to build wealth, we're ready to help.",
    },
    {
      question: "How is this different from other wealth strategists?",
      answer: "We educate first, recommend second. No product-pushing. No AUM fees. No commissions driving our advice.",
    },
    {
      question: "What does this cost?",
      answer: "The Financial Needs Analysis is 100% complimentary. If you choose to work with us after that, we'll discuss pricing transparently based on your needs.",
    },
    {
      question: "I've been burned by wealth strategists before. Why should I trust you?",
      answer: "Read our reviews. Talk to our clients. Experience the difference yourself in the complimentary session. We earn trust through results, not promises.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Frequently Asked Questions"
          centered
        />

        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <ProblemSection />
      <WealthyStrategiesSection />
      <CompanySection />
      <WhoWeServeSection />
      <TestimonialsSection />
      <ProcessSection />
      <FinalCTASection />
      <FAQSection />
    </>
  );
}
