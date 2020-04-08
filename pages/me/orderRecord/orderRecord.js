// pages/me/orderRecord/orderRecord.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list1: [
      { "name": "内科系", "id": "0", "items": ["呼吸内科", "呼吸内科(专科)", "全科教学门诊", "输血门诊", "MMC代谢病门诊", "呼吸内科(专家)", "睡眠呼吸疾病(专科)", "消化内科(专家)", "消化内科(专科)", "胃肠病(专科)", "肝病(专家)", "血液内科", "血液内科(专家)", "血友病门诊", "心血管内科", "心血管内科(专家)", "心血管内科(房颤)(专家)", "心律失常(专家)", "心衰(专科)", "先心病门诊(专家)", "心内会诊门诊", "内分泌内科", "内分泌科(专家)", "内分泌科(专科)", "肾内科", "肾内科(专家)", "风湿免疫门诊", "风湿免疫科(专家)", "风湿免疫(专科)", "全科门诊", "健康管理咨询门诊", "内科"] },
      { "name": "神经内科系", "id": "1", "items": ["神经内科", "神经内科(专家)", "神经内科(帕金森及运动障碍)(专家)", "神经内科(头痛)(专家)", "神经内科(专科)", "神经内科(头痛)(专科)", "脑血管病(脑卒中)门诊", "癫痫门诊(专科)", "脑血管病(专科)", "神经肌肉病(专科)", "记忆门诊(专科)", "睡眠障碍门诊(专科)", "神经介入科(专家)"] },
      {
        "name": "外科系", "id": "2", "items": [
          "普外科", "麻醉门诊", "微创肝胆专病", "疝外科专病", "麻醉科", "普外(胃肠、疝病)门诊", "普外(肝胆、疝病)门诊", "普外科(专家)", "普外科(专科)", "肝胆外科(专家)", "肝胆外科(专科)", "肝胆外科((外科营养)(专家)", "肝胆外科(外科营养)(专科)", "泌尿外科", "泌尿外科(专家)", "泌尿外科(专科)", "胸外科", "胸外科(专家)", "胸外科(专科)", "神经外科", "神经外科(专家)", "神经外科(专科)", "血管外科", "血管外科(专家)", "血管外科(专科)", "乳腺、甲状腺挖外科", "乳腺、甲状腺挖外科(专家)", "乳腺、甲状腺挖外科(专科)", "肛肠外科", "肛肠外科(专家)", "肛肠外科(专科)", "心血管外科(专家)", "脑积水(专家)", "外科"
        ]
      },
      {
        "name": "骨外科系", "id": "3", "items": [
          "骨外科", "慢创多学科会诊", "骨外科脊柱(专家)", "骨外科关节(专家)", "骨外科关节(运动医学)(专家)", "运动医学(踝关节)(专家)", "骨外科关节(专科)", "颈腰椎病(专家)", "手外科", "手外科(专家)", "手外科(专科)", "足踝外科(专家)", "足踝外科(专科)", "骨伤科(专科)", "儿童骨科(专科)"
        ]
      },
      {
        "name": "妇产科系", "id": "4", "items": [
          "妇科(专家)", "妇科(专科)", "妇科专科(内分泌、产科计划生育)", "产科", "产科(专家)(高危产科)", "产科(专科)", "妇科专科(宫颈病变、盘底障碍)", "产科孕期保健门诊"
        ]
      },
      {
        "name": "儿科系", "id": "5", "items": [
          "儿科", "儿科(专家)", "儿科小儿推拿(专科)", "儿科小儿推拿(专家)"
        ]
      },
      {
        "name": "眼科系", "id": "6", "items": [
          "眼科", "眼科(专家)", "眼科(专科)"
        ]
      },
      {
        "name": "耳喉鼻科系", "id": "7", "items": [
          "耳喉鼻科", "耳聋、耳鸣、眩晕(专家)", "耳鼻喉过敏性疾病(专科)", "睡眠障碍与鼾症(专科)", "眩晕门诊", "耳鼻喉科(专家)", "耳鼻喉科(专科)", "耳鼻喉方便门诊", "眩晕门诊(专家)"
        ]
      },
      {
        "name": "口腔科系", "id": "8", "items": [
          "口腔内科", "口腔颌面外科", "口腔正畸", "哭腔镶装", "口腔科(专家)", "口腔颌面外科(专科)", "口腔颌面外科(专家)", "口腔正畸(专科)", "口腔牙周病(专科)", "口腔种植修复(专科)"
        ]
      },
      {
        "name": "中医科系", "id": "9", "items": [
          "中医内科", "中医科(专家)", "中医科(专科)", "中医外科", "理疗科", "骨伤按摩科", "骨伤按摩科(专家)", "针灸科", "针灸科(专家)", "针灸科(专科)", "中医风湿刮痧科", "便秘门诊(专科)", "中医男性科(专家)", "中医风湿科(专科)", "中医心脏(专科)", "中医消化", "中医消化(专科)", "中医消化(专家)", "中医肿瘤(专科)", "中医老年病(专科)", "中医妇科(专科)"
        ]
      },
      {
        "name": "皮肤科", "id": "10", "items": [
          "皮肤科", "性病、皮肤科(专家)", "皮肤科(专科)", "美容科", "美容科(专家)"
        ]
      },
      {
        "name": "肿瘤科系", "id": "11", "items": [
          "肿瘤科", "妇科肿瘤放疗(专科)", "肿瘤科(专家)", "肿瘤科(专科)", "终了放疗科", "肿瘤放疗(专家)", "肺部肿物门诊", "肺部肿物门诊(专家)", "肿瘤生物治疗门诊", "肿瘤生物治疗门诊(专家)", "肿瘤生物治疗门诊(专科)", "癌痛门诊"
        ]
      },
      {
        "name": "医技科系", "id": "12", "items": [
          "放射科(专家)", "放射科(专科)", "超声诊断(专家)", "笑话内镜室", "内镜室(专家)", "心电生理科门诊(专家)", "核医学", "核医学(专科)"
        ]
      },
      {
        "name": "方便门诊系", "id": "13", "items": [
          "方便门诊"
        ]
      },
      {
        "name": "其他系", "id": "14", "items": [
          "多学科会诊门诊", "糖尿病及肥胖外科治疗门诊(专家)", "糖尿病及肥胖外科治疗门诊(专科)", "糖尿病足门诊(专科)", "糖尿病教育门诊", "心理门诊", "心理门诊(专家)", "心理门诊(专科)", "眩晕门诊(专科)", "疼痛门诊", "疼痛科(专科)", "康复科", "康复门诊", "康复科(门诊)", "介入门诊", "介入放射学(专家)", "PICC护理门诊", "造口伤口护理门诊", "卒中心护理门诊", "营养咨询(专家)", "老年病(专科)", "企业离休", "事业离休", "透析中心"
        ]
      }],
    list2:
      [
        { name: "头部", id: "0", "items": ["脑部CT", "脑电图", "头颅磁共振", "同位素扫描"] },
        { name: "前列腺", id: "1", "items": ["前列腺增生", "前列腺炎", "前列腺癌", "前列囊肿", "前列腺脓肿", "前列结核", "前列腺结石", "前列腺B超"] },
        { name: "耳鼻咽喉", id: "2", "items": ["听力", "内耳", "外耳", "鼻腔", "鼻中膈", "咽部"] },
        { name: "妇科", id: "3", "items": ["妇科常规", "宫颈刮片", "乳腺红外扫描", "妇科B超"] },
        { name: "乙肝", id: "4", "items": ["乙肝表面抗体", "乙肝e抗原", "乙肝e抗体", "乙肝核心抗体"] },
        { name: "血脂", id: "5", "items": ["总胆固醇", "甘油三脂", "高密度脂蛋白-胆固醇", "低密度脂蛋白-胆固醇"] },
        { name: "肿瘤", id: "6", "items": ["癌胚抗原", "胎甲球", "前列腺肿瘤标记", "乳腺肿瘤标记"] },
        { name: "内科", id: "7", "items": ["心", "肺", "肝", "脾"] },
        { name: "血常规", id: "8", "items": ["白细胞计数", "粒细胞", "嗜酸性粒细胞", "嗜碱性粒细胞"] },
        { name: "尿常规", id: "9", "items": ["尿比重", "尿酸碱度", "亚硝酸盐", "白细胞"] },
        { name: "其他", id: "10", "items": ["抽血化验", "血管检查", "骨密度", "X线检查", "胃部", "胆囊", "肝脏", "胰腺", "脾脏", "肾脏", "内胆管", "总胆管", "肝门静脉", "胰腺", "脂肪肝", "肝硬化", "肝胆结石", "不明原因腹痛"] },
      ]
    ,
    showList:true,
    departmentList:[],
    cardList:[],
    dutyName:'',
    department:'',
    time:'',
    parientDescribe:'',
    index:''
    // searchLoading: false, //"上拉加载"的变量，默认false，隐藏
    // searchLoadingComplete: false, //“没有数据”的变量，默认false，隐藏
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      admin:app.globalData.admin
    })
    var that = this

    console.log(app.globalData.userNumber==null)
    if (app.globalData.userNumber==null){
      
    }
    else{
      console.log(app.globalData.userNumber)
      console.log(options.flag)
      wx.cloud.callFunction({
        name: 'getRecord',
        data:{
          userNumber:app.globalData.userNumber,
          admin:app.globalData.admin,
          flag:options.flag
        }
      }).then(res=>{
        console.log(res.result)
        //如果列表为空，没有相关的订单
        if (res.result.list.length<=0){
         this.setData({
           showList: false
         })
       }
        else {
         // 转化department数组对应的字符串
         var departmentList = []
         let temp = res.result.list
         console.log(temp)
         console.log(that.data.list1[temp[0].department[0]])
         if (app.globalData.admin == 0 || 1) {
           for (let i = 0; i < res.result.list.length; i++) {
             departmentList.push(that.data.list1[temp[i].department[0]].name + ' ' + that.data.list1[temp[i].department[0]].items[temp[i].department[1]])
           }
         }
         else if (app.globalData.admin == 2) {
           for (let i = 0; i < res.result.list.length; i++) {
             departmentList.push(that.data.list2[temp[i].department[0]].name + ' ' + that.data.list2[temp[i].department[0]].items[temp[i].department[1]])
           }

         }
         console.log(res.result)
         this.setData({
           cardList: res.result.list,
           departmentList: departmentList
         })
        }
      })
    }
    console.log(this)
  },
  gotoDetail:function(e){
    console.log(e)
    console.log(this.data.cardList[e.currentTarget.dataset.index].orderNumber)
    wx.navigateTo({
      url: '../orderRecordDetail/orderRecordDetail?department=' +this.data.departmentList[e.currentTarget.dataset.index] + '&time=' + this.data.cardList[e.currentTarget.dataset.index].date + ' ' + this.data.cardList[e.currentTarget.dataset.index].payTime + '&index=' + this.data.cardList[e.currentTarget.dataset.index].orderNumber,
      success: function (res) { console.log(res)},
      fail: function(res) {console.log(res)},
      complete: function (res) { console.log(res)},
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
  // onReachBottom: function () {

  //   var self = this;
  //   // 原程序
  //   var app = getApp();
  //   // 触发加载中效果
  //   self.setData({
  //     searchLoading: true,
  //     searchLoadingComplete: true
  //   })
  //   // 案例详情
  //   // 页数 +1
  //   page++
  //   // 设计师信息
  //   wx.request({
  //     url: 'https://xcx.xxx.com.cn/homeapi/xxxx?page=' + page, //接口地址
  //     data: {

  //     },
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     method: 'GET',
  //     success: function (res) {
  //       // console.log(res);
  //       // 案例详情
  //       self.setData({
  //         // 渲染数据
  //         design: res.data,
  //         //隐藏加载中效果
  //         searchLoading: false,
  //         searchLoadingComplete: false
  //       })
  //     }
  //   })
  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})