const resultText = document.getElementById('result')
const btn=document.getElementById('btn')
const loading = document.getElementById("loading")
function tosshandler(){
    resultText.style.display = 'none'
    btn.style.display = 'none'
    loading.style.display = 'flex'

 setTimeout(() =>{
    resultText.style.display = 'block'
    btn.style.display = 'flex'
    loading.style.display = 'none'
    btn.innerText= 'Toss Again!'
    } ,2700)


    const random = (Math.round(Math.random()))
    if(random==0)
        resultText.innerText = 'Tails'
    else
         resultText.innerText = 'Heads'
       
}