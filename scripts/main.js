// When the document loads
$(document).ready(function(){
    
    //Home Page
    // When the document loads, animate the hero image upwards
    $("#hero-image").animate({top: '-=100px'});

    //Brows Page 
    //hide description text
    $("#descriptionText").hide();
}); 
  
  //Brows Page
  //when clicked reveal hidden text and hide other text
  $(".card").click(function(){
    $("#priceText").toggle();
    $("#descriptionText").toggle();
    $(".card-img-top").toggleClass("small");
  })

   //Wishlist Page
  //when button is clicked remove row
  
  $("#removeOne").click(function(){
    $(".rowOne").remove();
  })
  $("#removeTwo").click(function(){
    $(".rowTwo").remove();
  })
  $("#removeThree").click(function(){
    $(".rowThree").remove();
  })
  $("#removeFour").click(function(){
    $(".rowFour").remove();
  })
  $("#removeFive").click(function(){
    $(".rowFive").remove();
  })
  
  
  