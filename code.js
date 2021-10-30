var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d89a7df1-5141-49f8-872c-76e066363884","708d5626-cf3b-4396-a15e-7986d0e88804","ecbe1a10-91f9-49fc-b3dd-fa4f99ccd62b"],"propsByKey":{"d89a7df1-5141-49f8-872c-76e066363884":{"name":"pong clase 5","sourceUrl":null,"frameSize":{"x":36,"y":32},"frameCount":1,"looping":true,"frameDelay":12,"version":"JCO64VVvn81tFwemCnZDxVhOigeYlYQ5","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":32},"rootRelativePath":"assets/d89a7df1-5141-49f8-872c-76e066363884.png"},"708d5626-cf3b-4396-a15e-7986d0e88804":{"name":"pong clase 5 1","sourceUrl":null,"frameSize":{"x":38,"y":33},"frameCount":1,"looping":true,"frameDelay":12,"version":"L0XXxomuaKlX0juTI6lrH2oQ2_cYF57.","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":38,"y":33},"rootRelativePath":"assets/708d5626-cf3b-4396-a15e-7986d0e88804.png"},"ecbe1a10-91f9-49fc-b3dd-fa4f99ccd62b":{"name":"pong clase 5 2","sourceUrl":null,"frameSize":{"x":38,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"XARea_r3fXvGNd1XZmjoPLJlhBmWC1pl","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":38,"y":40},"rootRelativePath":"assets/ecbe1a10-91f9-49fc-b3dd-fa4f99ccd62b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerPaddle = createSprite(390, 200, 10,70);
var computerPaddle = createSprite(10, 200, 10,70);
var pelota = createSprite(200,200,15,15);



playerPaddle.shapeColor="Blue";
playerPaddle.setAnimation("pong clase 5 1");
computerPaddle.shapeColor="Red";
computerPaddle.setAnimation("pong clase 5 2");
pelota.shapeColor="green";
pelota.setAnimation("pong clase 5");



function draw() {
  background("white");
  if (pelota.isTouching(playerPaddle) || pelota.isTouching(computerPaddle)) {
    playSound("assets/category_retro/retro_game_echo_error_1.mp3");
  } 
 if (keyDown(UP_ARROW)) {
   playerPaddle.y=playerPaddle.y-3;
    
  }
  if (keyDown(DOWN_ARROW)) {
   playerPaddle.y=playerPaddle.y+3;
    
  }
   if (keyDown("space")) {
   pelota.velocityX=2;
pelota.velocityY=4;

    
  }
  computerPaddle.y=pelota.y;
  
  lineaspunteadas();
  
   
  createEdgeSprites();
  pelota.bounceOff(topEdge);
  pelota.bounceOff(bottomEdge);
  pelota.bounceOff(playerPaddle);
  pelota.bounceOff(computerPaddle);
  
  drawSprites();
}

function lineaspunteadas (){
for (var num = 0; num < 400; num=num+20) {
  line(200, num, 200, num+10);  
  }
    
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
