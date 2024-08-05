//배열 구조 분해 
let [ x, y ] = [ 1, 2 ];

console.log(x);
console.log(y);


let users = [ "Mike", "Tom", "Jane" ];
let [ user1, user2, user3 ] = users;

console.log(user1);
console.log(user2);
console.log(user3);


let str = "Mike-Tom-Jane";
let [ user4, user5, user6] = str.split("-"); // --> ["Mike","Tom","Jane"]

console.log(user4);
console.log(user5);
console.log(user6);

// --------
// 기본값

let [ a, b, c ] = [ 1, 2 ];

console.log(c); // undefined


let [ d = 3, e = 4 , f = 5 ] = [ 1, 2 ];

console.log(f); // 5


// --------
// 일부 반환값 무시 
let [ user7, , user8 ] = [ "Mike", "Tom", "Jane", "Tony" ];

console.log(user7); // "Mike"
console.log(user8); // "Jane"


// -------
// 바꿔치기
let g = 5;
let h = 8;

[ g , h ] = [ h , g];

