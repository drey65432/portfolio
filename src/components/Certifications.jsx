import { certifications } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-amber tracking-widest uppercase">// Certifications</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Certs grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="relative bg-panel rounded-sm border border-border hover:border-teal/40 transition-colors duration-300 group overflow-hidden"
            >
              {/* Certificate image */}
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Verified badge overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-panel/85 backdrop-blur-sm px-2.5 py-1 rounded-sm">
                  <span className="w-2 h-2 rounded-full bg-teal" />
                  <span className="font-mono text-[10px] text-teal tracking-widest uppercase">Verified</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="font-display text-base font-semibold text-text-primary mb-1.5">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="font-mono text-[11px] text-amber mb-3">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Corner accent on hover */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-transparent group-hover:border-teal/40 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-transparent group-hover:border-teal/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
