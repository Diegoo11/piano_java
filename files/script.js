let verso = 0
let liryc = document.querySelector("#uwu")
function hello (){
    liryc.textContent = letra[verso]
}
window.addEventListener("keydown", function(e){
    let audio = document.querySelector(`audio[data-key = "${e.which}"]`)
    let key = document.querySelector(`.key[data-key = "${e.which}"]`)
    if(!audio) return;
    audio.currentTime = 0
    audio.play()
    key.classList.add("playing");
    verso++
    if(!(verso<13)){
        verso = 0
    }
    hello()

})

window.addEventListener("keyup", function(e){
    let key = document.querySelector(`.key[data-key = "${e.which}"]`)
    key.classList.remove("playing");
})

let letra = ["Non mi piace parlare", "Ma mi piace sentire", "Non mi piace studiare", "Ma mi piace sapere", "Non mi piace l'altezza", "Eppure amo volare", "Ho le tasche bucate", "E i sogni sono caduti qui, qui, qui", "Ho sperato tanto di ottenere ciò che voglio", "Voglio avere tutto ma non voglio tutti addosso", "E scusa se ti parlo e sto mostrandoti le spalle", "Ma non resisto e anche stanotte spero di vederle", "Mi presento, sono io il bambino che contava le stelle"]
console.log(letra.length)
console.log(liryc)

