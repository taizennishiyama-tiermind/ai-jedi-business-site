import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { useCallback } from 'react'

export function ServicesOverview() {
  const handleClick = useCallback((id: string) => {
    const el = document.querySelector(`#${id}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <section className="doc-section mb-16" id="services">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <h2 className="text-[clamp(22px,2.8vw,32px)] font-extrabold text-gray-800 leading-[1.25] tracking-tight mb-3">
          5つのサービス領域
        </h2>
        <p className="text-[15px] text-gray-500 leading-[1.7] font-normal mb-10">
          AI JEDIは、戦略から開発、研修、人材、顧問まで、AIを事業成果につなげるために必要な機能をまとめて引き受けます。
        </p>
      </motion.div>

      {/* Visual flow: vertical storybook-style */}
      <div className="relative">
        {/* Vertical connecting line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200" />

        <div className="flex flex-col gap-0">
          {services.map((s, i) => (
            <motion.button
              key={s.id}
              type="button"
              onClick={() => handleClick(s.id)}
              className="group relative text-left pl-16 sm:pl-20 pr-4 py-6 hover:bg-gray-50/60 rounded-2xl transition-colors cursor-pointer"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
            >
              {/* Circle marker on the line */}
              <div className="absolute left-[14px] sm:left-[22px] top-1/2 -translate-y-1/2 w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center shadow-md shadow-gray-800/20 group-hover:scale-110 transition-transform z-10">
                <span className="text-[11px] font-bold text-white">{s.num}</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-800 leading-tight mb-1 group-hover:text-gray-900 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-gray-400 leading-[1.6] font-normal">
                    {s.subtitle}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 shrink-0 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all"
                  viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                >
                  <path d="M7 4l6 6-6 6" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <motion.p
        className="text-center text-[13px] text-gray-400 mt-8 font-normal"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        各サービスの詳細は下にスクロールしてご覧ください
      </motion.p>
    </section>
  )
}
