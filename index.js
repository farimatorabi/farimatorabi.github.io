const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


const textDisplay = document.getElementById('name');
const textDisplaySubtitle = document.getElementById('sub');
const phrases = ['Farima Torabi'];
const subPhrases = ['A Junior Front-end Developer'];
let i = 0;
let j = 0;
let k= 0;
let l=0;
let curretPhrase = [];
let subCurretPhrase= [];


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    });
});


function loop() {
    textDisplay.innerHTML = curretPhrase.join('');

    if( i < phrases.length) {
        if(j < phrases[i].length) {
            curretPhrase.push(phrases[i][j])
            j++
        }
        
    }

    setTimeout(loop, 220)
}

loop()

function loopSub() {
    textDisplaySubtitle.innerHTML = subCurretPhrase.join('')

    if(k < subPhrases.length) {
        if(l < subPhrases[k].length) {
            subCurretPhrase.push(subPhrases[k][l])
            l++
        }
    }

    setTimeout(loopSub, 150)
}

loopSub()


