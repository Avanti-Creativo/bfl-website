"use client";

import { motion } from "framer-motion";
import {
  GraduationCap, Target, Cog, RefreshCw, Heart,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { StatCard } from "@/components/ui/StatCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

// Hero Section
function AboutHero() {
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
            We Don&apos;t Serve Everyone.
            <span className="block text-primary-green mt-2">We Serve Those Who&apos;ve Built Real Wealth.</span>
          </h1>
          <p className="text-xl text-white/80 mb-4 max-w-4xl mx-auto">
            And Refuse to Watch It Bleed Away to Unnecessary Taxes, Poor Planning, and Mediocre Advice.
          </p>
          <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
            Built For Life Financial exists to deliver the sophisticated wealth strategies, proactive tax optimization, and coordinated planning that high-net-worth individuals deserve but rarely receive from traditional advisors.
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

// Our Story Section
function OurStorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Why We Exist"
          centered
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-warm-gray leading-relaxed text-center"
          >
            <p>
              <span className="text-dark-navy font-semibold">The wealth management industry has a fundamental problem.</span>
            </p>
            <p>
              It&apos;s designed to manage portfolios for people who already have money while charging premium fees for generic advice that rarely moves the needle on what actually matters: taxes, estate planning, asset protection, and strategic wealth transfer.
            </p>
            <p>
              Traditional wealth managers focus obsessively on investment returns (which you can&apos;t control) while ignoring tax optimization (which you absolutely can control and which has 3-5x greater impact on wealth accumulation).
            </p>
            <p>
              They charge 1% AUM to rebalance portfolios quarterly and send you market commentary emails, while you&apos;re bleeding $200,000-$400,000 annually in unnecessary taxes that could have been legally avoided with proactive planning.
            </p>
            <p>
              CPAs file your returns reactively every April but never implement multi-year tax strategies. Estate attorneys draft documents and disappear for a decade while laws change and your wealth grows. Insurance agents sell you policies without integrating them into comprehensive estate and asset protection plans.
            </p>
            <p className="text-dark-navy font-semibold">
              Nobody coordinates. Nobody proactively brings you strategies. Nobody treats your wealth with the sophistication it deserves.
            </p>

            <div className="bg-gradient-to-r from-primary-blue/10 to-primary-green/10 rounded-2xl p-8 my-8">
              <p className="text-2xl font-logo font-bold text-dark-navy text-center">
                We started Built For Life to change that.
              </p>
            </div>

            <p>
              We believe those who&apos;ve achieved the top 5% through relentless focus and excellence deserve wealth management that operates at the same level. You&apos;ve built something significant. Your financial strategy should reflect that.
            </p>
            <p>
              Advanced tax optimization that saves $100,000-$300,000+ annually. Sophisticated estate planning that eliminates $2 million-$8 million in unnecessary estate taxes. Asset protection structures that shield $10 million-$25 million from creditors, lawsuits, and catastrophic loss. Strategic insurance design that creates tax-free wealth transfer and liquidity.
            </p>
            <p className="text-dark-navy font-semibold">
              Not portfolio management disguised as comprehensive planning. Not reactive tax filing disguised as tax strategy. Not generic advice pulled from a drawer.
            </p>
            <p className="text-primary-blue font-semibold text-xl">
              Real strategy. Real coordination. Real results.
            </p>
          </motion.div>

          <div className="text-center mt-12">
            <Button href="/contact" size="lg">
              Schedule My FREE Wealth Strategy Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mission Section
function MissionSection() {
  return (
    <section className="py-20 bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-logo font-bold text-white mb-6">
            Protecting Wealth, Creating Legacies,
            <span className="block text-primary-green">Delivering Excellence</span>
          </h2>

          <p className="text-lg text-white/80 leading-relaxed mb-6">
            The financial challenge facing high-net-worth individuals today isn&apos;t investment returns. With low-cost index funds and robo-advisors, anyone can achieve market returns.
          </p>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            The real challenge is wealth preservation in a system designed to erode it through taxes, poor planning, and preventable losses.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
            {[
              "Estate tax rates of 40% on wealth over $13.9 million.",
              "Income tax rates approaching 50% when combining federal, state, and investment taxes.",
              "Concentrated stock positions creating catastrophic risk.",
              "Business exits structured poorly, losing millions to avoidable taxes.",
              "Assets completely exposed to lawsuits, creditors, and claims with zero protection.",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-white/80"
              >
                <span className="text-primary-green">•</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-xl text-white font-semibold mb-8">
            These aren&apos;t investment problems. These are strategy problems. Our mission is to solve them.
          </p>

          <motion.div
            animate={{
              boxShadow: [
                "0 0 30px rgba(76, 175, 80, 0.2)",
                "0 0 60px rgba(76, 175, 80, 0.4)",
                "0 0 30px rgba(76, 175, 80, 0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-green via-primary-blue to-primary-green bg-[length:200%_100%] animate-gradient rounded-2xl" />

            <div className="relative m-[2px] bg-dark-navy/90 backdrop-blur-sm rounded-2xl p-8">
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <motion.div
                  animate={{ y: [-20, 20], x: [-10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute top-4 left-8 w-2 h-2 bg-primary-green/30 rounded-full"
                />
                <motion.div
                  animate={{ y: [20, -20], x: [10, -10] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute bottom-6 right-12 w-3 h-3 bg-primary-blue/30 rounded-full"
                />
              </div>

              <div className="relative">
                <p className="text-white text-lg leading-relaxed mb-6">
                  We exist to deliver sophisticated, coordinated wealth strategies that integrate tax optimization, estate planning, asset protection, and insurance design into one cohesive system where every piece works together to preserve and grow what you&apos;ve built.
                </p>
                <motion.p
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-green via-white to-primary-green bg-[length:200%_auto] bg-clip-text text-transparent"
                >
                  We&apos;re here to save you $100,000-$500,000+ annually, protect your money from estate taxes and creditors, optimize business exits, and create legacies that last for generations.
                </motion.p>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-12">
            <Button href="/contact" size="lg">
              Schedule My FREE Wealth Strategy Plan
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Vision Section
function VisionSection() {
  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary-green uppercase tracking-wider">Our Vision</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-logo font-bold text-dark-navy mt-2 mb-6">
              To Redefine What High-Net-Worth Individuals Should Expect From Their Advisors
            </h2>

            <p className="text-lg text-warm-gray leading-relaxed mb-4">
              Our vision is bold but simple: To become the standard that every company compares themselves to.
            </p>
            <p className="text-lg text-warm-gray leading-relaxed mb-4">
              Not through size or assets under management, but through results.
            </p>
            <p className="text-lg text-warm-gray leading-relaxed mb-4">
              When a successful executive, business owner, or professional asks, &ldquo;What should I expect from my wealth advisor?&rdquo;, the answer should be: The level of sophistication, coordination, and proactive guidance that Built For Life delivers.
            </p>
            <p className="text-lg text-warm-gray leading-relaxed mb-4">
              We envision a future where high-net-worth individuals no longer tolerate fragmented advice, reactive planning, and generic strategies that ignore their complexity.
            </p>
            <p className="text-lg text-warm-gray leading-relaxed">
              Where paying $10,000+ annually to financial professionals actually delivers measurable ROI through tax savings, estate tax elimination, and coordinated execution. Where advisors act as true partners who bring strategies to clients proactively, respect their intelligence and time, and deliver family-office-caliber service without requiring $25M+ minimums.
            </p>

            <p className="text-2xl font-logo font-bold text-primary-blue mt-8">
              We&apos;re building that future. One family at a time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Our Approach Section
function ApproachSection() {
  const pillars = [
    {
      icon: GraduationCap,
      number: 1,
      title: "Comprehensive Strategy Development",
      subtitle: "We start by understanding your complete financial picture",
      description: "Your income structure (W-2, bonus, equity compensation, business distributions, real estate income). Your assets (concentrated stock positions, business equity, real estate holdings, retirement accounts). Your liabilities and risks. Your goals (retirement timeline, business exit plans, legacy intentions, philanthropic vision). Then we design a comprehensive wealth strategy that integrates tax optimization, estate planning, asset protection, insurance design, and investment coordination into one cohesive system.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      number: 2,
      title: "Proactive Coordination",
      subtitle: "We act as your wealth strategist, integrating your entire advisory team",
      description: "Your CPA files taxes but rarely implements proactive multi-year strategies. Your estate attorney drafted documents years ago but hasn't reviewed them since laws changed. We bring everything together.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Cog,
      number: 3,
      title: "Disciplined Implementation",
      subtitle: "Strategy without execution is worthless",
      description: "We don't hand you a plan and wish you luck. We guide you through implementation step by step: Setting up trusts and legal entities. Executing Roth conversions. Implementing captive insurance or premium-financed life insurance structures. Establishing asset protection LLCs and domestic asset protection trusts. Creating systematic diversification plans for concentrated stock positions. You make the strategic decisions. We handle the operational execution.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: RefreshCw,
      number: 4,
      title: "Ongoing Optimization",
      subtitle: "Wealth strategy isn't set-it-and-forget-it",
      description: "Tax laws change. Estate exemptions sunset. Business valuations fluctuate. Family circumstances evolve. Market conditions shift. We conduct ongoing reviews: Quarterly check-ins (progress tracking, new opportunities, course corrections). Annual comprehensive reviews (major strategy updates, tax law changes, estate planning adjustments). Proactive outreach when opportunities arise. We bring strategies TO you.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="How We Deliver Results"
          subtitle="Strategy, Coordination, Execution, Optimization"
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-lg text-warm-gray">
            Most wealth management firms follow a predictable playbook: Gather your assets, build a portfolio, rebalance quarterly, send reports, collect 1% annually. <span className="text-dark-navy font-semibold">That&apos;s not wealth management. That&apos;s portfolio babysitting. Our approach is fundamentally different.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-light-gray rounded-2xl p-8 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${pillar.color}`} />

              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center flex-shrink-0`}>
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-warm-gray">Pillar {pillar.number}</span>
                  </div>
                  <h3 className="text-xl font-logo font-bold text-dark-navy">{pillar.title}</h3>
                  <p className="text-primary-blue font-medium mb-3 text-sm">{pillar.subtitle}</p>
                </div>
              </div>

              <p className="text-warm-gray leading-relaxed mt-4 text-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/contact" size="lg">
            Schedule My FREE Wealth Strategy Plan
          </Button>
        </div>
      </div>
    </section>
  );
}

// Values Section
function ValuesSection() {
  const values = [
    {
      title: "Sophistication Over Simplicity",
      description: "We explain complex strategies clearly so you can make informed decisions, but we never sacrifice sophistication for ease. Your wealth requires advanced planning. We deliver it.",
    },
    {
      title: "Client First, Always",
      description: "In our relentless pursuit of becoming the #1 company in the world that everyone compares themselves to, we go above and beyond to put you first. We earn trust through results, not schmoozing.",
    },
    {
      title: "Proactivity Over Reactivity",
      description: "Most advisors wait for you to ask questions. We bring you strategies before you know you need them. Estate exemption sunsetting in 2026? We're reaching out in 2024 with a gifting plan.",
    },
    {
      title: "Coordination Over Fragmentation",
      description: "Your financial life is interconnected. Your tax strategy affects your estate plan, your insurance design impacts your asset protection. We coordinate everything so it works together seamlessly.",
    },
    {
      title: "Time Respect Over Busy Work",
      description: "Your time is worth money. We structure our process to maximize strategic decision-making and minimize administrative burden (which we handle). Meetings are efficient, communications are executive-level concise.",
    },
    {
      title: "Transparency Over Opacity",
      description: "We show you exactly how we're compensated, what strategies cost to implement, what the trade-offs are, and what results you should expect. No hidden fees. No surprises.",
    },
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="What We Stand For"
          centered
        />

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="w-10 h-10 rounded-full bg-primary-blue/10 flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-dark-navy mb-2">{value.title}</h3>
              <p className="text-warm-gray text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/contact" size="lg">
            Schedule My FREE Wealth Strategy Plan
          </Button>
        </div>
      </div>
    </section>
  );
}

// Community Impact Section
function ImpactSection() {
  const impactStats = [
    { value: 2.6, prefix: "$", suffix: "M", label: "Tax Savings", decimals: 1 },
    { value: 8700, prefix: "$", suffix: "", label: "Avg First-Year Savings", decimals: 0 },
    { value: 98, prefix: "", suffix: "%", label: "Client Retention", decimals: 0 },
    { value: 450, prefix: "", suffix: "+", label: "Hours Free Education", decimals: 0 },
    { value: 127, prefix: "", suffix: "", label: "Five-Star Reviews", decimals: 0 },
  ];

  return (
    <section className="py-20 bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Building Wealth, Changing Lives"
          subtitle="Over 4,500 individuals across America trust us with their financial futures. Here's the impact we've made together:"
          centered
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {impactStats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.decimals}
              light
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            But the numbers don&apos;t tell the whole story.
          </p>
          <p className="text-white text-lg leading-relaxed">
            The real impact is in the executives who&apos;ve eliminated millions in estate tax exposure and know their legacy is secure. The business owners who exited and can retire on their terms. The professionals who&apos;ve recaptured hundreds of thousands annually in tax savings and watch that compound into millions over their remaining working years.
          </p>
          <p className="text-primary-green text-xl font-semibold mt-6">
            That&apos;s what drives us. That&apos;s why we do this work.
          </p>
        </motion.div>

        <div className="text-center mt-12">
          <Button href="/contact" size="lg">
            Schedule My FREE Wealth Strategy Plan
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
      quote: "It is great to work with an agency whose main priority is educating their clients and asking enough questions to specifically design a plan that fits their needs. Highly recommend this company.",
      name: "Dianne Loflin",
      title: "Verified Client",
    },
    {
      quote: "I absolutely love working with this team! They do what is right for the client! BFL is an amazing agency! They took the time to educate us about how money can work for us, and helped us set up a retirement plan. We have referred so many people to them!",
      name: "Ashley Harrison",
      title: "Verified Client",
    },
    {
      quote: "Built for Life Financial Agency is an agency with high integrity and quality agents! We have been extremely pleased with their professionalism and how they put the clients needs first!",
      name: "Nancy B.",
      title: "Verified Client",
    },
    {
      quote: "I recently had the pleasure of working with the Built For Life Agency and I must say that my experience with their financial services and life insurance offerings has been nothing short of outstanding.",
      name: "Curt Narvesen",
      title: "Verified Client",
    },
    {
      quote: "The service that you receive at BFL Agency is more like an experience. The services provided and the attention to detail given to each client is some of the best I've seen in the industry today. It's all about relationships.",
      name: "Michael Mastrangelo",
      title: "Verified Client",
    },
    {
      quote: "BFL Agency went above and beyond to educate me and help make sure all of my family needs were met. Would highly recommend!",
      name: "Jerry Harrison",
      title: "Verified Client",
    },
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Why Families Choose Built For Life"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/contact" size="lg">
            Schedule My FREE Wealth Strategy Plan
          </Button>
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTA() {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden" id="schedule">
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
            Ready to Join 5,000+ Building Their Life The Right Way?
          </h2>

          <p className="text-lg text-white/80 mb-4">
            If you&apos;ve read this far, you already know something needs to change.
          </p>
          <p className="text-lg text-white/80 mb-8">
            You&apos;re tired of feeling stuck. Tired of conflicting advice, paying too much in taxes and wondering if you&apos;re making the right financial decisions. You want clarity and a clear action plan. You want someone in your corner who actually cares about your success.
          </p>

          <p className="text-xl text-primary-green font-semibold mb-8">
            That&apos;s what we do. <span className="whitespace-nowrap">That&apos;s who we are.</span>
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 inline-block">
            <p className="text-white">
              Schedule your complimentary <span className="font-bold">Wealth Strategy Plan</span> today. We&apos;ll show you exactly where you&apos;re leaving money on the table and give you a clear roadmap to fix it.
            </p>
          </div>

          <p className="text-white/70 mb-6">
            Just honest guidance from people who believe you deserve better.
          </p>

          <div className="mb-4">
            <Button href="/contact" size="lg" pulse>
              Schedule My FREE Wealth Strategy Plan
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <p className="text-white/60 text-sm">
            Limited to 12 new clients per month. Schedule now before spots fill.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Main About Page
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStorySection />
      <MissionSection />
      <VisionSection />
      <ApproachSection />
      <ValuesSection />
      <ImpactSection />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}
