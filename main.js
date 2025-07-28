// ここからコードを書いてください
import { setupTabs } from "./js/tabs.js";       // js/tabs.js から setupTabs 関数を読み込む
import { setupConverter } from "./js/converter.js"; // js/converter.js から setupConverter 関数を読み込む

document.addEventListener("DOMContentLoaded", () => {
  setupTabs(); // タブ機能を初期化する関数を呼び出す
  setupConverter(); // 変換機能を初期化する関数を呼び出す
});
