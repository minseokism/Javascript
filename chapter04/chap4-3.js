//[4.3 함수의 다양한 형태]

//- 콜백 함수
//어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호추로디느 함수를 말한다.

//- 즉시 실행 함수 (Immediate function)
// 최초 한 번의 실행만을 필요로 하는 초기화 코드 부분에 사용

//예제 4-16 즉시 실행 함수 예제 코드
(function (name){
	console.log('This is the immediate fucntion -> '+ name);
})('foo');

//- 내부 함수 (inner funtion)

// 예제 4-18 내부 함수 예제 코드

//parent()함수 정의
function parent(){
	var a = 100;
	var b = 200;

	function child(){
		var b = 300;

			console.log(a);
			console.log(b);
	}
	child(); 
}
parent(); 
// child(); //함수 스코핑 때문에 접근 불가, 함수 내부에 선언된 변수는 함수 외부에서 접근 불가

/* 결과 
	100
	300
	child is not defined
*/


//스코프 체이닝 - 내부 함수는 자신을 둘러싼 외부 함수의 변수에 접근 가능하다.

//예제 4-19) 함수 스코프 외부에서 내부 함수 호출하는 예제 코드
function parent(){
	var a=100;
	var child = function(){
		console.log(a);
	}
	return child;
}

var inner = parent();
inner();

//parent()와 같은 부모 함수 스코프의 변수를 참조하는 inner()와 같은 함수를 클로저라고한다 . 

//- 함수를 리턴하는 함수

//예제 4-20) 자신을 재정의하는 함수 예제 코드

var self = function(){
	console.log('a');
	return function(){
		console.log('b');
	}
}

self = self(); //a
self();		   //b