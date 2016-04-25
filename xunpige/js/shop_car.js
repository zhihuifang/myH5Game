/**
 * Created by Administrator on 2016/4/20 0020.
 */
window.onload = function (){
    //全选
    $('#check_all').click(function(){
        if ($(this).attr("checked")) {
            $("input[name=items]").each(function() {
                $(this).attr("checked", true);
            });
        } else {
            $("input[name=items]").each(function() {
                $(this).attr("checked", false);
            });
        }
    });
    //小计
    function sumx(){
        var dp = $('.td-price_n em span').text();
        var dn = $('.Amount').val();
        var ds = $('.td-sum-n em span').text();
        ds = dp*dn;
        $('.td-sum-n em span').text(ds);
    }
    $('.Increase').click(function(){
        sumx();
    });
    $('.DisDe').click(function(){
        sumx();
    })
    

};
