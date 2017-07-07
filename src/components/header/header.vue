<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports" @click="showDetail">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
        <div class="support-count" v-if="seller.supports">
          <div class="count">{{seller.supports.length}}个
            <i class="iconfont right-arrow"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-content">{{seller.bulletin}}</span>
      <i class="iconfont right-arrow"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100% "></img>
    </div>
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper">
        <div class="detail-content">
          <!--{{seller.supports}}-->
        </div>
      </div>
      <div class="detail-close">
        <i class="close-btn"></i>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    props: ['seller'],
    data() {
        return {
            detailShow: false
        }
    },
    methods: {
        showDetail() {
            this.detailShow = true
        }
    },
    created() {
        this.classMap = ['decrease', 'discount', 'special', 'invoice',
        'guarantee']
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../../common/scss/mixin.scss";

  .header{
    position: relative;
    color: #fff;
    background: rgba(7, 17, 27, 0.5);
    overflow: hidden;
    .content-wrapper{
      position: relative;
      padding: 24px 12px 18px 24px;
      font-size: 0;
      .avatar{
        display: inline-block;
        vertical-align: top;
        img{
          -webkit-border-radius: 2px;
          -moz-border-radius: 2px;
          border-radius: 2px;
        }
      }
      .content{
        display: inline-block;
        margin-left: 16px;
        font-size: 14px;
        .title{
          margin: 2px 0 8px 0;
          .brand{
            display: inline-block;
            margin-right: 6px;
            width: 30px;
            height: 18px;
            @include bg-image("brand");
            background-size: 30px 18px;
            background-repeat: no-repeat;
            vertical-align: top;
          }
          .name{
            font-size: 16px;
            color: rgb(255,255,255);
            font-weight: bold;
            line-height: 18px;
          }
        }
        .description{
          font-size: 12px;
          color: rgb(255,255,255);
          font-weight: 200;
          line-height: 24px;
          margin-bottom: 10px;
        }
        .support{
          margin-bottom: 2px;
          font-size: 0px;
          .icon{
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease{
              @include bg-image("decrease_1");
            }
            &.discount{
              @include bg-image("discount_1");
            }
            &.guarantee{
              @include bg-image("guarantee_1");
            }
            &.invoice{
              @include bg-image("invoice_1");
            }
            &.special{
              @include bg-image("special_1");
            }
          }
          .text{
            font-size: 10px;
            color: rgb(255,255,255);
            font-weight: 200;
            line-height: 12px;
          }
        }
        .support-count{
          position: absolute;
          right: 12px;
          bottom: 18px;
          height: 24px;
          padding: 0 8px;
          line-height: 24px;
          border-radius: 14px;
          background-color: rgba(0,0,0,0.2);
          text-align: center;
        }
      }
      .bulletin-wrapper{
        .bulletin-title{
          display: inline-block;
          width: 22px;
          height: 12px;
        }
      }
    }
    .bulletin-wrapper{
      position: relative;
      height: 28px;
      padding: 0 22px 0 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 28px;
      background-color: rgba(7,17,27,0.2);
      .bulletin-title{
        display: inline-block;
        margin-right: 4px;
        vertical-align: top;
        width: 22px;
        height: 12px;
        margin-top: 10px;
        @include bg-image('bulletin');
        background-size: 22px 12px;
        background-repeat: no-repeat;
      }
      .bulletin-content{
        font-size: 10px;
        font-weight: 200;
      }
      .right-arrow{
        position: absolute;
        right: 4px;
        top: 2px;
      }
    }
    .background{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      filter: blur(10px);
    }
    .detail{
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(7,17,27,0.8);
      overflow: auto;
      z-index: 100;
      .detail-wrapper{
        min-height: 100%;
        .detail-content{
          /*margin-top: 64px;*/
          padding-bottom: 64px;
        }
      }
      .detail-close{
        text-align: center;
        margin: -50px auto 0 auto;
        width: 32px;
        height: 32px;
        vertical-align: baseline;
        line-height:32px;
        font-size: 12px;
      }
    }
  }
</style>
