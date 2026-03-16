# Output

外部共有できる成果物だけを置く。

- `site/`: LP、提案サイト、ストーリーブック
- `app/`: アプリ、プロトタイプ
- `deliverables/`: 顧客共有資料、完成版ドキュメント

## ローカル確認方法

サイトやアプリを作成したら、以下のコマンドでローカルサーバーを起動して確認する。

### site/ の場合

```bash
# プロジェクトルートで実行
cd output/site && npx serve .
# → http://localhost:xxxx で確認（利用されていないポート番号に自動調整）
```

### app/ の場合

```bash
# package.json がある場合
cd output/app && npm install && npm run dev
# → 表示されたURLで確認
```

Cloudflare 用の設定を入れたあとは、以下でも確認する。

```bash
cd output/app && npm install && npm run cf:dev
```

### 共通ルール

- 成果物を作成・更新したら**必ずローカルサーバーで動作確認する**
- ブラウザで表示崩れ、リンク切れ、エラーがないか目視チェックする
- 確認後、問題がなければその旨を報告する
- Cloudflare を使う案件では `npm run cf:dev` でも確認する
