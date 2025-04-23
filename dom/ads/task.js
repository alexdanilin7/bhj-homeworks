const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator=>{
    const rotatorCases = rotator.querySelectorAll('.rotator__case');
    
    function updateInterval(){
        rotatorCases.forEach((rotatorCase)=>{rotatorCase.classList.remove('rotator__case_active')});
        const randomIndex = Math.floor(Math.random() * rotatorCases.length);
        rotatorCases[randomIndex].classList.add('rotator__case_active');
        const color = rotatorCases[randomIndex].getAttribute('data-color');
        rotatorCases[randomIndex].style.color = color;
        const speed = Number(rotatorCases[randomIndex].getAttribute('data-speed')) || 1000;
        setTimeout(updateInterval, speed);
    }
        updateInterval();
    }
);
