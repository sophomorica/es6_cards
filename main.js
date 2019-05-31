$(document).ready(function(){
  const card = $(".card")
  const newCard =$(".newCard")
  const cardFront = $("#front")
  const cardBack = $("#back")

  // const newCardFunction = () => {
    
  //  cardFront.append("<h1>you did it</h1>")
  // }
  // function newCardFunc(){
    
  // }
  const question = ["the absolute value of pie", "my name"]
  newCard.on("click",function(){
    cardFront.append(`What is ${question[0]}`)

  })
  
 card.on("click",function(){
  
  card.toggleClass("is-flipped")

})





  
})