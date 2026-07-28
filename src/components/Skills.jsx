import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-amber tracking-widest uppercase">// System Modules</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              {/* Category label */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                <span className="font-mono text-xs text-teal tracking-wider uppercase">
                  {category}
                </span>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 border border-border text-text-secondary hover:border-text-secondary hover:text-text-primary transition-colors duration-200 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
