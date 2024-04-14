const categoriesContainer=document.getElementById('categories');

categoriesContainer.addEventListener('click',(event)=>{
    const clickedElement=event.target;
    // console.log(clickedElement);

    if(clickedElement.classList.contains("product")){
        const parent=clickedElement.parentElement;
        const category=parent.querySelector("h2").textContent;

        const product=clickedElement.textContent;

        console.log(`Clicked on ${product} in the ${category} category.`);
    }
})

