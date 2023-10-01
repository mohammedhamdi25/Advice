let num = document.querySelector(".num");
console.log(num);
let advice = document.querySelector(".advice")
console.log(advice);
let button = document.querySelector("button")
console.log(button);
advice
button.addEventListener("click",(el)=>{
    fetch("https://api.adviceslip.com/advice").then((res) =>{
        return res.json()
    }).then((res)=>{
        advice.style.opacity = "0";
        num.style.opacity = "0";
        setTimeout(function(el){
            num.innerHTML = res.slip.id;              
            advice.innerHTML = `"${res.slip.advice}"`
            advice.style.opacity = "1"
            num.style.opacity = "1"
        },300)
    })
})
