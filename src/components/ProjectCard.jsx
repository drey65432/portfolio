export default function ProjectCard({ project }) {
  return (
    <div className="viewfinder group bg-panel rounded-sm p-5 hover:bg-panel-hover transition-colors duration-300">
      {/* Bracket bottom element (needed for CSS pseudo-elements) */}
      <div className="bracket-bottom" />

      {/* Project image */}
      <div className="relative mb-4 overflow-hidden rounded-sm">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-44 object-cover"
          loading="lazy"
        />
        {/* Geofencing radius overlay for the geofencing project */}
        {project.hasGeofencing && (
          <div className="absolute bottom-3 right-3 flex flex-col items-center">
            <div className="geo-pulse relative w-16 h-16 rounded-full border-2 border-dashed border-teal flex items-center justify-center bg-teal/5">
              <div className="w-2 h-2 rounded-full bg-teal" />
            </div>
            <span className="font-mono text-[10px] text-teal mt-1 bg-panel/80 px-1.5 py-0.5 rounded-sm">
              50m radius
            </span>
          </div>
        )}
      </div>

      {/* Category */}
      <span className="font-mono text-[11px] text-amber tracking-widest uppercase">
        {project.category}
      </span>

      {/* Title */}
      <h3 className="font-display text-lg font-semibold text-text-primary mt-1.5 mb-2">
        {project.title}
      </h3>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] px-2 py-0.5 border border-border text-text-secondary rounded-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-3">
        {project.description}
      </p>

      {/* Highlights with dash bullets */}
      <ul className="space-y-1">
        {project.highlights.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
            <span className="text-amber mt-0.5 shrink-0">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
