//--------------------------------------1-----------------------------------
let ex11=document.querySelector(".ex11");
let ex12=document.querySelector(".ex12");
ex11.addEventListener("click",e=>{
    replace();
})
ex12.addEventListener("click",e=>{
    delet();
})
function replace(){
    let result1=prompt("Номер элемента который вы хотите заменить")
    let result2=prompt("Номер элемента на который вы хотите заменить")
    let contSort= document.querySelector(".container");
    replaceCont=contSort.replaceChild(contSort.children[result2],contSort.children[result1]);
    insert(replaceCont,contSort.children[result1])
}
function delet(){
    let result3=prompt("Номер элемента который вы хотите удалить")
    let contSort= document.querySelector(".container");
    replaceCont=contSort.replaceChild(contSort.children[+result3+1],contSort.children[result3]);
}


//--------------------------------------2-----------------------------------
let ex1=document.querySelector(".ex2");
let nums=[5,4,1,2,34,67,890,34,23,15,67];

function filtr(arr,a,b){
    let nums2=[];
for(let i=0;i<arr.length;i++){
    if((arr[i]>=a)&&(arr[i]<=b)){
        nums2.push(arr[i]);
    }
}
return nums2;
}
ex1.addEventListener("click",e=>{
    alert("Изначальный массив: [5,4,1,2,34,67,890,34,23,15,67]")
    let a=prompt('Больше или равно какого числа будем искать числа?');
    let b=prompt('Меньше или равно какого числа будем искать числа?');
    let arr=filtr(nums,a,b)
    console.log(arr.toString())
    alert("Теперь массив выглядит так:"+arr.toString())
    })
//--------------------------------------3-----------------------------------
let ex3=document.querySelector(".ex3");
function insert(elem,refElem){
    return refElem.parentNode.insertBefore(elem,refElem.nextSibling)
}
function sorted(){
    let containerSort= document.querySelector(".sortEl");
    for (let i = 0; i < containerSort.children.length; i++) {
        for (let j = i; j < containerSort.children.length; j++) {
            if (+containerSort.children[i].textContent < +containerSort.children[j].textContent) {
                 replaceNode=containerSort.replaceChild(containerSort.children[j],containerSort.children[i]);
                insert(replaceNode,containerSort.children[i])
            }
        }
    }
}
ex3.addEventListener("click",e=>{
    sorted();
})


//--------------------------------------4-----------------------------------
let massage=document.querySelector('.round');
let wrapper=document.querySelector('.message')
let ex4=document.querySelector(".ex4");
ex4.addEventListener("click",e=>{
    let interval=setInterval(()=> {
        document.querySelector(".round").innerText = Number(document.querySelector(".round").innerText) + 1;
    }, 3000);
})

//massage.innerHTML=5;
//console.log(massage.textContent+1)

//--------------------------------------5-----------------------------------
let ex5=document.querySelector(".ex5");
ex5.addEventListener("click",e=>{
    clearInterval(interval);
    setTimeout(() => {
        interval =  setInterval(()=> {
                document.querySelector(".round").innerText = Number(document.querySelector(".round").innerText) + 1; }
            , 3000);
    }, 10000);
})