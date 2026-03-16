import { motion } from 'framer-motion'
import { CaseStudy } from './CaseStudy'

export function Cases() {
  return (
    <section className="doc-section mb-16" id="cases">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <h2 className="text-[clamp(22px,2.8vw,32px)] font-extrabold text-gray-800 leading-[1.25] tracking-tight mb-3">
          導入事例
        </h2>
        <p className="text-[15px] text-gray-500 leading-[1.7] font-normal mb-10">
          AI JEDIが実際に手がけたプロジェクトをご紹介します。課題 → 実施内容 → 成果の流れでご覧ください。
        </p>
      </motion.div>

      <div className="flex flex-col gap-6">
        {/* タカショーデジテック — 全社AI推進 */}
        <CaseStudy
          tags={['エンタープライズDX', 'AI組織変革', '東証プライム上場グループ']}
          title="タカショーデジテック様 — 全社AI推進を、ゼロから設計・実行。"
          quote="全社的にAI活用を推進したいが、何から始めるか分からない。推進基盤も人もいない。"
          result="150件超の業務課題を棚卸し。着手中50件、検証中21件が並走する推進体制を半年で確立。"
          illustration="/assets/png/m_12_white.png"
          flowSteps={[
            '全社150件超の業務課題を棚卸し',
            '実現性×インパクト×緊急度で優先順位を設計',
            'ガイドライン・倫理体制・デプロイ環境を整備',
            'Phase 1：全社員AIリテラシー研修',
            'Phase 2：選抜18名エキスパート育成',
            '業務課題の案件化→自動化・アプリ化',
          ]}
        />

        {/* 苗マネ — 農業DX */}
        <CaseStudy
          caseId="case-naemane"
          tags={['農業DX', '在庫管理']}
          title="苗マネ — 農園管理を、スマホひとつで完結。"
          quote="紙面上で行う在庫管理に限界を感じている。現場のみんなが迷わず使えるアプリが欲しい。"
          result="2日後に納品。種まき・出荷・在庫をひとつのダッシュボードで管理。"
          deliverySpeed="相談から2日で納品"
          illustration="/assets/png/m_09_white.png"
          iframeUrl="https://nae-match-355576675286.us-west1.run.app/"
        />

        {/* PaintVision — 建設DX */}
        <CaseStudy
          caseId="case-paintvision"
          tags={['建設DX', '画像処理', 'AR']}
          title="PaintVision — 家の壁色、スマホで着せ替え。"
          quote="お客様との色決めに時間がかかる。その場で見せられるツールがあれば。"
          result="翌日に納品。BEFORE/AFTERをスライダーで比較できるUIを実現。"
          deliverySpeed="翌日に納品"
          illustration="/assets/png/m_11_white.png"
          iframeUrl="https://paintvision-355576675286.us-west1.run.app/"
        />

        {/* 制服リース — 製造DX */}
        <CaseStudy
          tags={['製造DX', '制服・作業用制服', 'リース']}
          title="制服リース製造会社様 — 制服管理業務を、AIで一気に効率化。"
          quote="制服・作業用制服のリース管理が紙ベースで煩雑。在庫・返却・サイズ管理を一元化したい。"
          result="在庫・返却・サイズ管理のダッシュボードを構築。紙ベースの管理工数を大幅に削減。"
          illustration="/assets/png/m_13_white.png"
          flowSteps={[
            '業務フローのヒアリング・課題の棚卸し',
            '管理項目の整理とデータ構造の設計',
            '在庫・返却・サイズを一元管理するダッシュボード構築',
            '現場スタッフ向けの操作研修と定着支援',
          ]}
        />
      </div>
    </section>
  )
}
