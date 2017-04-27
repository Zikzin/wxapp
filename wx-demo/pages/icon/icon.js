// pages/icon/icon.js
Page({
  data:{
    title:'',
    icons:[
      {
        type:'success',size:'25'
      },
      {
        type:'success_no_circle',size:'25'
      },
      {
        type:'info',size:'25'
      },
      {
        type:'warn',size:'25'
      },
      {
        type:'waiting',size:'25'
      },
      {
        type:'cancel',size:'25'
      },
      {
        type:'download',size:'25'
      },
      {
        type:'search',size:'25'
      },
      {
        type:'clear',size:'25'
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    this.setData({
      title:options.title
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