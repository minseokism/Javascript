//[4.1 함수 정의] 

//함수 선언문 (function statement) 방식으로 함수 생성
//반드시 함수명이 정의되어 있어야 한다.
//function이라는 키워드를 명시적으로 사용하고 리턴값과 매개변수로 넘기는 값에 변수 타입을 기술하지않는다.
//add는 함수이름 

function add(x,y){
	return x+y;
}

console.log(add(3,4));

//함수 표현식 (function expression) 방식으로 함수 생성
//함수 이름이 선택사항이며, 보통 사용하지 않는다.
//add 변수는 함수 리터럴로 생성한 함수를 참조하는 변수이지, 함수 이름이 아니다. (함수 변수라 지칭)\
//이름이 없는 함수의 형태를 자바스크립트에서는 익명 함수(anonymous function)이라함
//아래 방법은 익명함수를 이용한 함수 표현식 방법(익명 함수 표현식)
var add = function(x,y){
	return x+y;
};

var plus=add;

console.log(add(3,4));
console.log(plus(5,6));

//기명 함수 표현식 
var add = function sum(x,y){
	return x+y;
};

console.log(add(3,4));
console.log(sum(3,4)); //Uncaught ReferenceError : sum is not defined 에러 발생 
					   //왜냐하면 함수 표현식에서 사용된 함수 이름이 외부 코드에서 접근 불가능하기 때문


//예제 4-4) 함수 표현식 방식으로 구현한 팩토리얼 함수
var factorialVar = function factorial(n){
	if(n>=1){
		return 1;
	}
	return n * factorial(n-1);
};

console.log(factorialVar(3));
console.log(factorial(3)); //undefined


//함수 호이스팅 (Funtion Hoisting)
//함수 선언문 형태로 정의한 함수의 유효 범위는 코드의 맨 처음부터 시작한다. 
//발생 원인 변수 생성(instantiation)과 초기화(Initialization)의 작업이 분리돼서 진행되기 때문

//예제 4-6) 함수 선언문 방식과 함수 호이스팅
add(2,3) //5

function add(x,y){
	return x+y;
}

add(3,4); //7

//예제 4-7) 함수 표현식 방식과 함수 호이스팅

add(2,3) //uncaught type error

var add=function(x,y){
	return x+y;
}

add(3,4); //7
























