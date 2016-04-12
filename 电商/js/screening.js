/**
 * Created by Remy Jr on 2016/4/11.
 */


$('.screening a').on('click',function(){
    $(this).toggleClass('active');
})


//$('.screening a').on('click',function(){
//    var a = $(this);
//    var aFocus =a.parent();
//    if(aFocus.hasClass('limit')){
//        if(a.hasClass('active')){
//            a.removeClass('active');
//        }else{
//            a.addClass('active');
//            aFocus.siblings().find('a').each($(this).removeClass('active'));
//        }
//    }else{
//        var sib = a.parents('dd').siblings('dd');
//        if(sib.children('a').hasClass('active')) {
//            sib.children('a').removeClass('active');
//            a.addClass('active');
//        }
//        else{
//            a.toggleClass('active');
//        }
//    }
//});
