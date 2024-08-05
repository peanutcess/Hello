// 콜백함수
// 정의 : 함수에 파라미터로 들어가는 함수
// 용도 : 순차적으로 실행하고 싶을 때 씀

// document.querySelector(".button").addEventListener("click", function(){})
// --> addEventListener 얘 함수임 근데 얘 안에 function(){} 파라미터로 함수를 넣음 
// function(){} 그래서 얘를 콜백함수라고 부름 

// setTimeout(() => {}, timeout) --> 얘도 () => {} 콜백함수 


// * 참고) 다른곳에서 만든 함수도 콜백 함수로 넣을 수 있음 --> 함수넣는 자리에 함수명을 넣으면 됨


// 중급자가 듣는 콜백 함수 
    function first(second){
        console.log(1)
        second()
    };

    function second(){
        console.log(2);
    };

    first(second);

    // --> 콜백함수를 많이 쓰다보면 단점 ex) DB에서 데이터를 뽑고 싶다 A-B-C  --> 우물 형식으로 파이게되며 가독성 또한 좋지 못함
        // db.collection("post").findOne(A, function(){
        //     db.collection("post").findOne(B,function(){
        //         db.collection("post").findOne(C, function(){

        //         })
        //     })
        // })