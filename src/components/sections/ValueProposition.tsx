import { motion } from 'framer-motion'

const values = [
  {
    keyword: '速い',
    desc: '意思決定に必要な具体物を早く出す。プロトタイプやデモで、判断材料を素早く提供。',
  },
  {
    keyword: '確実',
    desc: '本番で耐えるものを前提に設計。セキュリティ・権限・監査・運用を後回しにしない。',
  },
  {
    keyword: '深い',
    desc: '事業推進に必要な論点すべてに深く入る。部分最適ではなく全体最適。',
  },
  {
    keyword: '組織',
    desc: '作るだけでなく、研修・人材確保・チーム組成で組織の実行力も引き上げる。',
  },
  {
    keyword: '両面',
    desc: '経営判断の論点と、現場で回る実装の両方をつなげて支援。',
  },
]

export function ValueProposition() {
  return (
    <section className="doc-section mb-16" id="values">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <h2 className="text-[clamp(22px,2.8vw,32px)] font-extrabold text-gray-800 leading-[1.25] tracking-tight mb-3">
          AI JEDIの提供価値
        </h2>
        <p className="text-[15px] text-gray-500 leading-[1.7] font-normal mb-10">
          単なる受託開発でも、単なるコンサルでもありません。
        </p>
      </motion.div>

      {/* Horizontal flow of values */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {values.map((v, i) => (
          <motion.div
            key={v.keyword}
            className="text-center sm:text-left"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
          >
            <div className="w-12 h-12 mx-auto sm:mx-0 bg-gray-800 rounded-xl flex items-center justify-center mb-3">
              <span className="text-[13px] font-extrabold text-white">{v.keyword}</span>
            </div>
            <p className="text-[13px] text-gray-500 leading-[1.7] font-normal">
              {v.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
