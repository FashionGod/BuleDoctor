// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  var db = cloud.database();
  var mess = {};
  const wxContext = cloud.getWXContext()
  try {
    let temp = await db.collection('UploaderPassword').get()
    mess.code = 0;
    mess.uploaderPassword = temp.data[0].uploaderPassword;
  } catch (e) {
    console.log(e)
    mess.code = -1;
    mess.err = e;
  }
  return mess;
}