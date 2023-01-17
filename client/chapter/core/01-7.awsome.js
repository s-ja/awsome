// console.log(this); //undefined


const user = {
    name : 'tiger',
    age : 34,
    sayHi(){ //일반 함수->this 바인딩 함
        // console.log(this); // user => 나를 호출한 대상
        function sayHo() {
            console.log(this);
        }
        sayHo()
        sayHo.call(this)
    },
    sayHello : ()=>{ //화살표 함수->this 바인딩 안 함, 뒤져도 안찾음, 그런데 더 위에 있다면?
        console.log(this); // undefined => type="module"에서 window는 없음(?)
    },
    sayChiao(){
        console.log(this, "checking"); // user => 나를 호출한 대상
    }
}


user.sayHi(); //user
// user.sayHello(); // undefined
// user.sayChiao(); //user