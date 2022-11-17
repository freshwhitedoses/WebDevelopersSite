const captcha=document.querySelector(".name"),
    inputField=document.querySelector("input"),
    chechBtn=document.querySelector(".check");
let name=document.querySelector(".letsGo");
let inputVal=inputField.value;
let Alpha=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
let Nums=[0,1,2,3,4,5,6,7,8,9]
function getCaptcha(){
    for(let i=0;i<6;i++){
        let randomChar=Alpha[Math.floor(Math.random()*Alpha.length)];
        captcha.innerText+=randomChar;
    }
}
let result
function getSum(){
    let num1=Nums[Math.floor(Math.random()*Nums.length)]
    let num2=Nums[Math.floor(Math.random()*Nums.length)]
    result=num1+num2
    captcha.innerText=num1 + "+" + num2;
}
getCaptcha()
chechBtn.addEventListener("click",e=>{
    inputVal=inputField.value;
    if(inputVal===captcha.innerText){
        setTimeout(() => {
            window.location.href = 'index.html'
        }, 500);
    }

    else if(inputVal!==captcha.innerText){
        name.innerText="Введите сумму двух чисел";
        getSum();
        console.log(inputVal)
        console.log(result.toString())
        if(inputVal===result.toString()){
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 500);
        }

    }

    else {
        alert("error")
    }


})