// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'work-aznu0'
})

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection('PatientInfo').where({
    _id:event.openid
  }).count().then(res => {
    if(res.total<=0){
      db.collection('PatientInfo').count().then(res => {
        if (res.total > 0) {
          db.collection('PatientInfo').add({
            data:{
              _id: event.openid,
              sickNumber: res.total + 1,
              name: event.name,
              sex: event.sex,
              age: event.age,
              phoneNumber: event.phoneNumber,
              idcard: event.idcard,
            }
          })
          
        }
        else {
          db.collection('PatientInfo').add({
            data:{
              _id: event.openid,
              sickNumber: 1,
              name: event.name,
              sex: event.sex,
              age: event.age,
              phoneNumber: event.phoneNumber,
              idcard: event.idcard,
            }
          })
        }
      })
    }
    else {
      return db.collection('PatientInfo').doc(event.openid).update({
        data:{
          name: event.name,
          sex: event.sex,
          age: event.age,
          phoneNumber: event.phoneNumber,
          idcard: event.idcard,
        }
      })
    }
  })
}