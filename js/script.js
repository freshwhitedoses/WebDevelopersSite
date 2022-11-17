/*
let result=prompt('Введите логин для входа на сайт','Админ');
if(result=='Админ'){
     let password=prompt('Введите пароль','Я главный')
    if(password==='Я главный'){
         alert('Здравствуйте');
     }
     else if(password==='') {
        alert('Отменено');
     }
     else if (password==null){
         alert('Отменено');
    }
     else{
         alert('Неверный пароль');
    }

 }
 else if(result===''){
     alert('Отменено');
 }
 else if(result==null){
     alert('Отменено');
 }
 else {
     alert('Я вас не знаю');
 }

 */

let buton=document.querySelector('.heart');
buton.addEventListener('click', ()=> {
    if(buton.style.backgroundColor==='rgb(107, 99, 99)') {
        buton.style.backgroundColor = 'rgb(207, 10, 10)';
    }
    else if(buton.style.backgroundColor==='rgb(207, 10, 10)'){
        buton.style.backgroundColor='rgb(107, 99, 99)';
    }
})

const mousemove = ()=>{
    addEventListener('mousemove',(e)=>{
            var div = document.createElement("div");
            div.style.width = "50px";
            div.style.height = "50px";
            div.style.borderRadius = "50%";
            div.style.borderStyle = "solid";
            div.style.borderColor = "black"
            div.style.backgroundColor = "red";
            div.style.position = "absolute"
            mouseX = e.pageX;
            mouseY = e.pageY;
            div.style.left = mouseX + 10 + 'px'
            div.style.top = mouseY + 10 + 'px'

            setTimeout(() => {
                document.body.appendChild(div)
            }, 1);

    })
}
let ball=document.querySelector(".ball")
ball.addEventListener('click',mousemove)



let maxlength = prompt("Input the length")

let textBlock = document.querySelector(".textcontent")

let text = textBlock.textContent

function truncate(str,len) {
    return (str.length > len) ?
        str.slice(0, maxlength - 1) + '…' : str;
}
textBlock.textContent = truncate(text,maxlength)
