$(function () {
    //通用头部搜索切换
    $('#search-hd .search-input').on('input propertychange', function () {
        var val = $(this).val();
        if (val.length > 0) {
            $('#search-hd .pholder').hide(0);
        } else {
            var index = $('#search-bd li.selected').index();
            $('#search-hd .pholder').eq(index).show().siblings('.pholder').hide(0);
        }
    })
    $('#search-bd li').click(function () {
        var index = $(this).index();
        $('#search-hd .pholder').eq(index).show().siblings('.pholder').hide(0);
        $('#search-hd .search-input').eq(index).show().siblings('.search-input').hide(0);
        $(this).addClass('selected').siblings().removeClass('selected');
        $('#search-hd .search-input').val('');
    });
    /*真皮人造革切换*/
    $('.list_pi ul li').hover(function () {
        $('.list_pi ul li').eq($(this).index()).addClass('b2').siblings().removeClass('b2');
        $('.menu_con ul').eq($(this).index()).show().siblings().hide();
    });
    $('.mod_cate').hover(function () {
        var dis = $(".mod_subcate");
        $(this).find(dis).toggle();
    });
    /*品牌切换*/
    $('.floor_line_menu li').hover(function () {
        $('.floor_line_menu li').eq($(this).index()).addClass('b2').siblings().removeClass('b2');
        $('.floor_line_con ul').eq($(this).index()).show().siblings().hide();
    });
    // 需求中心切换
    $('.floor_line_menu1 li').hover(function () {
        $('.floor_line_menu1 li').eq($(this).index()).addClass('b2').siblings().removeClass('b2');
        $('.floor_line_con_2').find(".block_fast").eq($(this).index()).show().siblings().hide();
    });

    /*dl最后两个去掉边框*/
    $('.ab_text dl').last().css('border', 'none');
    $('.ab_text').find("dl").eq(6).css("border", "none");
    /*3f切换*/
    $('.hot li').hover(function () {
        $('.hot li').eq($(this).index()).addClass('b2').siblings().removeClass('b2');
        $('.hot_con').children('.hot_list').eq($(this).index()).show().siblings().hide();
    });
    /*4f切换*/
    $('.last_a li').hover(function () {
        $('.last_a li').eq($(this).index()).addClass('b2').siblings().removeClass('b2');
        $('.last_con').children('.last_list').eq($(this).index()).show().siblings().hide();
    });
    //footer第一个left
    $('.footer ul').find("li").eq(0).css("margin-left", "15px");
    /*2f内部切换*/
    $('.slider_number ul li').hover(function () {
        $('.slider_number ul li').eq($(this).index()).addClass('b2').siblings().removeClass('b2');
        $('.block_fast_con').children('.block_fast_text').eq($(this).index()).show().siblings().hide();
    });
    $('.slider_number1 ul li').hover(function () {
        $('.slider_number1 ul li').eq($(this).index()).addClass('b2').siblings().removeClass('b2');
        $('.block_fast_con1').children('.block_fast_text').eq($(this).index()).show().siblings().hide();
    });
    /*其他服务*/
    $('.letters_list_text li').hover(function () {
        $('.letters_list_text li').eq($(this).index()).addClass('current_fast').siblings().removeClass('current_fast');
        $('.letters_list_con').children('.fast_letter').eq($(this).index()).show().siblings().hide();
    });
    /*筛选的更多效果*/
    $('.more_btn').click(function () {
        $(this).toggleClass('more_btn_se');
        $(this).parent().toggleClass('select-list_no');
    })
    $('.select-result dd').click(function () {
        $(this).hide()
    });
    /*商品列表切换*/
    $('.pi_class_list_menu ul li').click(function () {
        $('.pi_class_list_menu ul').find('.select_class').eq($(this).index()).addClass('b2').siblings().removeClass('b2');
        $('.pi_class_list').children('.pi_class_list_con').eq($(this).index()).show().siblings().hide();
    });
    /*鼠标滑过显示菜单*/
    $('#nav').hover(function () {
        $('.hide_menu').toggle();
    });
    //商品规格选择
    $(function () {
        $(".sys_item_spec .sys_item_specpara").each(function () {
            var i = $(this);
            var p = i.find("ul>li");
            p.click(function () {
                if (!!$(this).hasClass("selected")) {
                    $(this).removeClass("selected");
                    i.removeAttr("data-attrval");
                } else {
                    $(this).addClass("selected").siblings("li").removeClass("selected");
                    i.attr("data-attrval", $(this).attr("data-aid"))
                }
            })
        })
    });
    //支付菜单
    $(function () {
        $(".pay-module .pay-tabs").each(function () {
            var i = $(this);
            var p = i.find("li");
            p.click(function () {
                if (!!$(this).hasClass("selected")) {
                    $(this).removeClass("selected");
                    i.removeAttr("data-attrval");
                } else {
                    $(this).addClass("selected").siblings("li").removeClass("selected");
                    i.attr("data-attrval", $(this).attr("data-aid"))
                }
            })
        })


    });
    /*个人中心删除*/
    $('.center_delete').click(function(){
        $(this).parent().parent().hide()
    });
    /*个人中心左边菜单收缩*/
    $('.center_left_class').click(function(){
        $(this).siblings().slideToggle();
        $(this).toggleClass('center_left_class_c');
    });
    /*购物车删除物品*/
    $('.td-delete span').click(function(){
        var zu = $(this).parents('.all_goods_con');
        var num = $(this).parents('.all_goods_con').children().length;
        /*alert(num);*/
        $(this).parents('.all_goods_text').remove();
         if(num == 2){
             zu.remove();
         }else{
             return false
         }
    });
    $('.Caddress .add_mi').click(function() {
        $(this).addClass('add_mi_first').siblings('.add_mi').removeClass('add_mi_first')
    })
});