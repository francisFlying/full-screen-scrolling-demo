
$(function(){
  // 全屏初始化
  $('#dowebok').fullpage({
    // 设置每一屏的背景颜色
    sectionsColor:['red','blue','hotpink','#123456','#000'],
    //当滚动到某一屏后会执行
    afterLoad:function(anchorLink,index){
      //console.log(index);
      //滚动到某一屏后，该做动画
      $('.section').removeClass('current');
      //解决第一屏加载时没动画效果 使用定时器
      setTimeout(function(){
        $('.section').eq(index-1).addClass('current');
      },100);
    }

  });
});