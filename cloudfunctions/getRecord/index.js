// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'work-aznu0'
  
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection('OrderChecker').aggregate().match({
    patientNumber:event.patientNumber
  }).end()
}