// pages/me/me.js

Page({
  
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    
  },
  onClick(e) {
    if (e.currentTarget.dataset.index == 1) {
      wx.navigateTo({
        url: 'patientInformation/patientInformation',
      })
    } else if (e.currentTarget.dataset.index == 2) {
      wx.navigateTo({
        url: 'registrationRecord/registrationRecord',
      })
    } else if (e.currentTarget.dataset.index == 3) {
      wx.navigateTo({
        url: 'physicalExaminationRecord/physicalExaminationRecord',
      })
    } 

    //因为用了微信的API所以不需要反馈页面了
    // else if (e.currentTarget.dataset.index == 4) {
    //   wx.navigateTo({
    //     url: 'feedBack/feedBack',
    //   })
    // }
    
     else if (e.currentTarget.dataset.index == 5) {
      wx.navigateTo({
        url: 'about/about',
      })
    }
  }


})