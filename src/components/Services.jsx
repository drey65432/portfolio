import { services } from '../data';

const ServiceIcon = ({ type, className = '' }) => {
  const icons = {
    'Data Science': (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M21 5c0 1.66-4 3-9 3S3 6.66 3 5s4-3 9-3 9 1.34 9 3" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    'Mobile App Development': (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
        <line x1="8" y1="6" x2="16" y2="6" />
      </svg>
    ),
    'Web Development': (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    'IoT & Embedded Systems': (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="2" x2="9" y2="4" />
        <line x1="15" y1="2" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="22" />
        <line x1="15" y1="20" x2="15" y2="22" />
        <line x1="2" y1="9" x2="4" y2="9" />
        <line x1="2" y1="15" x2="4" y2="15" />
        <line x1="20" y1="9" x2="22" y2="9" />
        <line x1="20" y1="15" x2="22" y2="15" />
      </svg>
    ),
  };
  return icons[type] || null;
};

export default function Services() {
  return (
    <section id="services" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-amber tracking-widest uppercase">// System Capabilities</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-border rounded-sm overflow-hidden">
          {services.map((service, i) => (
            <div
              key={i}
              className={`relative p-6 md:p-8 group hover:bg-panel transition-colors duration-300 ${
                i < 2 ? 'border-b border-border' : ''
              } ${i % 2 === 0 ? 'sm:border-r border-border' : ''}`}
            >
              {/* Top row: icon + status */}
              <div className="flex items-start justify-between mb-5">
                {/* Icon in a bordered box */}
                <div className="w-12 h-12 flex items-center justify-center border border-border rounded-sm group-hover:border-amber/50 transition-colors duration-300">
                  <ServiceIcon type={service.title} className="w-6 h-6 text-text-secondary group-hover:text-amber transition-colors duration-300" />
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    <span className="w-1 h-3 bg-teal/70 rounded-sm" />
                    <span className="w-1 h-3 bg-teal/50 rounded-sm" />
                    <span className="w-1 h-3 bg-teal/30 rounded-sm" />
                    <span className="w-1 h-3 bg-border rounded-sm" />
                  </div>
                  <span className="font-mono text-[9px] text-teal tracking-widest uppercase">Active</span>
                </div>
              </div>

              {/* Module ID */}
              <span className="font-mono text-[10px] text-text-secondary tracking-widest">
                MODULE_{String(i + 1).padStart(2, '0')}
              </span>

              {/* Title */}
              <h3 className="font-display text-base font-semibold text-text-primary mt-1 mb-3 group-hover:text-amber transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Bottom scan line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/0 to-transparent group-hover:via-amber/30 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
