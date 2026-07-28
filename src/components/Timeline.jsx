import { experience, education } from '../data';

function TimelineItem({ item, isLast }) {
  return (
    <div className="relative pl-10 pb-8">
      {/* Teal node */}
      <div className="absolute left-[10px] top-1 w-3 h-3 rounded-full border-2 border-teal bg-panel z-10" />

      {/* PCB trace line (hidden for last item) */}
      {!isLast && (
        <div
          className="absolute left-[15px] top-4 bottom-0 w-0.5"
          style={{
            background: `repeating-linear-gradient(to bottom, #2A3040 0px, #2A3040 8px, transparent 8px, transparent 12px)`,
          }}
        />
      )}

      {/* Content */}
      <div>
        <h3 className="font-display text-base font-semibold text-text-primary">
          {item.role || item.degree}
        </h3>
        <div className="flex flex-wrap items-center gap-2 mt-0.5 mb-2">
          <span className="font-mono text-xs text-amber">{item.organization || item.institution}</span>
          <span className="text-border">•</span>
          <span className="font-mono text-xs text-text-secondary">{item.period}</span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-xs text-amber tracking-widest uppercase">// Experience</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div>
            {experience.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-xs text-amber tracking-widest uppercase">// Education</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div>
            {education.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                isLast={i === education.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
