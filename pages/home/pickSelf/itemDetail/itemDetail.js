// pages/home/departmentDetail.js
Page({

  /**
  * 页面的初始数据
  */
  data: {
    list: [],
    date: "",
    top: 4,
    triangleFlag: true,
    registerFlag: true,//按日期挂号金额按医生挂号
    triangleColor1: "gray",
    triangleColor2: "transparent",
    num: 0,//绿色日期圆圈选中哪一个
    num2: 0,//判断今天日期
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
    doctorsTemp: [
      {
        "doctorName": "医生1",
        "department": "脑部CT",
        "price": "￥8.00",
        "moreRegisterList": "68",
        "workTime": [2],
        "introduction": {
          "docName": "医生1",
          "jobTitle": "主治医生",
          "major": "神经病学",
          "visitTime": [0, 1],
          "personalExperience": "blablabla"
        }
      },
      {
        "doctorName": "医生2",
        "department": "脑部CT",
        "price": "￥8.00",
        "moreRegisterList": "68",
        "workTime": [2],
        "introduction": {
          "docName": "医生2",
          "jobTitle": "主治医生",
          "major": "神经病学",
          "visitTime": [2, 3],
          "personalExperience": "blablabla"
          }
      },
      {
        "doctorName": "医生3",
        "department": "脑部CT",
        "price": "￥8.00",
        "moreRegisterList": "68",
        "workTime": [4,5],
        "introduction": {
          "docName": "医生3",
          "jobTitle": "主治医生",
          "major": "神经病学",
          "visitTime": [4,5],
          "personalExperience": "blablabla"
        }
      },
      {
        "doctorName": "医生4",
        "department": "脑部CT2",
        "price": "￥8.00",
        "moreRegisterList": "68",
        "workTime": [4, 5],
        "introduction": {
          "docName": "医生3",
          "jobTitle": "主治医生",
          "major": "神经病学",
          "visitTime": [4, 5],
          "personalExperience": "blablabla"
        }
      },
    ],//医生信息
    doctors: [],//用于存放当前页面的所有医生
    doctorsWorkFlag: [false, false, false, false, false, false, false],
    nodoctors: false,
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    console.log(options)
    //判断是不是此科室的医生
    let doctorsTemp = this.data.doctorsTemp;
    let doctorsDepartment = [];
    let doctors = [[],[],[],[],[],[],[]];
    for (i in doctorsTemp) {
      if (doctorsTemp[i].department == options.departmentName) {
        doctorsDepartment.push(doctorsTemp[i])
      }
    }
    //判断周几有医生
    let doctorsWorkFlagTemp = this.data.doctorsWorkFlag;
    for (i in doctorsDepartment) {
      for (j in doctorsDepartment[i].workTime) {
        if (doctorsDepartment[i].workTime != null) {
          doctorsWorkFlagTemp[doctorsDepartment[i].workTime[j]] = true;
          doctors[doctorsDepartment[i].workTime[j]].push(doctorsDepartment[i]);
        }
      }
    }
    console.log(doctors);

    let doctorsWorkFlag = [];
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
        doctorsWorkFlag[i] = i
        week.push(weekTemp[i]);
        i = -1;
      } else {
        doctorsWorkFlag[i] = i;
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

    var count = 0;
    for(i in doctors) {
      if(doctors[i].length == 0) {
        count += 1;
      }
    }
    console.log(doctors);
    if(count == 7) {
      doctorsWorkFlag = this.data.doctorsWorkFlag;
      this.data.num = -1;
      this.data.nodoctors = true;
    }else {
      //将当前星期几到第七天格式化如当前周六【6,0,1,2,3,4,5】 
      this.data.nodoctors = false;
      for (i in week) {
        for (j in weekTemp) {
          if (week[i] == weekTemp[j]) {
            doctorsWorkFlag[i] = j;
          }
        }
      }
      //将之前拿到得哪一天有医生格式化为数字如【true,true,false,false,false,false,false】转换为【0,1,false,false,false,false,false】
      for (i in doctorsWorkFlag) {
        if (doctorsWorkFlagTemp[i] == true) {
          doctorsWorkFlagTemp[i] = i;
        }
      }
      // console.log(doctorsWorkFlagTemp)
      // console.log(doctorsWorkFlag)
      //根据当前周  将有医生的置为true
      for (i in doctorsWorkFlag) {
        for (j in doctorsWorkFlagTemp) {
          if (doctorsWorkFlag[i] === doctorsWorkFlagTemp[j]) {
            doctorsWorkFlag[i] = true;
          }
        }
      }
      //根据当前周 将无医生的置为false
      for (i in doctorsWorkFlag) {
        if (doctorsWorkFlag[i] !== true) {
          doctorsWorkFlag[i] = false;
        }
      }
      console.log(doctorsWorkFlagTemp)
      console.log(doctorsWorkFlag)
      //将所有医生格式化成当前日期排列顺序
      let temp = [];
      for (i in week) {
        for (j in weekTemp) {
          if (week[i] == weekTemp[j]) {
            temp[i] = j;
          }
        }
      }
      var temp2 = [[],[],[],[],[],[],[]]
      for(i in temp) {
        for(j in doctors) {
          if (doctors[temp[i]].length !=0 ) {
            temp2[i] = doctors[temp[i]]
          }
        }
      }
      console.log(temp2)
      //根据当前周 将圆圈定位到周几上
      for (i in temp2) {
        if (temp2[i].length != 0) {
          this.data.num = i;
          break;
        }
      }
      console.log(doctorsDepartment)
      console.log(this.data.num)
    }
    
    //设置日期
    if (this.data.num != -1) {
      var curDate = weekDate[this.data.num].date;
      console.log(weekDate)
    }else {
      var curDate = dateTemp.getDate() + parseInt(this.data.num2);
    }
    this.setData({
      date: dateTemp.getFullYear() + "-" + (dateTemp.getMonth() + 1) + "-" + curDate,
      departmentName: options.departmentName,
      week: week,
      weekDate: weekDate,
      num: this.data.num,
      num2: this.data.num2,
      doctors: temp2,
      doctorsWorkFlag: doctorsWorkFlag,
      doctorsDepartment: doctorsDepartment,
      nodoctors: this.data.nodoctors,
    })
    wx.setNavigationBarTitle({// 设置上标题栏
      title: options.departmentName,
    })

  },
  followDate() {
    console.log(1)
    this.setData({
      color1: "rgb(52, 150, 90)",
      color2: "white",
      registerFlag: true,
    })
  },
  followDoctor() {
    console.log(2)
    this.setData({
      color1: "white",
      color2: "rgb(52, 150, 90)",
      registerFlag: false,
    })
  },
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
    if (this.data.num != -1) {
      var curDate = this.data.weekDate[e.currentTarget.dataset.circleregister].date;
    } else {
      var curDate = dateTemp.getDate() + parseInt(this.data.num2);
    }
    this.setData({
      num: e.currentTarget.dataset.circleregister,
      date: dateTemp.getFullYear() + "-" + (dateTemp.getMonth() + 1) + "-" + curDate,
      id: e.currentTarget.dataset.circleregister,
    })

    // wx.navigateTo({
    //   url: 'itemAppointTime/itemAppointTime?departmentName=' + this.data.departmentName + '&id=' + this.data.id,
    // })
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