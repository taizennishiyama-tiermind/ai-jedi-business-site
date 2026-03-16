import { motion } from 'framer-motion'

const devOSComponents = [
  {
    title: 'Claude Code 運用環境',
    desc: 'CLAUDE.md・エージェント定義・フック・スキル一式を含む、すぐに使える開発環境',
  },
  {
    title: 'スターターリポジトリ',
    desc: 'プロジェクトテンプレート・CI/CD設定・コードレビュー自動化を含むGitHubリポジトリ',
  },
  {
    title: 'AI駆動開発プレイブック',
    desc: 'Issue → PR → レビュー → デプロイの開発導線を型として文書化',
  },
  {
    title: 'サブエージェント設計',
    desc: 'planner / code-reviewer / tdd-guide / security-reviewer 等の専門エージェント群',
  },
  {
    title: 'ガバナンス雛形',
    desc: 'AIガイドライン・倫理体制・API運用ルール・セキュリティチェックリスト',
  },
]

export function DevOS() {
  return (
    <section className="doc-section mb-16" id="devos">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center shadow-lg shadow-gray-800/20">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h12v12H3z" rx="2" />
              <path d="M7 7h4M7 10h2" />
            </svg>
          </div>
          <div>
            <h2 className="text-[clamp(22px,2.8vw,32px)] font-extrabold text-gray-800 leading-[1.25] tracking-tight">
              AI Dev OS
            </h2>
          </div>
        </div>
        <p className="text-[15px] text-gray-500 leading-[1.7] font-normal mb-4">
          AI JEDIが提供する「動く環境と型」のパッケージ。研修を受けてこれをもらえば、すぐにAI駆動開発を始められます。
        </p>
        <p className="text-[13px] text-gray-400 leading-[1.7] font-normal mb-10">
          人を入れるだけでは組織は変わりません。再現性のある「仕組み」を組織に残すことで、担当者が抜けても元に戻らない状態を作ります。
        </p>
      </motion.div>

      {/* Comparison: simple 2-column */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 0.35 }}
      >
        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5">
          <div className="text-[11px] font-semibold text-gray-400 tracking-[0.12em] uppercase mb-4">一般的なAI支援</div>
          <ul className="flex flex-col gap-2.5">
            {['人を入れる', '研修コンテンツを提供', '報告書を納品'].map((item) => (
              <li key={item} className="text-[14px] text-gray-500 font-normal flex items-center gap-3">
                <span className="w-5 h-5 shrink-0 bg-gray-200 rounded-md flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#a1a1aa" strokeWidth="1.8" strokeLinecap="round"><path d="M2.5 5h5" /></svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t border-gray-200 text-[13px] text-gray-400 font-normal">
            担当者が抜けたら元に戻る
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl px-6 py-5 text-white">
          <div className="text-[11px] font-semibold text-white/45 tracking-[0.12em] uppercase mb-4">AI JEDI</div>
          <ul className="flex flex-col gap-2.5">
            {['動く環境ごと納品', '再現性ある型を組織に残す', '内製化まで完成させる'].map((item) => (
              <li key={item} className="text-[14px] text-white/90 font-normal flex items-center gap-3">
                <span className="w-5 h-5 shrink-0 bg-white/15 rounded-md flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><path d="M2 5l2.5 2.5L8 3" /></svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t border-white/15 text-[13px] text-white/70 font-medium">
            仕組みとして組織に定着する
          </div>
        </div>
      </motion.div>

      {/* AI Dev OS contents */}
      <motion.div
        className="bg-gray-900 rounded-2xl px-7 py-7"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.35 }}
      >
        <div className="text-[10px] font-semibold text-white/40 tracking-[0.14em] uppercase mb-1">Package Contents</div>
        <h3 className="text-[20px] font-bold text-white leading-tight mb-2">AI Dev OS に含まれるもの</h3>
        <p className="text-[13px] text-white/40 leading-[1.7] mb-6">
          研修＋このパッケージで、チームがAI駆動開発を即座に始められる状態を作ります。
        </p>

        <div className="flex flex-col gap-3">
          {devOSComponents.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex gap-4 items-start bg-white/[0.06] rounded-xl px-5 py-4"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.04, duration: 0.3 }}
            >
              <div className="w-8 h-8 shrink-0 bg-white/10 rounded-lg flex items-center justify-center mt-0.5">
                <span className="text-[12px] font-bold text-white/60">{i + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[14px] font-semibold text-white mb-0.5">{item.title}</h4>
                <p className="text-[12px] text-white/45 leading-[1.6]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
