// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'work-aznu0'
})
const db = cloud.database()
var mess = {}
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try {
    return db.collection("UploaderInfo").where({
      _id: event.openid
    }).count().then(res => {
      if (res.total <= 0) {
        return mess.code = -1
      }
      else {
        mess.code = 0
        return mess = db.collection('UploaderInfo').doc(event.openid).get()
      }
    })
  } catch (e) {

  }

}