let container = document.querySelector(".container")
const seats = document.querySelectorAll(".seat:not(reserved)")
let count = container.querySelector("#count")
let amount = document.getElementById("amount")
let select = document.querySelector("#movie")

getLocalStorage()
container.addEventListener("click", function(e){

    let element = e.target
    if(element.classList.contains("seat") && !element.classList.contains("reserved")){
        element.classList.add("selected")
        addCountAmount()
    }
})
select.addEventListener("change", function(){
    addCountAmount()
})
function addCountAmount(){
   let selectedSeats = container.querySelectorAll(".seat.selected")
   let arrAllSelected = [];
   let arrOneSelected = [];

   seats.forEach(function(seat){
    arrAllSelected.push(seat)
   }) 
   selectedSeats.forEach(function(selectSeat){
    arrOneSelected.push(selectSeat)
   })
    
    let getSeatIndex = arrOneSelected.map(function(item){
        return arrAllSelected.indexOf(item)
    })

   addLocal(getSeatIndex)
   let selectedSeatsCount = container.querySelectorAll(".seat.selected").length
   let price = select.value * selectedSeatsCount
   count.innerText = selectedSeatsCount
   amount.innerText = price
}

function getLocalStorage(){
    let getLocalSeats = localStorage.getItem("selectedSeat")

    if(getLocalSeats != null && getLocalSeats.length > 0){
        seats.forEach(function(seat, index){
            if(getLocalSeats.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        })
    }
    
}
function addLocal(getSeatIndex){
   localStorage.setItem("selectedSeat", JSON.stringify(getSeatIndex))
} 

