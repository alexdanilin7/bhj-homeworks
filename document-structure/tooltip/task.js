const hasTooltips = document.querySelectorAll('.has-tooltip');
const attributes = ['top', 'right', 'left', 'bottom'];

hasTooltips.forEach((hasTooltip, index) => {
    if (!hasTooltip.nextElementSibling || !hasTooltip.nextElementSibling.classList.contains('tooltip')) {
        hasTooltip.insertAdjacentHTML('afterend', `<div class="tooltip">${hasTooltip.getAttribute('title')}</div>`);
    }

    hasTooltip.setAttribute('data-position', attributes[index % attributes.length]);

    const tooltip = hasTooltip.nextElementSibling;

    hasTooltip.addEventListener('click', (event) => {
        event.preventDefault();

        const isActive = tooltip.classList.contains('tooltip_active');

        document.querySelectorAll('.tooltip').forEach((t) => t.classList.remove('tooltip_active'));

        if (!isActive){
            tooltip.classList.add('tooltip_active');
        if (tooltip.classList.contains('tooltip_active')) {
            const position = hasTooltip.getAttribute('data-position');
            const rect = hasTooltip.getBoundingClientRect();

            switch (position) {
                case 'top':
                    tooltip.style.top = `${rect.top - tooltip.offsetHeight}px`;
                    tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
                    break;
                case 'bottom':
                    tooltip.style.top = `${rect.bottom}px`;
                    tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
                    break;
                case 'left':
                    tooltip.style.top = `${rect.top + rect.height / 2 - tooltip.offsetHeight / 2}px`;
                    tooltip.style.left = `${rect.left - tooltip.offsetWidth}px`;
                    break;
                case 'right':
                    tooltip.style.top = `${rect.top + rect.height / 2 - tooltip.offsetHeight / 2}px`;
                    tooltip.style.left = `${rect.right}px`;
                    break;
            }  
        }
    }
    });
});


document.addEventListener('scroll', () => {
    document.querySelectorAll('.tooltip').forEach((tooltip) => tooltip.classList.remove('tooltip_active'));
});