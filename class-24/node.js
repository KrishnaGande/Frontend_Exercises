// function car(make,model){
// //     this.make=make;
// //     this.model=model;
// //     this.displayInfo=function(){
// //         console.log(`Car ${this.make} ${this.model}`);
// //     };
// // };

// // const myCar= new car('Toyota','Corolla');
// // myCar.displayInfo();

// // const user = {
// //     firstName: "John",
// //     lastName: "Doe",
// //     getFullName: // Write function here
// //     function(){
// //         console.log(`${this.firstName} ${this.lastName}`);
// //     }
// // };

// // user.getFullName()

// 'use strict';
// console.log('Scenario 1');
// console.log(this)

// console.log('Scenario 2');
// function fnGlobal(){
//     console.log(this);
// };
// fnGlobal();

// console.log('Scenario 3');
// var obj={
//     fn:function(){
//         console.log(this);
//     }
// }
// obj.fn();

// console.log('Scenario 4');
// var obj2={
//     fn:function(){
//         var nestedFn=function(){
//             console.log(this);
//         };
//         nestedFn();
//     }
// }
// obj2.fn();//global

// 'use strict';
// let a=10;
// console.log(a);
// const add1=function(x,y){
//     const a=10;
//     const val=a+x+y;
//     console.log(val);
//     return x+y;
// }

// const add2=(x,y) => {
//     const a=10;
//     const val=a+x+y;
//     console.log(val);
//     return x+y;
// };
// add2(10,15);

// const double=function(x){
//     console.log(x*2);
// }

// const double2q=x=>x*2;
// double(10);
// console.log(double2q(10));

const joey={
    nickName:'joey',
    eventuallySayName:function(){
        function actuallySayName(){
            console.log(`first: ${this.nickName}`)
        }
        const actuallySayNameArrow=()=>{console.log(`arrow: ${this.nickName}`)};

        setTimeout(actuallySayName,1000);
        setTimeout(actuallySayNameArrow,1000);
    }
}

joey.eventuallySayName();