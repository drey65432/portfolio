import { projects } from '../data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-amber tracking-widest uppercase">// Projects</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
