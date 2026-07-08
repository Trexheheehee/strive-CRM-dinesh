"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ShieldCheck, FileText, ChevronRight, Copy, Check } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function SupportClient() {
  const { account } = useAuth();
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const emailAddress = "striveautomations.ai@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy email to clipboard.");
    }
  };

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      toast.error("Please enter your support query first.");
      return;
    }

    const businessName = account?.name || "Client";
    const subject = `Support Ticket - ${businessName}`;
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    // Open user's email client
    window.location.href = mailtoUrl;
    toast.success("Opening your email client...");
  };

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-200">
      {/* Header Section */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Support
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Get in touch with us or access our policies and terms.
        </p>
      </div>

      {/* Raise a Ticket Form */}
      <Card>
        <form onSubmit={handleSubmitTicket}>
          <CardHeader>
            <CardTitle>Raise a Ticket</CardTitle>
            <CardDescription>
              Describe your question or issue in detail below. Submitting will open your local email client.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you need help with (e.g. issue description, steps to reproduce, or feature request)..."
              className="min-h-[160px]"
              required
            />
          </CardContent>
          <CardFooter className="flex justify-end border-t border-border pt-4">
            <Button type="submit">
              Submit Ticket via Email
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* Grid of Support & Policies */}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {/* Card 1: Direct Support */}
        <Card className="flex-row items-center justify-between gap-4 p-4 text-left">
          <div className="flex items-center gap-3.5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <Mail className="size-4" />
            </span>
            <div className="min-w-0">
              <span className="block text-sm font-semibold text-foreground">
                Direct Support
              </span>
              <span className="mt-0.5 block text-xs text-muted-foreground select-all">
                {emailAddress}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none"
            title="Copy email address"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500 animate-in fade-in zoom-in-50 duration-200" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </Card>

        {/* Card 2: Privacy Policy */}
        <Link
          href="/privacy"
          target="_blank"
          className={cn(
            "group flex items-center gap-3.5 rounded-xl border border-border bg-card p-4 text-left transition-colors",
            "hover:border-primary-soft-2 hover:bg-card-2"
          )}
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
            <ShieldCheck className="size-4" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold text-foreground">
              Privacy Policy
            </span>
            <span className="mt-0.5 block text-xs text-muted-foreground">
              Review our privacy practices
            </span>
          </span>
          <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>

        {/* Card 3: Terms & Conditions */}
        <Link
          href="/terms"
          target="_blank"
          className={cn(
            "group flex items-center gap-3.5 rounded-xl border border-border bg-card p-4 text-left transition-colors",
            "hover:border-primary-soft-2 hover:bg-card-2"
          )}
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
            <FileText className="size-4" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold text-foreground">
              Terms & Conditions
            </span>
            <span className="mt-0.5 block text-xs text-muted-foreground">
              Rules and guidelines for service usage
            </span>
          </span>
          <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
