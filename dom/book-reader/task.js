const fontSizes = document.querySelectorAll('.font-size');
const bookColor = document.querySelector('.book__control_color')
const colorTexts = bookColor.querySelectorAll(".color");
const bookBg = document.querySelector('.book__control_background')
const colorBgs = bookBg.querySelectorAll(".color");

const book = document.getElementById("book");

fontSizes.forEach((fontSize)=>{
    
    fontSize.addEventListener('click', (event)=>{
        fontSizes.forEach((item)=>{item.classList.remove('font-size_active')});
        fontSize.classList.toggle('font-size_active');
        event.preventDefault();

        const dataSize = fontSize.getAttribute("data-size");
        console.log(dataSize);
        book.classList.remove('book_fs-big','book_fs-small');
        switch(dataSize){
            case 'small': book.classList.add('book_fs-small'); break;
            case 'big': book.classList.add('book_fs-big'); break;
        }

        return false;
    });
    
});

colorTexts.forEach((colorText)=>{
    colorText.addEventListener('click', (event)=>{
        colorTexts.forEach((item)=>{item.classList.remove("color_active")});
        colorText.classList.toggle('color_active');
        const dataTextColor = colorText.getAttribute('data-text-color');
       
        book.classList.remove('book_color-gray', 'book_color-whitesmoke','book_color-black');
        switch(dataTextColor){
            case 'black': book.classList.add('book_color-black'); break;
            case 'gray': book.classList.add('book_color-gray'); break;
            case 'whitesmoke': book.classList.add('book_color-whitesmoke'); break;
        }
        event.preventDefault()
    });
});

colorBgs.forEach((colorBg)=>{
    colorBg.addEventListener('click', (event)=>{
        colorBgs.forEach((item)=>{item.classList.remove("color_active")});
        colorBg.classList.toggle('color_active');
        const dataBgColor = colorBg.getAttribute('data-bg-color');
        book.classList.remove('book_bg-black', 'book_bg-gray','book_bg-white');
        switch(dataBgColor){
            case 'black': book.classList.add('book_bg-black'); break;
            case 'gray': book.classList.add('book_bg-gray'); break;
            case 'white': book.classList.add('book_bg-white'); break;
        }
        event.preventDefault()
    });
});