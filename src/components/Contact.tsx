import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-neutral-50 py-28">
      <div className="mx-auto max-w-3xl px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900">
            Contact Me
          </h2>
          <p className="mt-4 text-neutral-600">
            Have a project in mind or just want to say hi? Fill out the form below or reach me through my social links.
          </p>
        </div>

        {/* Contact Form */}
        <form
          className="grid grid-cols-1 gap-6"
          action="mailto:your-email@example.com"
          method="POST"
          encType="text/plain"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />
          <button
            type="submit"
            className="w-full bg-neutral-900 text-white py-3 rounded-lg font-semibold hover:bg-neutral-800 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6 text-neutral-700">
          <a
            href="https://github.com/your-username"
            target="_blank"
            className="hover:text-neutral-900 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            className="hover:text-neutral-900 transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-neutral-900 transition"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
