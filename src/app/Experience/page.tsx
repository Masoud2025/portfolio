import React from "react";

const timeline = [
  // تجربه شغلی
  {
    type: "job",
    role: "Frontend Developer Intern",
    organization: "Dynavers",
    date: "Jun 2025 - Sep 2025",
    description:
      "Worked on building scalable UI components using Next.js and Tailwind. Collaborated with backend developers to integrate APIs and optimized performance for responsive web apps.",
  },
  {
    type: "job",
    role: "Junior Web Developer",
    organization: "Freelance",
    date: "Jan 2025 - May 2025",
    description:
      "Designed and developed websites for small businesses. Implemented responsive designs, SEO best practices, and interactive UI elements.",
  },

  // تحصیلات
  {
    type: "education",
    role: "Bachelor of Computer Engineering",
    organization: "University Name",
    date: "Sep 2023 - Present",
    description:
      "Studying core computer science courses including data structures, algorithms, and web development. Maintaining a strong GPA while actively working on personal projects.",
  },
  {
    type: "education",
    role: "High School Diploma - IT & Database Design",
    organization: "High School Name",
    date: "Sep 2020 - Jun 2023",
    description:
      "Focused on database design, IT fundamentals, and programming. Developed small projects and gained foundational skills in web development.",
  },

  // دوره و کلاس
  {
    type: "course",
    role: "Advanced Web Development Course",
    organization: "Online Bootcamp / Udemy",
    date: "Mar 2025 - May 2025",
    description:
      "Learned advanced Next.js, React, Tailwind CSS, and full-stack project implementation.",
  },
  {
    type: "course",
    role: "Data Structures & Algorithms",
    organization: "University Class",
    date: "Sep 2024 - Dec 2024",
    description:
      "Completed intensive coursework on algorithm design, problem-solving, and coding exercises in C++ and JavaScript.",
  },

  // دستاورد
  {
    type: "achievement",
    role: "Top Project Award",
    organization: "University Project Showcase",
    date: "Dec 2024",
    description:
      "Received recognition for best full-stack web project among peers during the annual university showcase.",
  },
  {
    type: "achievement",
    role: "Hackathon Winner",
    organization: "Local Coding Hackathon",
    date: "Nov 2024",
    description:
      "Developed an innovative web application in 48 hours and won 1st place among 20 teams.",
  },
];

export default function ExperiencePage() {
  return (
    <section className="w-full bg-neutral-50 py-28">
      <div className="mx-auto max-w-4xl px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900">
            Experience & Education
          </h1>
          <p className="mt-4 text-neutral-600">
            A timeline of my professional experiences, educational background, courses, and achievements.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="relative border-l-2 border-neutral-300 pl-6 md:pl-10"
            >
              {/* Circle */}
              <div
                className={`absolute -left-3 md:-left-4 top-1 w-6 h-6 rounded-full ${
                  item.type === "job"
                    ? "bg-blue-600"
                    : item.type === "education"
                    ? "bg-green-600"
                    : item.type === "course"
                    ? "bg-yellow-500"
                    : "bg-purple-600"
                }`}
              ></div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-neutral-900">
                {item.role}{" "}
                <span className="text-neutral-500 font-normal">
                  at {item.organization}
                </span>
              </h3>
              <span className="text-sm text-neutral-500">{item.date}</span>
              <p className="mt-2 text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
