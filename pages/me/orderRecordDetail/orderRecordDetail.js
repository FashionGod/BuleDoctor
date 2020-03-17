// pages/me/ordereRecordDetail/orderRecordDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    admin:null,
    department:'',
    time:'',
    tempFilePaths:null,
    index:null,
    diagnosis:''
  },
  uploadToCloud(){
    wx.cloud.callFunction({
      name:'uploadCheckImage',
      data:{
        orderNumber:this.data.index,
        imgPath:this.data.tempFilePaths
      }
    }).then(res=>{
      console.log(res)
    })
  },
  upload(){
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        that.setData({
          tempFilePaths: tempFilePaths[0]
        })
        console.log(res)
        if(res.result!=null){
          wx.showToast({
            title: '上传成功',
          })
        }
        else {
          wx.showToast({
            title: '上传失败',
            icon:'none'
          })
        }
      }
    })
    
  },
  formSubmit(data){
    console.log(data)
    wx.cloud.callFunction({
      name:'uploadDiagnosis',
      data:{
        orderNumber:this.data.index,
        diagnosis:data.detail.value.diagnosis
      }
    }).then(res=>{
      console.log(res)
      if(res.result!=null){
        wx.showToast({
          title: '上传成功',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(options)
    this.setData({
      admin:app.globalData.admin,
      department:options.department,
      time:options.time,
      index:options.index
    })
    //如果是医生或患者身份
    if(app.globalData.admin==1||app.globalData.admin==0){
      //获取云端诊断数据
      console.log('1234')
      wx.cloud.callFunction({
        name:'getDiagnosis',
        data:{
          orderNumber:this.data.index
        }
      }).then(res=>{
        console.log(res)
        this.setData({
          diagnosis: res.result.data[0].diagnosis
        })
      })
      console.log('1234')
    }
    //如果是上传者身份
    if(app.globalData.admin==2){
      //获取云端检查人员的图片
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
    }
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