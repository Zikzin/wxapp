// pages/detail/detail.js

var api = require('../../utils/api.js');

Page({
  data:{
    list:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
      var id = options.id;
      api.getDetail(id)
        .then(res=>{
          // console.log(res);
          this.setData({
            list:res
          })
      })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})