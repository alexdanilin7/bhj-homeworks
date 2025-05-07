const singin = document.getElementById('signin');
const btnSingin = document.getElementById('signin__btn');
const formSingin = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const idUser = document.getElementById('user_id');
const btnSingout = document.getElementById('signout__btn');
const btnSingoutDiv = document.getElementById('signout');

const USER_ID = 'user_id';

function saveUserOnLocalStorage(userId){
    localStorage.setItem(USER_ID, userId);
}
function loadUserFromLocalStorage(){
    const data = localStorage.getItem(USER_ID);
    if (data){
        welcome.classList.add('welcome_active');
        idUser.textContent = data;
        singin.classList.remove('signin_active');
        btnSingoutDiv.classList.add('signout_active');
    }
}

formSingin.addEventListener('submit', (event)=>{
    event.preventDefault();
});

btnSingin.addEventListener('click', ()=>{
    welcome.classList.remove('welcome_active');
    const formData = new FormData(formSingin);    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', formSingin.getAttribute('action'));
    xhr.addEventListener('load', (event)=>{
        if (xhr.status === 201 && xhr.readyState === xhr.DONE){
            const data = JSON.parse(xhr.responseText);
            console.log(data.success);
            if (data.success){
                welcome.classList.add('welcome_active');
                idUser.textContent = data.user_id;
                singin.classList.remove('signin_active');
                saveUserOnLocalStorage(data.user_id);
                btnSingoutDiv.classList.add('signout_active');
            }else{
               alert('Неверный логин/пароль');
            }
            formSingin.reset();
        }
    });
    xhr.send(formData);

});

btnSingout.addEventListener('click', ()=>{
    localStorage.clear();
    btnSingoutDiv.classList.remove('signout_active');
    location.reload();
});

loadUserFromLocalStorage();
