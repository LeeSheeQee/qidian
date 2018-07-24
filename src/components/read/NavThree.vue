<template>
  <div class="nav-three">
    <div>
      <ul class="n-l">
        <li class="logo">
          <a href=""></a>
          <div class="n-site">
            <a href=""></a>
            <div>
              <a href="">起点中文网</a>
              <a href="">创世中文网</a>
              <a href="">云起书院</a>
            </div>
          </div>
        </li>
        <li class="item mobile">
          手机阅读
          <div>
            <p>扫描下载起点读书客户端</p>
            <img src="../../assets/qd_qrcode.f4f94.png" alt="">
            <a href=""><em><font-awesome-icon :icon="['fab','apple']"/></em> App store 下载</a>
            <a href=""><em><font-awesome-icon :icon="['fab','android'] "/> </em>Android 下载</a>
          </div>
        </li>
        <li class="item read">
          最近阅读
          <div>
            <div>
                <div class="read-img">
                  <a href="">
                    <img src="//qidian.qpic.cn/qdbimg/349573/1011486666/90" alt="">
                  </a>
                  <span></span>
                </div>
                <div class="read-msg">
                  <h4>
                    <a href="">大医凌然</a>
                  </h4>
                  <p>最新章节: <span class="read-new">第126章 推拿揉点按</span></p>
                  <p>看到 <span class="read-see">第一章 我不是精神病</span></p>
                </div>
              </div>
            <div>
              <div class="read-img">
                <a href="">
                  <img src="//qidian.qpic.cn/qdbimg/349573/1010475081/90" alt="">
                </a>
                <span></span>
              </div>
              <div class="read-msg">
                <h4>
                  <a href="">深空之下</a>
                </h4>
                <p>最新章节: <span class="read-new">一百四十六章 半年！</span></p>
                <p>看到 <span class="read-see">第一章 第一章 地球毁灭</span></p>
              </div>
            </div>
            <div>
              <div class="read-img">
                <a href="">
                  <img src="//qidian.qpic.cn/qdbimg/349573/1011325386/90" alt="">
                </a>
                <span></span>
              </div>
              <div class="read-msg">
                <h4>
                  <a href="">量子意志</a>
                </h4>
                <p>最新章节: <span class="read-new">第九十六章：机械之心（9）</span></p>
                <p>看到 <span class="read-see">序章</span></p>
              </div>
            </div>
            <p class="more">查看更多 <font-awesome-icon :icon="['fas','chevron-right'] "/> </p>
          </div>
        </li>
        <li class="item list">
          <em><font-awesome-icon :icon="['fa','bars']"/></em>
          快速阅读
          <div>
            <h3>分类频道</h3>
            <a href="">玄幻</a>
            <a href="">武侠</a>
            <a href="">仙侠</a>
            <a href="">都市</a>
            <a href="">现实</a>
            <a href="">历史</a>
            <a href="">军事</a>
            <a href="">游戏</a>
            <a href="">体育</a>
            <a href="">科幻</a>
            <a href="">灵异</a>
            <a href="">二次元</a>
            <a href="">完本</a>
            <a href="">女生</a>
            <a href="">三江</a>
            <div class="clear"></div>
            <h3>其他</h3>
            <a href="">投稿</a>
            <a href="">签约</a>
            <a href="">福利</a>
          </div>
        </li>
        <!--<li class="item">-->
          <!--快速导航-->
          <!--<div>-->
            <!--<p>扫描下载起点读书客户端</p>-->
            <!--<img src="../../assets/qd_qrcode.f4f94.png" alt="">-->
          <!--</div>-->
        <!--</li>-->

      </ul>
      <ul class="n-r">
        <li class="login">
          <a href="">登录</a>
          <a href="">注册</a>
          <a href="">充值</a>
        </li>
        <li class="search">
          <form action="">
            <input type="text" placeholder="超级城市制造商">
            <em><font-awesome-icon :icon="['fas','search']"/></em>
            <i></i>
          </form>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'NavThree'
    }
</script>


<style scoped>
  .nav-three{width: 100%; height: 60px; margin-bottom: 16px;  background-color: rgba(255,255,255,.4);}
  .nav-three>div{width: 1200px; height: 60px; margin: 0 auto;}
  .n-l{float: left; height: 60px;}
  .n-l>li{float: left; cursor: pointer;}
  .n-r{float: right;}
  .n-r>li{float: right; height: 60px;}

  .logo{}
  .logo>a{display: block; width: 32px;  height: 32px;  background: no-repeat url('../../assets/logo.d41d3.png');  float: left;  margin-top: 14px;}
  .n-site{float: left;  width: 128px; height: 60px;  position: relative;  padding-left: 12px; border-top: 2px solid transparent;}
  .n-site>a{display: block; width: 128px; height: 60px; background: no-repeat url('../../assets/pin_logo_black_1x.9c2fd.png') 5px 20px; }
  .n-site:hover>div{display: block; top: 58px;}
  .n-site>div{position: absolute; top: 50px;width: 128px;  left: 0;  display: none;box-shadow: 0 2px 4px rgba(0,0,0,.2);z-index: 200; background-color: #fff;
    -webkit-transition: top 0.3s;
    -moz-transition: top 0.3s;
    -ms-transition: top 0.3s;
    -o-transition: top 0.3s;
    transition: top 0.3s;}
  .n-site>div>a{font-size: 14px;  height: 36px; line-height: 36px;  display: block; color: #262626; text-align: center; width: 128px;}
  .n-site>div>a:hover{background-color: #FAFAFA;}

  .item{padding: 0 12px;  font-size: 14px;  line-height: 60px;  color: #262626; position: relative;}
  .item>div{position: absolute; top: 60px;  left: 0;  z-index: 200; background-color: #fff;}
  .mobile:hover>div{display: block;}
  .mobile>div{width: 220px; text-align: center; padding: 24px 24px 0 24px;  background-color: #fff; display: none;box-shadow: 0 2px 4px rgba(0,0,0,.2);
    -webkit-transition: height 0.3s;
    -moz-transition: height 0.3s;
    -ms-transition: height 0.3s;
    -o-transition: height 0.3s;
    transition: height 0.3s;}
  .mobile>div>p{color: #262626; font-size: 14px;  line-height: 20px;  margin-bottom: 24px;}
  .mobile>div>img{width: 96px;  height: 96px; border: 1px solid #d8d8d8;  padding: 8px; margin-bottom: 24px;}
  .mobile>div>a{width: 174px; height: 42px; line-height: 40px;font-size: 12px; border: 1px solid #d8d8d8; background-color: #f7f7f7;  display: block; margin-bottom: 24px;}
  .mobile>div>a>em{ font-size: 24px;  line-height: 40px; float: left; margin-left: 30px;}
  .mobile>div>a:hover{color: #ED4259;}

  .read>div{width: 400px; display: none;   -webkit-transition: height 0.3s;box-shadow: 0 2px 4px rgba(0,0,0,.2);
    -moz-transition: height 0.3s;
    -ms-transition: height 0.3s;
    -o-transition: height 0.3s;
    transition: height 0.3s;}
  .read:hover>div{display: block;}
  .read>div>div{height: 131px; padding: 15px 10px 10px 10px;  border-bottom: 1px solid #d8d8d8; background-color: #fff;}
  .read>div>div:hover{background-color: #F2F2F2;}
  .read>div>div:last-child{border-bottom: 1px solid #fff;}
  .read-msg>div>div:after{content:'.';  height: 0;  visibility: hidden; clear: both;  display: block;}
  .read-img{z-index: 4;float: left;  width: 52px;  height: 91px; position: relative;  -webkit-transform: perspective(60px) rotateY(-10deg);  -moz-transform: perspective(60px) rotateY(-10deg);  -ms-transform: perspective(60px) rotateY(-10deg);  -o-transform: perspective(60px) rotateY(-10deg);  transform: perspective(60px) rotateY(-10deg);}
  .read-img:after{    position: absolute;  z-index: 20;  top: 2%;  left: 100%;  width: 10%;  height: 92%;  content: ' ';  -webkit-transform: perspective(60px) rotateY(30deg);  -moz-transform: perspective(60px) rotateY(30deg);  transform: perspective(60px) rotateY(30deg);  background-color: #efefef;  box-shadow: inset 0 0 5px #333;}
  .read-img>a{z-index: 10; display: inline-block;  -webkit-transform: translateZ(50px);  -moz-transform: translateZ(50px);  -ms-transform: translateZ(50px);  -o-transform: translateZ(50px);  transform: translateZ(50px);  position: relative;}
  .read-img>span{position: absolute;  z-index: 1;  top: 84.1%;  left: 7px;  width: 20px;  height: 10px;  content: '';  -webkit-transform: perspective(74px) rotateX(-70deg) rotateY(-5deg);  -moz-transform: perspective(74px) rotateX(-70deg) rotateY(-5deg);  -ms-transform: scale(0);  transform: perspective(74px) rotateX(-70deg) rotateY(-5deg);  box-shadow: 25px 0 5px 5px #adadad;}
  .read-msg{float: left; margin: 10px 0 0 18px; width: 290px;}
  .read-img>a>img{width: 57px;  height: 87px;}
  .read-msg>h4{font-size: 16px; height: 24px; line-height: 24px;  font-weight: normal;}
  .read-msg>h4>a:hover,.read-msg>p>.read-see:hover{color: #ED4259;}
  .read-msg>p{font-size: 12px;  height: 24px; line-height: 24px;  color: #666;  width: 100%;  overflow: hidden;}
  .read-msg>p>.read-new{color: #3f5a93; cursor: pointer;}
  .read-msg>p>.read-see{color: #262626; cursor: pointer;}
  .more{color: #666;  background-color: #f2f2f2;  font-size: 12px;  height: 34px; line-height: 34px; cursor: pointer; text-align: center;}
  .more:hover{color: #ED4259;}

  .list>div{width: 440px; height: 278px;  background-color: #fff; padding-left:26px;  padding-top: 20px;  display: none;}
  .list:hover>div{display: block;}
  .list>div>h3{font-size:16px;  margin-bottom:20px; line-height: 1;}
  .list>div>a{font-size:14px; margin: 0 40px 32px 0;  float: left;    line-height: 1;}
  .list>div>a:hover{color: #BF2E26;}

  .item{border-top: 2px solid transparent;}
  .item:hover,.n-site:hover{background-color: #fff; border-top:2px solid #BF2E26!important;}

  .search{line-height: 60px; color: #262626;}
  .search input{ font-size: 14px;  height: 27px; border: none; border-bottom: 1px solid #ccc; outline: none;  background: none;}
  .search input:focus{border-bottom: 1px solid #BF2E26;}
  .search em{cursor: pointer;}
  .search em:hover{color: #BF2E26;}
  input::-webkit-input-placeholder{
    color:#ccc;
  }
  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#ccc;
  }
  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#ccc;
  }
  input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:#ccc;
  }

  .login{margin-left: 20px;}
  .login>a{  color: #262626;  font-size: 14px;  line-height: 60px;  display: inline-block;  margin-right: 16px;  }
  .login>a:hover{color: #ED4259;}

</style>
