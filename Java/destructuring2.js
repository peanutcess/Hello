// 객체 구조 분해

let user = { name : "Mike" , age : 30 };


// 기본 
// let { name, age } = user; // --> name,age의 순서를 바꿔도 동일하게 동작

// console.log(name); // "Mike"
// console.log(age); // 30



// 새로운 변수 이름으로 할당
let { name : userName , age : userAge } = user;

console.log(userName);
console.log(userAge);


// 기본값을 줄 수 있음

let { name , age , gender = "male" } = user;

console.log(gender); // male --> 하지만 본래 객체에 gender값이 있으면 그 값이 우선순위


