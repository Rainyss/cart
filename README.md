# vue-mall-cart
#项目资源
|-user.json
#项目结构
|--public
   |--data
      |--.json
   |--images
      |--.jpg
|--src
   |--views
      |--Home.vue
|--mock.js

#项目说明
1.本项目为简单购物车的主页实现，主要有两个部分，一为购物车主题，可以往购物车中添加商品和删除商品。但是还是
  缺少购物车的单选和全选功能，以及商品小计和结算功能；二为商品的列表渲染，该部分写在主页视图中，也可以做成
  组件，通过引用组件展示视图。
2.商品的信息存放在public的公共文件夹中，包括商品的json文件以及图片。在组件created时，使用express启动 
  Node服务器,配置api接口，模拟后台数据，并通过axios请求得到
  测试api接口
  http://localhost:8080/api/goods
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# cart
