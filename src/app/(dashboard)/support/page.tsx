import type { Metadata } from "next";
import { SupportClient } from "./support-client";

export const metadata: Metadata = {
  title: "Support",
};

export default function SupportPage() {
  return <SupportClient />;
}
