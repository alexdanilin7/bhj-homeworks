const timer = document.getElementById("timer");
let time = timer.textContent;




const intervalId = setInterval(()=>{
    time--;
    let hours = Math.floor(time/3600);
    let minutes = Math.floor(time % 3600 / 60);
    let seconds = time % 60; 
    timer.innerText = String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') +":"+String(seconds).padStart(2, '0');
    if (time===0){
        alert("Вы победили в конкурсе!");
        window.location.href = "./countdown.rar"
        clearInterval(intervalId);
    }
}, 1000)
