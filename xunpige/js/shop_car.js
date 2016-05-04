/**
 * Created by Administrator on 2016/4/20 0020.
 */
window.onload = function () {
    //全选
    $('#check_all').click(function () {
        if ($(this).attr("checked")) {
            $("input[name=items]").each(function () {
                $(this).attr("checked", true);
            });
        } else {
            $("input[name=items]").each(function () {
                $(this).attr("checked", false);
            });
        }
        checkAll();
    });
    //小计
    function sumx(addIndex, addCon) {
        console.log(addIndex)
        // var ck = $("input[name=items]:checked");
        var dY = $('.td-price_n').eq(addIndex).children('em').find('span').text();//一行单价
        var sumZ = parseInt(dY * addCon);
        $('.td-sum-n').eq(addIndex).children('em').find('span').text(dY * addCon);
        checkAll();
    }
    //点击加号
    $('.Increase').click(function () {
        //获取加号的下标
        var addIndex = $(".Increase").index($(this));
        //同一下标的数量
        var addCon = parseInt($('.Amount').eq(addIndex).val());
        sumx(addIndex, addCon);
    });
    //点击减号
    $('.jian').click(function () {
        var addIndex = $(".jian").index($(this));
        var addCon = parseInt($('.Amount').eq(addIndex).val());
        sumx(addIndex, addCon);
    });
//点击全选或者单击checkbox计算总件数和价钱
    function checkAll(){
        var ck = $("input[name=items]:checked");
        var addCon = 0;
        var dY = 0;
        var sumZ = 0;
        var count = 0;
        var sum;
        var parent_s="";
        ck.each(function(i){
            parent_s=$(this).parents('.goods_text_con');
            addCon = parseInt(parent_s.find('.Amount').val());
            dY =parent_s.find('.td-price_n').children('em').find('span').text();//一行单价
            sum = dY * addCon;
            sumZ += sum;
            count +=addCon;
        });
        $('.sum_count').text(count);
        $('.sum_price').text(sumZ);
    }
    $("input[name=items]").change(function(){
        checkAll();
    })

};
