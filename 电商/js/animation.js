/**
 * Created by Remy Jr on 2016/4/7.
 */
var $shopClass_i = $('.shopClass i');

$shopClass_i.on('click', function () {
    var $shopClass_item  = $('.shopClass_item' );
    $shopClass_item.fadeToggle();
})


//var imgCount = 1 ;

//function imgChange(){                       //实现宣传页动画
//
//}
//$(document).ready(setInterval(function(){
//    window.imgCount = imgCount ++;
//    li_1.show();
//
//    //switch (imgCount){
//    //    case 1:
//    //        li_1.show();
//    //        li_2.hide();
//    //        li_3.hide();
//    //        imgCount++;
//    //    case 2:
//    //        li_2.show();
//    //        li_1.hide();
//    //        li_3.hide();
//    //        imgCount++;
//    //    case 3 :
//    //        li_3.show();
//    //        li_2.hide();
//    //        li_1.hide();
//    //        imgCount = 1;
//    //}
//},3000));

/*banner选中动画*/
var li_11 = $('#li_11');
var li_12 = $('#li_12');
var li_13 = $('#li_13');
$('#img_11').on('mouseover',function(){
    li_11.show();
    li_12.hide();
    li_13.hide();
})
$('#img_12').on('mouseover',function(){
    li_12.show();
    li_11.hide();
    li_13.hide();
})
$('#img_13').on('mouseover',function(){
    li_13.show();
    li_12.hide();
    li_11.hide();
})

var li_21 = $('#li_21');
var li_22 = $('#li_22');
var li_23 = $('#li_23');
$('#img_21').on('mouseover',function(){
    li_21.show();
    li_22.hide();
    li_23.hide();
})
$('#img_22').on('mouseover',function(){
    li_22.show();
    li_21.hide();
    li_23.hide();
})
$('#img_23').on('mouseover',function(){
    li_23.show();
    li_22.hide();
    li_21.hide();
})