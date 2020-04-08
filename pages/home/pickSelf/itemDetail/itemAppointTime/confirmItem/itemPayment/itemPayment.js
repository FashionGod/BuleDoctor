// pages/home/quickRegister/departmentDetail/appointmentTime/confirmRegister/payment/payment.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  uploadOrderInfo() {
    wx.showLoading({
      title: '订单生成中',
      mask: true,
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    
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
        "department": this.data.doctor.department,
        "price": this.data.doctor.price,
      },
      success(res) {
        wx.showModal({
          title: '支付成功',
          content: '订单已经生成！',
          success(res) {
            if(res.confirm) {
              wx.switchTab({
                url: '/pages/home/home',
              })
            } else if(res.cancel) {
              wx.switchTab({
                url: '/pages/home/home',
              })
            }
          }
        })
        wx.hideLoading();
        
      },
      fail(err) {
        wx.showModal({
          title: '支付失败！',
          content: '请检查网络环境！',
        })
        wx.hideLoading();
      }
    })  
    wx.hideLoading();
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
      apartmentName: options.apartmentName,
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