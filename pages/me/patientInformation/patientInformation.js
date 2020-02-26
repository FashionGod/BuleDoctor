// pages/me/patientInformation/patientInformation.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flagDisabled:true,
    name:"",
    age:null,
    phoneNumber:null,
    sex:null,
    idcard:null,
    picker: ['男', '女'],
    sickNumber:null,
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'getPatientInfo'
    }).then(res =>{
      console.log(res)
      console.log(res.result.data)
      if(res.result.code = -1){
        wx.showToast({
          title: '请填写有关信息',
          icon: 'none',
          duration: 2000
        })
      }
      else if(res.result.code = 0){
        this.setData({
          name: res.result.data.name,
          sex: res.result.data.sex,
          age: res.result.data.age,
          phoneNumber: res.result.data.phoneNumber,
          idcard: res.result.data.idcard
        })
      }
      console.log(this.data)
    })
    // this.doit()(覃总教的一套流程要加this.)
  },
  //[覃总教的]
  // async doit(){
  //   let a = await wx.cloud.callFunction({
  //     name: 'getPatientInfo'
  //   })
  //   console.log('a',a)
  //   return a
  // },

  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      sex: e.detail.value
    })
  },
  formSubmit(data){
    var that = this
    wx.showModal({
      title: '',
      content: '确定要保存吗？',
      success(res){
        if(res.confirm){
          console.log("用户点击确定保存")
          console.log(data.detail.value)
          return wx.cloud.callFunction({
            name: 'uploadPatientInfo',
            data: {
              name: data.detail.value.name,
              sex: data.detail.value.sex,
              age: data.detail.value.age,
              phoneNumber: data.detail.value.phoneNumber,
              idcard: data.detail.value.idcard,
            }
          }).then(res =>{
            console.log(res)
            if(res.result.success){
              console.log('更新病人信息成功')
            }
          })
        }
        else if(res.cancel){
          console.log("用户点击取消保存")
        }
      }
    })
  },
  edit(){
    var that = this
    wx.showModal({
      title: '',
      content: '你确定要修改信息吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定编辑')
          that.setData({
            flagDisabled: false
          })
        } else if (res.cancel) {
          console.log('用户点击编辑取消')
        }
      }
    })
    
  }
  
})