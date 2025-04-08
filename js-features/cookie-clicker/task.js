const clickerCounter = document.getElementById("clicker__counter");
const clickerVelosity = document.getElementById("clicker__velosity");
const cookie = document.getElementById("cookie");

let clicks = Number(clickerCounter.textContent);

const originalWidth = cookie.width;
const newWidth = cookie.width*0.9;

let isScaled = false;
let previousTime = null;

cookie.onclick = function(){
    const currentTime = Date.now();

     clicks += 1
     clickerCounter.innerHTML = clicks;

     if (isScaled){
        cookie.width = newWidth;
     } else{
        cookie.width = originalWidth;
     }
     isScaled = !isScaled;

     if (previousTime !== null){
        const diffTime = currentTime - previousTime;
        clickerVelosity.textContent = (1/(diffTime/1000)).toFixed(2);
     }

     previousTime = currentTime;

}
