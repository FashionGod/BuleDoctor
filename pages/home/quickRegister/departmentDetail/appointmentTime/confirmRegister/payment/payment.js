// pages/home/quickRegister/departmentDetail/appointmentTime/confirmRegister/payment/payment.js
var timer = require('../../../../../../../plugins/wxTimer.js');
var wxTimer = new timer({
  beginTime: "00:00:05",
})
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxTimerList: {},
  },
  uploadOrderInfo() {
    wx.cloud.callFunction({
      name: 'uploadOrderChecker',
      data: {
        "openid": app.globalData.openid,
        "date": this.data.seeTime1,
        "registerlistId": this.data.registerlistId,
        "docName": this.data.doctor.doctorName,
        "doctorNumber": this.data.doctor.doctorNumber,
        "patientName": this.data.patientInfo.name,
        "patientNumber": this.data.patientInfo.sickNumber,
        "payTime": this.data.seeTime2.time,
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let doctor = JSON.parse(options.doctor);
    let seeTime2 = JSON.parse(options.seeTime2);
    let patientInfo = JSON.parse(options.patientInfo);
    this.setData({
      doctor: doctor,
      seeTime1: options.seeTime1,
      seeTime2: seeTime2,
      weekDate: options.weekDate,
      patientInfo: patientInfo,
      registerlistId: options.registerlistId,
    })
    wxTimer.calibration()
    wxTimer.start(this);
    console.log(wxTimer)
    wxTimer.calibration()
    app.globalData.wxTimer = wxTimer;
    console.log(app.globalData.wxTimer)
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