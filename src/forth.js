/**map filterを使った配列の処理 */

//通常
const nameArr = ["田中", "山田", "唯"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

//map 配列を引数として関数内で処理する
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2); //新しい配列を生成する
nameArr.map((name) => console.log(name)); //配列をループして処理

const newNameArr = nameArr.map((name) => {
  if (name === "唯") {
    return name;
  } else {
    return `${name}さん`;
  }
});

//filter 配列を引数として関数でフィルターする
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);
console.log(newNameArr);
