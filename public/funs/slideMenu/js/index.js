$(document).ready(function() {

  var slideWidth = $('#pageslide').outerWidth(); //grab width of the sliding menu so that this can be controlled in the css only

  $('.slideIt, #pageslide a.close').on("click", function(){  //click function
    $('.slideIt').toggleClass('active'); //toggle the active close vs open icon
    
    if($('#pageslide').is(':visible')) {  //if visible then hide it 
      $('#pageslide').animate({
        left: '-'+slideWidth
      }, 400, function(){
        $('#pageslide').hide();
      } );
      $('.wrapper').animate({
        marginLeft: '0'
      }, 400 );
      $('.slideIt span').text('☰');
    } 
    else{                                //else show it
      $('#pageslide').show().animate({
        left: '0'
      }, 400 );
      $('.wrapper').animate({
        marginLeft: slideWidth
      }, 400 );
    }
  });

});