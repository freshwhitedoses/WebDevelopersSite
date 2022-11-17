let Alpha=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
let Nums=[0,1,2,3,4,5,6,7,8,9]
let stringCaptcha
function getCaptcha(){
    for(let i=0;i<6;i++){
        let randomChar=Alpha[Math.floor(Math.random()*Alpha.length)];
        stringCaptcha+=randomChar;
    }
}
let result
let sumCaptcha
function isEmpty(obj) {
    return Object.entries(obj).length === 0
}
function getSum(){
    let num1=Nums[Math.floor(Math.random()*Nums.length)]
    let num2=Nums[Math.floor(Math.random()*Nums.length)]
    result=num1+num2
    sumCaptcha=num1 + "+" + num2;
}
const chechBtn=document.querySelector(".auth");
chechBtn.addEventListener("click",e=> {
    getCaptcha();
    let result1=prompt(stringCaptcha);
    if(isEmpty(result1)){
        alert("Пробуйте снова, что вам еще сказать...")
    }
    else {
        if (result1 === stringCaptcha.toString()) {
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 200);
        } else {
            getSum();
            let result2 = prompt(sumCaptcha);
            if(isEmpty(result2)){
                alert("Пробуйте снова, что вам еще сказать...")
            }
            else {
                if (result2 === result.toString()) {
                    setTimeout(() => {
                        window.location.href = 'index.html'
                    }, 300);
                } else {
                    alert("Ошибочка вышла")
                }
            }
        }
    }
})