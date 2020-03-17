// pages/me/patientInformation/patientInformation.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDepart: '',
    flagDisabled: true,
    patientName: "",
    age: '',
    phoneNumber: '',
    sex: '',
    idcard: '',
    picker: ['男', '女'],
    doctorName: '',
    list:[
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
          "儿科", "儿科(专家)", "儿科小儿推拿(专科)", "儿科小儿推拿(专科)"
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
    //系部
    multiArray1: [
      ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
      [
        "中医内科", "中医科(专家)", "中医科(专科)", "中医外科", "理疗科", "骨伤按摩科", "骨伤按摩科(专家)", "针灸科", "针灸科(专家)", "针灸科(专科)", "中医风湿刮痧科", "便秘门诊(专科)", "中医男性科(专家)", "中医风湿科(专科)", "中医心脏(专科)", "中医消化", "中医消化(专科)", "中医消化(专家)", "中医肿瘤(专科)", "中医老年病(专科)", "中医妇科(专科)"
      ]
    ],
    multiArray2: [
      ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
      [
        "中医内科", "中医科(专家)", "中医科(专科)", "中医外科", "理疗科", "骨伤按摩科", "骨伤按摩科(专家)", "针灸科", "针灸科(专家)", "针灸科(专科)", "中医风湿刮痧科", "便秘门诊(专科)", "中医男性科(专家)", "中医风湿科(专科)", "中医心脏(专科)", "中医消化", "中医消化(专科)", "中医消化(专家)", "中医肿瘤(专科)", "中医老年病(专科)", "中医妇科(专科)"
      ]
    ],
    multiIndex1: [0, 0],
    multiIndex2: [0, 0],
    //工作时间
    checkbox: [{
      value: 0,
      name: '周日',
      checked: false
    }, {
      value: 1,
      name: '周一',
      checked: false
    }, {
      value: 2,
      name: '周二',
      checked: false
    }, {
      value: 3,
      name: '周三',
      checked: false
    }, {
      value: 4,
      name: '周四',
      checked: false
    }, {
      value: 5,
      name: '周五',
      checked: false
    }, {
      value: 6,
      name: '周六',
      checked: false
    }],
    admin: '',
    uploaderName:''
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  ChooseCheckbox(e) {
    let items = this.data.checkbox;
    let values = e.currentTarget.dataset.value;
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked;
        break
      }
    }
    this.setData({
      checkbox: items
    })
  },
  //多列选择器1
  bindMultiPickerChange1: function(e) {
    console.log("picker发送选择改变，携带值为：", e.detail.value)
    this.setData({
      multiIndex1: e.detail.value,
      showDepart: "have"
    })
  },
  bindMultiPickerColumnChange1: function(e) {
    console.log("修改的列为：", e.detail.column, "值为:", e.detail.value)
    if (e.detail.column == 0) { //重新渲染选项
      switch (e.detail.value) {
        case 0:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              ["呼吸内科", "呼吸内科(专科)", "全科教学门诊", "输血门诊", "MMC代谢病门诊", "呼吸内科(专家)", "睡眠呼吸疾病(专科)", "消化内科(专家)", "消化内科(专科)", "胃肠病(专科)", "肝病(专家)", "血液内科", "血液内科(专家)", "血友病门诊", "心血管内科", "心血管内科(专家)", "心血管内科(房颤)(专家)", "心律失常(专家)", "心衰(专科)", "先心病门诊(专家)", "心内会诊门诊", "内分泌内科", "内分泌科(专家)", "内分泌科(专科)", "肾内科", "肾内科(专家)", "风湿免疫门诊", "风湿免疫科(专家)", "风湿免疫(专科)", "全科门诊", "健康管理咨询门诊", "内科"]
            ]
          })
          break
        case 1:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              ["神经内科", "神经内科(专家)", "神经内科(帕金森及运动障碍)(专家)", "神经内科(头痛)(专家)", "神经内科(专科)", "神经内科(头痛)(专科)", "脑血管病(脑卒中)门诊", "癫痫门诊(专科)", "脑血管病(专科)", "神经肌肉病(专科)", "记忆门诊(专科)", "睡眠障碍门诊(专科)", "神经介入科(专家)"]
            ]
          })
          break
        case 2:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "普外科", "麻醉门诊", "微创肝胆专病", "疝外科专病", "麻醉科", "普外(胃肠、疝病)门诊", "普外(肝胆、疝病)门诊", "普外科(专家)", "普外科(专科)", "肝胆外科(专家)", "肝胆外科(专科)", "肝胆外科((外科营养)(专家)", "肝胆外科(外科营养)(专科)", "泌尿外科", "泌尿外科(专家)", "泌尿外科(专科)", "胸外科", "胸外科(专家)", "胸外科(专科)", "神经外科", "神经外科(专家)", "神经外科(专科)", "血管外科", "血管外科(专家)", "血管外科(专科)", "乳腺、甲状腺挖外科", "乳腺、甲状腺挖外科(专家)", "乳腺、甲状腺挖外科(专科)", "肛肠外科", "肛肠外科(专家)", "肛肠外科(专科)", "心血管外科(专家)", "脑积水(专家)", "外科"
              ]
            ]
          })
          break
        case 3:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "骨外科", "慢创多学科会诊", "骨外科脊柱(专家)", "骨外科关节(专家)", "骨外科关节(运动医学)(专家)", "运动医学(踝关节)(专家)", "骨外科关节(专科)", "颈腰椎病(专家)", "手外科", "手外科(专家)", "手外科(专科)", "足踝外科(专家)", "足踝外科(专科)", "骨伤科(专科)", "儿童骨科(专科)"
              ]
            ]
          })
          break
        case 4:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "妇科(专家)", "妇科(专科)", "妇科专科(内分泌、产科计划生育)", "产科", "产科(专家)(高危产科)", "产科(专科)", "妇科专科(宫颈病变、盘底障碍)", "产科孕期保健门诊"
              ]
            ]
          })
          break
        case 5:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "儿科", "儿科(专家)", "儿科小儿推拿(专科)", "儿科小儿推拿(专科)"
              ]
            ]
          })
          break
        case 6:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "眼科", "眼科(专家)", "眼科(专科)"
              ]
            ]
          })
          break
        case 7:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "耳喉鼻科", "耳聋、耳鸣、眩晕(专家)", "耳鼻喉过敏性疾病(专科)", "睡眠障碍与鼾症(专科)", "眩晕门诊", "耳鼻喉科(专家)", "耳鼻喉科(专科)", "耳鼻喉方便门诊", "眩晕门诊(专家)"
              ]
            ]
          })
          break
        case 8:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "口腔内科", "口腔颌面外科", "口腔正畸", "哭腔镶装", "口腔科(专家)", "口腔颌面外科(专科)", "口腔颌面外科(专家)", "口腔正畸(专科)", "口腔牙周病(专科)", "口腔种植修复(专科)"
              ]
            ]
          })
          break
        case 9:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "中医内科", "中医科(专家)", "中医科(专科)", "中医外科", "理疗科", "骨伤按摩科", "骨伤按摩科(专家)", "针灸科", "针灸科(专家)", "针灸科(专科)", "中医风湿刮痧科", "便秘门诊(专科)", "中医男性科(专家)", "中医风湿科(专科)", "中医心脏(专科)", "中医消化", "中医消化(专科)", "中医消化(专家)", "中医肿瘤(专科)", "中医老年病(专科)", "中医妇科(专科)"
              ]
            ]
          })
          break
        case 10:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "皮肤科", "性病、皮肤科(专家)", "皮肤科(专科)", "美容科", "美容科(专家)"
              ]
            ]
          })
          break
        case 11:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "肿瘤科", "妇科肿瘤放疗(专科)", "肿瘤科(专家)", "肿瘤科(专科)", "终了放疗科", "肿瘤放疗(专家)", "肺部肿物门诊", "肺部肿物门诊(专家)", "肿瘤生物治疗门诊", "肿瘤生物治疗门诊(专家)", "肿瘤生物治疗门诊(专科)", "癌痛门诊"
              ]
            ]
          })
          break
        case 12:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "放射科(专家)", "放射科(专科)", "超声诊断(专家)", "笑话内镜室", "内镜室(专家)", "心电生理科门诊(专家)", "核医学", "核医学(专科)"
              ]
            ]
          })
          break
        case 13:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "方便门诊"
              ]
            ]
          })
          break
        case 14:
          this.setData({
            multiArray1: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "多学科会诊门诊", "糖尿病及肥胖外科治疗门诊(专家)", "糖尿病及肥胖外科治疗门诊(专科)", "糖尿病足门诊(专科)", "糖尿病教育门诊", "心理门诊", "心理门诊(专家)", "心理门诊(专科)", "眩晕门诊(专科)", "疼痛门诊", "疼痛科(专科)", "康复科", "康复门诊", "康复科(门诊)", "介入门诊", "介入放射学(专家)", "PICC护理门诊", "造口伤口护理门诊", "卒中心护理门诊", "营养咨询(专家)", "老年病(专科)", "企业离休", "事业离休", "透析中心"
              ]
            ]
          })
          break
      }
    }

  },
  //多列选择器2
  bindMultiPickerChange2: function (e) {
    console.log("picker发送选择改变，携带值为：", e.detail.value)
    this.setData({
      multiIndex2: e.detail.value,
      showDepart: "have"
    })
  },
  bindMultiPickerColumnChange2: function (e) {
    console.log("修改的列为：", e.detail.column, "值为:", e.detail.value)
    if (e.detail.column == 0) { //重新渲染选项
      switch (e.detail.value) {
        case 0:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              ["呼吸内科", "呼吸内科(专科)", "全科教学门诊", "输血门诊", "MMC代谢病门诊", "呼吸内科(专家)", "睡眠呼吸疾病(专科)", "消化内科(专家)", "消化内科(专科)", "胃肠病(专科)", "肝病(专家)", "血液内科", "血液内科(专家)", "血友病门诊", "心血管内科", "心血管内科(专家)", "心血管内科(房颤)(专家)", "心律失常(专家)", "心衰(专科)", "先心病门诊(专家)", "心内会诊门诊", "内分泌内科", "内分泌科(专家)", "内分泌科(专科)", "肾内科", "肾内科(专家)", "风湿免疫门诊", "风湿免疫科(专家)", "风湿免疫(专科)", "全科门诊", "健康管理咨询门诊", "内科"]
            ]
          })
          break
        case 1:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              ["神经内科", "神经内科(专家)", "神经内科(帕金森及运动障碍)(专家)", "神经内科(头痛)(专家)", "神经内科(专科)", "神经内科(头痛)(专科)", "脑血管病(脑卒中)门诊", "癫痫门诊(专科)", "脑血管病(专科)", "神经肌肉病(专科)", "记忆门诊(专科)", "睡眠障碍门诊(专科)", "神经介入科(专家)"]
            ]
          })
          break
        case 2:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "普外科", "麻醉门诊", "微创肝胆专病", "疝外科专病", "麻醉科", "普外(胃肠、疝病)门诊", "普外(肝胆、疝病)门诊", "普外科(专家)", "普外科(专科)", "肝胆外科(专家)", "肝胆外科(专科)", "肝胆外科((外科营养)(专家)", "肝胆外科(外科营养)(专科)", "泌尿外科", "泌尿外科(专家)", "泌尿外科(专科)", "胸外科", "胸外科(专家)", "胸外科(专科)", "神经外科", "神经外科(专家)", "神经外科(专科)", "血管外科", "血管外科(专家)", "血管外科(专科)", "乳腺、甲状腺挖外科", "乳腺、甲状腺挖外科(专家)", "乳腺、甲状腺挖外科(专科)", "肛肠外科", "肛肠外科(专家)", "肛肠外科(专科)", "心血管外科(专家)", "脑积水(专家)", "外科"
              ]
            ]
          })
          break
        case 3:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "骨外科", "慢创多学科会诊", "骨外科脊柱(专家)", "骨外科关节(专家)", "骨外科关节(运动医学)(专家)", "运动医学(踝关节)(专家)", "骨外科关节(专科)", "颈腰椎病(专家)", "手外科", "手外科(专家)", "手外科(专科)", "足踝外科(专家)", "足踝外科(专科)", "骨伤科(专科)", "儿童骨科(专科)"
              ]
            ]
          })
          break
        case 4:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "妇科(专家)", "妇科(专科)", "妇科专科(内分泌、产科计划生育)", "产科", "产科(专家)(高危产科)", "产科(专科)", "妇科专科(宫颈病变、盘底障碍)", "产科孕期保健门诊"
              ]
            ]
          })
          break
        case 5:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "儿科", "儿科(专家)", "儿科小儿推拿(专科)", "儿科小儿推拿(专科)"
              ]
            ]
          })
          break
        case 6:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "眼科", "眼科(专家)", "眼科(专科)"
              ]
            ]
          })
          break
        case 7:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "耳喉鼻科", "耳聋、耳鸣、眩晕(专家)", "耳鼻喉过敏性疾病(专科)", "睡眠障碍与鼾症(专科)", "眩晕门诊", "耳鼻喉科(专家)", "耳鼻喉科(专科)", "耳鼻喉方便门诊", "眩晕门诊(专家)"
              ]
            ]
          })
          break
        case 8:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "口腔内科", "口腔颌面外科", "口腔正畸", "哭腔镶装", "口腔科(专家)", "口腔颌面外科(专科)", "口腔颌面外科(专家)", "口腔正畸(专科)", "口腔牙周病(专科)", "口腔种植修复(专科)"
              ]
            ]
          })
          break
        case 9:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "中医内科", "中医科(专家)", "中医科(专科)", "中医外科", "理疗科", "骨伤按摩科", "骨伤按摩科(专家)", "针灸科", "针灸科(专家)", "针灸科(专科)", "中医风湿刮痧科", "便秘门诊(专科)", "中医男性科(专家)", "中医风湿科(专科)", "中医心脏(专科)", "中医消化", "中医消化(专科)", "中医消化(专家)", "中医肿瘤(专科)", "中医老年病(专科)", "中医妇科(专科)"
              ]
            ]
          })
          break
        case 10:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "皮肤科", "性病、皮肤科(专家)", "皮肤科(专科)", "美容科", "美容科(专家)"
              ]
            ]
          })
          break
        case 11:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "肿瘤科", "妇科肿瘤放疗(专科)", "肿瘤科(专家)", "肿瘤科(专科)", "终了放疗科", "肿瘤放疗(专家)", "肺部肿物门诊", "肺部肿物门诊(专家)", "肿瘤生物治疗门诊", "肿瘤生物治疗门诊(专家)", "肿瘤生物治疗门诊(专科)", "癌痛门诊"
              ]
            ]
          })
          break
        case 12:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "放射科(专家)", "放射科(专科)", "超声诊断(专家)", "笑话内镜室", "内镜室(专家)", "心电生理科门诊(专家)", "核医学", "核医学(专科)"
              ]
            ]
          })
          break
        case 13:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "方便门诊"
              ]
            ]
          })
          break
        case 14:
          this.setData({
            multiArray2: [
              ['内科系', '神经内科系', '外科系', '骨外科系', '妇产科系', '儿科系', '眼科系', '耳喉鼻科系', '口腔科系', '中医科系', '皮肤科', '肿瘤科系', '医技科系', '方便门诊系', '其他系'],
              [
                "多学科会诊门诊", "糖尿病及肥胖外科治疗门诊(专家)", "糖尿病及肥胖外科治疗门诊(专科)", "糖尿病足门诊(专科)", "糖尿病教育门诊", "心理门诊", "心理门诊(专家)", "心理门诊(专科)", "眩晕门诊(专科)", "疼痛门诊", "疼痛科(专科)", "康复科", "康复门诊", "康复科(门诊)", "介入门诊", "介入放射学(专家)", "PICC护理门诊", "造口伤口护理门诊", "卒中心护理门诊", "营养咨询(专家)", "老年病(专科)", "企业离休", "事业离休", "透析中心"
              ]
            ]
          })
          break
      }
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      admin: app.globalData.admin
    })
    //获取病人信息
    if (this.data.admin == 0) {
      wx.cloud.callFunction({
        name: 'getPatientInfo',
        data: {
          openid: app.globalData.openid
        }
      }).then(res => {
        console.log(res)
        console.log(res.result.data)
        if (res.result.data == null) {
          wx.showToast({
            title: '请填写有关信息',
            icon: 'none',
            duration: 2000
          })
        } else {
          this.setData({
            patientName: res.result.data.patientName,
            sex: res.result.data.sex,
            age: res.result.data.age,
            phoneNumber: res.result.data.phoneNumber,
            idcard: res.result.data.idcard
          })
        }
        console.log(this.data)
      })
    }
    //获取医生信息
    else if (this.data.admin == 1) {
      wx.cloud.callFunction({
        name: 'getDoctorInfo',
        data: {
          openid: app.globalData.openid
        }
      }).then(res => {
        console.log(res)
        console.log(res.result.data)
        if (res.result.data == null) {
          wx.showToast({
            title: '请填写有关信息',
            icon: 'none',
            duration: 2000
          })
        } else {
          let temp = this.data.checkbox
          for (let i in res.result.data.workTime){
            temp[res.result.data.workTime[i]].checked = true
          }
          this.setData({
            doctorName: res.result.data.doctorName,
            department: this.data.list[res.result.data.department[0]].name + ' ' + this.data.list[res.result.data.department[0]].items[res.result.data.department[1]],
            price: res.result.data.price,
            checkbox: temp,
            experience: res.result.data.personalExperience
          })
        }
        console.log(this.data)
      })
    }
    //获取上传者信息
    else if (this.data.admin == 2) {
      wx.cloud.callFunction({
        name: 'getUploaderInfo',
        data: {
          openid: app.globalData.openid
        }
      }).then(res => {
        console.log(res)
        console.log(res.result.data)
        if (res.result.data == null) {
          wx.showToast({
            title: '请填写有关信息',
            icon: 'none',
            duration: 2000
          })
        } else{
          let temp = this.data.checkbox
          for (let i in res.result.data.workTime) {
            temp[res.result.data.workTime[i]].checked = true
          }
          this.setData({
            uploaderName: res.result.data.doctorName,
            price:res.result.data.price,
            department: this.data.list[res.result.data.department[0]].name + ' ' + this.data.list[res.result.data.department[0]].items[res.result.data.department[1]],
            checkbox:temp,
            experience:res.result.data.personalExperience
          })
        }
        console.log(this.data)
      })
    }
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
  onShow: function() {

  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      sex: e.detail.value
    })
  },
  //提交患者信息
  formSubmit1(data) {
    var that = this
    wx.showModal({
      title: '',
      content: '确定要保存吗？',
      success(res) {
        if (res.confirm) {
          console.log("用户点击确定保存")
          console.log(data.detail.value)
          let flagnull = true
          for (let i in data.detail.value) {
            console.log(data.detail.value[i])
            if (data.detail.value[i] == '' || data.detail.value[i] == null || data.detail.value[i] == "") {
              console.log(i + "为空")
              wx.showToast({
                title: '请完整填写信息，信息不能有空',
                icon: 'none',
                duration: 2000,
                mask: true,
              })
              flagnull = false
              break;
            }

          }
          if (flagnull == true) {
            wx.cloud.callFunction({
              name: 'uploadPatientInfo',
              data: {
                openid: app.globalData.openid,
                patientName: data.detail.value.patientName,
                sex: data.detail.value.sex,
                age: data.detail.value.age,
                phoneNumber: data.detail.value.phoneNumber,
                idcard: data.detail.value.idcard,
              }
            }).then(res => {
              console.log(res)
              wx.showToast({
                title: "信息更新成功"
              })
            })
            that.setData({
              flagDisabled: true
            })
          }
        } else if (res.cancel) {
          console.log("用户点击取消保存")
        }
      }
    })
  },
  //提交医生信息
  formSubmit2(data) {
    var that = this
    wx.showModal({
      title: '',
      content: '确定要保存吗？',
      success(res) {
        if (res.confirm) {
          console.log("用户点击确定保存")
          that.setData({
            experience: data.detail.value.experience
          })
          console.log(data.detail.value)
          console.log(that.data.checkbox)
          let flagnull = true
          for (let i in data.detail.value) {
            console.log(data.detail.value[i])
            if (data.detail.value[i] == '' || data.detail.value[i] == null || data.detail.value[i] == "") {
              console.log(i + "为空")
              wx.showToast({
                title: '请完整填写信息，信息不能有空',
                icon: 'none',
                duration: 2000,
                mask: true,
              })
              flagnull = false
              break;
            }
          }
          if (flagnull == true) {
            //转换workTime格式
            that.checkboxTurntoArray()
            wx.cloud.callFunction({
              name: 'uploadDoctorInfo',
              data: {
                openid: app.globalData.openid,
                doctorName: data.detail.value.doctorName,
                department: data.detail.value.department,
                price: data.detail.value.price,
                worktime: that.data.showWorkTime,
                experience: data.detail.value.experience,
              }
            }).then(res => {
              console.log(res)
              wx.showToast({
                title: "信息更新成功"
              })
            })
            that.setData({
              flagDisabled: true,
              department: that.data.list[data.detail.value.department[0]].name + ' ' + that.data.list[data.detail.value.department[0]].items[data.detail.value.department[1]]
              
            })
          }

        } else if (res.cancel) {
          console.log("用户点击取消保存")
        }
      }
    })
  },

  //提交上传者信息
  formSubmit3(data) {
    var that = this
    wx.showModal({
      title: '',
      content: '确定要保存吗？',
      success(res) {
        if (res.confirm) {
          that.setData({
            experience: data.detail.value.experience
          })
          console.log("用户点击确定保存")
          console.log(data.detail.value)
          let flagnull = true
          for (let i in data.detail.value) {
            console.log(data.detail.value[i])
            if (data.detail.value[i] == '' || data.detail.value[i] == null || data.detail.value[i] == "") {
              console.log(i + "为空")
              wx.showToast({
                title: '请完整填写信息，信息不能有空',
                icon: 'none',
                duration: 2000,
                mask: true,
              })
              flagnull = false
              break;
            }
          }
          if (flagnull == true) {
            that.checkboxTurntoArray()
            wx.cloud.callFunction({
              name: 'uploadUploaderInfo',
              data: {
                openid: app.globalData.openid,
                uploaderName: data.detail.value.uploaderName,
                department: data.detail.value.department,
                price: data.detail.value.price,
                worktime: that.data.showWorkTime,
                experience: data.detail.value.experience,
              }
            }).then(res => {
              console.log(res)
              wx.showToast({
                title: "信息更新成功"
              })
            })
            that.setData({
              flagDisabled: true,
              department: that.data.list[data.detail.value.department[0]].name + ' ' + that.data.list[data.detail.value.department[0]].items[data.detail.value.department[1]]
            })
          }

        } else if (res.cancel) {
          console.log("用户点击取消保存")
        }
      }
    })
  },
  //工作日期格式转换
  checkboxTurntoArray(){
    var worktimetemp = []
    var showWorkTime = ''
    for(let i = 0;i< 7 ; i ++){
      console.log(this.data.checkbox[i])
      if (this.data.checkbox[i].checked==true){
        worktimetemp.push(this.data.checkbox[i].value)
        showWorkTime += this.data.checkbox[i].name
        showWorkTime +=' '
      }
    }
    console.log(worktimetemp)
    console.log(showWorkTime)
    this.setData({
      showWorkTime: worktimetemp
    })
  },
  edit() {
    
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