const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.addEventListener('readystatechange', ()=>{
    if(xhr.readyState === xhr.DONE && xhr.status===200){
        const data = JSON.parse(xhr.responseText);
        const pollTitle = document.getElementById('poll__title');
        const pollAnswers = document.getElementById('poll__answers');
        pollTitle.textContent = data.data.title;
        data.data.answers.forEach(answer => {
            pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">
                                                                            ${answer}
                                                                            </button>`);
        });
        const btnAnswers = document.querySelectorAll('.poll__answer');
        btnAnswers.forEach((btnAnswer, index)=>{
            btnAnswer.addEventListener('click', ()=>{
                alert('Спасибо, ваш голос засчитан!');
                const xhr2 = new XMLHttpRequest();
                xhr2.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                xhr2.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhr2.addEventListener('readystatechange', ()=>{
                    if(xhr2.readyState === xhr2.DONE && xhr2.status === 201){
                        pollAnswers.innerHTML='';
                        const newdata = JSON.parse(xhr2.responseText);
                        console.log(newdata);
                        newdata.stat.forEach(item=>{
                            pollAnswers.insertAdjacentHTML('beforeend', `<p>${item.answer} ${item.votes}%</p>`);
                        });
                    }
                });
                xhr2.send( `vote=${data.id}&answer=${index}`);
                
            });
});
    }
});

xhr.send();

