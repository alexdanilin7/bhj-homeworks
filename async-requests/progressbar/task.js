const uploadform = document.getElementById('form');
const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');
const btnSend = document.getElementById('send');

uploadform.addEventListener('submit', (event)=>{
    event.preventDefault();
    
});

btnSend.addEventListener('click',(event)=>{
    console.log('asdfadfa');
    const file = fileInput.files[0];
    console.log(file);
    if (file){
        console.log('asdfasdfasdfasdfasdfasdf');
        const formData = new FormData();
        formData.append('file', file);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        
        xhr.upload.addEventListener('progress', (event)=>{
            if(event.lengthComputable){
                const percent = (event.loaded / event.total);
                progress.value = percent;
            }
        });

        xhr.addEventListener('load', ()=>{
            if(xhr.status === 201){
                alert('файл загружен');
            }else{
                alert(`Ошибка ${xhr.status}`);
            }
        });

        xhr.send(formData);
    }
});