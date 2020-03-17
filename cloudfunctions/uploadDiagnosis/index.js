// 云函数入口文件
const cloud = require('wx-server-sdk')


cloud.init({
  env: 'work-aznu0'
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return db.collection('OrderRegister').where({
    orderNumber: event.orderNumber
  }).update({
    data: {
      diagnosis: event.diagnosis
    }
  })
}