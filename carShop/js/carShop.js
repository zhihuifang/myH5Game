/**
 * Created by Administrator on 2017/4/1.
 */
var app = angular.module('DemoApp', []);

app.controller('CartController', ['$scope', '$http', function ($scope, $http) {
/*    $scope.ShoppingCar = {}
    var GetCar = function () {
        $http.get('/carShop/goods')
            .success(function (response) {
                $scope.ShoppingCar = response;
            });
    }
    $scope.UpdateCar = function (name, count) {
        for (var i = 0; i < $scope.ShoppingCar.length; i++) {
            var item = $scope.ShoppingCar[i];
            if (item.name == name) {
                item.Count = item.Count + count;//这里可以增加上下限制
                if (item.Count < 0) {
                    $scope.ShoppingCar.splice(i, 1);
                }
            }
        }
    }*/

    var carShop = (function(){
        var goods = [];
        /* prices = {
         '海尔60': 3000,
         '长虹滚筒': 1000,
         '华为荣耀9': 2000
         };*/
        var haier = {name:'海尔',price:3000};
        var changhong = {name: '长虹', age:1000};
        goods.push(haier);
        goods.push(changhong);
        console.log(goods.length);

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
        function TotalNumber(){
            var show_number = parseInt(document.getElementById('show_number').innerHTML)+1;
            /* show_number.innerHTML=parseInt(document.getElementById('show_number').innerHTML)+1;*/

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
}]);

