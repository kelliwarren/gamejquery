// Lets Create A Wrapper in jQuery's Document Ready Syntax
// for the functions we will build out today.

$(document).ready(function(){
 
  formatBoxes();
  odd();
  even();
  greetings();
  toggler();

  

});

function formatBoxes() {
   $('.box').css({
    "height": "150px",
    "width": "150px",
    "display": "inline-block",
    "float": "left"
   });
}

function odd(){
  $('.odd').css({
    "background-color": "red",
  });
}


function even(){
  $('.even').css({
    "background-color": "black",
  });
}

function greetings(){
  if(confirm("Are you ready to play?") === true) {
    $('#main-container').css({
      "opacity": "1",
    });
    animate();
   
   } else {
     $('#main-container').css({
      "opacity": "0",
    });
     
  }
}

function toggler() {
  $('.box').click(function() {
    $(this).toggleClass('hide');
  });
}

function animate() {
    $('h1').animate({
    
    "width": "70%",
    "opacity": "0.4",
    "marginLeft": "0.6in",
    "fontSize": "3em",
    "borderWidth": "10px"

});
  
}


