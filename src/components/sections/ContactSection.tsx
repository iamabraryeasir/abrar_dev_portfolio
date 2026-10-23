"use client";

import { useForm } from "@tanstack/react-form";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui";
import { PERSONAL_INFO } from "@/lib/data";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.whatsapp);
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2000);
  };

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      setIsSubmitting(true);
      setErrorMessage(null);

      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim() || "";

      // In local dev without a key, provide helpful feedback so the user can test the UI flow
      if (!accessKey) {
        console.warn(
          "Web3Forms: NEXT_PUBLIC_WEB3FORMS_KEY is empty in .env.local. Add your free key from https://web3forms.com to receive live emails.",
        );
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSubmitted(true);
        form.reset();
        setIsSubmitting(false);
        return;
      }

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: value.name,
            email: value.email,
            message: value.message,
            subject: `New Project Inquiry from ${value.name} (Portfolio)`,
            from_name: "Portfolio Contact Inquiry",
          }),
        });

        const data = await response.json();

        if (data.success) {
          setSubmitted(true);
          form.reset();
        } else {
          setErrorMessage(
            data.message ||
              "Failed to deliver message. Please try again or reach out directly.",
          );
        }
      } catch (err) {
        console.error("Web3Forms submission error:", err);
        setErrorMessage(
          `Unable to send message right now. Please email directly at ${PERSONAL_INFO.email}`,
        );
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-20 sm:py-28 lg:py-32 bg-alabaster border-t border-[#E2E2DE]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column (6 cols): Massive Typographic Prompt & Direct Channels */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E04D2D]" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#686A6C]">
                  04 / Direct Inquiries
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1C20] leading-[1.05] tracking-tight">
                HAVE AN IDEA? <br />
                <span className="italic font-normal text-[#E04D2D]">
                  LET&apos;S BUILD IT.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-[#686A6C] leading-relaxed max-w-lg">
                Whether you need a full-stack platform architected from scratch,
                a design-system overhaul, or performance optimization,
                let&apos;s build something extraordinary together.
              </p>
            </div>

            {/* Direct Connect Clickable Cards */}
            <div className="mt-8 sm:mt-10 space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Email Card */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group relative flex flex-col justify-between rounded-2xl border border-[#E2E2DE] bg-white p-4 sm:p-5 transition-all duration-300 hover:border-[#E04D2D] hover:shadow-md"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-alabaster text-[#1A1C20] group-hover:bg-[#E04D2D] group-hover:text-white transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        aria-label="Copy email address"
                        title={copiedEmail ? "Copied!" : "Copy email address"}
                        className={`flex h-8 items-center gap-1 px-2.5 rounded-lg border text-xs font-mono transition-all z-10 ${
                          copiedEmail
                            ? "border-emerald-300 bg-emerald-50 text-emerald-700 font-semibold"
                            : "border-[#E2E2DE] bg-alabaster text-[#686A6C] hover:border-[#1A1C20] hover:bg-white hover:text-[#1A1C20]"
                        }`}
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                            <span className="text-[11px] font-sans">
                              Copied!
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span className="text-[11px] font-sans">Copy</span>
                          </>
                        )}
                      </button>
                      <div className="flex h-8 w-8 items-center justify-center text-[#686A6C] group-hover:text-[#E04D2D] transition-colors">
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#686A6C] uppercase font-mono tracking-wider">
                      Email Me
                    </div>
                    <div className="text-sm font-medium text-[#1A1C20] group-hover:text-[#E04D2D] transition-colors truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between rounded-2xl border border-[#E2E2DE] bg-white p-4 sm:p-5 transition-all duration-300 hover:border-[#E04D2D] hover:shadow-md"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-alabaster text-[#1A1C20] group-hover:bg-[#E04D2D] group-hover:text-white transition-colors">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={handleCopyWhatsApp}
                        aria-label="Copy WhatsApp number"
                        title={
                          copiedWhatsApp ? "Copied!" : "Copy WhatsApp number"
                        }
                        className={`flex h-8 items-center gap-1 px-2.5 rounded-lg border text-xs font-mono transition-all z-10 ${
                          copiedWhatsApp
                            ? "border-emerald-300 bg-emerald-50 text-emerald-700 font-semibold"
                            : "border-[#E2E2DE] bg-alabaster text-[#686A6C] hover:border-[#1A1C20] hover:bg-white hover:text-[#1A1C20]"
                        }`}
                      >
                        {copiedWhatsApp ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                            <span className="text-[11px] font-sans">
                              Copied!
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span className="text-[11px] font-sans">Copy</span>
                          </>
                        )}
                      </button>
                      <div className="flex h-8 w-8 items-center justify-center text-[#686A6C] group-hover:text-[#E04D2D] transition-colors">
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#686A6C] uppercase font-mono tracking-wider">
                      WhatsApp
                    </div>
                    <div className="text-sm font-medium text-[#1A1C20] group-hover:text-[#E04D2D] transition-colors">
                      Chat on WhatsApp
                    </div>
                  </div>
                </a>
              </div>

              {/* Location & Availability Card */}
              <div className="rounded-2xl border border-[#E2E2DE] bg-white p-4 sm:p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-alabaster text-[#1A1C20]">
                    <MapPin className="h-5 w-5 text-[#E04D2D]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#686A6C] uppercase font-mono tracking-wider">
                      Location & Timezone
                    </div>
                    <div className="text-sm sm:text-base font-medium text-[#1A1C20]">
                      {PERSONAL_INFO.location} &bull; Remote Worldwide
                    </div>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-mono text-emerald-700 border border-emerald-200/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): TanStack Form Implementation */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-[#E2E2DE] bg-white p-6 sm:p-8 lg:p-10 shadow-lg shadow-[#1A1C20]/5 h-full flex flex-col justify-between">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1C20] tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-[#686A6C] mb-8">
                Fill in the details below. I respond to all inquiries within 24
                hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8 text-center"
                >
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600 mb-3" />
                  <h4 className="font-serif text-2xl text-[#1A1C20]">
                    Thank you!
                  </h4>
                  <p className="mt-2 text-sm text-[#686A6C]">
                    Your inquiry has been received. I will review it and get
                    back to you shortly.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        form.reset();
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                  }}
                  className="space-y-5"
                >
                  <form.Field
                    name="name"
                    validators={{
                      onChange: ({ value }) =>
                        !value || value.length < 2
                          ? "Please provide your name"
                          : undefined,
                    }}
                  >
                    {(field) => (
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-mono uppercase tracking-wider text-[#1A1C20] mb-2"
                        >
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="e.g. Elena Vance"
                          className="w-full rounded-xl border border-[#E2E2DE] bg-alabaster px-4 py-3 text-sm text-[#1A1C20] placeholder-[#A2A4A6] transition-colors focus:border-[#E04D2D] focus:bg-white focus:outline-none"
                        />
                        {field.state.meta.errors ? (
                          <p className="mt-1 text-xs text-[#E04D2D]">
                            {field.state.meta.errors.join(", ")}
                          </p>
                        ) : null}
                      </div>
                    )}
                  </form.Field>

                  <form.Field
                    name="email"
                    validators={{
                      onChange: ({ value }) =>
                        !value || !value.includes("@")
                          ? "Please enter a valid email address"
                          : undefined,
                    }}
                  >
                    {(field) => (
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-mono uppercase tracking-wider text-[#1A1C20] mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          name={field.name}
                          type="email"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="elena@company.com"
                          className="w-full rounded-xl border border-[#E2E2DE] bg-alabaster px-4 py-3 text-sm text-[#1A1C20] placeholder-[#A2A4A6] transition-colors focus:border-[#E04D2D] focus:bg-white focus:outline-none"
                        />
                        {field.state.meta.errors ? (
                          <p className="mt-1 text-xs text-[#E04D2D]">
                            {field.state.meta.errors.join(", ")}
                          </p>
                        ) : null}
                      </div>
                    )}
                  </form.Field>

                  <form.Field
                    name="message"
                    validators={{
                      onChange: ({ value }) =>
                        !value || value.length < 10
                          ? "Please enter at least 10 characters"
                          : undefined,
                    }}
                  >
                    {(field) => (
                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-xs font-mono uppercase tracking-wider text-[#1A1C20] mb-2"
                        >
                          Project Details / Scope *
                        </label>
                        <textarea
                          id="contact-message"
                          name={field.name}
                          rows={4}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Tell me about your product, timeline, or engineering goals..."
                          className="w-full resize-none rounded-xl border border-[#E2E2DE] bg-alabaster px-4 py-3 text-sm text-[#1A1C20] placeholder-[#A2A4A6] transition-colors focus:border-[#E04D2D] focus:bg-white focus:outline-none"
                        />
                        {field.state.meta.errors ? (
                          <p className="mt-1 text-xs text-[#E04D2D]">
                            {field.state.meta.errors.join(", ")}
                          </p>
                        ) : null}
                      </div>
                    )}
                  </form.Field>

                  {errorMessage && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="filled"
                    size="md"
                    disabled={isSubmitting}
                    icon={
                      !isSubmitting ? <Send className="h-4 w-4" /> : undefined
                    }
                    className="w-full h-12"
                  >
                    {isSubmitting
                      ? "Sending inquiry..."
                      : "Submit Project Inquiry"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
