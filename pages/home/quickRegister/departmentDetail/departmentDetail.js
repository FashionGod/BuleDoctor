// pages/home/departmentDetail.js
Page({

  /**
  * 页面的初始数据
  */
  data: {
    list: [],
    date: "",
    // color1: "rgb(108, 199, 143)",
    // color2: "white",
    top: 4,
    triangleFlag: true,
    triangleColor1: "gray",
    triangleColor2: "transparent",
    num: 0,//绿色日期圆圈选中哪一个
    num2: -1,//判断今天有无号
    id: 0,
    registerListTemp: [
      { "day": "上午", "time": "07:30", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "07:36", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "07:42", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "07:48", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "07:54", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "08:06", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "08:12", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "08:18", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "08:24", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "08:30", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "08:36", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "08:42", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "08:48", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "08:54", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "09:06", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "09:12", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "09:18", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "09:24", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "09:30", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "09:36", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "09:42", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "09:48", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "09:54", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "10:06", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "10:09", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "10:12", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "10:18", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "10:24", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "10:30", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "10:36", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "10:42", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "10:48", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "10:54", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "11:06", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "11:12", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "11:18", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "11:24", "price": "￥8.00", "state": "已无号" },
      { "day": "上午", "time": "11:30", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "13:06", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "13:12", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "13:18", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "13:24", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "13:30", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "13:36", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "13:42", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "13:48", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "13:54", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "14:06", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "14:09", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "14:12", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "14:18", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "14:24", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "14:30", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "14:36", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "14:42", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "14:48", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "14:54", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "15:00", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "15:06", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "15:12", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "15:18", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "15:24", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "15:30", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "15:36", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "15:42", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "15:48", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "15:54", "price": "￥8.00", "state": "已无号" },
      { "day": "下午", "time": "16:00", "price": "￥8.00", "state": "已无号" },
    ],
    registerList: [],
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    //获取当前日期
    let dateTemp = new Date();
    //设置周
    let weekTemp = ["日", "一", "二", "三", "四", "五", "六"]
    var week = [];
    var weekDate = [
      { "id": 0, "date": '' },
      { "id": 1, "date": '' },
      { "id": 2, "date": '' },
      { "id": 3, "date": '' },
      { "id": 4, "date": '' },
      { "id": 5, "date": '' },
      { "id": 6, "date": '' },
    ]
    for (let i = dateTemp.getDay(), j = 0, k = dateTemp.getDate(); i < 7; i++ , j++ , k++) {

      if (j == 7) {
        weekDate[j - 1].date = k - 1;
        break;
      } else if (i == 6) {
        week.push(weekTemp[i]);
        i = -1;
      } else {
        week.push(weekTemp[i]);
      }
      weekDate[j].date = k;
      if (((dateTemp.getFullYear() % 4 == 0 &&
        dateTemp.getFullYear() % 100 != 0) ||
        dateTemp.getFullYear() % 400 == 0) &&
        dateTemp.getMonth() == 1 &&
        k == 29
      ) {
        k = 0;
      } else if (((dateTemp.getFullYear() % 4 != 0 ||
        dateTemp.getFullYear() % 100 == 0) &&
        dateTemp.getFullYear() % 400 != 0) &&
        dateTemp.getMonth() == 1 &&
        k == 28) {
        k = 0;
      } else if (dateTemp.getMonth() % 2 == 0 &&
        k == 31) {
        k = 0;
      } else if (dateTemp.getMonth() % 2 == 1 &&
        k == 30) {
        k = 0;
      }
    }
    //判断有号无号
    for (let item of this.data.registerListTemp) {
      if (item.time > dateTemp.toTimeString()) {
        this.data.registerList.push(item);
      }
      // 无号
      if (this.data.registerList.length == 0) {
        this.data.num = 1;
        this.data.num2 = 0;
      } else {//有号
        this.data.num = 0;
        this.data.num2 = -1;
      }
    }
    this.setData({
      date: dateTemp.getFullYear() + "-" + (dateTemp.getMonth() + 1) + "-" + (dateTemp.getDate() + parseInt(this.data.num)),
      departmentName: options.departmentName,
      week: week,
      weekDate: weekDate,
      num: this.data.num,
      num2: this.data.num2,
    })
    wx.setNavigationBarTitle({// 设置上标题栏
      title: options.departmentName,
    })
  },
  // followDate() {
  // console.log(1)
  // this.setData({
  // color1: "rgb(108, 199, 143)",
  // color2: "white"
  // })
  // },
  // followDoctor() {
  // console.log(2)
  // this.setData({
  // color1: "white",
  // color2: "rgb(108, 199, 143)"
  // })
  // },
  onTriangle() {
    if (this.data.triangleFlag == true) {
      this.setData({
        top: -2,
        triangleFlag: false,
        triangleColor1: "transparent",
        triangleColor2: "gray",
      })
    } else {
      this.setData({
        top: 4,
        triangleFlag: true,
        triangleColor1: "gray",
        triangleColor2: "transparent",
      })
    }
  },
  onCircleRegister(e) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      mask: true,
    })
    let dateTemp = new Date();
    console.log(this.data.departmentName);
    this.setData({
      num: e.currentTarget.dataset.circleregister,
      date: dateTemp.getFullYear() + "-" + (dateTemp.getMonth() + 1) + "-" +
        (dateTemp.getDate() + e.currentTarget.dataset.circleregister),
      id: e.currentTarget.dataset.circleregister,
    })
    wx.navigateTo({
      url: 'appointmentTime/appointmentTime?departmentName=' + this.data.departmentName + '&id=' + this.data.id,
    })
    wx.hideToast();
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