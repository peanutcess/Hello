// 배열 메소드 --> 일단 급하게 알아둬야 할 메소드

// arr.forEach(fn) : 배열 반복
    let arr = [ "Mike" , "Tom" , "Jane"];

    // arr.forEach( ( item, index, arr ) => {
    //     // ...
    // } );


    arr.forEach((name,index)=>{
        console.log(`${index+1}. ${name}`);
    })

// arr.find(fn) : 찾는다 --> 함수도 전달 가능함
// 주의 --> 첫번째 true 값만 반환하고 끝 만약 없으면 undefined를 반환
    let arr2 = [1,2,3,4,5];

    const result = arr2.find((item)=>{
        return item % 2 === 0;
    });

    console.log(result);

    // 2번째 예시 - 미성년자 
    let userList = [
        { name : "Mike" , age : 30 },
        { name : "Jane" , age : 27 },
        { name : "Tom" , age : 10 },
    ];

    const under =  userList.find((user)=>{
        return user.age < 20
    })

    console.log(under);

// arr.filter(fn) : 만족하는 모든 요소를 배열로 반환
    let arr3 = [1,2,3,4,5];

    const result2 = arr3.filter((item)=>{
        return item % 2 === 0;
    });

    console.log(result2);

// arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
    let userList2 = [
        { name : "Mike" , age : 30 },
        { name : "Jane" , age : 27 },
        { name : "Tom" , age : 10 },
    ];

    let newUserList = userList.map((user,index)=>{
        return Object.assign( {}, user, {
            isAdult : user.age > 19
        });
    });

    console.log(newUserList);