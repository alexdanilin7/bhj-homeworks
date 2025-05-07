function setCookie(name, value, days) {
     const date = new Date();
     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
     const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value)+"; " + expires + "; path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";

}


window.addEventListener('load', ()=>{
    const modal = document.getElementById('subscribe-modal');
    const modalClose = document.querySelector('.modal__close');
    const isClosed = getCookie('modalClosed');

    if(!isClosed){
        modal.classList.add('modal_active');
    }
    
    modalClose.addEventListener('click', ()=>{
        modal.classList.remove('modal_active');
        setCookie('modalClosed', 'true', 360);
    });
});