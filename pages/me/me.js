// pages/me/me.js
const app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    admin:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      admin:app.globalData.admin
    })
    
  },
  onClick(e) {
    if (e.currentTarget.dataset.index == 1) {
      wx.navigateTo({
        url: 'personInformation/personInformation',
      })
    } else if (e.currentTarget.dataset.index == 2) {
      wx.navigateTo({
        url: 'orderRecord/orderRecord?flag=1',
      })
    } else if (e.currentTarget.dataset.index == 3) {
      wx.navigateTo({
        url: 'physicalExaminationRecord/physicalExaminationRecord?flag=2',
      })
    } 

    //因为用了微信的API所以不需要反馈页面了
    // else if (e.currentTarget.dataset.index == 4) {
    //   wx.navigateTo({
    //     url: 'feedBack/feedBack',
    //   })
    // }
    
     else if (e.currentTarget.dataset.index == 4) {
      wx.navigateTo({
        url: 'about/about',
      })
    }
  }


})