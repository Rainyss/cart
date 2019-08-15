<template>
  <div id="home">
    <div class="top">
      <img :src="topImg" alt="头部图片">
    </div>
    <div class="cart">
      <p class="cart-title">
        <span>我的购物车</span> 现在
        <a href="#">登录</a>您购物车的商品将被永久保存
      </p>
      <ul class="cart-ul" id="cart-item">
        <li class="u-desc">
          <span class="u-name">商品</span>
          <span>双十一优惠价</span>
          <span>数量</span>
          <span>操作</span>
        </li>
        <li class="list" v-for="(item,index) in cartGoods" :key="index">
          <span class="l-info">
            <a href="javascript:;">
              <img :src="item.image" alt="商品">
            </a>
            <a href="javascript:;" class="l-tilte">{{item.title}}</a>
          </span>
          <span>{{item.price}}</span>
          <span>
            <input type="text" v-model="item.quantity">
          </span>
          <span @click="deleteGood(index)">删除</span>
        </li>
      </ul>
    </div>
    <div class="shop">
      <h1>双十一狂欢节 -棉衣</h1>
      <ul class="s-ul" id="showBox">
        <li v-for="(item,index) in list" :key="index">
          <a href="javascript:;">
            <img :src="item.image" alt="商品">
          </a>
          <p>{{item.title}}</p>
          <p>
            <span class="price">{{item.price}}</span>
            <span class="num">{{item.da}}付款</span>
          </p>
          <a href="javascript:;" class="add" @click="addGood(item)">加入购物车</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topImg:"/images/timg1 (1).jpg",
      list: [], //商品列表
      cartGoods:[] //购物车商品列表
    };
  },
  //获取商品列表数据
  created() {
    this.$axios({
      method: "get",
      url: "/api/goods"
    })
      .then(resp => {
        this.list = resp.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods:{
    //往购物车中接入商品
    addGood(item){
      var lot = this.cartGoods.indexOf(item)
      if(lot < 0){
        this.cartGoods.push(item);
      }else{
        item.quantity++;
      }
    },
    //删除购物车中的商品
    deleteGood(index){
      this.cartGoods[index].quantity = 1;
      this.cartGoods.splice(index,1);
    }
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 12px;
    color: #999;
  }

  img {
    border: 0;
  }


/*顶部广告*/

.top {
    width: 100%;
    height: 200px;
    text-align: center;
    background: blue;
}

.top img {
    width: 100%;
    height: 200px;
}


/* 购物车样式 */

.cart {
    width: 960px;
    height: 300px;
    margin: 0 auto;
}

.list .l-info img {
    height: 40px;
    width: 40px;
}

.cart .cart-title {
    margin-top: 20px;
    font-size: 14px;
}

.cart .cart-title span {
    font-size: 20px;
    font-weight: 700;
}

.cart .cart-ul {
    width: 960px;
    margin-top: 20px;
}

.cart .cart-ul li {
    list-style: none;
    height: 20px;
    margin: 10px 0;
}

.cart .cart-ul .u-desc {
    font-weight: 700;
    font-size: 14px;
}

.cart .cart-ul li span {
    width: 166px;
    height: 50px;
    display: block;
    float: left;
    line-height: 50px;
    text-align: center;
}

.cart .cart-ul .u-desc .u-name {
    width: 460px;
}

.cart .cart-ul .list {
    padding-left: 0px;
}

.cart .cart-ul .list span {
    display: block;
}

.cart .cart-ul .list .l-info {
    width: 460px;
}

.cart .cart-ul .list span a {
    float: left;
    text-decoration: none;
}

.cart .cart-ul .list span input{
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
}


/* 商品样式 */

.shop {
    width: 960px;
    margin: 10px auto;
}

.shop h1 {
    font-size: 22px;
    text-align: left;
    margin-left: 30px;
}

.shop .s-ul {
    width: 960px;
    margin-top: 20px;
}

.shop .s-ul li {
    list-style: none;
    background-color: #fff;
    width: 220px;
    height: 326px;
    float: left;
    margin: 0 10px 30px 10px;
}

#showBox li a>img {
    height: 220px;
    width: 220px;
}

.shop .s-ul li p {
    width: 220px;
    height: 24px;
    line-height: 24px;
}

.shop .price {
    font-size: 20px;
    color: red;
    float: left;
}

.shop .s-ul li p .num {
    float: right;
    color:#999;
}

.shop .add {
    width: 220px;
    height: 38px;
    display: block;
    background-color: #c40;
    text-align: center;
    line-height: 38px;
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    margin-top: 10px;
}
</style>