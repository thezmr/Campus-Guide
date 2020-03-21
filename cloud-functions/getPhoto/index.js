// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "haida-guide-cmakp"
})

// 云函数入口函数
exports.main = async(event, context) => {
  return cloud.database().collection('photo').aggregate().sample({
    size: 2
  }).end();
}