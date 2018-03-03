<template lang="html">

  <div class="pay">
    <div v-if="!confirm">
      <v-header>
        <h1 slot="title">支付订单</h1>
      </v-header>
      <div class="pay-address">
        <div>
          <p class="main-address-per">收货人:<span>陈先生</span></p>
          <p class="main-address-tel">13058016666</p>
        </div>
        <p>收货地址:<span>浙江省杭州市萧山区玉林路8号院88号单元8层888</span></p>
      </div>

      <div class="pay-product">
        <ul v-if="!confirm">
          <li v-for="k in carList">
            <a>
              <img :src="k.imgPath" alt="">
              <div>
                <h2><span style="color:#ee7150"> {{k.size}} - {{k.col}} </span>- {{k.title}} -</h2>
                <p>{{k.price}} 元</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <h3 class="pay-allpay">合计需支付 : <i>￥</i><span>{{allpay}}</span></h3>
      <footer class="pay-footer" ontouchstrat="" @click="payConfirm" v-if="!confirm">
        <span>立即支付</span>
      </footer>
    </div>

      <!-- 支付成功后的提示 -->
    <div class="pay-confirm" v-else>
      <v-header>
        <h1 slot="title">支付结果</h1>
      </v-header>
      <div class="content">
          <img src="http://p4adg9kfz.bkt.clouddn.com//pay/onIcon.png" alt="">
          <h3>订单支付成功</h3>
          <div class="explain">我们将尽快处理你的订单</div>
          <div class="payPrice">￥{{allpay}}</div>
          <div class="btn">
            <button @click="lookOrder" class="look-order">查看订单</button>
            <button @click="gotoShop" class="goto-shop">继续逛逛</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Util from '../../../util/common'
import Header from '@/common/_header.vue'
import { Toast } from 'mint-ui'
import {
  MessageBox
} from 'mint-ui';
export default {
  components: {
    'v-header': Header
  },
  data() {
    return {
      confirm: ''
    }
  },
  mounted() {
// 防止页面刷新后数据丢失
    if (this.$store.state.detail.selectedList == '') {
      this.$store.commit('SET_SELECTEDLIST')
    }
  },
  computed: {

    //所有商品列表
    carList() {

      return this.$store.state.detail.selectedList
    },

    // 商品价格总和
    allpay() {
      let allpay = 0;
      for (let i = 0; i < this.$store.state.detail.selectedList.length; i++) {
        allpay += this.$store.state.detail.selectedList[i].price
      }
      return allpay
    }
  },

  methods: {
    payConfirm() {
      if (this.carList) { //还未提交了订单,数据还未清空
        MessageBox
          .confirm(
            `确定支付${this.allpay}元`
          )
          .then(action => { //点击成功执行这里的函数
            this.confirm = false;
            this.$store.commit('SET_LOADING', true);
            this.$store.dispatch('resetCarList'); //重置购物车（用unSelectedList替换）
            this.$store.dispatch('resetCount'); //重置购物车数量
            setTimeout(() => {
              this.$store.commit('SET_LOADING', false); //关闭loading
              this.confirm = true; //支付完成后切换视图
            }, 300)
          }, function(err) {
            //点击取消执行这里的函数
          });
      } else { //提交了订单,数据清空
        Toast('请勿重复提交订单')
      }
    },
    lookOrder() {
      Toast("待完善，敬请期待！")
    },
    gotoShop() {
      this.$router.push({name:'分类页'})
    }
  }

}
</script>

<style lang="less" scoped>
@import '../../../assets/fz.less';
.pay {
    width: 100%;
    // background-color: #F7F7F7;
    box-sizing: border-box;
    .pay-address {
        background-color: #fff;
        border-bottom: 1*10vw/75 solid #DEDEDE;
        padding:20vw 30*10vw/75 10vw;

        > div {
            display: -webkit-flex;
            display: -ms-flex;
            display: flex;
            justify-content: space-between;

            p {
                color: #868686;
                .fz(font-size,32px);
            }
        }

        > p {
            .fz(font-size,28px);
            color: #868686;
            padding-top: 30*10vw/75;
            letter-spacing: 3*10vw/75;
            line-height: 45*10vw/75;
        }
    }
    .pay-product {
        background-color: #fff;
        // height: 60vw;
        overflow: auto;
        li {
            a {
                display: -webkit-flex;
                display: -ms-flex;
                display: flex;
                box-sizing: border-box;
                padding: 20*10vw/75 30*10vw/75;
                color: #4D4D4D;
                .fz(font-size,30px);
                border-bottom: 1*10vw/75 solid #DEDEDE;

                > img {
                    display: block;
                    width: 2.5*10vw;
                    height: 2.5*10vw;
                }

                > div {
                    box-sizing: border-box;
                    padding-left: 50*10vw/75;
                    width: 70%;
                    h2 {
                        padding-top: 0.09*10vw;
                        overflow: hidden;
                        word-break: keep-all;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                    p {
                        text-align: right;
                        .fz(font-size,24px);
                        padding-top: 1.4*10vw;
                    }
                }
            }
        }
    }

    .pay-allpay {
        text-align: right;
        margin-top: 1px;
        margin-bottom: 25vw;        
        padding: 4vw 5vw;
        .fz(font-size,32px);
        color: #999999;
        background-color: #fff;
        i,
        span {
            color: @cl;
        }
    }

    .pay-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding-bottom: 4vw;
        background: #fff;
        span {
            display: block;
            width: 85%;
            background: linear-gradient(to right, rgb(230, 204, 132), rgb(252, 185, 3));
            border-radius: 1.3vw;
            color: #fff;
            font-size: 17px;
            padding: 4vw;
            margin: 0 auto;
            text-align: center;
            &:active {
                background: @cl;
            }
        }

    }

    .pay-confirm {
        box-sizing: border-box;
        padding-top: 32vw;
        // background-color: @cl;
        text-align: center;
        color: rgb(15, 15, 15);
        line-height: 30px;
        .fz(font-size,40);
        .content {
          img{
            width: 20vw;
            height: 20vw;
          }
          h3 {
            font-size: 5vw;
          }
          .explain {
            font-size: 4vw;
            color: rgb(173, 170, 170);
          }
          .payPrice {
            margin-top: 4vw;
            font-size: 10.5vw;
          }
          .btn {
            margin-top: 55vw;
            display: flex;
            justify-content: space-around;
            button {
              width: 40vw;
              padding: 4vw 0;
              font-size: 5vw;
              border-radius: 8vw;        
            }
            .goto-shop {
              color: #fff;
                background: rgb(236, 208, 117);                      
              background: linear-gradient( left,rgb(231, 205, 120),rgb(247, 139, 38));
              &:active {
                background: rgb(236, 198, 74);        
              }
            }
            .look-order {
              background: #fff;
              color:  rgb(236, 198, 74);
              border: 1px solid  rgb(236, 198, 74);
              &:active {
                color: #fff;
                background: rgb(236, 198, 74);        
              }
            }
          }
        } 
        
    }
}
</style>
