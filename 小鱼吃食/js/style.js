/**
 * Created by Administrator on 2016/3/21 0021.
 */
onload = function () {
    game();
};
function game() {
    init();
    var canWidth;
    var canHeight;
    lastTime = Date.now();
    delTime = 10;
    gameloop();
}
function init() {
    var yinImg = new Image();
    var can1 = document.getElementById('canvas1');//上面的画布，鱼，圈圈..
    var ctx1 = can1.getContext("2d");
    var can2 = document.getElementById('canvas2');//下面的画布，背景，海葵，果实..
    var ctx2 = can2.getContext("2d");
    yinImg.src = 'images/background.jpg';
    canWidth = can1.width;
    canHeight = can1.height;

}
function gameloop() {
    requestAnimationFrame(gameloop);//获取科学的间隔时间
    var now = Date.now();
    delTime = now - lastTime;
    lastTime = now;

}

