// pages/home/quickRegister/departmentDetail/appointmentTime/confirmRegister/payment/payment.js
var timer = require('../../../../../../../plugins/wxTimer.js');
var wxTimer = new timer({
  beginTime: "00:15:00"
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxTimerList: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wxTimer.calibration()
    wxTimer.start(this);
    console.log()
    console.log(wxTimer)
    wxTimer.calibration()
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
    wxTimer.calibration()
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