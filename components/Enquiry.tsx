"use client";

import { FormEvent, useState } from "react";

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      country: formData.get("country")?.toString().trim() || "",
      phone: formData.get("phone")?.toString().trim() || "",
      people: formData.get("people")?.toString() || "",
      message: formData.get("message")?.toString().trim() || "",
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit enquiry");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);

      setError(
        "We couldn't send your enquiry right now. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="enquire"
      className="bg-[#1f1c19] px-5 py-20 text-white sm:px-6 sm:py-24 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* Intro */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c96a3d] sm:text-sm">
              Enquire
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Curious about
              <br />
              living local?
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg md:mt-8">
              Tell us a little about yourself and what you're looking for.
              We'll get back to you with the next steps.
            </p>

            <div className="mt-10 border-t border-white/10 pt-5 sm:mt-12 sm:pt-6">
              <p className="text-xs text-white/40 sm:text-sm">
                Jaipur · Rajasthan · India
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex min-h-[400px] items-center sm:min-h-[500px]">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c96a3d] sm:text-sm">
                    Thank you
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                    We've received your enquiry.
                  </h3>

                  <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                    We'll be in touch with you soon with more information
                    about the experience.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-8">

                {/* Name + Email */}
                <div className="grid gap-7 sm:gap-8 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs text-white/60 sm:text-sm"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-white/30 focus:border-white sm:text-lg"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs text-white/60 sm:text-sm"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-white/30 focus:border-white sm:text-lg"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Country + Phone */}
                <div className="grid gap-7 sm:gap-8 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="country"
                      className="mb-2 block text-xs text-white/60 sm:text-sm"
                    >
                      Country
                    </label>

                    <input
                      id="country"
                      name="country"
                      type="text"
                      autoComplete="country-name"
                      className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-white/30 focus:border-white sm:text-lg"
                      placeholder="Where are you from?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs text-white/60 sm:text-sm"
                    >
                      WhatsApp / Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-white/30 focus:border-white sm:text-lg"
                      placeholder="+XX XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Number of people */}
                <div>
                  <label
                    htmlFor="people"
                    className="mb-2 block text-xs text-white/60 sm:text-sm"
                  >
                    Number of people
                  </label>

                  <select
                    id="people"
                    name="people"
                    defaultValue=""
                    required
                    className="w-full border-b border-white/20 bg-[#1f1c19] px-0 py-3 text-base text-white outline-none transition focus:border-white sm:text-lg"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5+">5+ people</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs text-white/60 sm:text-sm"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-white/30 focus:border-white sm:text-lg"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>

                {/* Error */}
                {error && (
                  <p
                    role="alert"
                    className="text-sm leading-relaxed text-red-300"
                  >
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-[#c96a3d] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b85d34] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:text-base"
                >
                  {submitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}