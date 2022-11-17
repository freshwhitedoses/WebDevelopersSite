function Accumulator(stringValue){

    currentValue = stringValue
    return{

        value : stringValue,
        read: function(){
            let number = prompt("Введите количество developer-рублей")
            this.value  = Number(this.value)+Number(number)
        }
    }
}

let setAcc = document.querySelector(".createAcc")
let incAcc = document.querySelector(".increaseAcc")
let accInput = document.querySelector(".inputMoney")
let accData = document.querySelector('.accData')
let accum
const setAccumulator = ()=>{

    accum = new Accumulator(accInput.value)
    accData.textContent = accum.value

}
setAcc.addEventListener('click',setAccumulator)
const incAccumulator = ()=>{

    accum.read(accInput.value)

    accData.textContent = accum.value
}
incAcc.addEventListener('click',incAccumulator)