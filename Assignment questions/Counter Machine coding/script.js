const incrementButton=document.querySelector(".add");
const decrementButton=document.querySelector(".subtract");
const resetButton=document.querySelector('.reset');
const incredecreupby=document.querySelector('input');
const countDisplay=document.querySelector('.number');

let count=0;

decrementButton.addEventListener('click',function(){
    if(count>0){
        count=count-parseInt(incredecreupby.value);
        countDisplay.innerHTML=count;
    }
});

incrementButton.addEventListener('click',function(){
    count=count+parseInt(incredecreupby.value);
    countDisplay.innerHTML=count;

})

