const projects = [
  {
    title: "Aquie",
    description:
      "My personal website built with React, Tailwind CSS, and Vite.",
    link: "https://github.com/aquie00t/aquie-client",
  },
  {
    title: "TDN API",
    description:
      "Core backend for Turkish Developer Network (TDN), a community and sharing platform for developers. (API)",
    link: "https://github.com/turkey-developer-network/tdn-api",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-6xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-800 p-6 rounded-lg hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
