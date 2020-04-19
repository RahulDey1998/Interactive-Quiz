const correctAnswers = ['B' , 'A' , 'B' , 'B'];

const result = document.querySelector('.result');
const form = document.querySelector('.quiz-form');

function endAnimation()
{
   const loader =  document.querySelector('#loading');
   setTimeout(()=>
   {
    loader.style.display = 'none';
   },1800);
   
}
 
form.addEventListener('submit' , e =>
{
    e.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value , form.q2.value, form.q3.value, form.q4.value ]
    
    console.log(userAnswers);
    //check answers

    userAnswers.forEach((answer , index) =>
    {
        if(answer === correctAnswers[index])
        {
            score += 25;
        }
    });
    
    scrollTo(0,0);

    result.classList.remove('d-none');
    let i=0;
    const timer = setInterval(()=>
    {
        result.querySelector('span').textContent = `${i}%`;
        i++;
        if(i === score+1)
        {
            clearInterval(timer);
        }
    },20);
    
    
    
    
}); 

// When we want to so some task after specific time after page loading 
// setTimeout(() =>
// {
//     alert('hello ninjas');
// },3000); 