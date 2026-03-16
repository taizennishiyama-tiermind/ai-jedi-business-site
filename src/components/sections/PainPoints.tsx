import { motion } from 'framer-motion'

const painItems = [
  'AIをやるべきことは分かっているが、何から着手すべきか定まらない',
  '要件定義が長引き、開発が始まる前に失速する',
  '研修をやっても、実務に定着しない',
  'AI人材を採れない、見極められない、足りない',
  '社内の推進責任者が孤立し、壁打ち相手がいない',
  '速く作りたいが、品質・保守性・セキュリティは落とせない',
]

export function PainPoints() {
  return (
    <section className="doc-section mb-16" id="pain">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <h2 className="text-[clamp(22px,2.8vw,32px)] font-extrabold text-gray-800 leading-[1.25] tracking-tight mb-3">
          こんな課題、心当たりはありませんか？
        </h2>
        <p className="text-[15px] text-gray-500 leading-[1.7] font-normal mb-8">
          企業がAI JEDIに相談する背景には、共通した課題があります。
        </p>
      </motion.div>

      {/* Simple list — no cards, no numbers */}
      <div className="flex flex-col gap-3 mb-8">
        {painItems.map((item, i) => (
          <motion.div
            key={item}
            className="flex items-start gap-3 py-2"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
          >
            <div className="w-5 h-5 shrink-0 mt-0.5 bg-rose-50 border border-rose-100 rounded-full flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="#e11d48" strokeWidth="1.8" strokeLinecap="round">
                <path d="M2 2l4 4M6 2l-4 4" />
              </svg>
            </div>
            <p className="text-[15px] text-gray-700 leading-[1.6]">
              {item}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-gray-800 rounded-2xl px-8 py-7"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.35 }}
      >
        <p className="text-[clamp(17px,2vw,22px)] font-bold text-white leading-[1.5] mb-3">
          AI JEDIは、これらを一気通貫で解決します。
        </p>
        <p className="text-[15px] text-white/65 leading-[1.75] font-normal">
          戦略・開発・研修・人材・顧問を束ねて、AIを事業成果につなげるために必要な機能を実装責任まで持って提供します。
        </p>
      </motion.div>
    </section>
  )
}
