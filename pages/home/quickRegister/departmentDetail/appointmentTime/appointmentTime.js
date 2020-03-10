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
      { "id": 0, "day": "上午", "time": "07:30", "price": "￥8.00", "state": "已无号" },
      { "id": 1, "day": "上午", "time": "07:36", "price": "￥8.00", "state": "已无号" },
      { "id": 2, "day": "上午", "time": "07:42", "price": "￥8.00", "state": "已无号" },
      { "id": 3, "day": "上午", "time": "07:48", "price": "￥8.00", "state": "已无号" },
      { "id": 4, "day": "上午", "time": "07:54", "price": "￥8.00", "state": "已无号" },
      { "id": 5, "day": "上午", "time": "08:06", "price": "￥8.00", "state": "已无号" },
      { "id": 6, "day": "上午", "time": "08:12", "price": "￥8.00", "state": "已无号" },
      { "id": 7, "day": "上午", "time": "08:18", "price": "￥8.00", "state": "已无号" },
      { "id": 8, "day": "上午", "time": "08:24", "price": "￥8.00", "state": "已无号" },
      { "id": 9, "day": "上午", "time": "08:30", "price": "￥8.00", "state": "已无号" },
      { "id": 10, "day": "上午", "time": "08:36", "price": "￥8.00", "state": "已无号" },
      { "id": 11, "day": "上午", "time": "08:42", "price": "￥8.00", "state": "已无号" },
      { "id": 12, "day": "上午", "time": "08:48", "price": "￥8.00", "state": "已无号" },
      { "id": 13, "day": "上午", "time": "08:54", "price": "￥8.00", "state": "已无号" },
      { "id": 14, "day": "上午", "time": "09:06", "price": "￥8.00", "state": "已无号" },
      { "id": 15, "day": "上午", "time": "09:12", "price": "￥8.00", "state": "已无号" },
      { "id": 16, "day": "上午", "time": "09:18", "price": "￥8.00", "state": "已无号" },
      { "id": 17, "day": "上午", "time": "09:24", "price": "￥8.00", "state": "已无号" },
      { "id": 18, "day": "上午", "time": "09:30", "price": "￥8.00", "state": "已无号" },
      { "id": 19, "day": "上午", "time": "09:36", "price": "￥8.00", "state": "已无号" },
      { "id": 20, "day": "上午", "time": "09:42", "price": "￥8.00", "state": "已无号" },
      { "id": 21, "day": "上午", "time": "09:48", "price": "￥8.00", "state": "已无号" },
      { "id": 22, "day": "上午", "time": "09:54", "price": "￥8.00", "state": "已无号" },
      { "id": 23, "day": "上午", "time": "10:06", "price": "￥8.00", "state": "已无号" },
      { "id": 24, "day": "上午", "time": "10:09", "price": "￥8.00", "state": "已无号" },
      { "id": 25, "day": "上午", "time": "10:12", "price": "￥8.00", "state": "已无号" },
      { "id": 26, "day": "上午", "time": "10:18", "price": "￥8.00", "state": "已无号" },
      { "id": 27, "day": "上午", "time": "10:24", "price": "￥8.00", "state": "已无号" },
      { "id": 28, "day": "上午", "time": "10:30", "price": "￥8.00", "state": "已无号" },
      { "id": 29, "day": "上午", "time": "10:36", "price": "￥8.00", "state": "已无号" },
      { "id": 30, "day": "上午", "time": "10:42", "price": "￥8.00", "state": "已无号" },
      { "id": 31, "day": "上午", "time": "10:48", "price": "￥8.00", "state": "已无号" },
      { "id": 32, "day": "上午", "time": "10:54", "price": "￥8.00", "state": "已无号" },
      { "id": 33, "day": "上午", "time": "11:06", "price": "￥8.00", "state": "已无号" },
      { "id": 34, "day": "上午", "time": "11:12", "price": "￥8.00", "state": "已无号" },
      { "id": 35, "day": "上午", "time": "11:18", "price": "￥8.00", "state": "已无号" },
      { "id": 36, "day": "上午", "time": "11:24", "price": "￥8.00", "state": "已无号" },
      { "id": 37, "day": "上午", "time": "11:30", "price": "￥8.00", "state": "已无号" },
      { "id": 38, "day": "下午", "time": "13:06", "price": "￥8.00", "state": "已无号" },
      { "id": 39, "day": "下午", "time": "13:12", "price": "￥8.00", "state": "已无号" },
      { "id": 40, "day": "下午", "time": "13:18", "price": "￥8.00", "state": "已无号" },
      { "id": 41, "day": "下午", "time": "13:24", "price": "￥8.00", "state": "已无号" },
      { "id": 42, "day": "下午", "time": "13:30", "price": "￥8.00", "state": "已无号" },
      { "id": 43, "day": "下午", "time": "13:36", "price": "￥8.00", "state": "已无号" },
      { "id": 44, "day": "下午", "time": "13:42", "price": "￥8.00", "state": "已无号" },
      { "id": 45, "day": "下午", "time": "13:48", "price": "￥8.00", "state": "已无号" },
      { "id": 46, "day": "下午", "time": "13:54", "price": "￥8.00", "state": "已无号" },
      { "id": 47, "day": "下午", "time": "14:06", "price": "￥8.00", "state": "已无号" },
      { "id": 48, "day": "下午", "time": "14:09", "price": "￥8.00", "state": "已无号" },
      { "id": 49, "day": "下午", "time": "14:12", "price": "￥8.00", "state": "已无号" },
      { "id": 50, "day": "下午", "time": "14:18", "price": "￥8.00", "state": "已无号" },
      { "id": 51, "day": "下午", "time": "14:24", "price": "￥8.00", "state": "已无号" },
      { "id": 52, "day": "下午", "time": "14:30", "price": "￥8.00", "state": "已无号" },
      { "id": 53, "day": "下午", "time": "14:36", "price": "￥8.00", "state": "已无号" },
      { "id": 54, "day": "下午", "time": "14:42", "price": "￥8.00", "state": "已无号" },
      { "id": 55, "day": "下午", "time": "14:48", "price": "￥8.00", "state": "已无号" },
      { "id": 56, "day": "下午", "time": "14:54", "price": "￥8.00", "state": "已无号" },
      { "id": 57, "day": "下午", "time": "15:00", "price": "￥8.00", "state": "已无号" },
      { "id": 58, "day": "下午", "time": "15:06", "price": "￥8.00", "state": "已无号" },
      { "id": 59, "day": "下午", "time": "15:12", "price": "￥8.00", "state": "已无号" },
      { "id": 60, "day": "下午", "time": "15:18", "price": "￥8.00", "state": "已无号" },
      { "id": 61, "day": "下午", "time": "15:24", "price": "￥8.00", "state": "已无号" },
      { "id": 62, "day": "下午", "time": "15:30", "price": "￥8.00", "state": "已无号" },
      { "id": 63, "day": "下午", "time": "15:36", "price": "￥8.00", "state": "已无号" },
      { "id": 64, "day": "下午", "time": "15:42", "price": "￥8.00", "state": "已无号" },
      { "id": 65, "day": "下午", "time": "15:48", "price": "￥8.00", "state": "已无号" },
      { "id": 66, "day": "下午", "time": "15:54", "price": "￥8.00", "state": "已无号" },
      { "id": 67, "day": "下午", "time": "16:00", "price": "￥8.00", "state": "已无号" },
    ],
    registerList: [],
    selectFlag1: true,
    selectFlag2: false,
    doctorWorkFlag: [false, false, false, false, false, false, false],
    // searchflag: true,//显示图片
    order: [//订单
      {
        orderNumber: "0",
        date: "2020-3-10",
        registerlistId: 1,
        docName: "平诊",
        doctorNumber: "0",
        patientName: "flz",
        patientNumber: "3",
        payTime: "14:30",
      },
      {
        orderNumber: "1",
        date: "2020-3-10",
        registerlistId: 0,
        docName: "平诊",
        doctorNumber: "0",
        patientName: "flz",
        patientNumber: "3",
        payTime: "14:30",
      },
      {
        orderNumber: "2",
        date: "2020-3-10",
        registerlistId: 2,
        docName: "平诊",
        doctorNumber: "0",
        patientName: "flz",
        patientNumber: "3",
        payTime: "14:30",
      },
      {
        orderNumber: "3",
        date: "2020-3-10",
        registerlistId: 10,
        docName: "平诊",
        doctorNumber: "0",
        patientName: "flz",
        patientNumber: "3",
        payTime: "14:30",
      },
      {
        orderNumber: "4",
        date: "2020-3-11",
        registerlistId: 3,
        docName: "平诊",
        doctorNumber: "0",
        patientName: "flz",
        patientNumber: "3",
        payTime: "14:30",
      },
      {
        orderNumber: "5",
        date: "2020-3-6",
        registerlistId: 16,
        docName: "平诊",
        doctorNumber: "0",
        patientName: "flz",
        patientNumber: "3",
        payTime: "14:30",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var doctor = JSON.parse(options.doctor);
    var weekDate = JSON.parse(options.weekDate);
    console.log(doctor)
    //设置医生价格price
    for (i in this.data.registerListTemp) {
      this.data.registerListTemp[i].price = doctor.price;
      this.data.registerListTemp[i].state = doctor.price;
    }
    //获取当前日期
    var dateTemp = new Date();
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
    //该医生上班时间
    let workTime = []
    for (i in doctor.workTime) {
      for (j in weekTemp) {
        if (doctor.workTime[i] == j) {
          workTime[i] = weekTemp[j];
        }
      }
    }
    //判断医生哪一天上班 不上班的变灰色
    for (i in week) {
      for (j in workTime) {
        if (workTime[j] == week[i]) {
          this.data.doctorWorkFlag[i] = true;
        }
      }
    }
    console.log(this.data.doctorWorkFlag)
    let doctorWorkFlag2 = [];
    for (i in this.data.doctorWorkFlag) {
      doctorWorkFlag2[i] = this.data.doctorWorkFlag[i];
    }
    // 获取今天的号源
    //处理订单
    let order = this.data.order;
    this.data.registerList = [];
    dateTemp.setHours(14)
    for (let item of this.data.registerListTemp) {
      if (item.time > dateTemp.toTimeString()) {
        this.data.registerList.push(item);
      }
    }
    // console.log(this.data.registerList)
    //四点后
    let numTemp = this.data.num;
    let orderDate = weekDate[numTemp].year + "-" +
      weekDate[numTemp].month + "-" +
      weekDate[numTemp].date;
    let now = false;//是当天
    if (this.data.registerList.length == 0) {
      now = true;//是明天
      //该医生只有一天班
      if (doctor.workTime.length == 1) {
        for (i in week) {
          for (j in workTime) {
            if (workTime[j] == week[i]) {
              this.data.doctorWorkFlag[i] = false;
              break;
            }
          }
        }
        this.data.num = -1;
      } else {//该医生有多天班
        console.log(this.data.doctorWorkFlag)
        for (i in this.data.doctorWorkFlag) {
          if (this.data.doctorWorkFlag[i] == true) {
            this.data.doctorWorkFlag[i] = false;
            break;
          }
        }
        console.log(this.data.doctorWorkFlag)
        if (options.registerFlag == "false") {
          for (i in this.data.doctorWorkFlag) {
            if (this.data.doctorWorkFlag[i] == true) {
              this.data.num = i; //四点后设置this.data.num
              break;
            }
          }
        } else {
          this.data.num = options.num;
        }
        console.log("1111111")
        for (i in this.data.registerListTemp) {
          this.data.registerList[i] = this.data.registerListTemp[i];//当天四点后展示下一天的 
        }
        console.log(this.data.registerList)
        numTemp = this.data.num;
        orderDate = weekDate[numTemp].year + "-" +
          weekDate[numTemp].month + "-" +
          weekDate[numTemp].date;
        for (i in this.data.registerList) {//四点前设置已无号
          for (j in order) {
            if (order[j].date == orderDate &&
              order[j].doctorNumber == doctor.doctorNumber) {
              this.data.registerList[order[j].registerlistId].price = "已无号";
            }
          }
        }

      }
    } else {//四点后设置this.data.num
      if (options.registerFlag == "true") {
        this.data.num = options.num;
      } else {
        for (i in this.data.doctorWorkFlag) {
          if (this.data.doctorWorkFlag[i] == true)
            break;
        }
        this.data.num = i;
        console.log(this.data.num);
      }
      // console.log(this.data.registerList)
      // console.log(weekDate)
      numTemp = this.data.num;
      orderDate = weekDate[numTemp].year + "-" +
        weekDate[numTemp].month + "-" +
        weekDate[numTemp].date;
      // console.log(this.data.num)
      if (options.registerFlag == "true") {
        //当天
        if (options.itemDetailCur == "true") {
          for (i in this.data.registerList) {//当天四点前设置已无号
            for (j in order) {
              if (order[j].date == orderDate &&
                (order[j].payTime >= dateTemp.toTimeString()) &&
                (order[j].doctorNumber == doctor.doctorNumber)
              ) {
                if (this.data.registerListTemp[order[j].registerlistId].time >= dateTemp.toTimeString()) {
                  console.log(order[j].registerlistId)
                  if (this.data.registerList[i].id == order[j].registerlistId) {
                    this.data.registerList[i].price = "已无号";
                    break;
                  }
                }
              }
            }
          }
        } else {//非当天
          this.data.registerList = this.data.registerListTemp;
          for (i in this.data.registerList) {//四点前设置已无号
            console.log(order[j].doctorNumber)
            // console.log(doctor.doctorNumber)
            for (j in order) {
              console.log(order[j])
              // console.log(doctor)
              if (order[j].date == orderDate &&
                order[j].doctorNumber == doctor.doctorNumber) {
                this.data.registerList[order[j].registerlistId].price = "已无号";
              }
            }
          }
        }

        console.log(this.data.num)
        console.log("111")
      } else {
        for (i in this.data.registerList) {//当天四点前设置已无号
          for (j in order) {
            if (order[j].date == orderDate &&
              (order[j].payTime >= dateTemp.toTimeString()) &&
              (order[j].doctorNumber == doctor.doctorNumber)
            ) {
              if (this.data.registerListTemp[order[j].registerlistId].time >= dateTemp.toTimeString()) {
                console.log(order[j].registerlistId)
                if (this.data.registerList[i].id == order[j].registerlistId) {
                  this.data.registerList[i].price = "已无号";
                  break;
                }
              }
            }
          }
        }
      }

    }

    //根据this.data.num设置当前日期
    let curdate = '';
    if (this.data.num != -1) {
      curdate = weekDate[this.data.num].year + "-" +
        weekDate[this.data.num].month + "-" +
        weekDate[this.data.num].date;
    }
    // let now = curdate;
    //渲染值
    console.log(now)
    this.setData({
      date: curdate,
      week: week,
      weekDate: this.data.weekDate,
      registerList: this.data.registerList,
      num: this.data.num,
      num2: this.data.num2,
      doctor: doctor,
      workTime: workTime,
      doctorWorkFlag: this.data.doctorWorkFlag,
      weekDate: weekDate,
      doctorWorkFlag2: doctorWorkFlag2,
      now: now,
      nowNum: this.data.num,
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
    console.log(this.data.now)
    console.log(this.data.nowNum)
    this.data.registerList = [];
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      mask: true,
    })
    let id = e.currentTarget.dataset.circleregister;
    let dateTemp = new Date();
    dateTemp.setHours(14)
    let order = this.data.order;
    let numTemp = this.data.num;
    let orderDate = this.data.weekDate[id].year + "-" +
      this.data.weekDate[id].month + "-" +
      this.data.weekDate[id].date;
    for (i in this.data.registerListTemp) {
      this.data.registerListTemp[i].price = this.data.registerListTemp[i].state;
    }
    if (this.data.now == false && (id == this.data.nowNum)) {//是当天
      for (let item of this.data.registerListTemp) {
        if (item.time > dateTemp.toTimeString()) {
          this.data.registerList.push(item);
        }
      }
      // console.log(this.data.registerList)

      if (this.data.registerList.length != 0) {//当天四点前设置已无号
        for (i in this.data.registerList) {
          for (j in order) {
            if (order[j].date == orderDate &&
              (order[j].payTime >= dateTemp.toTimeString()) &&
              (order[j].doctorNumber == this.data.doctor.doctorNumber)
            ) {
              if (this.data.registerListTemp[order[j].registerlistId].time >= dateTemp.toTimeString()) {
                console.log(order[j].registerlistId)
                if (this.data.registerList[i].id == order[j].registerlistId) {
                  this.data.registerList[i].price = "已无号";
                  break;
                }
              }
            }
          }
        }
      }//当天没有四点后 当天四点后this.data.num后移一位 

    } else {//不是当天
      console.log("111")
      this.data.registerList = this.data.registerListTemp;
      console.log(this.data.registerList)
      console.log(this.data.registerListTemp)
      numTemp = this.data.num;
      orderDate = this.data.weekDate[id].year + "-" +
        this.data.weekDate[id].month + "-" +
        this.data.weekDate[id].date;
      for (i in this.data.registerList) {//四点前设置已无号
        for (j in order) {
          if (order[j].date == orderDate &&
            order[j].doctorNumber == this.data.doctor.doctorNumber) {
            console.log(order[j])
            this.data.registerList[order[j].registerlistId].price = "已无号";
          }
        }
      }
    }
    this.setData({
      num: e.currentTarget.dataset.circleregister,
      date: orderDate,
      registerList: this.data.registerList,
    })

    wx.hideToast();
  },
  // 列表被点击时
  onListItem(e) {


    let id = e.currentTarget.dataset.id;
    console.log(id)
    let registerlistId = this.data.registerList[id].id;
    let doctor = JSON.stringify(this.data.doctor);
    let seeTime2 = JSON.stringify(this.data.registerList[id]);
    wx.navigateTo({
      url: 'confirmRegister/confirmRegister?id=' + id +
        '&doctor=' + doctor +
        '&weekDate=' + this.data.week[this.data.num] +
        '&seeTime1=' + this.data.date +
        '&seeTime2=' + seeTime2 +
        '&registerlistId=' + registerlistId
      ,
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