<template>
  <div class="fix-nav">
    <div class="content">
      <ul class="content-left">
        <li class="logo">
          <a href="#">
            <span></span>
          </a>
          <div class="dropdown">
            <a href="">起点女生网</a>
            <a href="">创世中文网</a>
            <a href="">云起书院</a>
          </div>
        </li>
        <li>
          <a href="">玄幻</a>
        </li>
        <li>
          <a href="">都市</a>
        </li>
        <li>
          <a href="">仙侠</a>
        </li>
        <li>
          <a href="">科幻</a>
        </li>
        <li>
          <a href="">游戏</a>
        </li>
        <li>
          <a href="">历史</a>
        </li>
        <li>
          <a href="">排行</a>
        </li>
        <li class="more">
          <a href="">更多
            <span></span>
          </a>
          <div class="dropdown">
            <a href="">全部作品</a>
            <a href="">二次元</a>
            <a href="">奇幻</a>
            <a href="">武侠</a>
            <a href="">灵异</a>
            <a href="">军事</a>
            <a href="">现实</a>
            <a href="">体育</a>
            <a href="">短篇</a>
          </div>
        </li>
      </ul>
      <ul class="content-right">
        <li class="search">
          <input type="text" placeholder="逆流纯真年代">
          <font-awesome-icon :icon="['fas','search']"/>
        </li>
        <li class="line">

        </li>
        <li class="login">
          <a href="">
            <span id="login">登录</span>
            <span id="register">注册</span>
          </a>
        </li>
        <li class="line"></li>
        <li class="shelf">
          <a href=""><font-awesome-icon :icon="['fas','bookmark']"/> 我的书架</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'FixNav'
    }
</script>


<style scoped>
  .fix-nav{width: 100%; height: 42px; background: #3e3d43;  -webkit-box-shadow: 0 2px 6px rgba(0,0,0,.4) ;  -moz-box-shadow: 0 2px 6px rgba(0,0,0,.4);  box-shadow: 0 2px 6px rgba(0,0,0,.4) ;}
  .content{width: 1200px; margin: 0 auto; height: 42px;}
  .content-left{float: left;}
  .content-left>li{float: left; height: 42px; border-top: 2px solid transparent;}
  .content-left>li:hover{border-top: 2px solid #ed4259; background-color: #262626;}
  .content-left>li.logo{margin-right: 28px; width: 125px; position: relative;}
  .content-left>li>a{display: block;  height: 42px; padding: 0 15px;  font-size: 14px; width: 58px; color: #ccc;  line-height: 42px;}
  .content-left>li.logo>a{width: 125px;  background: url('../assets/pin_logo_1x.6068b.png') no-repeat 10px center; position: relative;}
  .logo>a>span{position: absolute; top: 19px; right: 10px;  width: 0; height: 0; border-top: 4px solid #ccc;  border-left: 4px solid transparent; border-right: 4px solid transparent;  border-bottom: none;}
  .content-left>li.more{width: 76px; position: relative;}
  .content-left>li.more>a{width: 76px;  position: relative;}
  .more>a>span{position: absolute; top: 19px; right: 15px;  width: 0; height: 0; border-top: 4px solid #ccc;  border-left: 4px solid transparent; border-right: 4px solid transparent;  border-bottom: none;}

  /*下拉*/
  .dropdown{position: absolute; top: 40px;  left:0; width: 100%;  height: 0;  overflow: hidden;}
  .dropdown>a{  display: block; width: 100%;  height: 42px; line-height: 42px;  padding: 0 15px;  font-size: 14px; color: #ccc;  background: #3e3d43; }
  .dropdown>a:hover{ background-color: #000; }
  .content-left>li.logo:hover>.dropdown{height: auto;}
  .content-left>li.logo:hover>a>span{border-top: none; border-bottom: 4px solid #ccc; }
  .content-left>li.more:hover>.dropdown{height: auto;}
  .content-left>li.more:hover>a>span{border-top: none; border-bottom: 4px solid #ccc; }
  /*content right*/
  .content-right{float: right}
  .content-right>li{float: left;  height: 42px; line-height: 42px;}
  .content-right>.shelf:hover{ background-color: #262626;}
  .content-right>li>a{display: block; padding: 0 15px;  color: #ccc;  font-size: 14px;}
  .login>a>span:hover{color: #fff;}
  #login{margin-right: 5px;}
  .content-right>.search{color: rgba(255,255,255,.7); cursor: pointer;  margin-right: 10px;}
  .content-right>li>input{width: 150px; height: 26px; color: rgba(255,255,255,.7);  background-color: #3e3d43;  border: none; border-bottom: 1px solid #aaa!important;  outline: none;}
  .content-right>li.login>a{padding: 0 5px!important;}
  .content-right>.line{    height: 24px;  margin: 10px 0 0 10px;  border-right: 1px solid #515056;}
</style>
