import { useState } from "react";

const WEB3FORMS_KEY = "25c59612-4e04-431c-af5f-1d9e43c38d2f";

export default function Feedback() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const formData = new FormData();

      formData.append("access_key", WEB3FORMS_KEY);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);

      // Optional information
      formData.append(
        "subject",
        "New Portfolio Feedback"
      );

      formData.append(
        "from_name",
        "Satyam Portfolio"
      );

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error(result);
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="feedback"
      className="w-full min-h-screen bg-slate-950 py-20 px-5 flex items-center"
    >
      <div className="w-full max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="text-cyan-400 font-semibold tracking-[0.25em] text-sm">
            FEEDBACK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Share Your Thoughts
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Found something to improve, have a suggestion, or
            simply want to say hello? I'd love to hear from you.
          </p>

        </div>

        {/* Feedback Card */}
        <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-xl bg-slate-950 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl bg-slate-950 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Feedback
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your feedback here..."
                rows={6}
                required
                className="w-full rounded-xl bg-slate-950 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition duration-300 shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending"
                ? "Sending..."
                : "Send Feedback"}
            </button>

            {/* Success Message */}
            {status === "success" && (
              <div className="text-center rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3">
                <p className="text-green-400 font-medium">
                  ✓ Thank you for your feedback!
                </p>

                <p className="text-green-400/70 text-sm mt-1">
                  Your message has been sent successfully.
                </p>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="text-center rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3">
                <p className="text-red-400 font-medium">
                  ✕ Something went wrong.
                </p>

                <p className="text-red-400/70 text-sm mt-1">
                  Please try again later.
                </p>
              </div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}