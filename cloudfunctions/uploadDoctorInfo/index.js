// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'work-aznu0'
})

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  let a = await db.collection('DoctorInfo').where({
    _id: event.openid
  }).count()
  console.log(a)
  if (a.total <= 0) {
    let b = await db.collection('DoctorInfo').count()
    console.log("b", b)
    await db.collection('DoctorInfo').add({
      data: {
        _id: event.openid,
        doctorNumber: b.total + 1,
        doctorName: event.doctorName,
        department: event.department,
        price: event.price,
        worktime: event.worktime,
        personalExperience: event.experience,
        jobTitle: '',
        major: '',
      }
    })
  }
  else {
    console.log("zoulezhe ", event.openid)
    return db.collection('DoctorInfo').doc(event.openid).update({
      data: {
        doctorName: event.doctorName,
        department: event.department,
        price: event.price,
        worktime: event.worktime,
        personalExperience: event.experience,
        jobTitle: '',
        major: '',
      }
    })
  }
}