// pages/home/home.js
var api = require('../../utils/api.js');
Page({
  data:{
    pn:0,
    list:[],
    showMore:true,
    showLoading:true
  },
  redirect:function(e){
    var id = e.currentTarget.dataset.id;

    wx.navigateTo({
      url:'../detail/detail?id='+id
    })
  },
  scrolltolower:function(e){
    // console.log(11)
    if(this.data.showMore) return;
    this.loadData(this.data.pn);
  },
  loadData:function(pn){
   api.getList('in_theaters',pn)
     .then(res=>{
        // console.log(res);
        if(res.subjects.length>0){
          this.setData({
            list:this.data.list.concat(res.subjects),  // 第一页的数据和第二页的数据要加起来
            showLoading:false,
            pn:pn+1
          })
        }else{
          this.setData({
            showMore:false
          })
        }
     
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.loadData(this.data.pn)
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