// import mockjs
import Mock from 'mockjs'
// import mock user data
import userMock from './data/user.mock'

Mock.setup({
  timeout: 800 // 设置延迟响应，模拟向后端请求数据
})
let userList = userMock.userList
console.log(userList)
Mock.mock(/\/testMock/, 'post', userList[0])
