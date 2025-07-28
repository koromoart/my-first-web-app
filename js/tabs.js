// ここからコードを書いてください

// タブ機能をセットアップする関数を定義する
export function setupTabs() {
  // ホームへのリンク要素を取得する（data-tab="home"が目印）
  const homeLink = document.querySelector('[data-tab="home"]');

  // 単位変換タブの要素を取得する（data-tab="converter"が目印）
  const converterTab = document.querySelector('[data-tab="converter"]');

  // ホームセクションの要素を取得する（id="home"が目印）
  const homeSection = document.getElementById("home");

  // 単位変換セクションの要素を取得する（id="converter"が目印）
  const converterSection = document.getElementById("converter");

  // Homeリンクがクリックされたときの処理を設定する
  homeLink.addEventListener("click", () => {
    // 単位変換セクションを非表示にする（hiddenクラスを追加）
    converterSection.classList.add("hidden");
    // ホームセクションを表示にする（hiddenクラスを削除）
    homeSection.classList.remove("hidden");
  });

  // Unit Converterタブがクリックされたときの処理を設定する
  converterTab.addEventListener("click", () => {
    // ホームセクションを非表示にする（hiddenクラスを追加）
    homeSection.classList.add("hidden");
    // 単位変換セクションを表示にする（hiddenクラスを削除）
    converterSection.classList.remove("hidden");
  });
}
