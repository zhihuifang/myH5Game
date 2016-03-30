/**
 * Created by dell on 2016/3/30.
 */
$(document).ready(function(){
    /*ºì°üÓÎÏ·*/
    $(function(){
        var canvasWidth = 800;
        var canvasHeight = 600;
        var redGame = document.getElementById('red-envelope');
        var context1 = redGame.getContext("2d");
        redGame.width=canvasWidth;
        redGame.height=canvasHeight;
        var images= new Image();
        var radius = 50;
        var clipping = {x:400,y:200,r:radius}
        images.src='images/dgame.jpg';
        images.onload=function(){
            initCanvas();
        };
        function initCanvas(){
            clipping = {x:Math.random()*(redGame.width-2*radius)+radius,y:Math.random()*(redGame.height-2*radius)+radius,r:radius};
            draw(images,clipping);
        }
        function setClipping(){
            context1.beginPath();
            context1.arc(clipping.x,clipping.y,clipping.r,0,2*Math.PI,false);
            context1.clip();
            context1.closePath();
        }
        function draw(images,clipping){
            context1.clearRect(0,0,redGame.width,redGame.height);
            context1.save();
            setClipping(clipping);
            context1.drawImage(images,0,0);
            context1.restore();
        }
        function show(){
            var theAn = setInterval(
                function(){
                    if(clipping.r>1000){
                        clearInterval(theAn);
                    }
                    clipping.r+=20;
                    draw(images,clipping)
                },30
            )
        }
        $('#show-button').click(function(){
            show();
        });
        $('#reset-button').click(function(){
            initCanvas();

        })
    })
});
