// pages/me/physicalExaminationRecord/physicalExaminationRecord.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardList:[],
  },
  gotoDetail: function (e) {
    console.log(e)
    console.log(this.data.cardList[e.currentTarget.dataset.index].orderNumber)
    wx.navigateTo({
      url: '../physicalExaminationRecordDetail/physicalExaminationRecordDetail?department=' + this.data.cardList[e.currentTarget.dataset.index].department + '&time=' + this.data.cardList[e.currentTarget.dataset.index].date + ' ' + this.data.cardList[e.currentTarget.dataset.index].payTime + '&index=' + this.data.cardList[e.currentTarget.dataset.index].orderNumber,
      success: function (res) { console.log(res) },
      fail: function (res) { console.log(res) },
      complete: function (res) { console.log(res) },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'getRecord',
      data: {
        userNumber: app.globalData.userNumber,
        admin: app.globalData.admin,
        flag: options.flag
      }
    }).then(res => {
      console.log(res.result)
      this.setData({
        cardList: res.result.list
      })
    })
    console.log(options.flag)
    console.log(app.globalData.userNumber)
    console.log(app.globalData)
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