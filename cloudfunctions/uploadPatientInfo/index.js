// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'work-aznu0'
})

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return db.collection('PatientInfo').where({
    _id:wxContext.OPENID
  }).count().then(res => {
    if(res.total<=0){
      return db.collection('PatientInfo').add({
        data: {
          _id:wxContext.OPENID,
          name:event.name,
          sex:event.sex,
          age:event.age,
          phoneNumber:event.phoneNumber,
          idcard:event.idcard,
          sickNumber:event.sickNumber,
          nickName: event.nickName,
        }
      })
    }
    else {
      return db.collection('PatientInfo').doc(wxContext.OPENID).update({
        data:{
          name: event.name,
          sex: event.sex,
          age: event.age,
          phoneNumber: event.phoneNumber,
          idcard: event.idcard,
          sickNumber: event.sickNumber,
          nickName: event.nickName,
        }
      })
    }
  })
  .then(res =>{
    return db.collection('PatientInfo').doc(wxContext.OPENID).get()
  })
}