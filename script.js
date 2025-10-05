const num1 = Math.ceil(Math.random()*20);
const num2 = Math.ceil(Math.random()*20);

const questionEle = document.getElementById("question");

const inputEle = document.getElementById("input");

const formEle = document.getElementById("form");

const scoreEle = document.getElementById("Score");

const resetBtnEle = document.querySelector(".rst");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreEle.innerText = `Score : ${score}`;

questionEle.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2;

formEle.addEventListener("submit", ()=>{
    // e.preventDefault(); // prevent page reload
    const userAns = inputEle.Value;
    if(userAns === correctAns){
        score++;
        // updateLocalStorage();
    }else{
        score--;
        // updateLocalStorage();
    }
    updateLocalStorage();
    scoreEle.innerText = `Score : ${score}`;
    inputEle.value = " ";
});

resetBtnEle.addEventListener("click", ()=>{
    score = 0;
    updateLocalStorage();
    scoreEle.innerText = `Score : ${score}`;
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}