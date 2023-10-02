const mole = document.querySelectorAll(".mole");
let moles
let score = document.querySelector(".score");
let remaining = document.querySelector(".remaining")
let count = 0
let remainCount =10
let end = 0
function Play() {

    const Major = setInterval(function () {

        const Interval = setInterval(function () {
            let i = Math.floor(Math.random() * mole.length);
            moles = mole[i]

            moles.style.display = "block";
            clearInterval(Interval)

        }, 1000);

       moles.style.display = "none";
        remaining.innerHTML="Remaining: " + --remainCount;
        end++;
    
        if (end === 10) {
            clearInterval(Major)
            clearInterval(Interval)
            Changes();
 }
 }, 2000);

}
Play();



mole.forEach(moleC => {
    moleC.addEventListener("click", function (e) {
        if (e.target) {
            score.innerHTML = "Score :" + count++;
            
        }

    });
});

function Changes() {
    const printScore = document.createElement("h1");
    printScore.classList.add("final-score");
    printScore.innerHTML = `<h1>Your Final ${score.innerHTML}</h1>`;
    document.querySelector(".container").style.opacity = "0.7";
    document.querySelector('.main').appendChild(printScore);
    const rePlay = document.createElement("button");
    rePlay.classList.add("replay-button");
    rePlay.innerHTML = "RETRY"
    document.querySelector('.main').appendChild(rePlay);
    rePlay.addEventListener("click", function () {
 window.location.reload()

    });
}