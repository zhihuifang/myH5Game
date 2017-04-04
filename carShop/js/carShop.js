/**
 * Created by Administrator on 2017/4/1.
 */
var carShop = (function(){
    var goods = [],
        prices = {
            '海尔60': 3000,
            '长虹滚筒': 1000,
            '华为荣耀9': 2000
        };

    var carShopReturn = {
        totalAmount: 0,
        TotalNumber:TotalNumber,
        TotalPrice:TotalPrice,
        add: add,
        AddSub:AddSub,
        GoodsDetails:GoodsDetails
    };

    return carShopReturn;

    /*��Ʒ�ܼ���*/
    var show_number = document.getElementById('show_number');
    function TotalNumber(){

        show_number.innerHTML=parseInt(document.getElementById('show_number').innerHTML)+1;
    };
    /*��Ʒ�ܼ۸�*/
    function TotalPrice(){

    };
    /*�������*/
    /*��Ʒ���ﳵ�Ӽ�*/
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
    /*��ƷС��*/
    function add(goodName){
        var goodName = goodName.toLocaleLowerCase(),
            existGood = searchGood(goodName);
        if (existGood) {
            existGood.quantity ++;
        } else {
            var price = getPrice(goodName);
            if (price !== undefined) {
                goods.push({name: goodName, quantity: 1, price:price, sum: price * 1});
            } else {
                console.error('添加不成功！');
            }
        }
        updateSum();
    }

    /*ͳ����Ʒ��������*/
    function GoodsDetails(){
        goods.push(carDataDe);
        console.log(goods.name);
    }

    // private functions:
    function updateSum() {
        var i,
            n = goods.length,
            totalAmount = 0,
            item;
        for (i = 0; i < n; i++) {
            item = goods[i];
            item.sum = item.quantity * item.price;
            totalAmount += item.sum;
        }
        carShopReturn.totalAmount = totalAmount;
    }

    function searchGood(goodName) {
        var i,
            n = goods.length;
        for (i = 0; i < n; i++) {
            if (goods[i].name === goodName) {
                return goods[i];
            }
        }
        return null;
    }

    function getPrice(goodName) {
        var price = prices[goodName];
        if (price === undefined) {
            console.error("找不到价格： " + goodName);
        }
        return price;
    }
})();
