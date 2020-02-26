// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctorFlag: false,
    uploaderFlag: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  toNext() {
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
  toDoctor(e) {
    console.log(e)
    wx.cloud.callFunction({
      name: 'verifyDoctorPassword',
      success(res){
        console.log(res)
        console.log(e.detail.value.doctor)
        if(res.result.code == 0) {
          if (e.detail.value.doctor == '' || e.detail.value.doctor == "") {
            wx.showModal({
              content: '请输入密码',
            })
          }else {
            if (res.result.doctorPassword == e.detail.value.doctor) {
              wx.reLaunch({
                url: '../doctor/doctor',
                fail(err) {
                  console.log(err)
                  wx.showModal({
                    title: '系统错误',
                    content: '网络出现问题，请稍后再试!',
                  })
                }
              })
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
      fail(err){
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
            wx.reLaunch({
              url: '../uploader/uploader',
              fail(err) {
                console.log(err)
                wx.showModal({
                  title: '系统错误',
                  content: '网络出现问题，请稍后再试!',
                })
              }
            })
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
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})