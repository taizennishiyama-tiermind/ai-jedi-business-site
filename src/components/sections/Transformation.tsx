import { motion } from 'framer-motion'

const beforeAfter = [
  {
    before: 'AIの検討が、会議室の議論で止まっている',
    after: '実行可能なプロジェクトとして動き出す',
  },
  {
    before: 'PoCを作ったが、本番導入に進めない',
    after: '本番導入まで一貫した伴走で実現する',
  },
  {
    before: '研修をやったが、現場で使われていない',
    after: '実務に直結した型と環境がチームに定着する',
  },
  {
    before: '外部ベンダー任せで、社内にノウハウが残らない',
    after: '自社で推進できる状態へ内製化が進む',
  },
  {
    before: '人材不足で、AI関連の案件が止まっている',
    after: '必要な人材がアサインされ、プロジェクトが前に進む',
  },
]

export function Transformation() {
  return (
    <section className="doc-section mb-16" id="transformation">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <h2 className="text-[clamp(22px,2.8vw,32px)] font-extrabold text-gray-800 leading-[1.25] tracking-tight mb-3">
          AI JEDIが入ると、何が変わるか
        </h2>
        <p className="text-[15px] text-gray-500 leading-[1.7] font-normal mb-10">
          導入前の課題が、どのように解消されるか。
        </p>
      </motion.div>

      <div className="flex flex-col gap-3">
        {beforeAfter.map((item, i) => (
          <motion.div
            key={item.before}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center py-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          >
            {/* Before */}
            <div className="flex-1 flex items-start gap-2.5">
              <svg className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
              <p className="text-[14px] text-gray-500 leading-[1.6]">{item.before}</p>
            </div>

            {/* Arrow */}
            <svg className="hidden sm:block w-5 h-5 shrink-0 text-gray-300" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 10h12M12 6l4 4-4 4" />
            </svg>

            {/* After */}
            <div className="flex-1 flex items-start gap-2.5">
              <svg className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 8l3 3L12 5" />
              </svg>
              <p className="text-[14px] text-gray-800 leading-[1.6] font-semibold">{item.after}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
