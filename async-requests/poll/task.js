const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.addEventListener('readystatechange', ()=>{
    if(xhr.readyState === xhr.DONE && xhr.status===200){
        const data = JSON.parse(xhr.responseText);
        console.log(data);
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
                console.log(data.id, index);
                alert('Спасибо, ваш голос засчитан!');

                xhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll', false);
                xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhr.send( `vote=${data.id}&answer=${index}`);
                pollAnswers.innerHTML='';
                const newdata = JSON.parse(xhr.responseText);
                newdata.stat.forEach(item=>{
                    pollAnswers.insertAdjacentHTML('beforeend', `<p>${item.answer} ${item.votes}%</p>`);
                });
            });
});
    }
});

xhr.send();

