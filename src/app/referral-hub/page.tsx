import type { Metadata } from "next";
import { ReferralHubClient } from "./ReferralHubClient";

export const metadata: Metadata = {
  title: "Referral Hub | Built For Life Financial Agency",
  description:
    "Vetted referral partners for Built For Life agents. Browse our trusted partners and start turning referrals into residual income.",
  alternates: {
    canonical: "https://www.bflreferralhub.com/",
  },
};

export default function ReferralHubPage() {
  return <ReferralHubClient />;
}
