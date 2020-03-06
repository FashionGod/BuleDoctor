// pages/home/quickRegister/departmentDetail/appointmentTime/confirmRegister/confirmRegister.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let doctor = JSON.parse(options.doctor);
    let seeTime2 = JSON.parse(options.seeTime2);
    this.setData({
      doctor: doctor,
      seeTime1: options.seeTime1,
      seeTime2: seeTime2,
      weekDate: options.weekDate,
    })
  },
  onConfirm() {
    wx.showToast({
      title: '锁号中',
      icon: 'loading',
      duration: 2000,
    })
    wx.hideToast();

    wx.showToast({
      title: '支付处理中',
      icon: 'loading',
      duration: 3000,
    })
    wx.hideToast();
    let doctor = JSON.stringify(this.data.doctor);
    let seeTime1 = this.data.seeTime1;
    let seeTime2 = JSON.stringify(this.data.seeTime2);
    let weekDate = this.data.weekDate;
    // console.log(doctor)
    // console.log(seeTime1)
    // console.log(seeTime2)
    // console.log(weekDate)

    wx.navigateTo({
      url: 'itemPayment/itemPayment?doctor='+ doctor +
      '&seeTime1=' + seeTime1 +
      '&seeTime2=' + seeTime2 +
      '&weekDate=' + weekDate 
      ,
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