import { motion } from 'framer-motion'

interface StepDetailProps {
  readonly id: string
  readonly num: number
  readonly eyebrow: string
  readonly title: string
  readonly lead: string
  readonly role: string
  readonly content: React.ReactNode
  readonly afterText: string
  readonly deliverables: readonly string[]
  readonly kpis?: readonly string[]
  readonly caseStudies?: React.ReactNode
}

export function StepDetail({
  id, num, eyebrow, title, lead, role, content, afterText, deliverables, kpis, caseStudies,
}: StepDetailProps) {
  return (
    <section className="doc-section mb-16" id={id}>
      {/* Section header with clear separator */}
      <motion.div
        className="border-b border-gray-200 pb-6 mb-8"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="w-10 h-10 shrink-0 bg-gray-800 rounded-xl flex items-center justify-center text-white text-[15px] font-bold">
            {num}
          </div>
          <div className="text-[12px] font-semibold text-gray-400 tracking-[0.12em] uppercase">
            {eyebrow}
          </div>
        </div>
        <h2 className="text-[clamp(20px,2.4vw,28px)] font-extrabold text-gray-800 leading-[1.3] tracking-tight mb-2">
          {title}
        </h2>
        <p className="text-[15px] text-gray-500 leading-[1.7] max-w-[640px] font-normal">{lead}</p>
      </motion.div>

      {/* Role */}
      <motion.div
        className="bg-gray-800 rounded-2xl px-6 py-5 mb-5"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 0.3 }}
      >
        <div className="text-[10px] font-semibold text-white/40 tracking-[0.1em] uppercase mb-1.5">役割</div>
        <p className="text-[15px] font-medium text-white/90 leading-[1.65]">{role}</p>
      </motion.div>

      {/* Content */}
      <motion.div
        className="rounded-2xl border border-gray-200 bg-white px-6 py-5 mb-5"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        {content}
      </motion.div>

      {/* Goal */}
      <motion.div
        className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 mb-5"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.3 }}
      >
        <div className="text-[10px] font-semibold text-gray-400 tracking-[0.1em] uppercase mb-1.5">ゴール</div>
        <p className="text-[14px] text-gray-600 leading-[1.75] font-normal">{afterText}</p>
      </motion.div>

      {/* Deliverables as tags */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <div className="text-[10px] font-semibold text-gray-400 tracking-[0.1em] uppercase mb-2.5">成果物</div>
        <div className="flex flex-wrap gap-2">
          {deliverables.map((d) => (
            <span key={d} className="inline-block px-3.5 py-1.5 bg-white border border-gray-200 rounded-lg text-[13px] text-gray-600 font-normal">
              {d}
            </span>
          ))}
        </div>
      </motion.div>

      {kpis && (
        <div className="flex flex-wrap gap-2 mb-8">
          {kpis.map((kpi) => (
            <span key={kpi} className="inline-block px-3.5 py-1.5 bg-gray-100 rounded-full text-[12px] text-gray-500 font-medium">
              {kpi}
            </span>
          ))}
        </div>
      )}

      {caseStudies && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.35 }}
        >
          <div className="text-[11px] font-semibold text-gray-400 tracking-[0.15em] uppercase mb-4">
            事例
          </div>
          {caseStudies}
        </motion.div>
      )}
    </section>
  )
}
