---
title: "ラベル運用（最小セット）"
layout: book
order: 908
---

# ラベル運用（最小セット）

ラベルは「検索性」と「意思決定の可視化」を目的として、最小セットに絞って運用します。

## 推奨ラベルセット（例）

### 優先度（priority）

- `priority:P0` / `priority:P1` / `priority:P2` / `priority:P3`

定義（目安）は付録の [トリアージ判断表（影響度×緊急度）](../triage-matrix/) に合わせる。

- `priority:P0`: 即時対応（止血が必要、期限が近い、放置で急速に悪化する）
- `priority:P1`: 優先対応（主要影響があり、担当と期限を明確にして進める）
- `priority:P2`: 予定化（スプリント/期日など計画に組み込む）
- `priority:P3`: 低優先（バックログ化し、定期的に見直す）

### 障害の Severity との違い（混同しない）

平時タスクの `priority:*` は「実行順（業務優先度）」を表す。一方、障害対応の Severity は「影響度（サービス影響/セキュリティ/法令など）」を表し、運用フロー（連絡頻度、指揮系統、証跡保全）にも直結する。

- 平時タスク: `priority:*`（本書のトリアージ判断表で運用）
- 障害対応: Severity として扱い、incident-response-basics-book の定義/運用と整合させる
  - 参考: <https://itdojp.github.io/incident-response-basics-book/>

### 種別（type）

- `type:bug`（不具合）
- `type:feat`（機能追加）
- `type:task`（作業/運用）
- `type:docs`（ドキュメント）

### 状態（status）

- `status:blocked`（外部要因/依存で進められない）
- `status:needs-info`（追加情報待ち）

## いつ付けるか（最小ルール）

- Issue 作成時:
  - `type:*` を付与（分類の統一）
  - 可能なら `priority:*` も付与（トリアージ結果として）
- トリアージ時:
  - `priority:*` の最終決定を行う（担当者/期限も必要に応じてセットで決める）
- 着手できない状態:
  - `status:blocked` または `status:needs-info` を付与し、本文に「理由/依存/解除条件」を記載
- 解消したら:
  - `status:*` を外す（ラベルが“現状”を表すようにする）

## 誰が付けるか（最小ルール）

- 起票者: `type:*`（分かる範囲）と背景/受け入れ条件を記入する
- トリアージ担当（当番/リード）: `priority:*` を確定し、必要なら Owner と期限を決める
- 担当者: 進捗に応じて `status:*` を更新し、解除条件が満たされたら外す

## コピペ用（Issue本文に貼れる形式）

※ 以下はそのままコピーして Issue に貼り付け、必要なラベルだけ残してください。ラベル名は「推奨ラベルセット（例）」に合わせています（運用するリポジトリの命名に合わせて調整してください）。

```md
### ラベル（最小セット）

- `priority:P0` / `priority:P1` / `priority:P2` / `priority:P3`
- `type:bug` / `type:feat` / `type:task` / `type:docs`
- `status:blocked` / `status:needs-info`
```
