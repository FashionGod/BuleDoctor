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
    console.log(options.id)
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
    wx.navigateTo({
      url: 'itemPayment/itemPayment',
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
    // wx.navigateTo({
    //   url: '../../appointmentTime/appointmentTime?idasd=1',
    // })
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