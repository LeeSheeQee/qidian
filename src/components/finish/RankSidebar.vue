<template>
  <div class="rank-sidebar">
    <div class="site">
      <a href="">男生</a><a href="">女生</a><a href="">出版</a>
    </div>
    <div class="rank ">
      <p class="rank-title">已选</p>
      <div class="all"><a href="" class="rank-des">全部</a></div>
    </div>
    <div class="rank ">
      <p class="rank-title">分类</p>
      <div class="classify">
        <a href="" class="active">全部</a><a href=""
      >玄幻</a><a href=""
      >科幻</a><a href=""
      >武侠</a><a href=""
      >仙侠</a><a href=""
      >都市</a><a href=""
      >现实</a><a href=""
      >军事</a><a href=""
      >历史</a><a href=""
      >游戏</a><a href=""
      >体育</a><a href=""
      >科幻</a><a href=""
      >灵异</a><a href=""
      >二次元</a><a href=""
      >短篇</a>
      </div>
    </div>
    <div class="rank ">
      <p class="rank-title">状态</p>
      <div class="classify">
        <a href="" class="active">全部</a><a href=""
      >连载</a><a href="">
        完本
      </a>
      </div>
    </div>
    <div class="rank ">
      <p class="rank-title">属性</p>
      <div class="classify">
        <a href="" class="rank-des">全部</a><a href=""
      >免费</a><a href=""
      >VIP</a>
      </div>
    </div>
    <div class="rank ">
      <p class="rank-title">字数</p>
      <div class="classify">
        <a href="" class="rank-des active">全部</a><a href=""
      >30万字以下</a><a href=""
      >30-50万字</a><a href=""
      >50-100万字</a><a href=""
      >100万-200万字</a><a href=""
      >200万以上</a>
      </div>
    </div>
    <div class="rank ">
      <p class="rank-title">品质</p>
      <div class="classify">
        <a href="" class="active">全部</a><a href=""
      >签约作品</a><a href=""
      >精品小说</a>
      </div>
    </div>
    <div class="rank ">
      <p class="rank-title">更新时间</p>
      <div class="classify">
        <a href="" class="active">全部</a><a href=""
      >三日内</a><a href=""
      >七日内</a><a href=""
      >半月内</a><a href=""
      >一月内</a>
      </div>
    </div>
    <div class="rank tags">
      <p class="rank-title">标签</p>
      <div class="classify">
        <a href="" class="active">全部</a><a href=""
      >豪门</a><a href=""
      >孤儿</a><a href=""
      >特工</a><a href=""
      >盗墓</a><a href=""
      >黑客</a><a href=""
      >明星</a><a href=""
      >特种兵</a><a href=""
      >杀手</a><a href=""
      >老师</a><a href=""
      >学生</a><a id="open" v-show="!isShow" v-on:click="isShow=true"
      >展开 <font-awesome-icon :icon="['fas','chevron-down']"/></a><a href="" v-show="isShow"
      >魔法</a><a href="" v-show="isShow"
      >卡片</a><a href="" v-show="isShow"
      >穿越</a><a href="" v-show="isShow"
      >无限流</a><a href="" v-show="isShow"
      >重生</a><a href="" v-show="isShow"
      >僵尸</a><a href="" v-show="isShow"
      >丧尸</a><a href="" v-show="isShow"
      >嚣张</a><a href="" v-show="isShow"
      >后宫</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'RankSidebar',
        data() {
          return {
            isShow: false
          }
        },
        mounted() {

        },
        methods: {

        }
    }
</script>


<style scoped>
  .rank-sidebar{width: 216px;}
  .site>a{width: 60px;  height: 28px; display: inline-block;  font-weight: 700; font-size: 12px; color: #262626;  border-bottom: 1px solid #ebebeb; background-color: #fff; text-align: center; line-height: 28px;}
  .site>a:first-child{color: #ed4259; border-top: 2px solid #ed4259;  border-left: 1px solid #ebebeb; border-right: 1px solid #ebebeb;  border-bottom: 1px solid #fff;}
  .site>a:hover{color: #ed4259; }
  /*选择框*/
  .rank{border-bottom: 1px solid #ebebeb; margin-bottom: 15px;}
  .rank-title{font-size: 14px;  font-weight: 700; margin-bottom: 10px;}
  .all,.classify{ margin-bottom: 16px;}
  .all>a{font-size: 12px; color: #fff;  background-color: #ed4259; border: 1px solid #ed4259; padding: 2px 3px; margin-right: 8px; margin-bottom: 8px;  display: inline-block;}
  .classify>a.active{background-color: #262626; border: 1px solid #262626; color: #fff;}
  .classify>a{font-size: 12px; color: #262626;  background-color: #fff; border: 1px solid #fff; padding: 2px 3px; margin-right: 8px; margin-bottom: 8px; display: inline-block;}
  .classify>a:hover{color: #ed4259;}
  .classify>a.active:hover{color: #fff;}
  .tags{border-bottom: none;}
  #open{color: #3f5a93; cursor: pointer;}
  #open:hover{color: #2972cc;}
</style>
