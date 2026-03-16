import { motion } from 'framer-motion'

const entryPoints = [
  '何を作るべきか分からない',
  'PoCの次に進めない',
  '社内に推進できる人がいない',
  'AI研修をやっても現場で使われない',
  '安さより、失敗しない進め方を重視したい',
  '開発だけでなく、人材や顧問も含めて相談したい',
]

export function Summary() {
  return (
    <section className="doc-section mb-6" id="summary">
      <motion.div
        className="relative bg-gray-800 rounded-[20px] px-10 py-11 text-white overflow-hidden"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute -top-[80px] -right-[80px] w-48 h-48 bg-white/[0.04] rounded-full blur-[40px] pointer-events-none" />

        <div className="relative z-10">
          <div className="text-[10px] font-medium text-white/30 tracking-[0.15em] uppercase mb-5">Summary</div>

          <h2 className="text-[clamp(20px,2.8vw,28px)] font-bold leading-[1.45] mb-5">
            AIを事業として成立させるために、<br />
            速く、深く、確実に実装する。
          </h2>

          <p className="text-[15px] text-white/60 leading-[1.75] font-normal mb-8">
            AI JEDIは、AIを使って安く何かを作る会社ではありません。<br />
            必要なら研修で組織を強くし、人材も入れ、経営判断まで支える会社です。
          </p>

          <div className="mb-8">
            <div className="text-[10px] font-bold text-white/35 tracking-[0.12em] uppercase mb-4">
              相談の入口は、まだ曖昧でも構いません
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {entryPoints.map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 shrink-0 mt-0.5 bg-white/10 rounded-md flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M2 5l2.5 2.5L8 3" />
                    </svg>
                  </div>
                  <p className="text-[13px] text-white/70 leading-[1.6] font-normal">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-[16px] text-white/90 font-semibold leading-[1.65]">
              その曖昧な状態を、事業として前に進む形へ変えることが、AI JEDIの仕事です。
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
