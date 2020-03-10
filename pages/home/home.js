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
    admin:null,
    userNumber:''
  },

  onLoad: function (option) {
    console.log("appdata",app.globalData.admin)
    this.setData({
      admin:app.globalData.admin
    })
    if (app.globalData.admin==0){
      wx.cloud.callFunction({
        name: 'getPatientInfo',
        data: {
          openid: app.globalData.openid
        }
      }).then(res => {
        console.log(res)
        console.log(res.result.data)
        if (res.result.data == null) {
          wx.showModal({
            content: '请前往我的页面填写个人信息'
          })
        } else {
          this.setData({
            userNumber: res.result.data.sickNumber
          })
        }
        app.globalData.userNumber=this.data.userNumber
        console.log(this.data)
      })
    }
    else if (app.globalData.admin==1){
      wx.cloud.callFunction({
        name: 'getDoctorInfo',
        data: {
          openid: app.globalData.openid
        }
      }).then(res => {
        console.log(res)
        console.log(res.result.data)
        if (res.result.data == null) {
          wx.showModal({
            content: '请前往我的页面填写个人信息'
          })
        } else {
          this.setData({
            userNumber: res.result.data.doctorNumber
          })
        }
        app.globalData.userNumber = this.data.userNumber
        console.log(this.data)
      })
    }
    else if (app.globalData.admin==2){
      wx.cloud.callFunction({
        name: 'getUploaderInfo',
        data: {
          openid: app.globalData.openid
        }
      }).then(res => {
        console.log(res)
        console.log(res.result.data)
        if (res.result.data == null) {
          wx.showModal({
            content: '请前往我的页面填写个人信息'
          })
        } else {
          this.setData({
            userNumber: res.result.data.uploaderNumber
          })
        }
        app.globalData.userNumber = this.data.userNumber
        console.log(this.data)
      })
    }
  },
  toRegistration(){
    wx.navigateTo({
      url: '../home/quickRegister/quickRegister'
    })
  },
  toOrderRecord(){
    wx.navigateTo({
      url: '../me/orderRecord/orderRecord'
    })
  },
  toPickSelf(){
    wx.navigateTo({
      url: '../home/pickSelf/pickSelf'
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
