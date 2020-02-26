// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  var mess = {}
  try {
    return list = [
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
        "name": "皮肤科、...", "id": "10", "items": [
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
      }];
  }
  catch (e) {
    console.log(e)
    mess.code = -1;
    mess.err = e;
    return mess
  }

}