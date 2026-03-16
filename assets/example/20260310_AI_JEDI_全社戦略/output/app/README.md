# App Output

アプリ本体はこのディレクトリに置く。

Cloudflare に配備する案件では、このディレクトリを deployment root とし、以下を標準とする。

- `wrangler.jsonc` (`wrangler.jsonc.example` から作成)
- `.dev.vars.example`
- `migrations/`
- `package.json` の `cf:*` scripts

## 推奨 scripts

```json
{
  "scripts": {
    "cf:dev": "npx wrangler dev",
    "cf:deploy": "npx wrangler deploy --env=\"\"",
    "cf:deploy:preview": "npx wrangler deploy --env=\"\"",
    "cf:deploy:production": "npx wrangler deploy --env production",
    "cf:migrate:local": "npx wrangler d1 migrations apply DB --local",
    "cf:migrate:remote": "npx wrangler d1 migrations apply DB --remote"
  }
}
```

binding 名が `DB` でない場合は、実際の binding 名に合わせて修正する。

運用の目安:

- `cf:deploy` / `cf:deploy:preview` は `workers.dev` の preview 用
- `cf:deploy:production` は `workers_dev: false` + custom domain 前提
- `workers.dev` の account subdomain は Cloudflare アカウント側の設定なので、この案件ディレクトリでは変えられない

## 先に確認するファイル

1. `../../working/requirements.md`
2. `../../working/deployment/cloudflare.md`
3. `./wrangler.jsonc.example`
