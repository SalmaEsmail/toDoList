const button = document.querySelector("button")
const container = document.getElementById("container")
const input =document.querySelector("input")
console.log(button)
button.addEventListener("click", (eo) => {
  eo.preventDefault()  
  const task = `
  <div class="task">
        <span class="icon-star icon"></span>
        <p>${ input.value} </p>
        <div class="icons">
          <span class="icon-trash icon"></span>
          <span class="icon-angry2 icon"></span>
         <!-- <span class="icon-heart"></span> -->
        </div>
    </div>
  
  `
  container.innerHTML += ( task )

})
container.addEventListener("click", (eo) => {
    if(eo.target.className == "icon-trash icon" ){
        eo.target.parentElement.parentElement.remove()

    }
    else if (eo.target.className == "icon-angry2 icon") {
          eo.target.remove()
        //   eo.target.classlist.add("dn")
        const heart =`<span class="icon-heart"> </span> `
        eo.target.parentElement.innerHTML  += heart   
        
    } 
})
