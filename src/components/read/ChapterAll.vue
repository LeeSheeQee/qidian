<template>
  <div class="chapter">
    <h3 class="chapter-title">正文卷·共{{msg.free.number}}章
      <em class="free">免费</em>
      <span>本卷共{{msg.free.words}}字</span>
      <a href=""><font-awesome-icon :icon="['fas','file-alt']"/>分卷阅读</a>
    </h3>
    <ul class="chapter-bd">
      <li v-for="(f, index) in msg.free.all" v-bind:class="{'line': msg.free.number%3===0&&(index === msg.free.number-1||index === msg.free.number-2||index === msg.free.number-3)||msg.free.number%3===2&&(index === msg.free.number-1||index === msg.free.number-2)||msg.free.number%3===1&&(index === msg.free.number-1)}">
        <a href="">{{f}}</a>
      </li>
    </ul>

    <h3 class="chapter-title">正文卷·共{{msg.vip.number}}章
      <em class="vip">VIP</em>
      <span>本卷共{{msg.vip.words}}字</span>
      <a href=""><font-awesome-icon :icon="['fas','file-alt']"/>订阅本卷</a>
    </h3>
    <ul class="chapter-bd">
      <li v-for="(v,index) in msg.vip.all" v-bind:class="{'line': msg.vip.number%3===0&&(index === msg.vip.number-1||index === msg.vip.number-2||index === msg.vip.number-3)||msg.vip.number%3===2&&(index === msg.vip.number-1||index === msg.vip.number-2)||msg.vip.number%3===1&&(index === msg.vip.number-1)}">
        <a href="">{{v}}</a>
        <em><font-awesome-icon :icon="['fas','lock']"/></em>
      </li>
    </ul>

  </div>
</template>

<script>
    export default {
        name: 'ChapterAll',
        props: ['msg'],
        mounted() {
          console.log(this.msg)
        }
    }
</script>


<style scoped>
  .chapter{width: 100%;}
  .chapter-title{margin-bottom: 15px;}
  .chapter-title>em{display: inline-block;  font-size: 12px;  line-height: 16px;   color: #fff;  font-style: normal; padding: 0 3px; margin-left:5px; }
  .chapter-title>em.free{background-color: #8ccd0a;}
  .chapter-title>em.vip{background-color: #fc6c28;}
  .chapter-title>span{font-size: 16px;  line-height: 19px;  color:#666; margin-left: 5px; font-weight: normal;}
  .chapter-title>a{display: block;  float: right; width: 96px;  height: 28px; line-height: 28px;  font-size: 12px;  color: #fff;  background-color: #bf2c24;text-align: center; font-weight: normal;
    -webkit-transition: background-color .5s;
    -moz-transition: background-color .5s;
    -ms-transition: background-color .5s;
    -o-transition: background-color .5s;
    transition: background-color .5s;}
  .chapter-title>a:hover{background-color: #ed4259;}

  .chapter-bd{width: 1050px;  border-top: 1px solid #666; margin-bottom: 50px;}
  .chapter-bd:after{content:'.'; display: block;  visibility: hidden; height: 0;  clear: both;}
  .chapter-bd>li{float: left; width: 350px; height: 40px; font-size: 14px;  line-height: 40px;  border-bottom: 1px solid #ebebeb; padding-right: 60px;}
  .chapter-bd>li.line{border-color: #fff;}
  .chapter-bd>li>a{float: left;  max-width: 240px; height: 40px; overflow: hidden; color: #262626;
    -webkit-transition: color .3s, background-color .3s;
    -moz-transition: color .3s, background-color .3s ;
    -ms-transition: color .3s, background-color .3s ;
    -o-transition: color .3s, background-color .3s ;
    transition: color .3s, background-color .3s ;}
  .chapter-bd>li>a:hover{ color: #ed4259;}
  .chapter-bd>li>em{  font-size: 16px;  color: #bfbfbf; float: right;}
</style>
