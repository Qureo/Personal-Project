/**
 * Created by Remy Jr on 2016/4/10.
 */

//新窗口打开页面
$('document').ready(function(){
    var aList = $('a');
    aList.each(function(){
        $(this).attr('target','_blank')
    });
});


