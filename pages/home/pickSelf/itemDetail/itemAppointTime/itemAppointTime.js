// pages/home/quickRegister/departmentDetail/appointmentTime/appointmentTime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top: -2,
    triangleFlag: false,
    triangleColor1: "transparent",
    triangleColor2: "gray",
    num: 0,//绿色圆圈选中的位置
    num2: -1,//判断今天有没有号
    weekDate: [
      { "id": 0, "date": '' },
      { "id": 1, "date": '' },
      { "id": 2, "date": '' },
      { "id": 3, "date": '' },
      { "id": 4, "date": '' },
      { "id": 5, "date": '' },
      { "id": 6, "date": '' },
    ],
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
    selectFlag1: true,
    selectFlag2: false,
    // searchflag: true,//显示图片
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    //获取当前日期
    this.data.registerList = [];
    let dateTemp = new Date();
    if (options.id != 0) {
      // this.data.searchflag = false;
      for (let item of this.data.registerListTemp) {
        if (item.time > dateTemp.toTimeString()) {
          this.data.registerList.push(item);
        }
      }
      if (this.data.registerList.length == 0) {
        this.data.num = 1;
        this.data.num2 = 0;
        this.data.registerList = this.data.registerListTemp;
        console.log(this.data.num2)
      } else {
        this.data.num = 0;
        this.data.num2 = -1;
        this.data.registerList = this.data.registerListTemp;
      }
    } else {
      // 列表项
      for (let item of this.data.registerListTemp) {
        if (item.time > dateTemp.toTimeString()) {
          this.data.registerList.push(item);
        }
      }
      if (this.data.registerList.length == 0) {
        this.data.num = 1;
        this.data.num2 = 0;
      } else {
        this.data.num = 0;
        this.data.num2 = -1;
      }
    }
    //设置周
    let weekTemp = ["日", "一", "二", "三", "四", "五", "六"]
    let countNumber = 0;
    var week = [];
    for (let i = dateTemp.getDay(), j = 0, k = dateTemp.getDate(); i < 7; i++ , j++ , k++) {
      if (j == 7) {
        this.data.weekDate[j - 1].date = k - 1;
        break;
      } else if (i == 6) {
        week.push(weekTemp[i]);
        i = -1;
      } else {
        week.push(weekTemp[i]);
      }
      this.data.weekDate[j].date = k;
      if (((dateTemp.getFullYear() % 4 == 0 &&
        dateTemp.getFullYear() % 100 != 0) ||
        dateTemp.getFullYear() % 400 == 0) &&
        dateTemp.getMonth() == 1 &&
        k == 29
      ) {
        console.log(1)
        k = 0;
      } else if (((dateTemp.getFullYear() % 4 != 0 ||
        dateTemp.getFullYear() % 100 == 0) &&
        dateTemp.getFullYear() % 400 != 0) &&
        dateTemp.getMonth() == 1 &&
        k == 28) {
        console.log(11)
        k = 0;
      } else if (dateTemp.getMonth() % 2 == 0 &&
        k == 31) {
        console.log(111)
        k = 0;
      } else if (dateTemp.getMonth() % 2 == 1 &&
        k == 30) {
        console.log(1111)
        k = 0;
      }
    }
    //获取当天的号源
    dateTemp.getHours()
    //渲染值
    this.setData({
      date: dateTemp.getFullYear() + "-" + (dateTemp.getMonth() + 1) + "-" + (dateTemp.getDate() + parseInt(options.id)),
      week: week,
      weekDate: this.data.weekDate,
      departmentName: options.departmentName,
      registerList: this.data.registerList,
      num: parseInt(options.id),
      num2: this.data.num2,
    })
  },
  // 点击更多日期或者旁边的圆圈
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
  // 点击日期圆圈
  onCircleRegister(e) {
    this.data.registerList = [];
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      mask: true,
    })
    let dateTemp = new Date();
    if (e.currentTarget.dataset.circleregister != 0) {
      // this.data.searchflag = false;
      this.setData({
        num: e.currentTarget.dataset.circleregister,
        date: dateTemp.getFullYear() + "-" + (dateTemp.getMonth() + 1) + "-" +
          (dateTemp.getDate() + e.currentTarget.dataset.circleregister),
        registerList: this.data.registerListTemp,
        // searchflag: this.data.searchflag,
      })
    } else {
      for (let item of this.data.registerListTemp) {
        if (item.time > dateTemp.toTimeString()) {
          this.data.registerList.push(item);
        }
        if (this.data.registerList.length == 0) {
          // this.data.searchflag = true;
        } else {
          // this.data.searchflag = false;
        }

      }
      this.setData({
        num: e.currentTarget.dataset.circleregister,
        date: dateTemp.getFullYear() + "-" + (dateTemp.getMonth() + 1) + "-" +
          (dateTemp.getDate() + e.currentTarget.dataset.circleregister),
        registerList: this.data.registerList,
        // searchflag: this.data.searchflag,
      })
    }
    wx.hideToast();
  },
  // 列表被点击时
  onListItem(e) {
    wx.navigateTo({
      url: 'confirmItem/confirmItem?id=' + e.currentTarget.dataset.id,
    })
  },
  onSelect1() {
    this.setData({
      selectFlag1: true,
      selectFlag2: false,
    })
  },
  onSelect2() {
    this.setData({
      selectFlag1: false,
      selectFlag2: true,
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
  onShow: function (e) {

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