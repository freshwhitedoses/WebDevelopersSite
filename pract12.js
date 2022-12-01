//------------------------------------1---------------------------------
let ex1=document.querySelector(".ex1");
let href1=document.querySelector(".href1")
let href2=document.querySelector(".href2")
let href3=document.querySelector(".href3")
ex1.addEventListener("click",e=>{
   href1.style.color='red'
    href2.style.color='green'
    href3.style.color='blue '
})
//------------------------------------2---------------------------------
let ex2=document.querySelector(".ex2");
ex2.addEventListener("click",e=>{
    let a;
    do {
        a = prompt('Что нужно добавить в списочек?');
        if (a!=='' && a!=null && a!=undefined) {
            let node = document.createElement('li');
            node.appendChild(document.createTextNode(a));
            document.querySelector('ul').appendChild(node);
        }
    }
    while (a!=='' && a!=null && a!=undefined)
})
//------------------------------------3---------------------------------
let ex3=document.querySelector(".ex3");
console.log(ex3);

ex3.addEventListener("click",e=>{
    showNotification("Сегодня я сдаю 12 практику!!!")});

function showNotification(stroka){
    let newDiv=document.createElement('div');
    newDiv.className = 'content3';
    newDiv.textContent=stroka;
    document.body.appendChild(newDiv);
    setTimeout(()=>{
        document.body.removeChild(newDiv);
    },5000)
}
//------------------------------------4---------------------------------
let ex4=document.querySelector(".ex4");
let block4 = document.getElementById("container4");
let inner = block4.children[0];
let img = inner.children[0];
block4.addEventListener("click", (event)=> {
    alert("Позиция X : "+event.x + " " + "Позиция Y : "+event.y);
});
ex4.addEventListener("click",e=>{
    block4.style.display = "flex";
    block4.style.justifyContent = "center";
    block4.style.alignContent = "center";
    block4.style.alignItems = "center";
    block4.style.justifyItems = "center";
    inner.style.display = "flex";
    inner.style.justifyContent = "center";
    inner.style.alignContent = "center";
    inner.style.alignItems = "center";
    inner.style.justifyItems = "center";
    inner.style.width = "60%";
    inner.style.height = "60%";
    inner.style.background = "white";

    img.style.width = "60%";
    img.style.height = "60%";
});
//------------------------------------5---------------------------------

//let comments = document.getElementById("comments");
//console.log(comments);
//comments.addEventListener("click", (event)=> {
 //   console.log(event.target);
//    console.log(event.target.tagName);
 //   if(event.target.tagName === "BUTTON"){
   //     comments.removeChild(event.target.closest("p"));
   // }
//}) ;
let ex5=document.querySelector(".ex5");
let notification=document.querySelector(".notifications");
ex5.addEventListener("click", (event)=> {
    notification.style.display='block';
});
notification.addEventListener("click", (event)=> {
    if(event.target.className==='exit'){
        notification.removeChild(event.target.closest("p"));
    }
})
