// Check size of window and rechecks upon resize, also swaps out images depending on window size
$(document).ready(function() {
  // Optimalisation: Store the references outside the event handler:
  let $window = $(window);
  let $pane = $('#pane1');
  let img = {
    img1: $('#img1'),
    img2: $('#img2'),
    img3: $('#img3')
  }

  const checkWidth = () => {
    var windowsize = $window.width();
    windowsize < 720 ? (
      img.img1.attr('src', "assets/images/mobile-image-hero-1.jpg"),
      img.img2.attr('src', "assets/images/mobile-image-hero-2.jpg"),
      img.img3.attr('src', "assets/images/mobile-image-hero-3.jpg")
    ) : (
      img.img1.attr('src', "assets/images/desktop-image-hero-1.jpg"),
      img.img2.attr('src', "assets/images/desktop-image-hero-2.jpg"),
      img.img3.attr('src', "assets/images/desktop-image-hero-3.jpg")
    );
  }
  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);
});

// Mobile menu

windowSize();
$(document).ready(function(){
  $(window).resize(function(){
    windowSize();
  });
});

$('#menu-burger').click(function(){
  fadeO('#menu-burger');
  fadeO('#menu-logo');
  fadeI('#menu-close');
  fadeI('#menu');
  fadeI('#background-fade');
})

$('#menu-close').click(function(){
  fadeI('#menu-burger');
  fadeI('#menu-logo');
  fadeO('#menu-close');
  fadeO('#menu');
  fadeO('#background-fade');
})

function fadeI(element) {
  $(element).fadeIn(500);
  $(element).removeClass('hide');
}


function fadeO(element) {
  if ($(element).hasClass('hide') === true) {
    $(element).removeClass('hide');
  }
  setTimeout(function(){
    $(element).fadeOut(500);
  }, 10);
  $(element).addClass('hide');
}

function windowSize() {
  if ($(window).width() > 720){
    $('#menu').removeClass('hide');
    $('#menu-burger').addClass('hide');
  } else {
    $('#menu').addClass('hide');
    $('#menu-burger').removeClass('hide');
  }
}

//Top Div Selectors
const topFrame = [{
  "div": "#discover",
  "left": 2,
  "right":1,
}, {
   "div": "#across",
   "left": 0,
   "right": 2
 }, {
   "div": "#manufactured",
   "left": 1,
   "right": 0
}];
const nav = {"left": $("#nav-left"), "right": $("#nav-right")};

// Nav button transition
const changePage = (divNum) => {
  for (let i = 0; i < topFrame.length; i++) {
    if (!$(topFrame[i].div).hasClass("hide")) {
      fadeO2(topFrame[i].div);
    }
  };
  fadeI2(topFrame[divNum].div);
};

function fadeI2(element) {
  setTimeout( function() {
    $(element).fadeIn(500).find("img").fadeIn(500)
    $(element).find(".div-top-right").fadeIn(500).find(".div-text-right").fadeIn(500);
    $(element).removeClass('hide').find("img").removeClass('hide')
    $(element).find(".div-top-right").removeClass('hide').find(".div-text-right").removeClass('hide');
  }, 500);
}


function fadeO2(element) {
  $(element).fadeOut(500).find("img").fadeOut(500)
  $(element).find(".div-top-right").fadeOut(500).find(".div-text-right").fadeOut(500);
  setTimeout(function() {
    $(element).addClass('hide').find("img").addClass('hide')
    $(element).find(".div-top-right").addClass('hide').find(".div-text-right").addClass('hide');
  }, 500);
}

nav.left.on('click', () => {
  for (let i = 0; i < topFrame.length; i++) {
    if (!$(topFrame[i].div).hasClass("hide")) {
      changePage(topFrame[i].left);
      break;
  }
}});
nav.right.on('click', () => {
  for (let i = 0; i < topFrame.length; i++) {
    if (!$(topFrame[i].div).hasClass("hide")) {
      changePage(topFrame[i].right);
      break;
  }
}});
