function animate(options) {
  var start = performance.now();
  
  requestAnimationFrame(function animate(time) {
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    var progress = options.timing(timeFraction)

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

function quad(timeFraction) {
  return Math.pow(timeFraction, 2)
}
function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}

var mainBlock = document.querySelector('.main-block');
mainBlock.style.position = 'relative';
var quadOut = makeEaseOut(quad);
  
mainBlock.addEventListener('click', function myClick() {
  var myTime = 2000;
  animate({ 
    duration: myTime,
    timing: quadOut,
    draw: function(progress) {
    	mainBlock.style.top = progress * 300 - 300 + 'px';
      mainBlock.style.left = progress * 1200 - 1200 + 'px';
      mainBlock.style.transform = 'rotateX(' + progress * 360 + 'deg)';
    }
  });
});