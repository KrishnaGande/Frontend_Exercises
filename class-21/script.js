const grandparent=document.getElementById('grandparent');
const parent=document.getElementById('parent');
const child=document.getElementById('child');

grandparent.addEventListener('click',()=>{
    console.log('grandparent clicked');
})

parent.addEventListener('click',()=>{
    console.log('parent clicked');
})

child.addEventListener('click',(e)=>{
    console.log('child clicked');
    e.stopPropagation();
})

// grandparent.addEventListener('click',()=>{
//     console.log('grandparent clicked (Capturing)');
// },true);

// parent.addEventListener('click',()=>{
//     console.log('parent clicked (Capturing)');
// },true);

// child.addEventListener('click',()=>{
//     console.log('child clicked (Capturing)');
// },true);