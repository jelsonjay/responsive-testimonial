import "./styles.css";

const slideItem = [...document.querySelectorAll(".slide")]
const dotItem = [...document.querySelectorAll(".dot")]
let curentSlide = 1


let navDot = function swichtDot(currentDot){

slideItem.forEach((slide) => {
slide.classList.remove("active")
})


dotItem.forEach((dot)=> {
dot.classList.remove("active")
})

slideItem[currentDot].classList.add("active")
dotItem[currentDot].classList.add("active")

}

dotItem.forEach((btn, index)=>{
btn.addEventListener("click" , () =>{
navDot(index)
curentSlide = index
})
})



// =====IMAGE SLIDER AUTOPLY NAGIGATION======

const repeat = function(activeClass){
let active = document.getElementsByClassName("active")

let i = 1

const repeater = ()=>{
  setTimeout(() => {
[...active].forEach((activeClass) => {
activeClass.classList.remove("active")
})

 slideItem[i].classList.add("active")
 dotItem[i].classList.add("active")
i++
 if(slideItem.length === i){
i = 0
 }


 if(i >= slideItem.length){
return
 }
 repeater()
  },10000)
}
repeater()

}

repeat()