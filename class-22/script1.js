const colorpalette=document.getElementById('colorPalette');

colorpalette.addEventListener('click',(event)=>{
    const childElement=event.target;

    if(childElement.classList.contains('color-box')){
        let color=childElement.style.backgroundColor;
        document.body.style.backgroundColor=color;
    }
});