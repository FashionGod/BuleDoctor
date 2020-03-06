// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'work-aznu0'
})

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  let a = await db.collection('UploaderInfo').where({
    _id: event.openid
  }).count()
  console.log(a)
  if (a.total <= 0) {
    let b = await db.collection('UploaderInfo').count()
    console.log("b", b)
    await db.collection('UploaderInfo').add({
      data: {
        _id: event.openid,
        uploaderNumber: b.total + 1,
        uploaderName: event.uploaderName,
        department: event.department,
        price: event.price,
        worktime: event.worktime,
        personalExperience: event.experience,
        jobTitle:'',
        major:'',
      }
    })
  }
  else {
    return db.collection('UploaderInfo').doc(event.openid).update({
      data: {
        uploaderName: event.uploaderName,
        uploaderName: event.uploaderName,
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