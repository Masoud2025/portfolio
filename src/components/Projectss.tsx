import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce website with product management, cart, and checkout flow.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://your-live-project.com",
    github: "https://github.com/your-username/ecommerce",
  },
  {
    title: "Corporate Website",
    description:
      "Modern corporate website focused on clean UI, performance, and SEO best practices.",
    tech: ["React", "Tailwind", "SEO"],
    live: "#",
    github: "#",
  },
  {
    title: "Admin Dashboard",
    description:
      "Responsive admin panel with authentication, charts, and data visualization.",
    tech: ["React", "API", "Charts"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-gradient-to-b from-white to-neutral-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-28">

        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
            Selected Projects
          </h2>
          <p className="mt-6 text-neutral-600 text-base sm:text-lg">
            A curated selection of web design and development projects focused
            on clean interfaces, performance, and scalability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="absolute -inset-10 bg-gradient-to-br from-neutral-200/40 to-transparent blur-2xl" />
              </div>

              <div className="relative">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-8 flex items-center justify-between">
                  <Link
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 hover:underline"
                  >
                    Live Preview
                    <ExternalLink size={14} />
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-neutral-500 hover:text-neutral-900 transition"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
