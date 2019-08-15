const express = require('express') //使用express
const app = express() //实例化一个app对象

//获取数据，先请求文件，再创建变量存储相应的数据对象
const appData = require('./public/data/user.json')
const goods = appData.goods

//创建api接口，设置路由
const apiRoutes = express.Router()
apiRoutes.get('/goods', (req, res) => {
    res.json({
        errno: 0, //错误码
        data: goods
    })
})

//暴露api接口
app.use('/', apiRoutes)

//监听接口是否获得数据
app.listen(8081, () => {
    console.log('mock data is Running')
})