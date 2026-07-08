import Link from "next/link";
import {
  FileText,
  Mail,
  ShieldCheck,
  Clock,
  ExternalLink,
  MessageSquare,
  HelpCircle
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Support & Resources
        </h1>
        <p className="text-sm text-muted-foreground">
          Access legal policies, WhatsApp compliance guidelines, and contact information.
        </p>
      </div>

      {/* Grid container */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Legal & Compliance Card */}
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <CardTitle>Legal & Compliance</CardTitle>
            </div>
            <CardDescription>
              Review our terms of service and privacy practices for Meta compliance and verification.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Link
                href="/privacy"
                target="_blank"
                className="flex items-center justify-between rounded-lg border border-border bg-card-2 p-3.5 hover:bg-primary-soft-2 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">Privacy Policy</p>
                    <p className="text-xs text-muted-foreground">How we handle and protect user data</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>

              <Link
                href="/terms"
                target="_blank"
                className="flex items-center justify-between rounded-lg border border-border bg-card-2 p-3.5 hover:bg-primary-soft-2 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">Terms & Conditions</p>
                    <p className="text-xs text-muted-foreground">Rules and guidelines for service usage</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Contact Us Card */}
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <CardTitle>Contact Us</CardTitle>
            </div>
            <CardDescription>
              Get in touch with our operations team for technical assistance or billing inquiries.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email Support</p>
                  <a
                    href="mailto:support@strivecrm.com"
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    support@strivecrm.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-3">
                <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Support Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM UTC
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Meta Verification Notice */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-amber-500" />
            <CardTitle>Meta Business Verification Notes</CardTitle>
          </div>
          <CardDescription>
            Information for Meta App Reviewers and CRM Administrators.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            For Meta Business Verification and WhatsApp Business Account reviews, both the Privacy Policy and Terms & Conditions are hosted publicly and do not require user authentication. They can be verified at:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Privacy Policy: <code className="text-primary">/privacy</code>
            </li>
            <li>
              Terms & Conditions: <code className="text-primary">/terms</code>
            </li>
          </ul>
          <p>
            If you need to update these documents, changes can be managed directly in the application's source files. Ensure that the layout retains a valid brand logo and clear links for reviewer navigation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
