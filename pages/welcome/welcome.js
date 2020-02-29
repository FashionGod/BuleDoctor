// pages/welcome/welcome.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctorFlag: false,
    uploaderFlag: false,
    admin: null,
    remind:'加载中'
  },

  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getOpenid()
    
    console.log("firstBlood", wx.getStorageSync('firstBlood'))
    //第一次进入小程序
    if (!wx.getStorageSync('firstBlood')){
      setTimeout(() => {
        this.setData({
          remind: ''
        })
      }, 2000)
      wx.setStorageSync("firstBlood", true)
    }
    // 不是第一次进入小程序
    else{
      setTimeout(() => {
        this.setData({
          remind: ''
        })
      }, 2000)
      console.log("firstBlood", wx.getStorageSync('firstBlood'))
      wx.cloud.callFunction({
        name:'getIdentity'
      }).then(res=>{
        this.setData({
          admin: res.result.data.admin
        })
        console.log('admin',res)
        app.globalData.admin = this.data.admin
      }).then(res=>{
        wx.switchTab({
          url: '../home/home',
        })
      })
      console.log("firstBlood", wx.getStorageSync('firstBlood'))
    }



  },
  
  displayDoctor() {
    this.setData({
      doctorFlag: true,
      uploaderFlag: false,
    })
  },
  displayUploader() {
    this.setData({
      uploaderFlag: true,
      doctorFlag: false,
    })
  },
  async addIdentity() {
    console.log("asdf", app.globalData.openid)
    let a = await wx.cloud.callFunction({
      name: 'addIdentity',
      data: {
        openid: app.globalData.openid,
        admin: app.globalData.admin
      }
    })
    console.log("fanhuisha", a)
  },
  async getOpenid() {
    let that = this;
    let a = await wx.cloud.callFunction({
      name: 'getOpenid'
    })
    console.log('云函数获取到的openid: ', a.result.openId)
    app.globalData.openid = a.result.openId;
  },
  async doctorIdToHome(){
    await this.addIdentity()
    wx.switchTab({
      url: '../home/home',
      fail(err) {
        console.log(err)
        wx.showModal({
          title: '系统错误',
          content: '网络出现问题，请稍后再试!',
        })
      }
    })
  },
  async uploderIdToHome(){
    await this.addIdentity()
    wx.switchTab({
      url: '../home/home',
      fail(err) {
        console.log(err)
        wx.showModal({
          title: '系统错误',
          content: '网络出现问题，请稍后再试!',
        })
      }
    })
  },
  async patientIdToHome(){
    await this.addIdentity()
    wx.switchTab({
      url: '../home/home',
      fail(err) {
        console.log(err)
        wx.showModal({
          title: '系统错误',
          content: '网络出现问题，请稍后再试!',
        })
      }
    })
  },
  toNext() {
    console.log("jiashangle")
    app.globalData.admin = 0
    console.log("jiashangle", app.globalData.admin)
    //加身份权限为病人
    this.patientIdToHome()

  },
  toDoctor(e) {
    console.log(e)
    var that = this
    wx.cloud.callFunction({
      name: 'verifyDoctorPassword',
      success(res) {
        console.log(res)
        console.log(e.detail.value.doctor)
        if (res.result.code == 0) {
          if (e.detail.value.doctor == '' || e.detail.value.doctor == "") {
            wx.showModal({
              content: '请输入密码',
            })
          } else {
            if (res.result.doctorPassword == e.detail.value.doctor) {
              //加权限为医生
              app.globalData.admin = 1
              console.log("jiashangle", app.globalData.admin)
              that.doctorIdToHome()

            } else {
              wx.showModal({
                title: '密码错误',
                content: '请重新尝试',
              })
            }
            wx.hideLoading();
          }
        } else if (res.result.code == -1) {
          wx.showModal({
            title: '系统错误',
            content: '系统出现问题,请稍后重试!',
          })
        }
        wx.hideLoading();
      },
      fail(err) {
        wx.showModal({
          title: '网络错误',
          content: '网络出现问题,请稍后重试!',
        })
        wx.hideLoading();
      },
    })

  },
  toUploader(e) {
    console.log(e)
    var that = this
    wx.cloud.callFunction({
      name: 'verifyUploaderPassword',
      success(res) {
        console.log(res)
        if (res.result.code == 0) {
          if (e.detail.value.uploader == '' || e.detail.value.uploader == "") {
            wx.showModal({
              content: '请输入密码',
            })
          } else {
            if (res.result.uploaderPassword == e.detail.value.uploader) {
              //加权限为上传者
              app.globalData.admin = 2
              that.uploderIdToHome()
                

            } else {
              wx.showModal({
                title: '密码错误',
                content: '请重新尝试',
              })
            }
          }
          wx.hideLoading();
        } else if (res.result.code == -1) {
          wx.showModal({
            title: '系统错误',
            content: '系统出现问题,请稍后重试!',
          })
        }
        wx.hideLoading();
      },
      fail(err) {
        wx.showModal({
          title: '网络错误',
          content: '网络出现问题,请稍后重试!',
        })
        wx.hideLoading();
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})