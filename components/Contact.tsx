"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

const socialLinks = [
  {
    href: profile.github,
    label: "GitHub",
    hoverClass: "hover:bg-accent hover:text-black",
    icon: (
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.1c-3.19.69-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.68 5.38-5.24 5.66.41.35.78 1.05.78 2.12v3.14c0 .3.2.66.79.55C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
    ),
  },
  {
    href: profile.linkedin,
    label: "LinkedIn",
    hoverClass: "hover:bg-blue-500 hover:text-white",
    icon: (
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    ),
  },
  {
    href: profile.instagram,
    label: "Instagram",
    hoverClass: "hover:bg-pink-500 hover:text-white",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    ),
  },
];

export default function Contact() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const { name, email, subject, message } = form;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError(true);
      return;
    }
    setError(false);

    // No backend wired up yet — falls back to the visitor's mail client.
    // Swap this for a POST to an API route (e.g. with Resend) when ready.
    const body = `From: ${name} (${email})\n\n${message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 max-w-6xl mx-auto border-t border-gray-100 dark:border-gray-800">
      <div ref={revealRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="section-label">Let&apos;s talk</p>
          <h2 className="section-heading mb-4">Get in touch</h2>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-md">
            Have a project in mind, want to collaborate on robotics or open-source, or just want to say hi? Feel
            free to reach out.
          </p>
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-base shrink-0">
                ✉️
              </span>
              {profile.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
              <span className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-base shrink-0">
                📍
              </span>
              {profile.location}
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all ${social.hoverClass}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Right: contact form */}
        <div className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl p-7">
          {sent ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-3">✅</div>
              <p className="font-semibold text-gray-900 dark:text-white mb-1">Message sent!</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-5">Send a message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="f-name" className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                      Name
                    </label>
                    <input
                      id="f-name"
                      type="text"
                      placeholder="Your name"
                      className="form-input"
                      value={form.name}
                      onChange={handleChange("name")}
                    />
                  </div>
                  <div>
                    <label htmlFor="f-email" className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                      Email
                    </label>
                    <input
                      id="f-email"
                      type="email"
                      placeholder="your@email.com"
                      className="form-input"
                      value={form.email}
                      onChange={handleChange("email")}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="f-subject" className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="f-subject"
                    type="text"
                    placeholder="Project idea, collab, etc."
                    className="form-input"
                    value={form.subject}
                    onChange={handleChange("subject")}
                  />
                </div>
                <div>
                  <label htmlFor="f-message" className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="f-message"
                    rows={4}
                    placeholder="Tell me what you're thinking..."
                    className="form-input resize-none"
                    value={form.message}
                    onChange={handleChange("message")}
                  />
                </div>
                {error && <p className="text-xs text-red-500">Please fill in all fields before sending.</p>}
                <button
                  type="submit"
                  className="w-full py-3 bg-accent text-black font-semibold rounded-xl text-sm hover:bg-green-300 transition-colors cursor-pointer"
                >
                  Send message →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
