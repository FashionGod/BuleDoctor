// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database();
  var mess = [];
  try {
    let ordercheckerdata = await db.collection("OrderRegister").count()
    var number = 0;
    console.log(ordercheckerdata)
    if (ordercheckerdata.total == 0) {
      number = await db.collection("OrderRegister").add({
        data: {
          orderNumber: "0",
          date: event.date,
          registerlistId: event.registerlistId,
          docName: event.docName,
          doctorNumber: event.doctorNumber,
          patientName: event.patientName,
          patientNumber: event.patientNumber,
          payTime: event.payTime,
          department: event.department,
          price: event.price,
        }
      })
    } else {
      number = await db.collection("OrderRegister").add({
        data: {
          orderNumber: "" + ordercheckerdata.total,
          date: event.date,
          registerlistId: event.registerlistId,
          docName: event.docName,
          doctorNumber: event.doctorNumber,
          patientName: event.patientName,
          patientNumber: event.patientNumber,
          payTime: event.payTime,
          department: event.department,
          price: event.price,
        }
      })
    }
    mess.code = 1;
    console.log(ordercheckerdata)
  } catch (e) {
    console.log(e);
    mess.err = e;
    mess.code = -1;
  }
  return mess;
}