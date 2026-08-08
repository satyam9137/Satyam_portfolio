import { useState } from "react";

/**
 * Feedback form. Submissions are sent to your email via Formspree (free tier).
 *
 * SETUP (one-time, ~2 minutes):
 * 1. Go to https://formspree.io and sign up free with your email.
 * 2. Create a new form, name it "Portfolio Feedback".
 * 3. Formspree gives you an endpoint like:
 *      https://formspree.io/f/xxxxxxxx
 * 4. Paste that URL below, replacing FORM_ENDPOINT.
 * 5. Every submission will land in your Formspree dashboard AND your email inbox.
 */
const FORM_ENDPOINT = "https://formspree.io/f/xxxxxxxx"; // <-- replace this

export default function Feedback() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="feedback"
      className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-black py-20 px-6 sm:px-8 lg:px-16 scroll-mt-24"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm">
          Feedback
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
          Share Your Thoughts
        </h2>
        <p className="mt-4 text-gray-400">
          Found something to improve, or just want to say hi? Let me know.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5 text-left">
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-1 block">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition resize-none"
              placeholder="Your feedback..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black shadow-lg shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Feedback"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm text-center">
              Thanks! Your feedback has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}