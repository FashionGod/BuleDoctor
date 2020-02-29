//index.js
//获取应用实例
var time = 0;
var touchDot = 0;//触摸时的原点
var interval = "";
var flag_hd = true;
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    currentIndex:0,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    admin:null
  },

  onLoad: function (option) {
    console.log("appdata",app.globalData.admin)
    this.setData({
      admin:app.globalData.admin
    })
  },
  ToRegistration(){
    wx.navigateTo({
      url: '../home/quickRegister/quickRegister?id=0',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  toPickSelf(){
    wx.navigateTo({
      url: '../home/pickSelf/pickSelf',
    })
  },
  onShow:function(){
  
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handleChange:function(e){
    this.setData({
      currentIndex:e.detail.current
    })
  }
  
})
