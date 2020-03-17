// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'work-aznu0'
  
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  if(event.admin==1){
    return db.collection('OrderRegister').aggregate().match({
      doctorNumber: event.userNumber
    }).end()
  }
  else if(event.admin==2){
    return db.collection('OrderChecker').aggregate().match({
      doctorNumber: event.userNumber
    }).end()
  }
  else{
    if(event.flag==1){
      return db.collection('OrderChecker').aggregate().match({
        patientNumber: event.userNumber
      }).end()
    }
    else if(event.flag==2){
      return db.collection('OrderRegister').aggregate().match({
        patientNumber: event.userNumber
      }).end()
    }
  }
}