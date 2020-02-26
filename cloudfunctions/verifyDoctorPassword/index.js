// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  var db = cloud.database();
  var mess = {};
  const wxContext = cloud.getWXContext()
  try{
    let temp = await db.collection('DoctorPassword').get()
    mess.code = 0;
    mess.doctorPassword = temp.data[0].doctorPassword;
  }catch(e) {
    console.log(e)
    mess.code = -1;
    mess.err = e;
  } 
  return mess;
}