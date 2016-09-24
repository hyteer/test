var menuButton = $('.menu-button'),
    menuTop,
    menuLeft,
    topPos,
    leftPos,
    halfScreenVert,
    halfScreenHor;

function checkMenuPos() {
  menuTop        = menuButton.offset().top + (menuButton.height()/2);
  menuLeft       = menuButton.offset().left + (menuButton.width()/2);
  topPos         = menuButton.offset().top;
  leftPos        = menuButton.offset().left;
  halfScreenVert = $(window).height() / 2;
  halfScreenHor  = $(window).width() / 2;
  
  if(menuTop <= halfScreenVert && menuLeft <= halfScreenHor) {
      menuButton.addClass('top-left');
    } else {
      menuButton.removeClass('top-left');
    }

    if(menuTop <= halfScreenVert && menuLeft > halfScreenHor) {
      menuButton.addClass('top-right');
    } else {
      menuButton.removeClass('top-right');
    }

    if(menuTop > halfScreenVert && menuLeft <= halfScreenHor) {
      menuButton.addClass('bottom-left');
    } else {
      menuButton.removeClass('bottom-left');
    }

    if(menuTop > halfScreenVert && menuLeft > halfScreenHor) {
      menuButton.addClass('bottom-right');
    } else {
      menuButton.removeClass('bottom-right');
    }
}

if(localStorage.getItem('menuTop') !== null && localStorage.getItem('menuLeft') !== null) {
  var menuLastTop  = parseInt(localStorage.getItem('menuTop')),
      menuLastLeft = parseInt(localStorage.getItem('menuLeft'));
  
  menuButton.css({ 'bottom' : 'auto' , 'top' : menuLastTop , 'left' : menuLastLeft });
  
  checkMenuPos();
}

menuButton.draggable({
  drag: function(event, ui) {
    localStorage.setItem('menuTop', topPos);
    localStorage.setItem('menuLeft', leftPos);

    checkMenuPos();
  },
  cancel : 'li'
});

menuButton.click(function(event) {
  if($(event.target).is('ul')) {
    menuButton.toggleClass('active');
  } 
});

$(window).resize(function() {
  checkMenuPos();
});