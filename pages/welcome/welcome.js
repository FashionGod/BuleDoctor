// pages/welcome/welcome.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctorFlag: false,
    uploaderFlag: false,
    admin: null,
    remind: '加载中',
    show: false,
    buttons: [
      {
        type: 'submit',
        className: '',
        text: '确认',
        value: 1
      }
    ]
  },

  open: function () {
    this.setData({
      show: true
    })
  },
  buttontap(e) {
    console.log(e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */

  async judgeIfHaveIdentity() {
    console.log(app.globalData.openid)
    setTimeout(() => {
      this.setData({
        remind: ''
      })
    }, 2000)
    let a = await wx.cloud.callFunction({
      name: 'judgeIfHaveIdentity',
      data: {
        openid: app.globalData.openid
      }
    })
    //有无身份标识，为了在三个To函数中判断用
    app.globalData.adminFlag = false
    console.log("a.errcode",a.result)
    if (a.result.data.data[0]!=null) {
      app.globalData.adminFlag = true
      //（有身份）
      app.globalData.admin = a.result.data.data[0].admin
      if (app.globalData.admin == 0) {
        this.patientIdToHome()
      } else if (app.globalData.admin == 1) {
        this.doctorIdToHome()
      } else if (app.globalData.admin == 2) {
        this.uploderIdToHome()
      }
    } else if (a.result.data.data[0] == null) {
      //（没身份）
      console.log("数据库中没有身份")
    }
  },
  onLoad: function(options) {
    this.getOpenid().then(res => {
      this.judgeIfHaveIdentity()
    })



  },

  displayDoctor() {
    this.setData({
      doctorFlag: true,
      uploaderFlag: false,
    })
  },
  displayUploader() {
    this.setData({
      uploaderFlag: true,
      doctorFlag: false,
    })
  },
  async addIdentity() {
    console.log("asdf", app.globalData.openid)
    let a = await wx.cloud.callFunction({
      name: 'addIdentity',
      data: {
        openid: app.globalData.openid,
        admin: app.globalData.admin
      }
    })
    console.log("fanhuisha", a)
  },
  async getOpenid() {
    let that = this;
    let a = await wx.cloud.callFunction({
      name: 'getOpenid'
    })
    console.log('云函数获取到的openid: ', a.result.openId)
    app.globalData.openid = a.result.openId;
  },
  async doctorIdToHome() {
    if (app.globalData.adminFlag) {
      //有身份就不加直接进
    }
    else {
      await this.addIdentity()
    }
    wx.switchTab({
      url: '../home/home',
      fail(err) {
        console.log(err)
        wx.showModal({
          title: '系统错误',
          content: '网络出现问题，请稍后再试!',
        })
      }
    })
  },
  async uploderIdToHome() {
    if (app.globalData.adminFlag) {
      //有身份就不加直接进
    }
    else {
      await this.addIdentity()
    }
    wx.switchTab({
      url: '../home/home',
      fail(err) {
        console.log(err)
        wx.showModal({
          title: '系统错误',
          content: '网络出现问题，请稍后再试!',
        })
      }
    })
  },
  async patientIdToHome() {
    if(app.globalData.adminFlag){
      //有身份就不加直接进
    }
    else{
      await this.addIdentity()
    }
    wx.switchTab({
      url: '../home/home',
      fail(err) {
        console.log(err)
        wx.showModal({
          title: '系统错误',
          content: '网络出现问题，请稍后再试!',
        })
      }
    })
  },
  toNext() {
    console.log("jiashangle")
    app.globalData.admin = 0
    console.log("jiashangle", app.globalData.admin)
    //加身份权限为病人
    this.patientIdToHome()

  },
  toDoctor(e) {
    console.log(e)
    var that = this
    wx.cloud.callFunction({
      name: 'verifyDoctorPassword',
      success(res) {
        console.log(res)
        console.log(e.detail.value.doctor)
        if (res.result.code == 0) {
          if (e.detail.value.doctor == '' || e.detail.value.doctor == "") {
            wx.showModal({
              content: '请输入密码',
            })
          } else {
            if (res.result.doctorPassword == e.detail.value.doctor) {
              //加权限为医生
              app.globalData.admin = 1
              console.log("jiashangle", app.globalData.admin)
              that.doctorIdToHome()

            } else {
              wx.showModal({
                title: '密码错误',
                content: '请重新尝试',
              })
            }
            wx.hideLoading();
          }
        } else if (res.result.code == -1) {
          wx.showModal({
            title: '系统错误',
            content: '系统出现问题,请稍后重试!',
          })
        }
        wx.hideLoading();
      },
      fail(err) {
        wx.showModal({
          title: '网络错误',
          content: '网络出现问题,请稍后重试!',
        })
        wx.hideLoading();
      },
    })

  },
  toUploader(e) {
    console.log(e)
    var that = this
    wx.cloud.callFunction({
      name: 'verifyUploaderPassword',
      success(res) {
        console.log(res)
        if (res.result.code == 0) {
          if (e.detail.value.uploader == '' || e.detail.value.uploader == "") {
            wx.showModal({
              content: '请输入密码',
            })
          } else {
            if (res.result.uploaderPassword == e.detail.value.uploader) {
              //加权限为上传者
              app.globalData.admin = 2
              that.uploderIdToHome()


            } else {
              wx.showModal({
                title: '密码错误',
                content: '请重新尝试',
              })
            }
          }
          wx.hideLoading();
        } else if (res.result.code == -1) {
          wx.showModal({
            title: '系统错误',
            content: '系统出现问题,请稍后重试!',
          })
        }
        wx.hideLoading();
      },
      fail(err) {
        wx.showModal({
          title: '网络错误',
          content: '网络出现问题,请稍后重试!',
        })
        wx.hideLoading();
      },
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