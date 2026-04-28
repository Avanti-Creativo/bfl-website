export interface Partner {
  slug: string;
  name: string;
  logo?: string;
  founder: string;
  founderTitle: string;
  whoTheyAre: string[];
  whoToRefer: {
    intro: string;
    bestFor: string[];
  };
  howToRefer: string[];
  referralFee: string;
  contact: {
    name: string;
    phone?: string;
    email?: string;
    website?: string;
  };
  disclosure?: string;
  extras?: { label: string; content: string }[];
  benefits?: {
    learnMoreLink?: string;
    commissionType?: string;
    commissionAmount?: string;
    additionalTerms?: string;
    affiliateSignUpLink?: string;
  };
  referralFormUrl?: string;
}

export const partners: Partner[] = [
  {
    slug: "financial-legacy-builders",
    name: "Financial Legacy Builders",
    logo: "/images/logos/FLB-13.png",
    founder: "Dr. Steven Crane",
    founderTitle: "Founder",
    whoTheyAre: [
      "Financial Legacy Builders is a fee-only financial planning firm founded by Dr. Steven Crane, a fiduciary advisor on a mission to make real financial guidance accessible to working-class families, veterans, and everyday people who have been overlooked by the traditional financial industry.",
      "Dr. Crane\u2019s model is built on transparency, education, and accountability. Clients pay one flat fee based on household income: no commissions, no upsells, no surprises. Every client receives personalized planning that reflects their actual life and goals.",
    ],
    whoToRefer: {
      intro:
        "Refer prospects who are not yet in a financial position to work with BFL, but who deserve real guidance. This is a warm holding space for future BFL clients. Dr. Crane builds their foundation; when they\u2019re ready to scale, you\u2019re already their trusted connection.",
      bestFor: [
        "Working-class families building stability",
        "Veterans seeking financial clarity",
        "Clients carrying debt who need a structured plan",
        "Anyone who feels ignored by the industry",
        "Prospects not yet at BFL\u2019s service tier",
      ],
    },
    howToRefer: [
      "\u201cI work with a fee-only financial planner who provides personalized, comprehensive financial guidance for families at every stage. Would you like me to connect you?\u201d",
    ],
    referralFee:
      "Relationship-based \u2014 no commission paid. This referral builds goodwill and long-term reciprocal value.",
    contact: {
      name: "Dr. Steven Crane",
      phone: "513-806-2692",
      email: "info@financiallegacybuilders.com",
      website: "financiallegacybuilders.com",
    },
    referralFormUrl:
      "https://brand.bflreferralhub.com/widget/form/77sPWE21chIyzIauesxt",
    disclosure:
      "Advisory services offered through Financial Legacy Builders, an investment adviser registered with the state of Ohio. Advisory services are only offered to clients or prospective clients where Financial Legacy Builders and its representatives are properly registered or exempt from registration. The information on this site is not intended as tax, accounting, or legal advice, nor is it an offer or solicitation to buy or sell, or as an endorsement of any company, security, fund, or other offering. Information provided should not be solely relied upon for decision-making. Please consult your legal, tax, or accounting professional regarding your specific situation. Investments involve risk and have the potential for complete loss. It should not be assumed that any recommendations made will necessarily be profitable. The information on this site is provided \u201cAS IS\u201d and without warranties either express or implied, and the information may not be free from error. Your use of the information provided is at your sole risk.",
  },
  {
    slug: "360-veteran",
    name: "360 Veteran",
    logo: "/images/logos/Primary Logo.png",
    founder: "Dr. Steven Crane",
    founderTitle: "Founder",
    whoTheyAre: [
      "360 Veteran is a veteran-owned company dedicated to helping military veterans obtain the VA disability benefits they have rightfully earned. Founded by Dr. Steven Crane, a U.S. Marine Corps veteran, the organization specializes in providing high-quality medical documentation to support veterans\u2019 disability claims.",
      "360 Veteran connects veterans with a nationwide network of private, neutral third-party medical providers who conduct thorough evaluations and complete Disability Benefit Questionnaires (DBQs) aligned with the VA Rating Schedule, as well as independent medical opinion letters (NEXUS Letters). This ensures veterans have the medical evidence needed to support claims for increased disability ratings or new service-connected conditions.",
      "A higher VA disability rating can be life-changing, unlocking up to $4,500/month in tax-free compensation, student loan forgiveness, property tax exemptions, and free medical coverage for veterans and their families.",
    ],
    whoToRefer: {
      intro:
        "Any veteran client who is not currently rated at 100% disability is a strong candidate for 360 Veteran. Most veterans are underrated and leave significant tax-free income and benefits on the table. This referral adds immediate, tangible value to your veteran clients and earns you a 10% referral fee per client.",
      bestFor: [
        "Active duty transitioning veterans",
        "Veterans rated below 100%",
        "Veterans unaware of their full benefit eligibility",
        "Anyone who has served and hasn\u2019t maximized their VA rating",
      ],
    },
    howToRefer: [
      "\u201cAs a veteran, you have earned countless benefits from the VA. To better assist and serve you as we continue discussing your finances, what is your current VA disability rating?\u201d",
      "If they say anything less than 100%, connect them to 360 Veteran immediately.",
    ],
    referralFee: "10% per client",
    contact: {
      name: "Dr. Steven Crane",
      phone: "202-929-5763",
      email: "info@the360veteran.com",
      website: "the360veteran.com",
    },
    referralFormUrl:
      "https://brand.bflreferralhub.com/widget/form/4s0uHYmfPmFqga9Xn56Q",
  },
  {
    slug: "prime-ethos",
    name: "Prime Ethos Coaching & Consulting",
    logo: "/images/logos/LOGO2 trans 1.png",
    founder: "Jerry Harrison",
    founderTitle: "Founder & CEO",
    whoTheyAre: [
      "Prime Ethos Coaching & Consulting is a leadership development firm based in Delaware, Ohio, dedicated to helping individuals and organizations unlock their full potential through personalized coaching and strategic consulting. Their approach is grounded in daily, customized accountability and tailored support, ensuring clients are equipped to navigate challenges and seize opportunities effectively.",
    ],
    whoToRefer: {
      intro:
        "Any client, agent, or entrepreneur who has been setting goals without hitting them is a strong fit. This is especially powerful within the BFL agent network itself. High performers who want to level up their leadership, communication, and execution belong in front of Jerry.",
      bestFor: [
        "Agents looking to scale their practice and sharpen their leadership skills",
        "Business owners stuck in cycles of unmet goals",
        "Executives seeking accountability and strategic clarity",
        "Anyone who knows what they want but can\u2019t figure out why they\u2019re not getting there",
      ],
    },
    howToRefer: [
      "\u201cHave you ever had a goal that you didn\u2019t hit... but didn\u2019t know why?\u201d",
      "If the answer is yes, they are a fit. That one question opens doors.",
    ],
    referralFee: "$200 per client",
    contact: {
      name: "Jerry Harrison",
      phone: "614-784-5084",
      email: "info@primeethoscc.com",
      website: "primeethoscc.com",
    },
    referralFormUrl:
      "https://brand.bflreferralhub.com/widget/form/aSCY8XJvRLTaiP4Cnvqj",
  },
  {
    slug: "legalshield",
    name: "LegalShield",
    logo: "/images/logos/legalshield-logo-vector-2021.png",
    founder: "Tim Sloma",
    founderTitle: "Regional Vice President",
    whoTheyAre: [
      "LegalShield provides access to top-tier legal advice and protection for an affordable monthly fee, making professional legal services available to everyday families and small businesses without the thousand-dollar price tag. Members get unlimited consultations with experienced attorneys, document reviews, trial representation, 24/7 emergency access, and exclusive discounts on additional services.",
      "Whether it\u2019s estate planning, resolving a legal dispute, reviewing a contract, or handling everyday matters like traffic tickets and consumer issues, LegalShield connects members to a network of seasoned attorneys who are just a phone call away. No expensive hourly bills. No navigating complex legal language alone. Just reliable protection at a fraction of the cost.",
    ],
    whoToRefer: {
      intro:
        "This is one of the easiest referrals in the hub because almost every client needs it and most don\u2019t have it. If they don\u2019t have a will, don\u2019t have an attorney on retainer, or have never thought about protecting their estate, they are a fit. It also opens a natural door within the BFL conversation around estate planning and long-term protection.",
      bestFor: [
        "Families without a will or estate plan in place",
        "Individuals who cannot afford traditional attorney retainers",
        "Small business owners needing ongoing legal coverage",
        "Clients going through major life transitions like marriage, divorce, or buying property",
        "Anyone who wants legal protection without the cost",
      ],
    },
    howToRefer: [
      "\u201cDo you have a will, or have you ever considered getting one?\u201d",
      "\u201cDo you have a law firm or an attorney?\u201d",
      "\u201cAt BFL we do more than just life insurance. We make sure your estate planning is taken care of as well. We partner with a 50-year-old company that handles this for less than $40 a month, instead of thousands of dollars.\u201d",
    ],
    referralFee: "$25 per individual or family plan \u00b7 $50 per small business plan",
    contact: {
      name: "Tim Sloma",
      phone: "224-433-1527",
      email: "tsloma11@gmail.com",
      website: "",
    },
    referralFormUrl:
      "https://brand.bflreferralhub.com/widget/form/4qEvm7EAdTsLqM2olH1K",
    extras: [
      {
        label: "Client-Facing Videos",
        content:
          "Customer Overview (3 min): ltl.is/khbj8943m \u00b7 Small Business Protection (14 min): ltl.is/8n6zbxt",
      },
    ],
    disclosure:
      "LegalShield services are provided through PPLSI. Do not guarantee any services outside of what is listed in the official PPLSI flatsheets.",
  },
  {
    slug: "wealth-guaranteed",
    name: "Wealth Guaranteed",
    logo: "/images/logos/67ec6ca0903b501b6f0a835a.jpeg",
    founder: "Kobe Abass",
    founderTitle: "Sales Manager",
    whoTheyAre: [
      "Wealth Guaranteed is a private Express Trust Organization that helps U.S. citizens legally reclassify their income under U.S. tax law, reducing or eliminating federal and state income tax liabilities through their proprietary 12-411 process. Backed by over 10 years of research and practice, their licensed CPA network handles all filings while their legal framework ensures compliance and protection throughout the process.",
      "Their system has helped hundreds of clients lawfully recover between $5,000 and $100,000+ in tax refunds, and the 12-411 process can go back up to four years on unfiled taxes.",
    ],
    whoToRefer: {
      intro:
        "Any client who is frustrated with what they\u2019re paying in taxes, curious about their legal rights under U.S. tax law, or feels they may be overpaying is a strong candidate. This referral is especially valuable for high-income earners looking for legal ways to reduce their tax burden, and it pays you $300 per enrolled client.",
      bestFor: [
        "Clients who feel they are overpaying in federal or state taxes",
        "Remote or online workers",
        "Clients who have received large refunds in the past",
        "Anyone curious about their legal tax obligations",
        "Clients with no active IRS delinquencies (though exceptions may apply)",
      ],
    },
    howToRefer: [
      "\u201cDo you believe you\u2019re legally required to pay federal income tax?\u201d",
      "If they\u2019re unsure, curious, or frustrated with what they\u2019re paying, they\u2019re likely a strong fit. Invite them to the live weekly info session where the Wealth Guaranteed team walks them through everything.",
      "Every Thursday at 8:00 PM EST \u2014 www.TaxFreeInfoSession.com",
      "During the session, your referral will learn how the 12-411 process works, hear real client success stories, and have the opportunity to ask questions and enroll. You send them, the Wealth Guaranteed team does the rest.",
      "Note: Let your client know they will receive a call within one hour of you submitting the referral form.",
    ],
    referralFee: "$300 per enrolled client",
    contact: {
      name: "Kobe Abass",
      phone: "737-285-4285 x103",
      email: "kobe@wealthguaranteed.org",
      website: "wealthguaranteed.co",
    },
    referralFormUrl:
      "https://brand.bflreferralhub.com/widget/form/sCJdxCqQYdIQoDhrcFgN",
    disclosure:
      "Wealth Guaranteed is not a law firm and does not provide legal advice. They provide private education, documentation, and tax services to help clients correct their tax classification and claim lawful refunds they may be owed. All services are compliant with U.S. tax law and IRS procedure. Wealth Guaranteed is not affiliated with the IRS or any government agency and does not teach tax evasion or illegal avoidance schemes.",
  },
  {
    slug: "digital-accelerant",
    name: "Digital Accelerant",
    logo: "/images/logos/Digital Accelerant-final logo.png",
    founder: "Gabe O\u2019Neill",
    founderTitle: "Founder & CEO",
    whoTheyAre: [
      "Digital Accelerant is a creative digital media company founded by Gabe O\u2019Neill, a veteran software developer and entrepreneur known as \u201cThe Godfather of the Video Business Card.\u201d Since 2016, Gabe has helped professionals stand out with dynamic, high-impact digital tools that capture attention and build trust before a conversation even starts.",
      "Their signature offering, the Video Business Card, is complemented by the Virtual Video Book and Accelerant Chat, a custom-built AI chatbot. Every tool is designed to help clients generate more business through compelling, personalized content. Clients work directly with Gabe across the creative, technical, and strategic dimensions of every project, ensuring it gets done with vision and authenticity.",
    ],
    whoToRefer: {
      intro:
        "Any agent or professional who networks frequently or wants to sharpen their personal marketing. This is especially valuable within the BFL agent network itself. A Video Business Card instantly elevates how an agent shows up, builds credibility on first contact, and does the selling before the meeting even begins. At 30% commission, this is also one of the highest-paying referral opportunities in the hub.",
      bestFor: [
        "Agents looking to stand out in a crowded market",
        "Professionals who network frequently and want a stronger first impression",
        "Business owners who feel their marketing does not reflect the quality of their work",
        "Anyone ready to leverage video and AI to generate more business",
      ],
    },
    howToRefer: [
      "\u201cDo you and your business network a lot?\u201d",
      "\u201cHow are you marketing yourself?\u201d",
      "If yes to either, they need to know about Digital Accelerant. Most professionals are still handing out paper business cards or sending generic LinkedIn messages. A Video Business Card changes that conversation entirely.",
    ],
    referralFee: "30% commission",
    contact: {
      name: "Gabe O\u2019Neill",
      phone: "470-257-7749",
      email: "gabe@digitalaccelerant.com",
      website: "digitalaccelerant.com",
    },
    referralFormUrl:
      "https://brand.bflreferralhub.com/widget/form/KQz6goWKTH80XYOECk3O",
  },
  {
    slug: "national-gold-consultants",
    name: "National Gold Consultants",
    logo: "/images/logos/ngc-logo-2.jpg",
    founder: "Ryan Long",
    founderTitle: "President",
    whoTheyAre: [
      "National Gold Consultants (NGC) works exclusively with financial advisors and insurance agents across the country, helping them integrate physical gold and silver into client portfolios. Founded on a family legacy and led by Ryan Long, with 16 years of industry experience, NGC is one of the few licensed, regulated, and bonded wholesale precious metals companies in the country, operating through a vast network of advisors.",
      "Ryan has personally helped position hundreds of millions of dollars in assets in gold and silver for clients. NGC provides advisors with comprehensive support, including training, marketing materials, and education, so they can confidently offer precious metals as a diversification tool. They also offer streamlined Precious Metals IRA services through trusted custodians, competitive pricing on bullion and coins, and carry an A+ BBB rating.",
    ],
    whoToRefer: {
      intro:
        "Any client with a meaningful nest egg who has not addressed inflation risk or market volatility is a fit. Gold and silver should be positioned as wealth insurance, not speculation. Metals move inversely to dollar-based assets like equities and real estate, making them a powerful hedge when sized correctly. For this to work as a true offset, precious metals need to represent 10 to 15% of the client\u2019s total portfolio. Anything less does not carry enough weight to act as a real hedge.",
      bestFor: [
        "Clients with investable assets who have no inflation protection strategy",
        "High earners heavily concentrated in equities or real estate",
        "Clients approaching retirement who need to reduce downside exposure",
        "Anyone asking how to protect wealth in an uncertain market environment",
      ],
    },
    howToRefer: [
      "\u201cWhat have you done to mitigate some of the market and inflation risk that is among us right now?\u201d",
      "That question alone surfaces the need. From there, frame gold and silver as insurance for their wealth, not a speculative investment. The goal is to position 10 to 15% of their portfolio in metals so it has real offsetting power against their other dollar-based assets.",
    ],
    referralFee:
      "4% commission on non-qualified accounts \u00b7 3% commission on qualified accounts",
    contact: {
      name: "Ryan Long",
      phone: "763-401-7920",
      email: "long@nationalgoldconsultants.com",
      website: "nationalgoldconsultants.com",
    },
    referralFormUrl:
      "https://brand.bflreferralhub.com/widget/form/teX4PTm8T2ZYgvhK94m0",
  },
  {
    slug: "korman-elite-holdings",
    name: "Korman Elite Holdings",
    logo: "/images/logos/KORMAN ELITE HOLDOINGS LOGO FINAL.jpg",
    founder: "Bill Korman",
    founderTitle: "Co-Founder",
    whoTheyAre: [
      "Korman Elite Holdings is a private money brokerage and real estate investment firm founded by Bill and Tyler Korman, a father-and-son team with over 27 years of combined industry experience. Operating nationwide, they specialize in the deals traditional lenders won\u2019t touch: complex transactions that require speed, creativity, and direct access to private capital.",
      "With $50M+ in transactions facilitated and 200+ deals closed, their track record speaks for itself. When a deal needs to get done, they get it done.",
    ],
    whoToRefer: {
      intro:
        "This is one of the highest-earning referral opportunities in the hub at a 15% flat fee. The ideal referral is anyone connected to real estate who is being blocked by financing, whether that\u2019s a realtor watching deals fall through, a property owner looking to leverage equity, or an investor seeking a creative path forward.",
      bestFor: [
        "Real estate agents with deals falling through due to funding",
        "Residential and commercial property owners looking to upgrade or scale",
        "Investors seeking bridge loans, fix & flip financing, or commercial real estate loans",
        "Anyone who has been turned down by traditional lenders",
        "Clients looking to enter joint venture partnerships or distressed property investments",
      ],
    },
    howToRefer: [
      "\u201cDo you have deals that keep falling through due to funding? I know a team that specializes in exactly that.\u201d",
      "\u201cDo you have real estate you\u2019re looking to purchase, sell, or develop and need funding? I can connect you with someone who can help.\u201d",
      "Talk to realtors in your network. Ask them if they\u2019ve had deals collapse due to financing. That conversation alone opens the door. Any residential or commercial property owner looking to leverage equity is also a strong lead.",
    ],
    referralFee: "15% flat fee",
    contact: {
      name: "Bill Korman",
      phone: "(240) 375-0404",
      email: "billkorman@kormaneliteholdings.com",
      website: "kormaneliteholdings.com",
    },
    referralFormUrl:
      "https://brand.bflreferralhub.com/widget/form/rbQ9lwNoFYZKUtuzKaIK",
    disclosure:
      "Korman Elite Holdings LLC is a Maryland limited liability company licensed as a private money broker and real estate investment specialist. Private real estate investments involve significant risks including loss of principal and liquidity constraints. Opportunities are offered to accredited investors only where applicable. Past performance is not indicative of future results. No offering is insured by the FDIC, SIPC, or any government agency. Korman Elite Holdings does not provide legal or tax advice.",
  },
  {
    slug: "visionary-flow-solutions",
    name: "Visionary Flow Solutions",
    logo: "/images/logos/visionary-flow-solutions.png",
    founder: "Alexa Briggs",
    founderTitle: "Co-Founder",
    whoTheyAre: [
      "Visionary Flow Solutions helps entrepreneurs and agencies turn big ideas into scalable systems. They specialize in building customized CRMs, AI assistants, and automation workflows that eliminate manual tasks, save time, and help teams grow faster with less effort.",
      "Their clients are driven professionals: insurance agents, financial advisors, wellness providers, recruiters who want a smarter way to run their business. Visionary Flow doesn\u2019t just hand over a tool. They work alongside you to design, implement, and support a system aligned with your goals, whether that\u2019s automating lead follow-up, onboarding new team members, setting up webinars, or building an entire recruiting funnel.",
    ],
    whoToRefer: {
      intro:
        "Any agent or entrepreneur in your network who is still running their business manually: chasing leads through spreadsheets, following up inconsistently, or drowning in administrative tasks. This referral pays two ways: a flat $200 for a custom build, or 10% monthly recurring commission for every CRM signup, making it one of the best long-term earning opportunities in the hub.",
      bestFor: [
        "Insurance agents and financial advisors looking to automate their practice",
        "Business owners spending too much time on manual follow-up",
        "Recruiters needing a streamlined onboarding system",
        "Entrepreneurs ready to scale but lacking the systems to support it",
        "Anyone who has outgrown spreadsheets and needs a real CRM",
      ],
    },
    howToRefer: [
      "\u201cI wanted to share something that\u2019s made a huge difference in how I run my business. Visionary Flow Solutions built out my CRM and automations, and it\u2019s helped me save hours every week. If you\u2019re looking to manage leads, automate follow-ups, or get an AI assistant working for you, this is who you want to talk to.\u201d",
      "Then share your personal referral link or direct them to visionaryflowsolutions.com. Make sure to use your custom affiliate or booking link so your referral is tracked properly and your commission is credited.",
    ],
    referralFee:
      "$200 per custom build \u00b7 10% monthly recurring commission per CRM signup",
    contact: {
      name: "Alexa Briggs",
      phone: "940-279-0685",
      email: "alexabriggs@visionaryflowsolutions.com",
      website: "visionaryflowsolutions.com",
    },
    referralFormUrl:
      "https://brand.bflreferralhub.com/widget/form/wY0Oac8bpFAUxHoxTo2h",
    disclosure:
      "Visionary Flow Solutions provides consulting, CRM development, automation, and AI integration services. VFS is not a licensed financial, legal, insurance, or tax advisory firm. Clients are solely responsible for complying with all applicable laws and regulations in their industry. Results may vary depending on business model, industry, and implementation. VFS does not guarantee specific outcomes such as income growth or client acquisition.",
  },
  {
    slug: "mediator-debt-solutions",
    name: "Mediator Debt Solutions",
    logo: "/images/logos/mediator-debt-solutions.png",
    founder: "Mediator Debt Solutions",
    founderTitle: "Debt Resolution Specialists",
    whoTheyAre: [
      "Mediator Debt Solutions (MDS) specializes in helping individuals resolve unsecured debt through professional negotiation and structured settlement programs. They work directly with creditors to reduce the total amount owed, giving clients a realistic path to becoming debt-free.",
      "Their approach is built on transparency, compliance, and results. MDS handles the heavy lifting of creditor negotiations so clients can focus on rebuilding their financial health.",
    ],
    whoToRefer: {
      intro:
        "Anyone in your network struggling with unsecured debt — credit cards, medical bills, personal loans — who needs professional help negotiating with creditors. This is a volume-based referral opportunity with no charge backs and reliable payouts.",
      bestFor: [
        "Individuals overwhelmed by credit card debt",
        "People dealing with medical bills or personal loan debt",
        "Anyone who has fallen behind on unsecured debt payments",
        "Clients looking for an alternative to bankruptcy",
        "People who need professional creditor negotiation support",
      ],
    },
    howToRefer: [
      "\u201cDo you know anyone struggling with credit card debt or medical bills? I work with a company that negotiates directly with creditors to reduce what you owe. They\u2019ve helped a lot of people get back on track.\u201d",
      "\u201cIf you\u2019re feeling overwhelmed by unsecured debt, I can connect you with Mediator Debt Solutions. They handle the negotiation so you don\u2019t have to.\u201d",
    ],
    referralFee: "2.5% of unsecured debt resolved",
    contact: {
      name: "Mediator Debt Solutions",
      phone: "",
      email: "",
      website: "mediatordebtsolutions.com",
    },
    benefits: {
      learnMoreLink: "https://mediatordebtsolutions.com/the-journey/",
      commissionType: "Percent Of Unsecured Debt Resolved",
      commissionAmount: "2.5%",
      additionalTerms:
        "You will get a 2.5% commission for referring unsecured debts to MDS and an additional .5% if more than 50 referrals become clients in a month. No charge backs, and commissions are paid out over 4 installments.",
      affiliateSignUpLink: "https://bfl.mediatordebtsolutions.com/",
    },
  },
  {
    slug: "rok-financial",
    name: "ROK Financial",
    logo: "/images/logos/rok-financial.png",
    founder: "ROK Financial",
    founderTitle: "Business Lending Specialists",
    whoTheyAre: [
      "ROK Financial is a leading business lending marketplace that connects entrepreneurs and business owners with the capital they need to grow. They offer a wide range of financing solutions including SBA loans, term loans, lines of credit, equipment financing, and more.",
      "With a streamlined application process and access to a broad network of lenders, ROK Financial helps businesses secure funding quickly and efficiently, even when traditional banks say no.",
    ],
    whoToRefer: {
      intro:
        "Any business owner or entrepreneur in your network who needs capital to grow, expand, or manage cash flow. With a 15% commission based on profit from each sale, this is one of the highest-earning opportunities in the hub.",
      bestFor: [
        "Small business owners looking for growth capital",
        "Entrepreneurs needing startup or expansion funding",
        "Business owners seeking equipment financing",
        "Companies that need working capital or lines of credit",
        "Anyone who has been turned down by traditional banks",
      ],
    },
    howToRefer: [
      "\u201cDo you know any business owners who need funding? I work with ROK Financial — they specialize in getting businesses the capital they need, even when banks say no.\u201d",
      "\u201cIf you\u2019re looking to grow your business but need financing, I can connect you with ROK Financial. They offer everything from SBA loans to lines of credit.\u201d",
    ],
    referralFee: "Up to 15% of profit from sale",
    contact: {
      name: "ROK Financial",
      phone: "",
      email: "",
      website: "rokfi.com",
    },
    benefits: {
      learnMoreLink: "https://www.youtube.com/watch?v=yDbtdk_MZNA",
      commissionType: "Percent Of Profit From Sale",
      commissionAmount: "15%",
      additionalTerms:
        "You will get up to a 15% commission based on the loan amount secured through ROK Financial and the profit generated by ROK.",
      affiliateSignUpLink:
        "https://go.mypartner.io/referral-partner/?ref=001Qk00000Sq3GKIAZ",
    },
  },
];

export function getPartnerBySlug(slug: string): Partner | undefined {
  return partners.find((p) => p.slug === slug);
}
