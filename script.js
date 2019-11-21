// jshint esversion: 6

const answers=["b",'b','b','b','a','a'];

const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let score = 0;
    const userAns = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value];
    
    //check Ans
    userAns.forEach((item,index) => {
        if(item === answers[index]){
            score++;
        }
    });
    
    //console.log(String(((score/6)*100).toFixed(0))+"%" );
    //show result
    let final = Math.round((score/answers.length)*100);
    
    //result.querySelector("span").textContent = String(((score/6)*100).toFixed(0))+"%";
    
    result.classList.remove("d-none");
    scrollTo(0,0);
    //animation output 
    let output = 0;

    const timer = setInterval(()=>{
        result.querySelector("span").textContent = `${output}%`;
        if(output === final){
            clearInterval(timer);
        }else{
            output++;
        }

    },10);


    
});