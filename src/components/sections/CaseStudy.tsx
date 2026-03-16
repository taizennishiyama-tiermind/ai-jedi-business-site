import { motion } from 'framer-motion'

interface CaseStudyProps {
  readonly tags: readonly string[]
  readonly title: string
  readonly quote: string
  readonly result: string
  readonly iframeUrl?: string
  readonly screenshotUrl?: string
  readonly illustration?: string
  readonly deliverySpeed?: string
  readonly flowSteps?: readonly string[]
  readonly caseId?: string
}

export function CaseStudy({ tags, title, quote, result, iframeUrl, screenshotUrl, illustration, deliverySpeed, flowSteps, caseId }: CaseStudyProps) {
  return (
    <motion.div
      id={caseId}
      className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-lg hover:shadow-black/[0.04] transition-all"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      {/* Tags bar */}
      <div className="flex items-center justify-between px-6 pt-5 pb-0">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold text-gray-600 bg-gray-50 border border-gray-100 px-2.5 py-0.5 rounded-full tracking-[0.04em]"
            >
              {tag}
            </span>
          ))}
        </div>
        {deliverySpeed && (
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full">
            {deliverySpeed}
          </span>
        )}
      </div>

      {/* Title + illustration row */}
      <div className="flex items-center gap-4 px-6 pt-3 pb-4">
        <h4 className="flex-1 text-[22px] font-extrabold text-gray-900 leading-tight">
          {title}
        </h4>
        {illustration && (
          <img
            src={illustration}
            alt=""
            className="hidden sm:block w-20 shrink-0 mix-blend-multiply opacity-80 object-contain"
          />
        )}
      </div>

      {/* Before → After flow */}
      <div className="mx-6 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-0 items-stretch">
          {/* Before */}
          <div className="bg-red-50/50 border border-red-100 rounded-xl px-4 py-3.5">
            <div className="text-[9px] font-bold text-red-400 uppercase tracking-widest mb-1.5">BEFORE</div>
            <p className="text-[13px] text-gray-600 leading-[1.7] italic">
              {quote}
            </p>
          </div>
          {/* Arrow */}
          <div className="flex items-center justify-center py-2 sm:py-0 sm:px-3">
            <svg className="w-6 h-6 text-gray-300 rotate-90 sm:rotate-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </div>
          {/* After */}
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl px-4 py-3.5">
            <div className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest mb-1.5">AFTER</div>
            <p className="text-[13px] text-gray-800 leading-[1.7] font-semibold">
              {result}
            </p>
          </div>
        </div>
      </div>

      {/* Flow steps diagram */}
      {flowSteps && flowSteps.length > 0 && (
        <div className="mx-6 mb-5">
          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">実施内容</div>
          <div className="relative pl-5">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gray-200" />
            <div className="flex flex-col gap-2">
              {flowSteps.map((step, i) => (
                <div key={step} className="relative flex items-start gap-3">
                  <div className="absolute left-[-13px] top-[6px] w-[10px] h-[10px] bg-white border-2 border-gray-400 rounded-full z-10" />
                  <span className="text-[10px] font-bold text-gray-300 shrink-0 w-4 mt-0.5">{i + 1}</span>
                  <span className="text-[12px] text-gray-600 leading-[1.6]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Demo embed */}
      {iframeUrl && (
        <div className="mx-6 mb-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
            {/* Browser chrome */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-500 font-mono border border-gray-200 truncate">
                  {iframeUrl.replace(/^https?:\/\//, '')}
                </div>
              </div>
            </div>
            <iframe
              src={iframeUrl}
              className="block border-none w-full"
              style={{ height: 'clamp(480px, 60vw, 720px)' }}
              loading="lazy"
              title={title}
            />
          </div>
        </div>
      )}
      {screenshotUrl && !iframeUrl && (
        <div className="mx-6 mb-6">
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <img src={screenshotUrl} alt={title} className="w-full h-auto block" loading="lazy" />
          </div>
        </div>
      )}
    </motion.div>
  )
}
