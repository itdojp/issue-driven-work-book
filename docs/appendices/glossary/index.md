---
title: "用語集"
layout: book
order: 930
---

# 用語集

Issueの起票からPRの完了、ナレッジ化までに本書で使う主要用語をまとめる。定義だけで判断せず、各項目の「参照」から運用例とチェックリストを確認する。

<dl class="glossary-list">
  <div class="glossary-entry">
    <dt id="term-issue">Issue（イシュー）</dt>
    <dd>
      <p class="glossary-definition">背景、目的、スコープ、受け入れ条件などを記録し、作業と合意を追跡する単位。</p>
      <p class="glossary-reference">参照: <a href="../../chapters/chapter-02/">第2章「良い Issue テンプレ」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-pr">Pull Request（PR）</dt>
    <dd>
      <p class="glossary-definition">変更内容、理由、影響、テスト、ロールバックを示し、レビューと統合判断を行う単位。</p>
      <p class="glossary-reference">参照: <a href="../../chapters/chapter-07/">第7章「PR 説明の型」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-acceptance-criteria">受け入れ条件（Acceptance Criteria）</dt>
    <dd>
      <p class="glossary-definition">成果物が目的を満たしたかを第三者が検証できる、観測可能な完了判定。</p>
      <p class="glossary-reference">参照: <a href="../../chapters/chapter-02/#受け入れ条件と確認方法を対応づける">第2章「受け入れ条件と確認方法」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-given-when-then">Given-When-Then</dt>
    <dd>
      <p class="glossary-definition">前提条件、操作、期待結果の順に、受け入れ条件を検証可能な形で表す書式。</p>
      <p class="glossary-reference">参照: <a href="../../chapters/chapter-02/#受け入れ条件の例given-when-then">第2章「受け入れ条件の例」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-scope">スコープ</dt>
    <dd>
      <p class="glossary-definition">今回のIssueやPRで変更し、確認する対象範囲。</p>
      <p class="glossary-reference">参照: <a href="../templates/issue-task/#スコープ">Issue テンプレ「スコープ」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-non-scope">非スコープ</dt>
    <dd>
      <p class="glossary-definition">今回の判断や変更に含めない対象を明示し、意図しない作業拡大を防ぐ境界。</p>
      <p class="glossary-reference">参照: <a href="../templates/issue-task/#非スコープ">Issue テンプレ「非スコープ」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-dor">Definition of Ready（DoR）</dt>
    <dd>
      <p class="glossary-definition">背景、目的、受け入れ条件、依存、リスクなど、着手前に揃える入口条件。</p>
      <p class="glossary-reference">参照: <a href="../../chapters/chapter-05/#最小の-dor--dod">第5章「最小の DoR / DoD」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-dod">Definition of Done（DoD）</dt>
    <dd>
      <p class="glossary-definition">受け入れ条件、レビュー、CI、公開確認、必要な転記まで含めた出口条件。</p>
      <p class="glossary-reference">参照: <a href="../../chapters/chapter-05/#pr-前後の-dod-ゲート">第5章「PR 前後の DoD ゲート」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-triage">トリアージ</dt>
    <dd>
      <p class="glossary-definition">影響度、緊急度、依存、対応可否を評価し、優先度と次の扱いを決める活動。</p>
      <p class="glossary-reference">参照: <a href="../templates/triage-matrix/">トリアージ判断表</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-priority">Priority（優先度）</dt>
    <dd>
      <p class="glossary-definition">平時タスクの実行順を表す業務上の優先度。障害影響を表すSeverityとは分けて扱う。</p>
      <p class="glossary-reference">参照: <a href="../../chapters/chapter-04/#priority-と-severity-を混同しない">第4章「Priority と Severity」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-severity">Severity（重大度）</dt>
    <dd>
      <p class="glossary-definition">障害やインシデントの影響度を表す分類。平時タスクの実行順とは目的が異なる。</p>
      <p class="glossary-reference">参照: <a href="../../chapters/chapter-04/#priority-と-severity-を混同しない">第4章「Priority と Severity」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-blocker">ブロッカー</dt>
    <dd>
      <p class="glossary-definition">作業や検証の進行を止めている条件。解除条件、担当、期限とともに報告する。</p>
      <p class="glossary-reference">参照: <a href="../../chapters/chapter-06/#ブロッカー報告の分解">第6章「ブロッカー報告の分解」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-dependency">依存関係</dt>
    <dd>
      <p class="glossary-definition">着手、実装、検証、完了が他のIssueや外部要因に左右される関係。</p>
      <p class="glossary-reference">参照: <a href="../../chapters/chapter-04/#分割の観点">第4章「分割の観点」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-evidence">証跡</dt>
    <dd>
      <p class="glossary-definition">再現結果、ログ、テスト、CI、公開確認など、判断や完了を第三者が追跡できる記録。</p>
      <p class="glossary-reference">参照: <a href="../../chapters/chapter-03/#最低限残すべき情報">第3章「最低限残すべき情報」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-rollback">ロールバック</dt>
    <dd>
      <p class="glossary-definition">変更後に問題が起きた場合、影響を抑えて既知の状態へ戻す手順と判断条件。</p>
      <p class="glossary-reference">参照: <a href="../templates/pr/#ロールバック">PR テンプレ「ロールバック」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-review-thread">レビューthread</dt>
    <dd>
      <p class="glossary-definition">PR差分上の指摘と返信をひとまとまりで追跡する会話。対応または不要理由を記録して解決する。</p>
      <p class="glossary-reference">参照: <a href="../../chapters/chapter-07/#レビューコメントへの対応方針">第7章「レビューコメントへの対応方針」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-runbook">Runbook</dt>
    <dd>
      <p class="glossary-definition">繰り返す運用や障害対応を、条件、手順、確認、停止・エスカレーションまで含めて再実行できる形にした文書。</p>
      <p class="glossary-reference">参照: <a href="../../chapters/chapter-09/#転記の判断">第9章「転記の判断」</a></p>
    </dd>
  </div>
  <div class="glossary-entry">
    <dt id="term-adr">ADR（Architecture Decision Record）</dt>
    <dd>
      <p class="glossary-definition">背景、論点、選択肢、決定、影響を残し、重要な意思決定を後から追跡できるようにする記録。</p>
      <p class="glossary-reference">参照: <a href="../templates/adr/">ADR テンプレ</a></p>
    </dd>
  </div>
</dl>
