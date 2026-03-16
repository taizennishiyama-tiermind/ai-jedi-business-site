export interface NavItem {
  readonly id: string
  readonly label: string
  readonly href: string
  readonly badge?: string
}

export interface NavGroup {
  readonly category: string
  readonly items: readonly NavItem[]
}

export const navigation: readonly NavGroup[] = [
  {
    category: 'OVERVIEW',
    items: [
      { id: 'hero', label: '概要', href: '#hero' },
      { id: 'pain', label: '課題提起', href: '#pain' },
      { id: 'services', label: 'サービス一覧', href: '#services' },
    ],
  },
  {
    category: 'サービス詳細',
    items: [
      { id: 'svc-strategy', label: 'AI戦略事業推進支援', href: '#svc-strategy' },
      { id: 'svc-dev', label: 'AI駆動開発', href: '#svc-dev' },
      { id: 'svc-training', label: '研修・人材育成', href: '#svc-training' },
      { id: 'svc-talent', label: '人材紹介・アサイン', href: '#svc-talent' },
      { id: 'svc-advisory', label: '顧問・アドバイザリー', href: '#svc-advisory' },
    ],
  },
  {
    category: '実績・価値',
    items: [
      { id: 'cases', label: '導入事例', href: '#cases' },
      { id: 'devos', label: 'AI Dev OS', href: '#devos' },
      { id: 'values', label: '提供価値', href: '#values' },
      { id: 'transformation', label: '導入効果', href: '#transformation' },
    ],
  },
  {
    category: '組織',
    items: [
      { id: 'team', label: 'チーム', href: '#team' },
      { id: 'summary', label: 'まとめ', href: '#summary' },
    ],
  },
]
