import BagsFootwear from "./data/BagsFootwear.js"
import BeautyHealth from "/data/BeautyHealth.js"
import Electronics from "./data/Electronic.js"
import HomeAndKitchen from "./data/HomeAndKitchen.js"
import JewelleryAccessories from "./data/JewelleryAccessories.js"
import Kids from "./data/Kids.js"
import Men from "./data/Men.js"
import WomenEthnic from "./data/WomenEthnic.js"
import WomenWestern from "./data/WomenWestern.js"


let inputsearchEl = document.querySelector(".inputsearch")
let recentinput = []
let forminputEl = document.getElementById("forminput")
const recentlistEl = document.querySelector(".recentlistitems")

inputsearchEl.addEventListener("keydown", ()=>{
    if(inputsearchEl.value){
        document.getElementById("closelogo").style.display = "block"
    }
    else{
        document.getElementById("closelogo").style.display = "none";   
    }
})

forminputEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    recentinput.unshift(inputsearchEl.value)

    let listofRecentHTMLEl = ""
   if(recentinput.length >0){
    for(i=0; i<recentinput.length; i++){
  listofRecentHTMLEl += `                    
  <div class="recentlist">
  <div class="recenticon">
      <img src="/img/recent.png">
  </div>
  <p>${recentinput[i]}</p>
 </div>`
    }
    recentlistEl.innerHTML= listofRecentHTMLEl 
}
})



// function reuble
function render(id, data){
    let temp = document.getElementById(id)
    function tempfun(){
        return data.map(el =>{
            let list = ""
            list = el.data.map(element =>`<a href=""><p>${element}</p></a>`).join("")
           return ` <div class="column">
                 <h4>${el.heading}</h4>
                 ${list} 
              </div>
            `
        }).join("")
    }
    temp.innerHTML = tempfun()
}

render("WomenEthnic", WomenEthnic)
render("WomenWestern", WomenWestern)
render("Men", Men)
render("Kids", Kids)
render("JewelleryAccessories",JewelleryAccessories)
render("HomeAndKitchen",HomeAndKitchen)
render("Electronics",Electronics)
render("BeautyHealth",BeautyHealth)
render("BagsFootwear",BagsFootwear)