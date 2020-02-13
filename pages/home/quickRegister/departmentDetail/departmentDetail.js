// pages/home/departmentDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    date:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: ""
      })
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 1000,
      })
      var that = this;
      wx.cloud.callFunction({
        name: 'getDepartment',
        success(res){
          wx.hideToast()
          if (res.result.code == -1) {
            wx.showModal({
              title: '系统错误',
              content: '系统出现问题，请稍后再试!',
            })
          }
          else {
              that.setData({
              list: res.result,
              listid: options.listid,
              itemsid: options.itemsid,
            })
            wx.setNavigationBarTitle({
              title: that.data.
              list[that.data.listid].items[that.data.itemsid] 
            })
          }
        },
        fail(err) {
          console.log(err)
          console.log(err.statusCode)
          console.log(err.code)
          console.log(err.errMsg.Error)
          wx.showModal({
            title: '网络错误',
            content: '网络出现问题，请稍后再试!',
          })
          wx.hideLoading();
        }, 
      })    
  },
  followDate() {
    // this.setData({
    //   color1:,
    // })
  },
  followDoctor() {
    // this.setData({

    // })
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
    // let date = new date();
    // console.log(this.data)
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