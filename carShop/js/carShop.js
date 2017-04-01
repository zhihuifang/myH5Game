/**
 * Created by Administrator on 2017/4/1.
 */
var carShop = (function(){
    var carShopReturn = {
        TotalNumber:TotalNumber,
        TotalPrice:TotalPrice,
        AddSub:AddSub,
        GoodsDetails:GoodsDetails
    };
    return carShopReturn;

    /*商品总件数*/
    var show_number = document.getElementById('show_number');
    function TotalNumber(){

        show_number.innerHTML=parseInt(document.getElementById('show_number').innerHTML)+1;
    };
    /*商品总价格*/
    function TotalPrice(){

    };
    /*结算界面*/
    /*商品购物车加减*/
    function AddSub(){
        var num_jia = document.getElementById("num-jia");
        var num_jian = document.getElementById("num-jian");
        var input_num = document.getElementById("input-num");

        num_jia.onclick = function() {

            input_num.value = parseInt(input_num.value) + 1;
        }

        num_jian.onclick = function() {

            if(input_num.value <= 0) {
                input_num.value = 0;
            } else {

                input_num.value = parseInt(input_num.value) - 1;
            }

        }
    };
    /*商品小计*/
    function AddSub(){

    };
    /*统计商品详情数组*/
    function GoodsDetails(){
        var GoodDeta = [];
        GoodDeta.push(carDataDe);
        console.log(GoodDeta.name);
    };
})();
