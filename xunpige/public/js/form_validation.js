//表单注册验证
function CheckForm(){
    var user_name = $('#user_name').val();
    var re = /^[a-zA-z]\w{3,15}$/;
    if(!(re.test(user_name))){
        $('.m1').show();
        $('#user_name').focus();
        $('.s1').hide();
        return false;
    }else{
        $('.m1').hide();
        $('.s1').show();
        return true;
    }
}
function onQuermm(){
    var xinmm = $('#password').val();
    var aa = new RegExp("(?![a-z]+$|[0-9]+$)^[a-zA-Z0-9]{7,}$");
    if (!(aa.test(xinmm))){
        $('.m2').show();
        $('#password').focus();
        $('.s2').hide();
        return false;
    } else {
        $('.m2').hide();
        $('.s2').show();
        return true;
    }
}
function mobile(){
    var phone = $('#phone').val();
    var re = /^1\d{10}$/;
    if (!(re.test(phone))) {
        $('.m3').show();
        $('#phone').focus();
        $('.s3').hide();
        return false;
    } else {
        $('.m3').hide();
        $('.s3').show();
        return true;
    }
}
function yan(){
    var code_yan = $('#code_yan').val();
    if (code_yan.length ==0) {
        $('.m4').show();
        $('#code_yan').focus();
        return false;
    } else {
        $('.m4').hide();
        return true;
    }
}
function allcheck(){
    if(yan()==true&&mobile()==true&&onQuermm==true&&CheckForm==true){
        return true;
        window.location.href = "perfect_information.html";
    }else{
        return false
    }
}