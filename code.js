var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e2e2b179-e832-427a-9ffe-15dabba5daea","de2d0388-3bdb-4d11-ad42-910bd0b8ea36","f6df29ca-3c46-42e0-98f4-5a6b385f12ba"],"propsByKey":{"e2e2b179-e832-427a-9ffe-15dabba5daea":{"name":"planeta","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"de2d0388-3bdb-4d11-ad42-910bd0b8ea36":{"name":"pelota","sourceUrl":"assets/api/v1/animation-library/gamelab/uoZwcPJapKhZIATHFDR107Ylx1bV1j8k/category_sports/baseball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"uoZwcPJapKhZIATHFDR107Ylx1bV1j8k","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/uoZwcPJapKhZIATHFDR107Ylx1bV1j8k/category_sports/baseball.png"},"f6df29ca-3c46-42e0-98f4-5a6b385f12ba":{"name":"bat","sourceUrl":null,"frameSize":{"x":100,"y":158},"frameCount":1,"looping":true,"frameDelay":12,"version":"Fdb2mq7ot8XfOiMwiFq3SwnoOBcy3B67","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":158},"rootRelativePath":"assets/f6df29ca-3c46-42e0-98f4-5a6b385f12ba.png"}}};
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

var score = 0;
var planeta = createSprite(200, 200);
var pelota = createSprite(200, 200);
var bat = createSprite(230, 363);
planeta.setAnimation("planeta");
pelota.setAnimation("pelota");
bat.setAnimation("bat");
planeta.scale = 1;
pelota.scale = 0.1;
bat.scale = 0.50;
pelota.velocityX = -6;
pelota.velocityY = -6;
var bricks = createGroup();
createEdgeSprites();
createBrick(65, "red");
createBrick(94, "blue");
createBrick(123, "green");
createBrick(152, "orange");
createBrick(181, "black");
function draw() {
  text("punto"+score, 40, 25);
  bat.x = World.mouseX;
  pelota.bounceOff(leftEdge);
  pelota.bounceOff(rightEdge);
  pelota.bounceOff(topEdge);
  pelota.bounceOff(bat);
  pelota.bounceOff(bricks,brickshit);
  drawSprites();
}
function createBrick(y, color) {
  for (var i = 0; i < 6; i++) {
    var brick = createSprite(65 + 54 * i, y, 50, 25);
    brick.shapeColor = color;
    bricks.add(brick);
  }
}
function brickshit(pelota, brick) {
  playSound("assets/category_accent/puzzle_game_accent_b_04.mp3", false);
  bricks.remove(brick);
  score = score+5;
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
