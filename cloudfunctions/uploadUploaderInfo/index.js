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
        doctorNumber: ''+(b.total + 1),
        doctorName: event.uploaderName,
        department: event.department,
        price: ''+event.price,
        workTime: event.worktime,
        personalExperience: event.experience,
        jobTitle:'',
        major:'',
        moreRegisterList: [68, 68, 68, 68, 68, 68, 68]
      }
    })
  }
  else {
    return db.collection('UploaderInfo').doc(event.openid).update({
      data: {
        doctorNumber: event.uploaderName,
        doctorName: event.uploaderName,
        department: event.department,
        price: ''+event.price,
        workTime: event.worktime,
        personalExperience: event.experience,
        jobTitle: '',
        major: ''
      }
    })
  }
}