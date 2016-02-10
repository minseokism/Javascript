//[4.2 함수 객체 : 함수도 객체다]

//예제 4-8) add()함수도 객체처럼 프로퍼티를 가질수 있다.
function add(x,y){
	return x+y;
}

add.result = add(3,2);
add.status = 'OK';

console.log(add.result); // 5
console.log(add.status); // 'OK'

//자바스크립트 함수 특징
/*
	- 리터럴에 의해 생성
	- 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
	- 함수의 인자로 전달 가능
	- 함수의 리턴값으로 리턴 가능
	- 동적으로 프로퍼티를 생성 및 할당 가능
*/

//함수를 입급 (first class) 객체라고 부른다
//위의 기능이 모두 가능한 객체를 일급 객체라고 부른다. 

//예제 4-9) 변수나 프로퍼티에 함수값을 할당하는 코드

// 변수에 함수 할당
var foo= 100;
var bar= function () {return 100;};
console.log(bar()); //100

// 프로퍼티에 함수 할당
var obj={}; 
obj.baz = function() {return 200;};
console.log(obj.baz()); //200


//예제 4-10) 함수를 다른 함수의 인자롤 넘긴 코드

// 함수 표현식으로 foo() 함수 생성
var foo = function(func){
	func(); //인자로 받은 func() 함수 호출
};

foo(function(){
	console.log("Function can be used as the argument.");
})


//예제 4-11) 함수를 다른 함수의 리턴값으로 활용한 코드 
var foo = function(){
	return function(){
		console.log('this function is the return value');
	};
};

var bar=foo();
bar();

//예제 4-12 함수 객체 프로퍼티를 출력하는 코드
function add(x,y){
	return x+y;
}

console.dir(add);

//예제 4-13 ) 함수 객체의 length 프로퍼티 

function func0(){

};

function func1(x){
	return x;
}

function func2(x,y){
	return x+y;
}

function func3(x,y,z){
	return x+y+z;
}

console.log('func0.length - '+func0.length);
console.log('func1.length - '+func1.length);
console.log('func2.length - '+func2.length);
console.log('func3.length - '+func3.length);

//length 프로퍼티는 함수를 작성할 때 정의한 인자 개수를 나타냄 

//예제 4-14) 함수 객체와 프로토타입 객체와의 관계를 보여주는 코드

//MyFunction() 함수 정의
function myFunction(){
	return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);
