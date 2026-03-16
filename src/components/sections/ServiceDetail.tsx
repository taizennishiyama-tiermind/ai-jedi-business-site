import { motion } from 'framer-motion'
import type { ServiceData } from '@/data/services'

interface ServiceDetailProps {
  readonly service: ServiceData
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <section className="doc-section mb-24" id={service.id}>

      {/* ── Chapter header: clean & bold ── */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center shadow-lg shadow-gray-800/20">
            <span className="text-[14px] font-bold text-white">{service.num}</span>
          </div>
          <span className="text-[12px] font-semibold text-gray-400 tracking-[0.1em] uppercase">
            Service
          </span>
        </div>
        <h2 className="text-[clamp(26px,3.2vw,38px)] font-black text-gray-900 leading-[1.15] tracking-tight mb-3">
          {service.title}
        </h2>
        <p className="text-[17px] sm:text-[19px] text-gray-500 font-medium leading-[1.6] max-w-xl">
          {service.tagline}
        </p>
      </motion.div>

      {/* ── Overview: one paragraph, no cards ── */}
      <motion.p
        className="text-[15px] text-gray-600 leading-[1.8] mb-10 max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 0.35 }}
      >
        {service.overview}
      </motion.p>

      {/* ── Key points: simple inline tags ── */}
      <motion.div
        className="flex flex-wrap gap-2 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08, duration: 0.3 }}
      >
        {service.keyPoints.map((point) => (
          <span
            key={point}
            className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] text-gray-600 bg-gray-50 border border-gray-200 px-3.5 py-2 rounded-full"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round">
              <path d="M2 5l2.5 2.5L8 3" />
            </svg>
            {point}
          </span>
        ))}
      </motion.div>

      {/* ── Training packages (svc-training only) ── */}
      {service.trainingPackages && service.trainingPackages.length > 0 && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.09, duration: 0.35 }}
        >
          <h3 className="text-[13px] font-bold text-gray-400 tracking-[0.08em] uppercase mb-5">
            用意されている研修パッケージ
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.trainingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-gray-300 hover:shadow-md hover:shadow-black/[0.03] transition-all"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-6 h-6 shrink-0 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h8v6H2z" rx="1" />
                      <path d="M5 6h2" />
                    </svg>
                  </div>
                  <h4 className="text-[14px] font-bold text-gray-800 leading-tight">{pkg.name}</h4>
                </div>
                <p className="text-[12px] text-gray-400 leading-[1.6] pl-[34px]">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ── Flow diagram: horizontal timeline ── */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.35 }}
      >
        <h3 className="text-[13px] font-bold text-gray-400 tracking-[0.08em] uppercase mb-5">
          進め方
        </h3>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line (desktop) / vertical line (mobile) */}
          <div className="hidden sm:block absolute top-[18px] left-0 right-0 h-px bg-gray-200" />
          <div className="sm:hidden absolute left-[18px] top-0 bottom-0 w-px bg-gray-200" />

          <div className="flex flex-col sm:flex-row gap-0">
            {service.flow.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative flex-1 min-w-0 pl-12 sm:pl-0 pb-8 sm:pb-0 sm:pr-4"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 + i * 0.06, duration: 0.3 }}
              >
                {/* Dot */}
                <div className="absolute left-[10px] sm:left-0 top-0 sm:top-[10px] w-[18px] h-[18px] bg-white border-[2.5px] border-gray-800 rounded-full z-10" />

                <div className="sm:pt-8">
                  <div className="text-[11px] font-bold text-gray-300 mb-1">
                    Step {i + 1}
                  </div>
                  <h4 className="text-[15px] font-bold text-gray-800 leading-snug mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-[12px] text-gray-400 leading-[1.65]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Case studies: visual before/after + story ── */}
      {service.caseStudies.length > 0 && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14, duration: 0.35 }}
        >
          <h3 className="text-[13px] font-bold text-gray-400 tracking-[0.08em] uppercase mb-5">
            導入事例
          </h3>

          <div className="flex flex-col gap-5">
            {service.caseStudies.map((cs) => (
              <div
                key={cs.client}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="px-6 pt-5 pb-3 border-b border-gray-100">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h4 className="text-[17px] font-bold text-gray-800">{cs.client}</h4>
                    {cs.label && (
                      <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                        {cs.label}
                      </span>
                    )}
                  </div>
                </div>

                {/* Before → After diagram */}
                {cs.beforeAfter && (
                  <div className="px-6 py-5">
                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-0 items-stretch">
                      <div className="bg-red-50/60 border border-red-100 rounded-xl px-4 py-3.5">
                        <div className="text-[9px] font-bold text-red-400 uppercase tracking-widest mb-2">BEFORE</div>
                        <p className="text-[13px] text-gray-600 leading-[1.7]">{cs.beforeAfter.before}</p>
                      </div>
                      <div className="flex items-center justify-center py-2 sm:py-0 sm:px-3">
                        <svg className="w-6 h-6 text-gray-300 rotate-90 sm:rotate-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </div>
                      <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl px-4 py-3.5">
                        <div className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest mb-2">AFTER</div>
                        <p className="text-[13px] text-gray-800 leading-[1.7] font-semibold">{cs.beforeAfter.after}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Summary + demo link */}
                <div className="px-6 pb-4">
                  <p className="text-[13px] text-gray-500 leading-[1.7]">{cs.summary}</p>
                  {cs.demoScrollId && (
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.querySelector(`#${cs.demoScrollId}`)
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="2" width="12" height="10" rx="1.5" />
                        <path d="M5.5 7l1.5 1.5L10 6" />
                      </svg>
                      アプリのデモを見る
                    </button>
                  )}
                </div>

                {/* Highlights */}
                {cs.highlights && cs.highlights.length > 0 && (
                  <div className="px-6 pb-5">
                    <div className="flex flex-col gap-1.5">
                      {cs.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <svg className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-500" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M3 7l3 3L11 4" />
                          </svg>
                          <span className="text-[12px] text-gray-600 leading-[1.6]">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ── Deliverables: simple list ── */}
      {service.deliverables && service.deliverables.length > 0 && (
        <motion.div
          className="bg-gray-900 rounded-2xl px-6 py-6"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16, duration: 0.3 }}
        >
          <div className="text-[11px] font-bold text-emerald-400 tracking-[0.1em] uppercase mb-4">
            納品物
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.deliverables.map((d) => (
              <div key={d} className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 shrink-0 text-emerald-400" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 7l3 3L11 4" />
                </svg>
                <span className="text-[13px] text-white/80 leading-snug">{d}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  )
}
