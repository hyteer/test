var xmlns="http://www.w3.org/2000/svg", select = function(s) {
      return document.querySelector(s);
    }, selectAll = function(s) {
      return document.querySelectorAll(s);
    }, container = select('.container'), frill = select('.frill'), jellyMask = select('.jellyMask'), jellyBody = select('.jellyBody'),jellyInnerGroup = select('.jellyInnerGroup'), jellyStrandMask = select('#jellyStrandMask'), jellyStrandGroup = selectAll('.jellyStrandGroup path'), jellyfishGroup = select('.jellyfishGroup'), maskedJellyStrandGroup = select('.maskedJellyStrandGroup'), bubbleGroup = select('.bubbleGroup'), allBubbles = selectAll('.bubbleGroup use'), starfish = select('.starfish'), vol = select('.vol'), currentIframe = null;
//center the container cos it's pretty an' that
TweenMax.set(container, {
  position:'absolute',
  top:'50%',
  left:'50%',
  xPercent:-50,
  yPercent:-50
})

TweenMax.set(vol, {
  x:260,
  y:20
})

TweenMax.set(jellyfishGroup, {
  x:randomBetween(-100, 100),
  y:200
})
TweenMax.set(jellyMask, {
  transformOrigin:'50% 70%'
})

TweenMax.set(maskedJellyStrandGroup, {
  transformOrigin:'50% 0%'
})

TweenMax.to(jellyfishGroup, 66, {
  y:-100,
  repeat:-1,
  yoyo:true,
  ease:Power2.easeInOut
})

TweenMax.to(jellyfishGroup, 80, {
  x:randomBetween(-200, 200),
  repeat:-1,
  yoyo:true,
  ease:Power2.easeInOut
})

var jellyStrandTl = new TimelineMax({repeat:-1});
jellyStrandTl.staggerTo(jellyStrandGroup, 3, {
  y:-184,
  ease:Sine.easeInOut
}, 0.32);


var bodyStretch = TweenMax.fromTo([jellyMask], 3, {
  
 scaleX:1.4,
  scaleY:0.7
}, {
  repeat:-1,
  yoyo:true,
  scaleX:0.6,
  scaleY:1.7,
  
  ease:Sine.easeInOut
})

var strandStretch = TweenMax.fromTo([ maskedJellyStrandGroup], 3, {
  
  scaleX:1.1,
  scaleY:0.9
}, {
  repeat:-1,
  yoyo:true,
  scaleX:0.9,
  scaleY:1.1,
  
  ease:Sine.easeInOut
})

var tl = new TimelineMax({repeat:-1});
tl.to([jellyBody, frill, jellyStrandMask], 3, {
  x:-29,
  ease:Linear.easeNone
  //ease:Anticipate.easeInOut
})
//tl.add([bodyStretch, strandStretch], 0)
tl.timeScale(4)

var bubbleTl = new TimelineMax();

for(var i = 0; i < allBubbles.length; i++){
  
  var b = TweenMax.fromTo(allBubbles[i], randomBetween(16,40), {
    x:randomBetween(0, 600),
    y:randomBetween(590, 600),
    rotation:720
  },{
    x:randomBetween(0, 600),
    y:0,
    rotation:0,
    transformOrigin:randomBetween(-1900, 1900) + '% 50%',
    repeat:-1,
    ease:Linear.easeNone
  })
  
  bubbleTl.add(b, (i+1)/10)
}
bubbleTl.time(20)

function playStarfish(){
  
  var posX = randomBetween(100, 600);
  var val = randomBetween(1, 8)/10;
  console.log(val)
  TweenMax.set(starfish, {
    transformOrigin:'50% 50%',
    y:0,
    alpha:val,
    rotation:0,
    scale:val,
    x:posX
  })
  TweenMax.to(starfish, randomBetween(23, 67), {
    rotation:randomBetween(23, 720),
    y:600,
    ease:Linear.easeNone,
    onComplete:playStarfish
  })
}

function randomBetween(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
/*
vol.onclick = function(e){
  
  if(currentIframe === null){
    currentIframe = document.createElement('iframe');
    currentIframe.setAttribute('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/60057245&amp;auto_play=true');
    currentIframe.setAttribute('width','0');
    currentIframe.setAttribute('height','0');

    currentIframe.setAttribute('scrolling','no');
    currentIframe.setAttribute('frameborder','no');
    container.appendChild(currentIframe);
    
    TweenMax.to(vol, 1, {
      alpha:0.4
    })
    return;
  }
   TweenMax.to(vol, 1, {
      alpha:1
    })    
   
   container.removeChild(currentIframe);
   currentIframe = null;
    
}
*/
playStarfish()
//ScrubGSAPTimeline(myTimeline);
