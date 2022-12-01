//------------------------------------1---------------------------------
let notification=document.querySelector(".content1");
notification.addEventListener("click", (event)=> {
    if(event.target.className==='href'){
        let answer=prompt("Вы хотите покинуть страницу?");
        if (answer!=='Да'){
            event.preventDefault();
        }
    }
})
//------------------------------------2---------------------------------
let photos=document.querySelector(".photos");
let photo=document.querySelector(".mainImg");
photos.addEventListener("click", (event)=> {
    let thumbnail = event.target.closest('a');
    if (!thumbnail) return;
    showThumbnail(thumbnail.href);
    event.preventDefault();
})

function showThumbnail(href) {
    photo.src = href;
}
//------------------------------------3---------------------------------
let list=document.querySelector(".list");
list.addEventListener("click", (event)=> {
    if (event.target.className !== "one") return;

    if (event.ctrlKey || event.metaKey) {
        toggleSelect(event.target);
    } else {
        singleSelect(event.target);
    }

})
list.onmousedown = function() {
    return false;
}
function toggleSelect(tag) {
    tag.classList.toggle('gray');
}
function singleSelect(tag) {
    let selected = list.querySelectorAll('.gray');
    for(let elem of selected) {
        elem.classList.remove('gray');
    }
    tag.classList.add('gray');
}
//------------------------------------4---------------------------------
let field = document.querySelector('.field');
let line = field.querySelector('.line');

line.onmousedown = function(event) {
    event.preventDefault();
    let scale = event.clientX - line.getBoundingClientRect().left;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    function onMouseMove(event) {
        let scaleL = event.clientX - scale - field.getBoundingClientRect().left;
        if (scaleL < 0) {
            scaleL = 0;
        }
        let scaleR = field.offsetWidth - line.offsetWidth;
        if (scaleL > scaleR) {
            scaleL = scaleR;
        }
        line.style.left = scaleL + 'px';
    }
    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
};
//------------------------------------5---------------------------------
(function dragDrop(){
    let coordX;
    let coordY;
    let count=document.querySelector('.accData')
    const el1=document.querySelector(".photo1");
    const el2=document.querySelector(".photo2");
    const el3=document.querySelector(".photo3");
    const zone=document.querySelector(".trash");
    el1.draggable=true;
    el2.draggable=true;
    el3.draggable=true;
    el1.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('text/plain', ".photo1");
        coordX = e.offsetX;
        coordY = e.offsetY;
    });
    el2.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('text/plain', ".photo2");
        coordX = e.offsetX;
        coordY = e.offsetY;
    });
    el3.addEventListener('dragstart',(e)=>{
        console.log('Отработало');
        e.dataTransfer.setData('text/plain', ".photo3");
        console.log(e.dataTransfer.getData('text/plain'))
        coordX = e.offsetX;
        coordY = e.offsetY;
    });
    zone.addEventListener('drop',(e)=>{
            e.preventDefault();
            let elId = e.dataTransfer.getData('text/plain');
        // console.log(elId);
        const el=document.querySelector(elId);
        el.style.position = 'absolute';
        el.style.top = (e.pageY - coordY) + 'px';
        el.style.left = (e.pageX - coordX) + 'px';

    });
})();
//------------------------------------6---------------------------------
class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}


const phrases = [
    'Привет!)',
    'Сегодня пятница, да?',
    'И это последняя практика?',
    'Ого!!!',
    'Желаю хорошего дня!',
    'Удачи!',
    'Хороших выходных!',
    'И здорового сна :)'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800)
    })
    counter = (counter + 1) % phrases.length
}

next()

