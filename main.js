$(document).ready(function(){
  const card = $(".card")
  const nextCard =$(".nextCard")
  const cardFront = $("#front")
  const cardBack = $("#back")
  const newQuestion = $("#new_question")
  const newAnswer = $("#new_answer")
  const submit = $("#submit")

  submit.on("click", function(){
    questions.push({
      "query":`${newQuestion.val()}`,
      "answer":`${newAnswer.val()}`
    })

  })
  var x = 0
  // const nextCardFunction = () => {
    
  //  cardFront.append("<h1>you did it</h1>")
  // }
  // function nextCardFunc(){
    
  // }
  const questions = [{
    query: "what is pie",
    answer: "pie is awesome"
  },
  {
    query: "what is dirt",
    answer: "dirt is not awesome"
  }]
  nextCard.on("click",function(){
    // questions.forEach((question)=>{
    //   cardFront.append(`${question.query}`)
    //   cardBack.append(`${question.answer}`)

    // })
  

   if (x === questions.length ){
     x = 0
   }
   cardFront.text(`${questions[x].query}`)
   cardBack.text(`${questions[x].answer}`)
   x++
  })
  
 card.on("click",function(){
  
  card.toggleClass("is-flipped")

})





  
})