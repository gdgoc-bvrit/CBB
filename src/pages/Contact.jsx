import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import BorderedButton from "../components/BorderedButton";
import Footer from "../components/Footer";
import HeadingNText from "../components/HeadingNText";
import { usePageMeta } from "../hooks/usePageMeta";

const EMAILJS_SERVICE_ID = "service_9bzkvax";
const EMAILJS_TEMPLATE_ID = "template_3imrlsh";
const EMAILJS_PUBLIC_KEY = "my3RAeh-wLHVI6_rA";
const COOLDOWN_MS = 30_000;

function Contact() {
  usePageMeta("Contact · CBB", "Get in touch with the Coding Brigade BVRIT team.");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const lastSentAt = useRef(0);
  const honeypotRef = useRef(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // Bots fill hidden fields; humans don't.
    if (honeypotRef.current?.value) return;

    // Light client-side throttle to blunt casual form flooding.
    if (Date.now() - lastSentAt.current < COOLDOWN_MS) {
      setStatus("Please wait a moment before sending another message.");
      return;
    }

    setLoading(true);
    setStatus("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      lastSentAt.current = Date.now();
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex w-full items-center justify-center bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 [background-size:40px_40px] sm:[background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      {/* Radial mask effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Main content */}
      <div className="relative z-20 w-full text-white">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-8 mb-12">

          <HeadingNText level={1} title="Contact Us">
            Reach out to the CBB team for collaborations, queries, or just to say hi!
          </HeadingNText>

          <form
            onSubmit={handleSubmit}
            className="relative mt-8 sm:mt-12 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl bg-[#0e0e0e] border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg flex flex-col gap-3 sm:gap-4 text-left"
          >
            {/* Honeypot — visually hidden, off the tab order */}
            <input
              ref={honeypotRef}
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            {/* Name Field */}
            <div>
              <label className="block text-neutral-400 mb-2 text-xs sm:text-sm">Name</label>
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 rounded-md bg-black border border-neutral-700 text-white placeholder-neutral-500 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-neutral-400 mb-2 text-xs sm:text-sm">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 rounded-md bg-black border border-neutral-700 text-white placeholder-neutral-500 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-neutral-400 mb-2 text-xs sm:text-sm">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 rounded-md bg-black border border-neutral-700 text-white placeholder-neutral-500 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none sm:resize-y"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            {/* Status Message */}
            {status && (
              <div
                role="status"
                aria-live="polite"
                className={`text-center text-xs sm:text-sm font-medium ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}
              >
                {status}
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-2 flex justify-center">
              <BorderedButton type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </BorderedButton>
            </div>
          </form>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Contact;