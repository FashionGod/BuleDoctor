// pages/me/physicalExaminationRecordDetail/physicalExaminationRecordDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:null,
    department: '',
    time: '',
    tempFilePaths: null,
    index: null,
  },
  preView(){
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: [this.data.tempFilePaths] // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.setData({
      time: options.time,
      index: options.index,
      department:options.department
    })
    // 转化department数组对应的字符串
    if (app.globalData.admin == 1) {
      this.setData({
        department: this.data.list1[options.department[0]].title + ' ' + this.data.list1[options.department[0].items[options.department[1]]]
      })
    }
    else if (app.globalData.admin == 2) {
      this.setData({
        department: this.data.list2[options.department[0]].title + ' ' + this.data.list2[options.department[0].items[options.department[1]]]
      })
    }
    wx.cloud.callFunction({
      name: 'getCheckImage',
      data: {
        orderNumber: this.data.index
      }
    }).then(res => {
      console.log(res)
      that.setData({
        tempFilePaths: res.result.data[0].imgPath
      })
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