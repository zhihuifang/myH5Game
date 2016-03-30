/**
 * Created by Administrator on 2016/3/21 0021.
 */
$(document).ready(function(){
    /*五子棋*/
    $(function(){
        var canvasWidth = 450;
        var canvasHeight = 450;
        var chess = document.getElementById('chess');
        var context = chess.getContext("2d");
        chess.width=canvasWidth;
        chess.height=canvasHeight;
        /*二维数组阻止棋子覆盖*/
        var chessBox =[];
        var me = true;
        for(var i= 0;i<15;i++){
            chessBox[i]=[];
            for(var j= 0;j<15;j++){
                chessBox[i][j]=0;
            }
        }

        context.strokeStyle = "#bfbfbf";
        var yinImg = new Image();
        yinImg.src = 'images/shui_yin_icon.jpg';
        onload=function(){
            context.drawImage(yinImg,0 ,0 ,450,450);
            drawChess();//加载完图片再加载画棋盘函数

        };
        var  drawChess=function(){
            for(var i=0; i<15; i++){
                context.moveTo(15+i*30,15);
                context.lineTo(15+i*30,435);
                context.stroke();
                context.moveTo(15,15+i*30);
                context.lineTo(435,15+i*30);
                context.stroke();
            }
        };
        var oneStep = function(i, j ,me){
            /*画圆*/
            context.beginPath();
            context.arc(15+i*30,15+j*30,13,0,2 * Math.PI);
            context.closePath();
            /*圆的渐变*/
            var grd = context.createRadialGradient(5+i*30+2,15+j*30-2,13,5+i*30+2,15+j*30-2,0);
            if(me){
                grd.addColorStop(0,"#0a0a0a");
                grd.addColorStop(1,"#636766");
            }else{
                grd.addColorStop(0,"#d1d1d1");
                grd.addColorStop(1,"#f9f9f9");
            }
            context.fillStyle = grd;
            context.fill();
        };
        /*点击下棋*/
        chess.onclick = function(e){
            var x = e.offsetX;
            var y = e.offsetY;
            var i =Math.floor(x/30);
            var j = Math.floor(y/30);
            if(chessBox[i][j] == 0){
                oneStep(i ,j, me);
                if(me){
                    chessBox[i] [j]=1;
                }else{
                    chessBox[i] [j]=2;
                }
                me = !me;
            }else{
                alert("你不能在这个位置下棋");
                return;
            }

        }

    })

});
