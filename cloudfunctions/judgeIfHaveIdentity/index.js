// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'work-aznu0'
})
// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const mess = {}
  mess.errcode = 10
  try{
    mess.data = await db.collection('Identity').where({
      _id: event.openid
    }).get()
    mess.errcode = 0
    return mess
  }
  catch(e){
    console.log(e)
    mess.errcode = -1
    return mess
  }
}