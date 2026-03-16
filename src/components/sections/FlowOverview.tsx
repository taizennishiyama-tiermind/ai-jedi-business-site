import { motion } from 'framer-motion'

const patterns = [
  {
    num: 1,
    title: '研修・人材育成',
    goal: 'チームが共通の型で動き始めている',
    period: '2〜4週間',
  },
  {
    num: 2,
    title: '受託開発',
    goal: '触れるモックで社内合意が取れている',
    period: '最短1〜2週間',
  },
  {
    num: 3,
    title: 'FDE人材投入・内製化',
    goal: '仕組みが組織に定着し、内製化が完了',
    period: '月次契約',
  },
]

export function FlowOverview() {
  return (
    <section className="doc-section mb-16" id="flow">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <h2 className="text-[clamp(22px,2.8vw,32px)] font-extrabold text-gray-800 leading-[1.25] tracking-tight mb-3">
          3つの提供パターン
        </h2>
        <p className="text-[15px] text-gray-500 leading-[1.7] font-normal mb-8">
          どれか1つでも、全て組み合わせても対応できます。
        </p>
      </motion.div>

      {/* Use cases */}
      <motion.div
        className="flex flex-wrap gap-2 mb-10"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 0.3 }}
      >
        {['研修だけ受けたい', '開発だけ頼みたい', '人材が欲しい'].map((text) => (
          <div key={text} className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-[13px] text-gray-500 font-normal">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 6.5l2.5 2.5L10 4" /></svg>
            {text}
          </div>
        ))}
        <div className="inline-flex items-center gap-2 bg-gray-800 text-white rounded-full px-4 py-2 text-[13px] font-medium">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 6.5l2.5 2.5L10 4" /></svg>
          全部まとめてやりたい
        </div>
      </motion.div>

      {/* Pattern cards */}
      <div className="flex flex-col gap-3.5">
        {patterns.map((p, i) => (
          <motion.div
            key={p.num}
            className="bg-white border border-gray-200 rounded-2xl px-7 py-6 hover:border-gray-300 hover:shadow-lg hover:shadow-black/[0.04] transition-all"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-11 h-11 shrink-0 bg-gray-800 rounded-xl flex items-center justify-center text-white text-[16px] font-bold">
                {p.num}
              </div>
              <h3 className="text-[20px] font-bold text-gray-800 leading-tight">{p.title}</h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-5 py-3.5">
                <div className="text-[10px] font-semibold text-gray-400 tracking-[0.12em] uppercase mb-1">ゴール</div>
                <p className="text-[14px] text-gray-700 font-medium leading-[1.6]">{p.goal}</p>
              </div>
              <div className="sm:w-[130px] bg-gray-50 border border-gray-100 rounded-xl px-5 py-3.5 flex flex-col justify-center">
                <div className="text-[10px] font-semibold text-gray-400 tracking-[0.12em] uppercase mb-1">期間</div>
                <p className="text-[14px] text-gray-700 font-semibold">{p.period}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full course */}
      <motion.div
        className="mt-5 bg-gray-100 rounded-2xl px-7 py-5"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.35 }}
      >
        <p className="text-[15px] text-gray-600 leading-[1.65] font-medium">
          全て組み合わせると、導入→適用→内製化の一貫した成長導線になります。
        </p>
        <p className="text-[13px] text-gray-400 mt-1 font-normal">
          共通のAI Dev OSが土台のため、どこから始めても整合性は保たれます。
        </p>
      </motion.div>
    </section>
  )
}
