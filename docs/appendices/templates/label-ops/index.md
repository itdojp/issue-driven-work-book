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
- 着手できない状態:
  - `status:blocked` または `status:needs-info` を付与し、本文に「理由/依存/解除条件」を記載
- 解消したら:
  - `status:*` を外す（ラベルが“現状”を表すようにする）

## コピペ用（Issue本文に貼れる形式）

```md
### ラベル（最小セット）

- priority: P0 / P1 / P2 / P3
- type: bug / feat / task / docs
- status: blocked / needs-info
```
