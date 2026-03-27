---
title: "チケット駆動の仕事術：良いIssueとPRで回すタスク管理・報告・合意形成"
description: "調査・合意形成・実装・ナレッジ化を、チケット（Issue/PR）で再現性高く回すための型を整備する。"
layout: book
order: 0
---

# チケット駆動の仕事術：良いIssueとPRで回すタスク管理・報告・合意形成

調査・合意形成・実装・ナレッジ化を、チケット（Issue/PR）で再現性高く回すための型を整備する。

## まず確認する導線

- [Issue テンプレ（不具合）](appendices/templates/issue-bug/)
- [Issue テンプレ（改善）](appendices/templates/issue-improvement/)
- [Issue テンプレ（作業）](appendices/templates/issue-task/)
- [PR テンプレ](appendices/templates/pr/)
- [トリアージ判断表（影響度×緊急度）](appendices/templates/triage-matrix/)
- [DoR/DoD テンプレ](appendices/templates/dor-dod/)
- [テンプレ集](appendices/templates/)
- [チェックリスト集](appendices/checklists/)
- [ケーススタディ（通し例）](appendices/case-studies/)
- [ライセンス](https://github.com/itdojp/issue-driven-work-book/blob/main/LICENSE.md)

## 想定読者

- Issue/PR を使っているが、起票・レビュー・完了の品質が安定しない人
- 口頭・チャット依存の進め方から脱却し、引き継ぎ可能な形に整えたい人
- 複数人での合意形成を、テンプレとチェックリストで再現可能にしたい人

## 学習成果

- 良い Issue（背景/目的/スコープ/受け入れ条件）を自力で起票できる
- 調査ログ・意思決定記録・進捗報告・PR説明を「レビュー可能な状態」で残せる
- DoR/DoD を運用ルールとして定義し、終わらないタスクを減らせる
- 完了後の FAQ / Runbook / ADR への流し込みを通じて、作業結果を再利用可能なナレッジへ変換できる

## 所要時間（目安）

- 60〜120分（付録のテンプレ集は必要に応じて参照）

## 読み方ガイド

- 目次から、いま必要な成果物や判断がどこに書かれているかを把握する
- 付録のテンプレとチェックリストを先に確認し、本文で意図と注意点を補完する
- 章末のチェックリストをレビュー観点として運用に取り込む

## 前提知識

- Git/GitHub の基本（Issue/PR）
- 基本的な開発フロー（ブランチ/レビュー）
- Issue / PR の基本操作に不安がある場合は、[GitHub初心者ガイド](https://itdojp.github.io/github-guide-for-beginners-book/) を先に確認すると入りやすい

## クイックスタート（最小例）

まず 1 枚、最小の Issue と PR 説明を書き、テンプレ運用の型を掴む。

- 公開 Issue / PR に、顧客情報、障害の内部詳細、API キー、個人情報、公開前の判断メモをそのまま貼らないこと。公開用と社内用の記録は分けて扱う。

- Issue テンプレ: [不具合](appendices/templates/issue-bug/) / [改善](appendices/templates/issue-improvement/) / [作業](appendices/templates/issue-task/)
- PR テンプレ: [PRテンプレ](appendices/templates/pr/)

Issue（最小例）:

```md
背景: 入力フォームで誤操作が増えている（問い合わせが増加）
目的: 誤操作率を下げる（問い合わせを減らす）
スコープ: 必須項目のバリデーション/エラー文言
非スコープ: 画面全体のデザイン刷新
受け入れ条件:
- Given: 必須項目が未入力
- When: 保存を押す
- Then: 保存されず、どの項目が不足か分かる
期限/優先度: 影響×緊急度で理由を添える
責任分界: 判断=PM、実行=開発、確認=CS
```

PR（最小例）:

```md
何を: 必須項目のバリデーション追加
なぜ: 誤操作が多い
影響: 入力フォームの保存時エラー文言が変わる
テスト: 不正入力/境界値/回帰
ロールバック: フラグをOFF
関連: #123
```

## 目次

- [第1章: チケット駆動の前提（成果物・品質・期限・責任分界）](chapters/chapter-01/)
- [第2章: 良いIssueテンプレ（背景/目的/スコープ/受け入れ条件）](chapters/chapter-02/)
- [第3章: 再現手順・調査ログ（環境/ログ/証跡）](chapters/chapter-03/)
- [第4章: 優先度とスコープ管理（分割/依存/影響度×緊急度）](chapters/chapter-04/)
- [第5章: Definition of Ready / Done（入口と出口の統一）](chapters/chapter-05/)
- [第6章: 進捗報告の定型（現状/次/ブロッカー/期限）](chapters/chapter-06/)
- [第7章: PR説明の型（何を/なぜ/影響/テスト/ロールバック）](chapters/chapter-07/)
- [第8章: 合意形成と意思決定記録（論点/選択肢/決定/未決）](chapters/chapter-08/)
- [第9章: 完了からナレッジ化（FAQ/Runbook/ADRへの流し込み）](chapters/chapter-09/)

## 付録

- [テンプレ集](appendices/templates/)
- [ケーススタディ（通し例）](appendices/case-studies/)
- [チェックリスト集](appendices/checklists/)
- [参考文献](appendices/references/)

## ライセンス

本書は **Creative Commons BY-NC-SA 4.0** ライセンスで公開しています。
教育・研究・個人学習での利用は可能ですが、商用利用には事前許諾が必要です。

[詳細なライセンス条件](https://github.com/itdojp/issue-driven-work-book/blob/main/LICENSE.md)

## 利用・更新・質問窓口

- リポジトリ: [itdojp/issue-driven-work-book](https://github.com/itdojp/issue-driven-work-book)
- 誤記報告や改善提案は GitHub Issues、まとまった修正提案は Pull Request を利用してください。
- 更新差分を追う場合は、GitHub のコミット履歴と Pull Request を参照してください。
- ローカルで検証する場合は、`npm test` を通してから内容を確認してください。
- テンプレートやチェックリストを組織で利用する場合は、役割分担、承認フロー、優先度定義、記録粒度を各自の運用ルールに合わせて調整してください。
- 顧客情報、障害情報、内部判断メモを扱う場合は、公開範囲と保存先を事前に決めてからテンプレートへ転記してください。
