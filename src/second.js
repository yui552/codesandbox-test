/*分割代入*/
const myProfile = {
  name: "yui",
  age: "22"
};
//冗長バージョン
const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message1);
//分割代入の短縮バージョン
const { name, age } = myProfile; //値を取り出し代入
const message2 = `名前は${name}です。年齢は${age}です。`;
console.log(message2);
//配列で分割代入
//冗長バージョン
const myProfile2 = ["yui", 22];
const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
console.log(message3);
//短縮バージョン
const [name2, age2] = myProfile2; //値を取り出し代入
const message4 = `名前は${name2}です。年齢は${age2}です。`;
console.log(message4);
