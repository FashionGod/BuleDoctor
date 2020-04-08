// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  var mess = {};
  try {
    let doctorsdata = await db.collection("DoctorInfo").aggregate()
      .match({
        department: event.department,
      })
      .end()
    mess.doctorsTemp = doctorsdata;
    mess.code = 0;
  } catch (err) {
    console.log(err);
    mess.err = err;
    mess.code = -1;
  }
  return mess;
}