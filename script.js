const titles = ["bolo.",  "magic.", "videogames.", "sorvete.", "animais."]

let currentTitle = document.querySelector(".title-span")
let titleText = document.querySelector(".title-span");
let ogTitle = titles[0];

function spanToLetters () {    
    titleText.innerHTML = titleText.textContent.replace(/\S/g, "<span class='title-letter'>$&</span>");
}

function spanToText () {    
    titleText.innerHTML = ogTitle;
}

function titleChanger () {
    spanToText();
    let titleIndex = titles.indexOf(currentTitle.innerHTML)    
    if(titleIndex < titles.length - 1){    
        let newTitle = titles[titleIndex + 1] 
        currentTitle.innerHTML = newTitle
        ogTitle = newTitle              
    } else {
        currentTitle.innerHTML = titles[0]
        ogTitle = titles[0]
    }    
}

setInterval(() => {
    titleChanger(),
    spanToLetters(),    
    anime.timeline({loop: false})
    .add({
        targets: '.title-span',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: '.title-span',
        translateX: [0, document.querySelector('.title-span .title-letter').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      })
      .add({
        targets: '.title-span .title-letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 300,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
      })
      .add({
        targets: '.title-span',
        opacity: 0,
        duration: 200,
        easing: "easeOutExpo",
        delay: 700
      });
}, 2700)

