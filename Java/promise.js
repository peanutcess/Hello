// promise 

// 기본적인 예 
// const pr = new Promise((resolve, reject)=>{
//  ...code입력 
//  });

// --> resolve : 성공 ,  reject : 실패 


// new Promise = state : pending(대기) , result : undefined 
// resolve(value) --> state : fulfilled(이행됨) , result : value
// reject(error) --> state : rejected(거부됨) , result : error

// 코드로 살펴보면 
    // const pr = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve("OK")
    //     },3000)
    // })  ---> state가 대기 값은 없음 이었다가 --3초--> state가 이행되며 값은 "OK"

// 소비자의 코드 즉 값반환 코드 
//  pr.then(
//      function(result){}, -----> 이행 되었을때 실행
//      function(err){}  --------> 거부 되었을때 실행
//  );


// catch ---> err발생한 경우만 실행 그래서 위의 코드가 아래 처럼 만들 수 있음 
//  pr.then(
//      function(result){}
//  ).catch(
//      function(err){}
//  );

// finally 는 이행이든 거부든 처리가 완료되면 항상 실행 됨 사용법은 동일 