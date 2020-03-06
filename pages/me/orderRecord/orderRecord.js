// pages/me/orderRecord/orderRecord.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchLoading: false, //"上拉加载"的变量，默认false，隐藏
    searchLoadingComplete: false, //“没有数据”的变量，默认false，隐藏
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      admin:app.globalData.admin
    })
    console.log(this)
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

    var self = this;
    // 原程序
    var app = getApp();
    // 触发加载中效果
    self.setData({
      searchLoading: true,
      searchLoadingComplete: true
    })
    // 案例详情
    // 页数 +1
    page++
    // 设计师信息
    wx.request({
      url: 'https://xcx.xxx.com.cn/homeapi/xxxx?page=' + page, //接口地址
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      success: function (res) {
        // console.log(res);
        // 案例详情
        self.setData({
          // 渲染数据
          design: res.data,
          //隐藏加载中效果
          searchLoading: false,
          searchLoadingComplete: false
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})