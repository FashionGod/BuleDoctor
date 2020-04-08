// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database();
  var mess = {};
  try {
    let orderdata = await db.collection("OrderRegister").get()
    mess.code = 0;
    mess.orderdata = orderdata;
  } catch (err) {
    console.log(err);
    mess.err = err;
    mess.code = -1;
  }
  return mess;
}