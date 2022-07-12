

function changeBg(){
    
    const images =[
        'url("../images/tree.JPG")',
        'url("../images/road.jpg")',
        'url("../images/sunset.JPG")',
        'url("../images/bird.jpg")',
        


    ]

    const section = document.querySelector('header')
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
   
}
setInterval(changeBg, 1300)
