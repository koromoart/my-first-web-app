// ここからコードを書いてください
// 単位変換機能をセットアップする関数を定義する（外部から使えるように export する）
export function setupConverter() {
  // ★ここに export を追加するのじゃ★
   const lengthUnit = [
  { name: "meter", base: 1 },
  { name: "kilometer", base: 1000 },
  { name: "centimeter", base: 0.01 },
  { name: "millimeter", base: 0.001 },
  { name: "inch", base: 0.0254 }, 
  { name: "foot", base: 0.3048 },
  { name: "yard", base: 0.9144 },
  { name: "mile", base: 1609.344 }
];

// まず、単位変換セクション全体を取得する
  // HTMLのIDは重複しないので、getElementByIdを使うと確実じゃ
  const converterSection = document.getElementById("converter");



  // converterSection の中で、目的の要素を探す
  const converterForm = converterSection.querySelector(".converter-form");
  const inputValue = converterSection.querySelector(".converter-input");
  const fromUnit = converterSection.querySelector(".converter-from");
  const toUnit = converterSection.querySelector(".converter-to");
  const result = converterSection.querySelector(".converter-result");

  if (!fromUnit || !toUnit || !inputValue || !result || !converterForm) { // 全ての要素の存在チェックを強化
    console.error("単位変換に必要な要素が全て見つかりません！");
    return;
  }

// fromUnit と toUnit の中身を一度空にする（重複を防ぐため）
fromUnit.innerHTML = "";
toUnit.innerHTML = "";

// lengthUnit の各要素をループで処理する
for (const unit of lengthUnit) {
// オプション要素を文字列ではなくDOM要素として作成する
    const optionFrom = document.createElement('option');
    optionFrom.value = unit.base;
    optionFrom.textContent = unit.name;
    optionFrom.dataset.name = unit.name; // data-name属性も忘れずに

    const optionTo = document.createElement('option');
    optionTo.value = unit.base;
    optionTo.textContent = unit.name;
    optionTo.dataset.name = unit.name;

    fromUnit.appendChild(optionFrom); // fromUnitに追加
    toUnit.appendChild(optionTo);     // toUnitに追加
}

  // 初期選択単位を設定する（例: fromをmeter、toをkilometerに設定）
  // fromUnit と toUnit の value を設定することで、デフォルトの選択が決まる
  // ここでは両方 'meter' に設定し、後で 'to' を 'kilometer' に変更する
  fromUnit.value = lengthUnit[0].base; // meter の base 値
  toUnit.value = lengthUnit[1].base;   // kilometer の base 値

const convertUnit = () => {
  // ユーザーが入力した数値を取得する（数値に変換）
  const value = parseFloat(inputValue.value);

  // 変換元の単位の基準値を取得する（select要素のvalue属性から取得）
  const fromBase = parseFloat(fromUnit.value);

  // 変換先の単位の基準値を取得する
  const toBase = parseFloat(toUnit.value);

    // ★ここから修正するぞ！★
    if (isNaN(value)) { // 入力値が数値でない場合
      result.textContent = "Please enter a valid number"; // エラーメッセージを表示
      return; // 処理を中断
    }

    const convertedValue = (value * fromBase) / toBase;
    const formattedValue = Number(convertedValue.toFixed(3)); // 結果を丸める

    // 変換元の単位名と変換先の単位名を取得する
    // 選択されているoption要素のdata-name属性から取得する
    const selectedFromName = fromUnit.options[fromUnit.selectedIndex].dataset.name;
    const selectedToName = toUnit.options[toUnit.selectedIndex].dataset.name;

    
    // 結果の文字列を生成する (例: 3 kilometer is 1.8641 mile)
    // テストが期待する形式に合わせる
    result.textContent = `${value} ${selectedFromName} = ${formattedValue} ${selectedToName}`;
    // ★ここまで修正じゃ！★
};

// フォーム全体で input イベントを監視する
// inputイベントは、入力欄や選択欄の値が変更されるたびに発火する
converterForm.addEventListener("input", convertUnit);

// ページロード時に一度変換を実行し、初期値を表示する
convertUnit();
}


