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
      { "day": "上午", "time": "07:30", "price": "8.00"},
      { "day": "上午", "time": "07:36", "price": "8.00"},
      { "day": "上午", "time": "07:42", "price": "8.00"},
      { "day": "上午", "time": "07:48", "price": "8.00"},
      { "day": "上午", "time": "07:54", "price": "8.00"},
      { "day": "上午", "time": "08:06", "price": "8.00"},
      { "day": "上午", "time": "08:12", "price": "8.00"},
      { "day": "上午", "time": "08:18", "price": "8.00"},
      { "day": "上午", "time": "08:24", "price": "8.00"},
      { "day": "上午", "time": "08:30", "price": "8.00"},
      { "day": "上午", "time": "08:36", "price": "8.00"},
      { "day": "上午", "time": "08:42", "price": "8.00"},
      { "day": "上午", "time": "08:48", "price": "8.00"},
      { "day": "上午", "time": "08:54", "price": "8.00"},
      { "day": "上午", "time": "09:06", "price": "8.00"},
      { "day": "上午", "time": "09:12", "price": "8.00"},
      { "day": "上午", "time": "09:18", "price": "8.00"},
      { "day": "上午", "time": "09:24", "price": "8.00"},
      { "day": "上午", "time": "09:30", "price": "8.00"},
      { "day": "上午", "time": "09:36", "price": "8.00"},
      { "day": "上午", "time": "09:42", "price": "8.00"},
      { "day": "上午", "time": "09:48", "price": "8.00"},
      { "day": "上午", "time": "09:54", "price": "8.00"},
      { "day": "上午", "time": "10:06", "price": "8.00"},
      { "day": "上午", "time": "10:09", "price": "8.00"},
      { "day": "上午", "time": "10:12", "price": "8.00"},
      { "day": "上午", "time": "10:18", "price": "8.00"},
      { "day": "上午", "time": "10:24", "price": "8.00"},
      { "day": "上午", "time": "10:30", "price": "8.00"},
      { "day": "上午", "time": "10:36", "price": "8.00"},
      { "day": "上午", "time": "10:42", "price": "8.00"},
      { "day": "上午", "time": "10:48", "price": "8.00"},
      { "day": "上午", "time": "10:54", "price": "8.00"},
      { "day": "上午", "time": "11:06", "price": "8.00"},
      { "day": "上午", "time": "11:12", "price": "8.00"},
      { "day": "上午", "time": "11:18", "price": "8.00"},
      { "day": "上午", "time": "11:24", "price": "8.00"},
      { "day": "上午", "time": "11:30", "price": "8.00"},
      { "day": "下午", "time": "13:06", "price": "8.00"},
      { "day": "下午", "time": "13:12", "price": "8.00"},
      { "day": "下午", "time": "13:18", "price": "8.00"},
      { "day": "下午", "time": "13:24", "price": "8.00"},
      { "day": "下午", "time": "13:30", "price": "8.00"},
      { "day": "下午", "time": "13:36", "price": "8.00"},
      { "day": "下午", "time": "13:42", "price": "8.00"},
      { "day": "下午", "time": "13:48", "price": "8.00"},
      { "day": "下午", "time": "13:54", "price": "8.00"},
      { "day": "下午", "time": "14:06", "price": "8.00"},
      { "day": "下午", "time": "14:09", "price": "8.00"},
      { "day": "下午", "time": "14:12", "price": "8.00"},
      { "day": "下午", "time": "14:18", "price": "8.00"},
      { "day": "下午", "time": "14:24", "price": "8.00"},
      { "day": "下午", "time": "14:30", "price": "8.00"},
      { "day": "下午", "time": "14:36", "price": "8.00"},
      { "day": "下午", "time": "14:42", "price": "8.00"},
      { "day": "下午", "time": "14:48", "price": "8.00"},
      { "day": "下午", "time": "14:54", "price": "8.00"},
      { "day": "下午", "time": "15:00", "price": "8.00"},
      { "day": "下午", "time": "15:06", "price": "8.00"},
      { "day": "下午", "time": "15:12", "price": "8.00"},
      { "day": "下午", "time": "15:18", "price": "8.00"},
      { "day": "下午", "time": "15:24", "price": "8.00"},
      { "day": "下午", "time": "15:30", "price": "8.00"},
      { "day": "下午", "time": "15:36", "price": "8.00"},
      { "day": "下午", "time": "15:42", "price": "8.00"},
      { "day": "下午", "time": "15:48", "price": "8.00"},
      { "day": "下午", "time": "15:54", "price": "8.00"},
      { "day": "下午", "time": "16:00", "price": "8.00"},
    ],
    registerList: [],
    doctorsTemp: [
      // {
      //   "doctorName": "平诊",
      //   "doctorNumber": "0",
      //   "department": "脑部CT",
      //   "price": "8.00",
      //   "moreRegisterList": [68, 68, 68, 68, 68, 68, 68],
      //   "workTime": [2,3,4,5,6],
      //   "jobTitle": "主治医生",
      //   "major": "神经病学",
      //   "personalExperience": "blablabla",
      // },
      // {
      //   "doctorName": "医生2",
      //   "doctorNumber": "1",
      //   "department": "脑部CT",
      //   "price": "80.00",
      //   "moreRegisterList": [68, 68, 68, 68, 68, 68, 68],
      //   "workTime": [2,3],
      //   "jobTitle": "主治医生",
      //   "major": "神经病学",
      //   "personalExperience": "blablabla"
      // },
      // {
      //   "doctorName": "医生3",
      //   "doctorNumber": "2",
      //   "department": "脑部CT",
      //   "price": "158.00",
      //   "moreRegisterList": [68, 68, 68, 68, 68, 68, 68],
      //   "workTime": [2,3,4,5],
      //   "jobTitle": "主治医生",
      //   "major": "神经病学",
      //   "personalExperience": "blablabla"
      // },
      // {
      //   "doctorName": "医生4",
      //   "doctorNumber": "3",
      //   "department": "脑部CT",
      //   "price": "8.00",
      //   "moreRegisterList": [68, 68, 68, 68, 68, 68, 68],
      //   "workTime": [6],
      //   "jobTitle": "主治医生",
      //   "major": "神经病学",
      //   "personalExperience": "blablabla"
      // },
    ],//医生信息
    doctors: [],//用于存放当前页面的所有医生
    doctorsWorkFlag: [false, false, false, false, false, false, false],
    nodoctors: false,
    order:[//订单
      {
      orderNumber: "0", 
      date: "2020-3-4",
      registerlistId : "0",
      docName: "平诊",
      doctorNumber: "0",
      patientName: "flz",
      patientNumber: "3", 
      payTime: "14:30",
    },
      {
        orderNumber: "1",
        date: "2020-3-4",
        registerlistId: "0",
        docName: "医生2",
        doctorNumber: "1",
        patientName: "flz",
        patientNumber: "3",
        payTime: "15:30",
      },
      {
        orderNumber: "2",
        date: "2020-3-4",
        registerlistId: "0",
        docName: "医生3",
        doctorNumber: "2",
        patientName: "flz",
        patientNumber: "3",
        payTime: "16:30",
      },
      {
        orderNumber: "3",
        date: "2020-3-4",
        registerlistId: "0",
        docName: "医生4",
        doctorNumber: "3",
        patientName: "flz",
        patientNumber: "3",
        payTime: "15:30",
      },
      {
        orderNumber: "4",
        date: "2020-3-4",
        registerlistId: "0",
        docName: "平诊",
        doctorNumber: "0",
        patientName: "flz",
        patientNumber: "3",
        payTime: "11:30",
      },
      {
        orderNumber: "5",
        date: "2020-3-4",
        registerlistId: "0",
        docName: "平诊",
        doctorNumber: "0",
        patientName: "flz",
        patientNumber: "3",
        payTime: "15:30",
      },
      {
        orderNumber: "6",
        date: "2020-3-5",
        registerlistId: "0",
        docName: "平诊",
        doctorNumber: "0",
        patientName: "flz",
        patientNumber: "3",
        payTime: "15:30",
      },
      {
        orderNumber: "7",
        date: "2020-3-5",
        registerlistId: "0",
        docName: "平诊",
        doctorNumber: "0",
        patientName: "flz",
        patientNumber: "3",
        payTime: "15:30",
      },
      {
        orderNumber: "8",
        date: "2020-3-5",
        registerlistId: "0",
        docName: "医生3",
        doctorNumber: "2",
        patientName: "flz",
        patientNumber: "3",
        payTime: "15:30",
      },
      {
        orderNumber: "9",
        date: "2020-3-6",
        registerlistId: "0",
        docName: "平诊",
        doctorNumber: "0",
        patientName: "flz",
        patientNumber: "3",
        payTime: "15:30",
      },
      {
        orderNumber: "10",
        date: "2020-3-6",
        registerlistId: "0",
        docName: "医生3",
        doctorNumber: "2",
        patientName: "flz",
        patientNumber: "3",
        payTime: "15:30",
      },
      {
        orderNumber: "11",
        date: "2020-3-10",
        registerlistId: "0",
        docName: "医生3",
        doctorNumber: "2",
        patientName: "flz",
        patientNumber: "3",
        payTime: "15:30",
      },
      {
        orderNumber: "12",
        date: "2020-3-10",
        registerlistId: "0",
        docName: "医生3",
        doctorNumber: "2",
        patientName: "flz",
        patientNumber: "3",
        payTime: "15:30",
      }
    ]
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    var that = this;
    console.log(options);
    let department = [];
    department.push(parseInt(options.departmentName1));
    department.push(parseInt(options.departmentName2));
    let promise = new Promise(function(resolve,reject){
      wx.cloud.callFunction({
        name:'getDoctorsChecker',
        data: {
          department: [0,0],
        },
        success(res) {
          console.log(department)
          console.log(res)
          if (res.result.code != 0) {
            wx.showModal({
              title: '系统错误！',
              content: '系统出现错误，请稍后再试！',
            })
          } else {
            resolve(res.result.doctorsTemp)
          }
          wx.hideLoading();
        },
        fail(err) {
          console.log(err)
          wx.showModal({
            title: '网络错误!',
            content: '网络出现错误,请稍后再试',
          })
          wx.hideLoading();
        },
      })
    }).then((res) => {
      console.log(res)
      //判断是不是此科室的医生
      let doctorsTemp = this.data.doctorsTemp;
      let doctorsDepartment = [];
      let doctors = [[], [], [], [], [], [], []];
      doctorsDepartment = res.list;
      // for (i in doctorsTemp) {
      //   if (doctorsTemp[i].department == options.departmentName && doctorsTemp[i].workTime.length != 0) {
      //     doctorsDepartment.push(doctorsTemp[i])
      //   }
      // }

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
      console.log(doctorsDepartment);
      let doctorsWorkFlag = [];
      //获取当前日期
      let dateTemp = new Date();

      // dateTemp.setFullYear(2019)
      // dateTemp.setMonth(1);
      // dateTemp.setDate(28)
      //设置周
      let weekTemp = ["日", "一", "二", "三", "四", "五", "六"]
      var week = [];
      var weekDate = [
        { "id": 0, "year": '', "month": '', "date": '' },
        { "id": 1, "year": '', "month": '', "date": '' },
        { "id": 2, "year": '', "month": '', "date": '' },
        { "id": 3, "year": '', "month": '', "date": '' },
        { "id": 4, "year": '', "month": '', "date": '' },
        { "id": 5, "year": '', "month": '', "date": '' },
        { "id": 6, "year": '', "month": '', "date": '' },
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
        if (((dateTemp.getFullYear() % 4 == 0 &&
          dateTemp.getFullYear() % 100 != 0) ||
          dateTemp.getFullYear() % 400 == 0) &&
          dateTemp.getMonth() == 1 &&
          k == 29
        ) {
          weekDate[j + 1].month = dateTemp.getMonth() + 2;
          weekDate[j + 1].date = 1;
          weekDate[j].month = dateTemp.getMonth() + 1;
          weekDate[j].date = k;
          k = 0;
        } else if (((dateTemp.getFullYear() % 4 != 0 ||
          dateTemp.getFullYear() % 100 == 0) &&
          dateTemp.getFullYear() % 400 != 0) &&
          dateTemp.getMonth() == 1 &&
          k == 28) {
          weekDate[j + 1].month = dateTemp.getMonth() + 2;
          weekDate[j + 1].date = 1;
          weekDate[j].month = dateTemp.getMonth() + 1;
          weekDate[j].date = k;
          k = 0;
        } else if (dateTemp.getMonth() % 2 == 0 &&
          k == 31) {
          weekDate[j + 1].month = dateTemp.getMonth() + 2;
          weekDate[j + 1].date = 1;
          weekDate[j].month = dateTemp.getMonth() + 1;
          weekDate[j].date = k;
          k = 0;
        } else if (dateTemp.getMonth() % 2 == 1 &&
          k == 30) {
          weekDate[j + 1].month = dateTemp.getMonth() + 2;
          weekDate[j + 1].date = 1;
          weekDate[j].month = dateTemp.getMonth() + 1;
          weekDate[j].date = k;
          k = 0;
        }

        if (weekDate[j].date == "") {
          if (j != 0 && (weekDate[j - 1].month > parseInt((dateTemp.getMonth() + 1)))) {
            weekDate[j].month = weekDate[j - 1].month;
          } else {
            weekDate[j].month = dateTemp.getMonth() + 1;
          }
          weekDate[j].date = k;
        }
        if (weekDate[j].month == 12 && weekDate[j].date == 31) {
          weekDate[j].year = dateTemp.getFullYear() + 1;
        } else {
          weekDate[j].year = dateTemp.getFullYear();
        }
        // console.log(weekDate[j])
      }

      var count = 0;
      for (i in doctors) {
        if (doctors[i].length == 0) {
          count += 1;
        }
      }
      if (count == 7) {
        doctorsWorkFlag = this.data.doctorsWorkFlag;
        this.data.num = -1;
        this.data.nodoctors = true;
      } else {
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
        //将所有医生格式化成当前日期排列顺序
        let temp = [];
        for (i in week) {
          for (j in weekTemp) {
            if (week[i] == weekTemp[j]) {
              temp[i] = j;
            }
          }
        }
        var temp2 = [[], [], [], [], [], [], []]
        for (i in temp) {
          for (j in doctors) {
            if (doctors[temp[i]].length != 0) {
              temp2[i] = doctors[temp[i]]
            }
          }
        }
        // console.log(temp2)
        //根据当前周 将圆圈定位到周几上
        for (i in temp2) {
          if (temp2[i].length != 0) {
            this.data.num = i;
            break;
          }
        }

        //设置日期
        if (this.data.num != -1) {
          var curDate = weekDate[this.data.num].year + "-" + weekDate[this.data.num].month + "-" + weekDate[this.data.num].date;
        } else {
          var curDate = weekDate[this.data.num + 1].year + "-" + weekDate[this.data.num + 1].month + "-" + weekDate[this.data.num + 1].date;
        }
        //计算当前余号数目
        let dateTemp2 = new Date();
        // dateTemp2.setHours(15)
        // dateTemp2.setMinutes(54)
        let count2 = 0;
        for (i in this.data.registerListTemp) {
          if (dateTemp2.toTimeString() <= this.data.registerListTemp[i].time) {
            count2 += 1;
          }
        }
        //处理订单
        // 选中天的订单 既是this.data.num
        let ordercount = 0;
        let orderDate = new Date();
        // orderDate.setHours(15);
        // orderDate.setMinutes(54);
        let order = this.data.order;
        if (count2 != 0) {
          for (i in temp2[this.data.num]) {
            ordercount = 0;
            for (j in order) {
              //订单时间在可以预约之后 订单日期与日期相同  医生编号相同
              if (order[j].date == curDate &&
                (order[j].payTime >= orderDate.toTimeString()) &&
                order[j].doctorNumber == temp2[this.data.num][i].doctorNumber
              ) {
                console.log(order[j].payTime)
                console.log(orderDate.toTimeString())
                ordercount += 1;
              }
            }
            console.log(ordercount)
            if (temp2[this.data.num][i].moreRegisterList[this.data.num] >= 1) {
              temp2[this.data.num][i].moreRegisterList[this.data.num] = count2 - ordercount;
            }
          }
        } else {
          for (i in temp2[this.data.num]) {
            temp2[this.data.num][i].moreRegisterList[this.data.num] = count2;
          }
        }
        console.log(temp2[this.data.num])


        //非this.data.num的日期的订单处理
        ordercount = 0;
        let tempnum = parseInt(this.data.num) + 1;
        let curdatetemp = weekDate[tempnum].year + "-" +
          weekDate[tempnum].month + "-" +
          weekDate[tempnum].date;
        let temp2Length = 0;
        for (i in temp2) {
          if (temp2[i].length != 0) {
            temp2Length += 1;
          }
        }
        if (this.data.num != -1 && (tempnum <= temp2Length)) {
          for (let i = tempnum; i < temp2.length; i++) {
            // console.log(i)
            curdatetemp = weekDate[i].year + "-" +
              weekDate[i].month + "-" +
              weekDate[i].date;
            if (temp2[i].length != 0) {
              for (j in temp2[i]) {
                ordercount = 0;
                for (k in order) {
                  if (order[k].date == curdatetemp &&
                    order[k].doctorNumber == temp2[i][j].doctorNumber
                  ) {
                    ordercount += 1;

                    console.log(temp2[i][j].doctorName + "次数" + ordercount)
                    console.log(temp2[i][j].moreRegisterList[i])
                  }
                }
                if (temp2[i][j].moreRegisterList[i] != 0) {
                  temp2[i][j].moreRegisterList[i] -= ordercount;
                }
              }
              console.log(temp2[i])
            }
          }
        }


      }
      console.log(weekDate);
      this.setData({
        date: curDate,
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
    })
    

  },
  followDate() {
    this.setData({
      color1: "rgb(52, 150, 90)",
      color2: "white",
      registerFlag: true,
    })
  },
  followDoctor() {
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
    let id = e.currentTarget.dataset.circleregister;
    if (this.data.num != -1) {
      curDate = this.data.weekDate[id].year + "-" + this.data.weekDate[id].month + "-" + this.data.weekDate[id].date;
    } else {
      curDate = this.data.weekDate[id + 1].year + "-" + this.data.weekDate[id + 1].month + "-" + this.data.weekDate[id + 1].date;
    }
    this.setData({
      num: id,
      date: curDate,
      id: e.currentTarget.dataset.circleregister,

    })

    wx.hideToast();
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {

  },
  toItemAppointTime(e) {
    let doctorname = e.currentTarget.dataset.doctorname;
    console.log(doctorname)
    var toItemAppointTimedoctor = [];
    for (i in this.data.doctorsDepartment) {
      if (this.data.doctorsDepartment[i].doctorName == doctorname) {
        toItemAppointTimedoctor = this.data.doctorsDepartment[i];
        break;
      }
    }
    toItemAppointTimedoctor = JSON.stringify(toItemAppointTimedoctor);
    let weekDate = JSON.stringify(this.data.weekDate);
    console.log(toItemAppointTimedoctor)
    console.log(weekDate)
    console.log(this.data.registerFlag)
    for (i in this.data.doctorsWorkFlag) {
      if (this.data.doctorsWorkFlag[i] == true) {
        break;
      }
    }
    let itemDetailCur = false;
    console.log(i)
    console.log(this.data.num)
    if(i == this.data.num) {
      itemDetailCur = true;
    } 
    console.log(itemDetailCur)
    wx.navigateTo({
      url: 'itemAppointTime/itemAppointTime?num='+ this.data.num + 
           '&weekDate=' + weekDate +
           '&doctor=' + toItemAppointTimedoctor +
           '&itemDetailCur=' + itemDetailCur +
           '&registerFlag=' + this.data.registerFlag,
    })
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