let students = {
    koreanScore : 90,
    "english Score" : 70,
    // 문자열로 키를 적었을때는 키의 이름을 띄어쓰기 할 수 있다
    // 띄어쓰기 사용시 점연산자로는 접근할 수 없음 
    mathScore : 80,
    scienceScore : 60,
};

// 값에 접근하는 방법
// []연산자
console.log(students["english Score"]);

// 점(닷, 마침표)연산자
console.log(students.scienceScore);
