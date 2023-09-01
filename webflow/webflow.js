 var dark =document.querySelector(".first nav button")
 dark.addEventListener("click",function()
 {
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector("body").style.color="white";
    document.querySelector(".second .content2 ").style.backgroundColor="black";
    document.querySelector(".third .content3 ").style.backgroundColor="black";
    document.querySelector(".fourth .content4").style.backgroundColor="black";
    document.querySelector(".cards #card1").style.backgroundColor="black";
    document.querySelector(".cards #card2").style.backgroundColor="black";
    document.querySelector(".cards #card3").style.backgroundColor="black";
    document.querySelector(".cards #card1").style.border=" 2px solid white";
    document.querySelector(".cards #card2").style.border=" 2px solid white";
    document.querySelector(".cards #card3  ").style.border=" 2px solid white";
    document.querySelector(".cards #card1 img ").style.backgroundColor=" white";
    document.querySelector(".cards #card2 img ").style.backgroundColor=" white";
    document.querySelector(".cards #card3 img ").style.backgroundColor=" white";

    document.querySelector(" .stats ul ").style.backgroundColor="black";



    console.log("butn")
 })