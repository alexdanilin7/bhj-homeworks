const hasTooltips = document.querySelectorAll('.has-tooltip');
const atributes = ['top','right','left', 'bottom' ];

hasTooltips.forEach((hasTooltip, index)=>{
    
    hasTooltip.insertAdjacentHTML('afterEnd', `<div class="tooltip">${hasTooltip.getAttribute('title')}</div>`)
    hasTooltip.setAttribute('data-position', atributes[index % atributes.length]);

    hasTooltip.addEventListener('click', (event)=>{
        event.preventDefault();
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach((tooltip)=>{tooltip.classList.remove("tooltip_active")});
        tooltips[index].classList.add('tooltip_active');

        const position = hasTooltip.getAttribute('data-position');
        const rect = hasTooltip.getBoundingClientRect();
        switch(position){
            case 'top': 
                tooltips[index].style.top = `${rect.top -  tooltips[index].offsetHeight}px`;
                tooltips[index].style.left = `${rect.left + rect.width / 2 - tooltips[index].offsetWidth / 2}px`;
                break;
            case 'bottom': 
                tooltips[index].style.top = `${rect.bottom}px`;
                tooltips[index].style.left = `${rect.left + rect.width / 2 - tooltips[index].offsetWidth / 2}px`;
                break;
            case 'left':
                tooltips[index].style.top = `${rect.top + rect.height / 2 - tooltips[index].offsetHeight / 2}px`;
                tooltips[index].style.left = `${rect.left - tooltips[index].offsetWidth}px`;
                break;
    
            case 'right':
                tooltips[index].style.top = `${rect.top + rect.height / 2 - tooltips[index].offsetHeight / 2}px`;
                tooltips[index].style.left = `${rect.right}px`;
                break;
        }
    });

});
document.addEventListener('scroll', (event)=>{
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach((tooltip)=>{tooltip.classList.remove("tooltip_active")});
});