// Menu toggle --------------------------------------------
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

// Intro Logo animation --------------------------------------------
var demo = document.getElementById("logoAni");
var tl = new TimeLineMax({repeat:0});
var ease = Linear.easeNone;

TweenMax.set(demo, {autoAlpha:1});
TweenMax.set("path", {drawSVG:0, stroke:"#42a6e0"});

tl.to("#w", 4, {drawSVG:true, ease:ease});
tl.to("#w1", 3, {drawSVG:true, ease:ease});
tl.to("#o", 3, {drawSVG:true, ease:ease});
