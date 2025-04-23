const reveals = document.querySelectorAll('.reveal');

function isInViewPort(element){
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    return elementTop < viewportHeight ? true : false;
}

document.addEventListener('scroll', ()=>{
    reveals.forEach((reveal)=>{
        if (isInViewPort(reveal)){
            reveal.classList.add('reveal_active');
        }else{
            reveal.classList.remove('reveal_active'); 
        }
    });
});