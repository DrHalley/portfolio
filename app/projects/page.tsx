import { ProjectCard } from "../components/ProjectCard";

const projects = [
  {
    title: "OpenLink",
    description: "Collect Your Links Onto one Place",
    github: "https://github.com/DrHalley/openlink",
  },
  {
    title: "Shorting",
    description: "Shorten your links",
    github: "https://github.com/DrHalley/shorting",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Projelerim</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
