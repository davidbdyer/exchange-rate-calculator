const currencyElOne=document.querySelector("#currency-one"),currencyElTwo=document.querySelector("#currency-two"),amountElOne=document.querySelector("#amount-one"),amountElTwo=document.querySelector("#amount-two"),rateEl=document.querySelector("#rate"),swap=document.querySelector("#swap");async function calculate(){const currencyOne=currencyElOne.value,currencyTwo=currencyElTwo.value,res=await fetch("https://open.exchangerate-api.com/v6/latest"),data=await res.json(),rate=data.rates[currencyTwo]/data.rates[currencyOne];rateEl.innerText=`1 ${currencyOne} = ${rate} ${currencyTwo}`,amountElTwo.value=(amountElOne.value*rate).toFixed(2)}currencyElOne.addEventListener("change",calculate),amountElOne.addEventListener("input",calculate),currencyElTwo.addEventListener("change",calculate),amountElTwo.addEventListener("input",calculate),swap.addEventListener("click",(()=>{const temp=currencyElOne.value;currencyElOne.value=currencyElTwo.value,currencyElTwo.value=temp,calculate()})),calculate();