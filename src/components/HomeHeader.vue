<template>
  <div id="head" v-show="headShow">
    <div class="top">
      <div class="header">
        <div class="all-size">
          <a href="" class="active">起点中文网</a>
          <a href="">起点女生网</a>
          <em class="line">|</em>
          <a href="">创世中文网</a>
          <em class="line">|</em>
          <a href="">云起书院</a>
          <em class="line">|</em>
          <a href="">繁体版</a>
        </div>
        <div class="user">
          <a href="" class="login">登录</a>
          <em class="line">|</em>
          <a href="" class="register">注册</a>
        </div>
      </div>
    </div>
    <div class="logo-wrap">
      <div class="logo">
        <a href="/">
          <img src="../assets/logo.beebc.png" alt="">
        </a>
      </div>
      <div class="search">
        <input type="text" placeholder="传奇故事"><button
        class="search-btn"><font-awesome-icon :icon="['fas','search']"/></button>
      </div>
      <div class="book-shelf">
        <a href="">
          <span><font-awesome-icon :icon="['fas','bookmark']"/></span>
          <span>我的书架</span>
        </a>
      </div>
    </div>
    <div id="nav">
      <ul class="nav">
        <li class="classify">
          <a><font-awesome-icon :icon="['fas','bars']"/>&nbsp;作品分类</a>
          <ul class="classify-list" v-show="isShow">
            <li class="s0">
              <p class="story-type">玄幻</p>
              <p class="story-num">65402</p>
            </li>
            <li class="s1">
              <p class="story-type">奇幻</p>
              <p class="story-num">65402</p>
            </li>
            <li class="s2">
              <p class="story-type">武侠</p>
              <p class="story-num">65402</p>
            </li>
            <li class="s3">
              <p class="story-type">仙侠</p>
              <p class="story-num">65402</p>
            </li>
            <li class="s4">
              <p class="story-type">都市</p>
              <p class="story-num">65402</p>
            </li>
            <li class="s5">
              <p class="story-type">现实</p>
              <p class="story-num">65402</p>
            </li>
            <li class="s6">
              <p class="story-type">军事</p>
              <p class="story-num">65402</p>
            </li>
            <li class="s7">
              <p class="story-type">历史</p>
              <p class="story-num">65402</p>
            </li>
            <li class="s8">
              <p class="story-type">游戏</p>
              <p class="story-num">65402</p>
            </li>
            <li class="s9">
              <p class="story-type">体育</p>
              <p class="story-num">65402</p>
            </li>
            <li class="s10">
              <p class="story-type">科幻</p>
              <p class="story-num">65402</p>
            </li>
            <li class="s11">
              <p class="story-type">灵异</p>
              <p class="story-num">65402</p>
            </li>
            <li class="s12">
              <p class="story-type">女生网</p>
              <p class="story-num">65402</p>
            </li>
            <li class="s13">
              <p class="story-type">二次元</p>
              <p class="story-num">65402</p>
            </li>

          </ul>
        </li>
        <li class="item">
          <router-link v-bind:to="{path: 'all'}" tag="a">全部作品</router-link>
        </li>

        <li class="item">
          <router-link v-bind:to="{path: 'rank'}" tag="a">排行</router-link>
        </li>
        <li class="item">
          <router-link v-bind:to="{path: 'finish'}" tag="a">完本</router-link>
        </li>
        <li class="item">
          <router-link v-bind:to="{path: 'free'}" tag="a">免费</router-link>
        </li>
        <li class="item">
          <a href="https://write.qq.com/public/login.html" target="_blank">作家专区</a>
        </li>
        <li class="item">
          <a href="https://www.yuewen.com/app.html#appqd" target="_blank">客户端</a>
        </li>
        <li class="web-game">
          <a><font-awesome-icon :icon="['fas','gamepad']"/>&nbsp;手游</a>
        </li>
        <li class="phone-game">
          <a><font-awesome-icon :icon="['fas','trophy']"/>&nbsp;页游</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
        data() {
          return {
            isShow: false,
            headShow: true
          }
        },
        created() {
          this.CheckHead();
        },
        watch: {
          '$route' (to, from) {

            let re =new RegExp(/\/book/)
            if(re.test(to)) {
              this.headShow = false;
            }
            if( to === '/') {
              this.isShow = false;
            }else {
              this.isShow = true;
            }
          }
        },
        mounted() {
         let path = this.$route.path;

         if(path === '/') {
           this.isShow = false;
         }else {
           this.isShow = true;
         }
        },
        methods: {
          CheckHead() {
            let path = this.$route.path;
            let re =new RegExp(/\/book/)
            if(re.test(path)) {
              this.headShow = false;
            }
          }
        }
    }
</script>


<style scoped>
  #head{
    width: 100%;
  }

  .top {
    width: 100%;
    background: #f7f7f7;
    border-bottom: 1px solid #e5e5e5;
  }

  .header{
    width: 1200px;
    height: 35px;
    margin: 0 auto;
  }

  .all-size{
    float: left;
  }

  .all-size>a{
    display: inline-block;
    height: 36px;
    color: gray;
    border: 1px solid transparent;
    font-size: 12px;
    line-height: 36px;
    text-align: center;
  }

  .all-size>a.active{
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    background: #fff;
    color: #575757;
    width: 82px;
    max-width: 82px;
    margin-right: 10px;
  }

  .line{
    color: #d9d9d9;
    margin: 0 10px;
  }

  .user{
    float: right;
  }

  .user>a{
    display: inline-block;
    height: 36px;
    line-height:36px;
    text-align: center;
    font-size: 12px;
    color: gray;
  }

  .user>a.login{
    color: #575757;
  }

  .logo-wrap{
    width: 1200px;
    margin: 0 auto;
    height: 70px;
  }

  .logo{
    float: left;
    width: 218px;
    height: 55px;
    margin-right: 218px;
    padding-top: 14px;
  }

  .logo>a>img{
    width: 218px;
    height: 55px;
  }

  .search{
    float: left;
    width: 390px;
    padding-top: 22px;
  }

  .search>input{
    width: 326px;
    height: 40px;
    padding: 0 11px;
  }

  .book-shelf{
    float: right;
    width: 120px;
    height: 40px;
    border: 1px solid #e6e6e6;
    margin-top: 22px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
  }

  .search-btn{
    width: 40px;
    height: 40px;
    background: #bf2c24;
    border: none;
    vertical-align: bottom;
    color: #fff;
    font-size: 16px;
  }

  #nav{
    width: 100%;
    height: 42px;
    margin-bottom: 10px;
    background: #3e3d43;
    margin-top: 10px;
  }

  .nav{
    width: 1200px;
    height: 42px;
    margin: 0 auto;
  }

  .nav>li{
    text-align: center;
    height: 42px;
    cursor: pointer;
  }

  .nav>.item{
    float: left;
  }

  .nav>li.classify{
    width: 216px;
    background: #313035;
    padding-left: 18px;
    float: left;
    position: relative;
  }
  .nav>li.classify:hover>.classify-list{display: block;}
  .classify-list{position: absolute;  top: 42px; left:0; width: 216px; height: 421px;  border: 1px solid #e6e6e6;  background-color: #F7F6F2; display: none;}
  .classify-list>li{float: left;  width: 50%; height: 60px; text-align: center; padding-top: 15px;  padding-left: 24px; cursor: pointer;}
  .classify-list>li:hover{background-image: url('../assets/type2.png')}
  .classify-list>li:hover p{color: #ed4259;}
  .story-type{color: #000; font-size: 14px;}
  .story-num{color: #999; font-size: 12px;}
  .s0{background: no-repeat url('../assets/type.png') 15px 20px;}
  .s1{background: no-repeat url('../assets/type.png') 15px -380px;}
  .s2{background: no-repeat url('../assets/type.png') 15px -40px;}
  .s3{background: no-repeat url('../assets/type.png') 15px -435px;}
  .s4{background: no-repeat url('../assets/type.png') 15px -105px;}
  .s5{background: no-repeat url('../assets/type.png') 15px -500px;}
  .s6{background: no-repeat url('../assets/type.png') 15px -165px;}
  .s7{background: no-repeat url('../assets/type.png') 15px -562px;}
  .s8{background: no-repeat url('../assets/type.png') 15px -222px;}
  .s9{background: no-repeat url('../assets/type.png') 15px -620px;}
  .s10{background: no-repeat url('../assets/type.png') 15px -280px;}
  .s11{background: no-repeat url('../assets/type.png') 15px -680px;}
  .s12{background: no-repeat url('../assets/type.png') 15px -337px;}
  .s13{background: no-repeat url('../assets/type.png') 15px -740px;}


  .nav>li.classify>span{
    border-top: 2px solid transparent!important;
  }

  #nav>.nav>li>span:hover{
    background: #313035;
    border-top: 2px solid #ed4259;
  }

  .nav>li>a{
    display: inline-block;
    float: left;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    border-top: 2px solid transparent;
  }

  .nav>.item>a{
    padding: 0 32px;
  }

  .web-game,.phone-game{
    float: right;
  }

  .phone-game>a{
    padding-right: 20px;
  }


</style>
