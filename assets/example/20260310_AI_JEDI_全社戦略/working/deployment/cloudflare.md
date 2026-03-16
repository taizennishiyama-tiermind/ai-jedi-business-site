# Cloudflare Deployment

## 配備方針

- 配備対象:
- アプリの実体パス: `output/app`
- デプロイ方式: GitHub Actions / Workers Builds / 手動
- 対象ブランチ:
- workers.dev subdomain の扱い: account-level。案件ディレクトリからは変更不可

## Workers / Pages

- Worker 名:
- エントリーポイント:
- Assets 出力先:
- Preview URL:
- Production custom domain:
- カスタムドメイン:

## データベースとバックエンド

### D1

- 利用するか:
- Binding 名:
- Database 名:
- Database ID の保管場所:
- Migrations path: `output/app/migrations`

### R2

- 利用するか:
- Binding 名:
- Bucket 名:

### KV

- 利用するか:
- Binding 名:
- Namespace ID の保管場所:

### Queues / Durable Objects / Hyperdrive

- 利用するもの:
- Binding 名:
- 備考:

## 環境変数

### vars

- `APP_ENV`:

### secrets

- `API_KEY`: Cloudflare secret / GitHub secret / ローカルのみ
- `SESSION_SECRET`: Cloudflare secret / GitHub secret / ローカルのみ

## 秘密情報の登録状況

- `CLOUDFLARE_ACCOUNT_ID`: GitHub Actions secret 登録済み / 未登録
- `CLOUDFLARE_API_TOKEN`: GitHub Actions secret 登録済み / 未登録
- `.dev.vars`: 作成済み / 未作成
- Cloudflare runtime secrets: 登録済み / 未登録
- 実値の保管場所:
- 最終更新日:

## CI/CD

- GitHub Actions workflow:
- 必要な GitHub secrets:
- デプロイ前チェック:

## 状態チェック

- [ ] `wrangler.jsonc` を作成
- [ ] `.dev.vars.example` を作成
- [ ] `.dev.vars` をローカルで作成
- [ ] `migrations/` を作成
- [ ] `package.json` の Cloudflare scripts を整備
- [ ] GitHub Actions secrets を登録
- [ ] `npm run cf:dev` でローカル確認
- [ ] `cf:migrate:remote` を確認
- [ ] `cf:deploy` を確認
