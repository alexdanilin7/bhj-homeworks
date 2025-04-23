const dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach(dropdownItem=>{
    dropdownItem.addEventListener('click', (item)=>{
        const dropdownList = dropdownItem.querySelector('.dropdown__list');
        dropdownList.classList.toggle('dropdown__list_active');

        const dropdownListItems = dropdownList.querySelectorAll(".dropdown__item");
        const dropdownValue = dropdownItem.querySelector(".dropdown__value");
        dropdownListItems.forEach(item=>{
            item.onclick = function(){
                dropdownValue.textContent = item.textContent;
                return false;
            }
        });
    });
});


