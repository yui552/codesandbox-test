/*const*/
//const変数は上書き、再宣言可能
const val1 = "const変数";
console.log(val1);

/*オブジェクト*/
const val2 = {
  name: "じゃけぇ",
  age: 28
};
//上書き、追加可能
val2.name = "yui";
val2.address = "omori";
console.log(val2);

/*配列*/
const val3 = ["dog", "cat"];
val3[0] = "bird"; //変更
val3.push("monkey"); //追加
console.log(val3);

/*テンプレート文字列*/
const name = "yui";
const age = 22;
const message = `私の名前は${name}です。年齢は${age}です。`;
console.log(message);

/*アロー関数*/
//従来
function func1(str) {
  return str;
}
console.log(func1("func1です"));
//アロー
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));
const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(1, 2));
