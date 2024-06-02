// const grandparent=document.getElementById('grandparent');
// const parent=document.getElementById('parent');
// const child=document.getElementById('child');

// grandparent.addEventListener('click',()=>{
//     console.log('grandparent clicked');
// })

// parent.addEventListener('click',()=>{
//     console.log('parent clicked');
// })

// child.addEventListener('click',(e)=>{
//     console.log('child clicked');
//     e.stopPropagation();
// })

// // grandparent.addEventListener('click',()=>{
// //     console.log('grandparent clicked (Capturing)');
// // },true);

// // parent.addEventListener('click',()=>{
// //     console.log('parent clicked (Capturing)');
// // },true);

// // child.addEventListener('click',()=>{
// //     console.log('child clicked (Capturing)');
// // },true);

let arr = [1, 2, 3, 4, [10, 12], 5, 6];
// spreadArray now contains the same elements as arr, but it's a new array with a separate reference.
let spreadArray = [...arr];
spreadArray[2] = 100;
spreadArray[4] = 200;
spreadArray[4][1] = 300;
console.log("outputs ", spreadArray, arr); 
// Ouput:
// outputs  [
//     1, 2, 100, 4,
//   200, 5,   6
// ] [ 1, 2, 3, 4, [ 10, 12 ], 5, 6 ]