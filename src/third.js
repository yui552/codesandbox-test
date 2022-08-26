/**デフォルト値、引数など */
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}`);
sayHello(); //引数が入力されなくてもデフォルトのゲストが出る
/**スプレッド構文 */
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);
const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);
/**まとめる */
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);
//配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
const arr7 = [...arr4, ...arr5];
//=でのコピーは、変更がされたときに元の配列も変わってしまう。
const arr8 = arr4;
arr8[0] = 100;
console.log(arr4); //arr4の０番も100になってしまっている
console.log(arr6); //変わっていない
