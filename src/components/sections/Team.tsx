import { motion } from 'framer-motion'

interface Member {
  readonly name: string
  readonly nameEn: string
  readonly role: string
  readonly photo: string
  readonly desc: string
  readonly career: readonly string[]
  readonly photoStyle?: string
}

const members: readonly Member[] = [
  {
    name: '古川 靖久',
    nameEn: 'Yasuhiko Kogawa',
    role: 'CEO / 代表取締役',
    photo: '/images/member-kogawa.png',
    desc: '資本政策・ファイナンス・アライアンスを担当。大型連携・投資家対応から事業のスケールを設計する。',
    career: [
      '2012年〜 エンジェル投資家として活動',
      '2018年〜 株式会社ジビジョン 代表取締役',
      '2024年〜 適格機関投資家（金融庁登録）',
    ],
    photoStyle: 'object-[center_10%]',
  },
  {
    name: '坂本 龍史',
    nameEn: 'Ryuji Sakamoto',
    role: 'COO / 代表取締役',
    photo: '/images/member-sakamoto.png',
    desc: 'エンタープライズ営業・パートナー開拓を担当。NTT DATA連携をはじめ顧客基盤の拡大を主導。',
    career: [
      '2019年〜 イグニション・ポイント株式会社',
      '2022年〜 株式会社ユーザベース',
    ],
  },
  {
    name: '西山 泰仙',
    nameEn: 'Taisen Nishiyama',
    role: 'CTO / プロジェクト責任者',
    photo: '/images/member-nishiyama.png',
    desc: '技術戦略・品質担保・AI Dev OS整備・FDE人材の目利きと育成を担当。エンタープライズ現場での実装経験を核に技術を設計。',
    career: [
      '2023年〜 株式会社TierMind 代表取締役',
      '2024年〜 TOYOTA Connected AI/スキリング責任者',
      '2025年〜 株式会社worth CAIO',
    ],
    photoStyle: 'object-[center_30%]',
  },
]

export function Team() {
  return (
    <section className="doc-section mb-16" id="team">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <h2 className="text-[clamp(22px,2.8vw,32px)] font-extrabold text-gray-800 leading-[1.25] tracking-tight mb-3">
          メンバー
        </h2>
        <p className="text-[15px] text-gray-500 leading-[1.7] max-w-[600px] font-normal mb-8">
          投資・事業・技術の三軸で、エンタープライズのAI実装を推進します。
        </p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {members.map((member, i) => (
          <motion.div
            key={member.nameEn}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-lg hover:shadow-black/[0.04] transition-all group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-[200px] h-[220px] sm:h-auto shrink-0 overflow-hidden bg-gray-100">
                <img
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${member.photoStyle ?? 'object-[center_top]'}`}
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                />
              </div>
              <div className="flex-1 px-6 py-5 sm:py-5 flex flex-col justify-center">
                <span className="inline-block w-fit bg-gray-800 text-white text-[10px] font-medium tracking-[0.06em] px-2.5 py-0.5 rounded-full mb-3">
                  {member.role}
                </span>
                <div className="mb-2.5">
                  <div className="text-[22px] font-extrabold text-gray-800 leading-tight tracking-tight">{member.name}</div>
                  <div className="text-[11px] text-gray-400 tracking-[0.06em] mt-0.5 font-normal">{member.nameEn}</div>
                </div>
                <p className="text-[13px] text-gray-500 leading-[1.7] font-normal mb-3">{member.desc}</p>
                <div className="border-t border-gray-100 pt-2.5">
                  <ul className="flex flex-col gap-1">
                    {member.career.map((c) => (
                      <li key={c} className="text-[11px] text-gray-400 leading-[1.5] pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-px before:bg-gray-300 before:rounded-full font-normal">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
