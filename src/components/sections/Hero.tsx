import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="doc-section pt-2 pb-14 border-b border-gray-100 mb-14" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-500 text-[11px] font-semibold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 bg-gray-600 rounded-full inline-block" />
          AI Implementation Partner
        </div>
      </motion.div>

      <motion.div
        className="mb-7"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <img
          src="/images/ai-jedi-logo.png"
          alt="AI JEDI"
          className="w-full max-w-[720px] h-auto block"
        />
      </motion.div>

      <motion.h1
        className="text-[clamp(26px,3.5vw,40px)] font-extrabold text-gray-800 tracking-tight leading-[1.2] mb-5"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        AIを、組織に実装する。
      </motion.h1>

      <motion.p
        className="text-[clamp(15px,1.8vw,18px)] text-gray-500 font-normal leading-[1.75] max-w-[560px] mb-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        人を入れるだけでは、組織は変わりません。<br />
        AI JEDIは「動く環境と型」ごと組織に納品する、<br />
        AI実装パートナーです。
      </motion.p>

      <motion.div
        className="flex gap-3 flex-wrap"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <a
          href="#services"
          onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl text-[14px] font-semibold shadow-md shadow-black/10 hover:-translate-y-px hover:shadow-lg transition-all no-underline"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11"/></svg>
          サービスを見る
        </a>
        <a
          href="#devos"
          onClick={(e) => { e.preventDefault(); document.querySelector('#devos')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-600 border border-gray-200 rounded-xl text-[14px] font-medium hover:bg-gray-50 hover:border-gray-300 transition-all no-underline"
        >
          AI Dev OS とは
        </a>
      </motion.div>
    </section>
  )
}
