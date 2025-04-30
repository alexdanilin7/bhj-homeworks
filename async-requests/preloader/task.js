const xhr = new XMLHttpRequest();
const loader = document.getElementById("loader");
const items = document.getElementById('items');
const VALUTE_KEY = 'valute';

function addValute(data){
    items.innerHTML='';
    Object.entries(data.response.Valute).forEach(([key, value])=>{
        items.insertAdjacentHTML('beforeend', `<div class="item">
            <div class="item__code">
                    ${value.CharCode}
            </div>
            <div class="item__value">
                    ${value.Value}
            </div>
            <div class="item__currency">
                    руб.
            </div>
        </div`)
    });

}

xhr.addEventListener('readystatechange', (event)=>{
    if(xhr.readyState === xhr.HEADERS_RECEIVED){
       loader.classList.add("loader_active");
    }
    if(xhr.readyState === xhr.DONE && xhr.status === 200){
        loader.classList.remove('loader_active');
        const data = JSON.parse(xhr.responseText);
        addValute(data);
        saveValuteOnLocalStorage(JSON.stringify(data));
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();


function saveValuteOnLocalStorage(data){
    localStorage.setItem(VALUTE_KEY, data);
}

function loadValuteOnLocalStorage(){
    const savedData = localStorage.getItem(VALUTE_KEY);
    
    if(savedData){
        const data = JSON.parse(savedData);
        addValute(data);
    }
}
loadValuteOnLocalStorage();