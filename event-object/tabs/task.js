const tabs = document.querySelectorAll(".tabs");
tabs.forEach((tabsItem)=>{
    const tabItems = tabsItem.querySelectorAll(".tab"); 
    const tabContents = tabsItem.querySelectorAll(".tab__content");

    tabItems.forEach((tabItem, index)=>{
        tabItem.addEventListener("click", function(){
            console.log('asdf');
            tabItems.forEach((item)=>{item.classList.remove('tab_active')});
            tabContents.forEach((item)=>{item.classList.remove('tab__content_active')});
            tabItem.classList.toggle('tab_active');
            tabContents[index].classList.toggle("tab__content_active");
            return false;
        });
    });
    
});