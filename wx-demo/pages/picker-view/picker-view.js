// pages/picker-view/picker-view.js
Page({
  data:{
    seladdr:'深圳',
    selcour:'语文',
    selclz:'1',
    
    address:['深圳','深圳','武汉','广州'],
    course:['语文','数学','英文','体育'],
    clz:['1','2','3','4']
  },
  change:function(e){
    var val = e.detail.value;
    this.setData({
      seladdr:this.data.address[val[0]],
      selcour:this.data.course[val[1]],
      selclz:this.data.clz[val[2]],
    })
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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