//let result=prompt('Введите логин для входа на сайт','Админ');
//if(result=='Админ'){
//     let password=prompt('Введите пароль','Я главный')
//     if(password==='Я главный'){
//         alert('Здравствуйте');
//     }
//     else if(password==='') {
//         alert('Отменено');
//     }
//     else if (password==null){
//         alert('Отменено');
//     }
//     else{
//         alert('Неверный пароль');
//     }
//
// }
// else if(result===''){
//     alert('Отменено');
// }
// else if(result==null){
//     alert('Отменено');
// }
// else {
//     alert('Я вас не знаю');
// }
let buton=document.querySelector('.heart');
buton.addEventListener('click', ()=> {
    if(buton.style.backgroundColor==='rgb(107, 99, 99)') {
        buton.style.backgroundColor = 'rgb(207, 10, 10)';
    }
    else if(buton.style.backgroundColor==='rgb(207, 10, 10)'){
        buton.style.backgroundColor='rgb(107, 99, 99)';
    }
})

