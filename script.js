let cluster = document.querySelector("#bubble-container");
let score = 0;
let maths;


// timer code
let timer = 60;
setInterval((settime) => {
    if (timer > 0) {
        timer--;
        document.querySelector("#timer").innerHTML = timer;
    } else {
        clearInterval(settime)
    }
}, 1000);
//timer code end

const generateNumber = () => {
    cluster.innerHTML="";
    for (let i = 1; i <= 100; i++) {
        let maths = Math.floor(Math.random() * 10);
        cluster.innerHTML += `<div class="bubbles" onclick="compareNumber(${maths})">${maths}</div>`
    }
    let hit = document.querySelector("#hit");
    maths = Math.floor(Math.random() * 10);
    hit.innerHTML = maths;
}
generateNumber();

const compareNumber = (number)=>{
    const scoreBox = document.querySelector('#score');
    if(number==maths){
        score+=10;
        scoreBox.innerHTML = score;
        generateNumber();
    }
}