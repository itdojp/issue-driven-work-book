# チケット駆動の仕事術：良い Issue と PR で回すタスク管理・報告・合意形成

## 概要

チケット駆動で調査・合意形成・実装・ナレッジ化を回すための型（Issue / PR / DoR / DoD 等）を扱う。

## オンライン版（公開 URL）

- GitHub Pages: `https://itdojp.github.io/issue-driven-work-book/`
- 入口: `docs/index.md`

## 公開版の主要導線

- [トップページ](https://itdojp.github.io/issue-driven-work-book/)
- [テンプレ集](https://itdojp.github.io/issue-driven-work-book/appendices/templates/)
- [チェックリスト集](https://itdojp.github.io/issue-driven-work-book/appendices/checklists/)
- [ケーススタディ（通し例）](https://itdojp.github.io/issue-driven-work-book/appendices/case-studies/)

## 開発（ローカル）

### 前提

- Node.js（`npm`）
- （推奨）Podman または Docker（Ruby が無い環境でも `npm start` / `npm run build` を実行可能）
- Ruby + Bundler（導入済みの場合はそれを利用）

### 手順

```bash
npm ci

# Ruby/Bundler が無い場合は Podman/Docker を利用します（初回は image pull + bundle install が走ります）

# プレビュー
npm start

# ビルド
npm run build

# テスト（npm audit / metadata / markdown lint / link check）
npm test
```

## 品質確認

公開メタデータとナビゲーションの整合性は、次のコマンドで確認します。

```bash
npm run check:security
npm run check:metadata
npm test
```

## ライセンス

本書は **CC BY-NC-SA 4.0** で提供します。詳細は `LICENSE.md` を参照してください。
