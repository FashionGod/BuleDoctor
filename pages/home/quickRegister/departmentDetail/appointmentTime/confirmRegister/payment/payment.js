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
      name: 'uploadOrderDoctor',
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
            if (res.confirm) {
              wx.switchTab({
                url: '/pages/home/home',
              })
            } else if (res.cancel) {
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
	** onHide()在小程序生命周期中具有监听小程序隐藏的功能，当切换页面和切换底部菜单栏时将会关闭定时器。
	*/
	onHide:function(){ 
		let e = this;
		clearInterval(e.data.timer);
	},
})