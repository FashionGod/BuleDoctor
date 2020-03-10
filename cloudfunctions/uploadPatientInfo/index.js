// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'work-aznu0'
})

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  let a = await db.collection('PatientInfo').where({
    _id:event.openid
  }).count()
  console.log(a)
    if(a.total<=0){
      let b = await db.collection('PatientInfo').count()
      console.log("b",b)
          await db.collection('PatientInfo').add({
            data:{
              _id: event.openid,
              sickNumber: '' + (b.total + 1),
              patientName: event.patientName,
              sex: event.sex,
              age: event.age,
              phoneNumber: event.phoneNumber,
              idcard: event.idcard,
            }
          })
    }
    else {
      console.log("zoulezhe ", event.openid)
      return db.collection('PatientInfo').doc(event.openid).update({
        data:{
          patientName: event.patientName,
          sex: event.sex,
          age: event.age,
          phoneNumber: event.phoneNumber,
          idcard: event.idcard,
        }
      })
    }
}