const typedtextSpan = document.querySelector(".typed-text");

const textArray = ["Majoring in Computer Science (3.6), with a minor in Psychology and English. I am on the track to graduate in 2023. My courses have helped me develop my coding skills as the likes of Java, C, Python (Basics), SQL(Basics), HTML, Javascript. Currently I am looking for an internship for 2022.", "fun", "a journey", "LIFE"];
const typingDelay = 50;
const erasingDelay = 50;
const newTextDelay = 700;
let textArrayIndex = 0;
let charIdex=0;

function type() {
    if(charIdex < textArray[textArrayIndex].length) {
        typedtextSpan.textContent += textArray[textArrayIndex].charAt(charIdex);
        charIdex++;
        setTimeout(type, typingDelay);
    }
    else{
        setTimeout(erase, newTextDelay);
    }
}

function erase(){
    if(charIndex>0){
       typedtextSpan.textContent = textArray[textArrayIndex].substring(0, charIdex-1);
       charIndex--;
       setTimeout(erase, erasingDelay) 
    }
    else{
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay+1100);
    }
}
document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, newTextDelay+250);
})
function changeBg(){
    
    const images =[
        'url("./images/tree.JPG")',
        'url("./images/road.jpg")',
        'url("./images/sunset.JPG")',
        'url("./images/bird.jpg")',
        


    ]

    const section = document.querySelector('body')
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
   
}
setInterval(changeBg, 1500)

