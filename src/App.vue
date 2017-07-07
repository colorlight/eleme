<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="items border1px">
      <div class="item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="item">
        <router-link to="/sellers">卖家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header'
  const ERR_OK = 0
  export default {
    name: 'app',
    components: {
      'v-header': header
    },
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.seller = response.data
        }
      })
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import 'common/scss/mixin.scss';
  @import "common/fonts/fonts.css";
  #app {
    .items {
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      @include border-1px(rgba(7,17,27,0.1));
      .item {
        flex-grow: 1;
        a{
          display: block;
          text-decoration: none;
          color: rgb(77,85,93);
          font-size: 14px;
          &.active{
            color:rgb(240,20,20);
          }
        }

      }
    }
  }
</style>
