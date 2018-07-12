<template>
  <div class="rank-side">
    <ul>
      <li class="hot">
        <a href="#">人气榜单&nbsp;&nbsp;<font-awesome-icon :icon="['fas','caret-right']"/></a>
      </li>
      <li class="rank-title">热门作品排行</li>
      <li class="item">
        <a href="">原创风云榜</a>
      </li>
      <li class="item">
        <a href="">24小时热销榜</a>
      </li>
      <li class="item">
        <a href="">原创风云榜</a>
      </li>
      <li class="item">
        <a href="">新锐会员周点击榜</a>
      </li>
      <li class="item">
        <a href="">会员点击榜</a>
      </li>
      <li class="item">
        <a href="">推荐票榜</a>
      </li>
      <li class="item">
        <a href="">收藏榜</a>
      </li>
      <li class="item">
        <a href="">VIP更新榜</a>
      </li>
      <li class="item">
        <a href="">VIP收藏榜</a>
      </li>
      <li class="item">
        <a href="">VIP精品打赏榜</a>
      </li>
      <li class="item">
        <a href="">完本榜</a>
      </li>
      <li class="rank-title">新书排行</li>
      <li class="item">
        <a href="">签约作家新书榜</a>
      </li>
      <li class="item">
        <a href="">公众作者新书榜</a>
      </li>
      <li class="item">
        <a href="">新人签约新书榜</a>
      </li>
      <li class="item">
        <a href="">新人作者新书榜</a>
      </li>
      <li class="rank-title">社区排行</li>
      <li class="item">
        <a href="">打赏粉丝榜</a>
      </li>
      <li class="rank-title">其他排行</li>
      <li class="item">
        <a href="">女生精选榜</a>
      </li>
      <li class="item">
        <a href="">女生原创风云榜</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'RankSide'
    }
</script>


<style scoped>
  .rank-side{width:216px; margin-right:30px;}
  .hot{font-size: 14px; margin-bottom: 20px;}
  .hot>a{color: #ed4259;  font-weight: 700;}
  .rank-title{font-size: 14px;  margin-bottom: 18px;  color: #262626; border-top: 1px solid #e6e6e6;  padding-top: 17px;  font-weight: bold;}
  .item{margin-bottom: 20px; }
  .item>a{font-size: 14px; color:#262626; }
  .item>a:hover{color: #ed4259;  }
</style>
