<template>
  <div class="article">
    <NavThree></NavThree>
    <div class="a-n">
      <div class="nav">
        <span>
          <a href="">首页</a>
        <em> <font-awesome-icon :icon="['fas','chevron-right']"/></em>
        <a href="">都市频道</a>
         <em> <font-awesome-icon :icon="['fas','chevron-right']"/></em>
        <a href="">都市生活</a>
          <em> <font-awesome-icon :icon="['fas','chevron-right']"/></em>
        <a href="">大医凌然</a>
        </span>
      </div>
    </div>
    <div class="article-body" ref="aBody">
      <div class="a-content">
        <div class="a-img">
          <img src="//qidian.qpic.cn/qdbimg/349573/1011486666/180" alt="">
        </div>
        <h1>大医凌然</h1>
        <h2>
          <a href="">志鸟村</a>著
        </h2>
        <ul class="a-info">
          <li>
            <p>都市</p>
            <span>都市</span>
          </li>
          <li class="a-center">
            <p>2018.05.15</p>
            <span>都市</span>
          </li>
          <li>
            <p>都市</p>
            <span>都市</span>
          </li>
        </ul>
        <h3>与<span>25420</span>位书友共同开启《大医凌然》的都市之旅</h3>
        <h4>
          [盟主]<a href="">hollo2002</a>
          [盟主]<a href="">hollo2002</a>
        </h4>
        <h5>本书由起点中文网进行电子制作与发行</h5>
        <h6>©版权所有 侵权必究</h6>
      </div>
    </div>
    <div class="a-chapter" ref="cp">
      <span class="a-mark"><font-awesome-icon :icon="['fas','bookmark']"/> </span>
      <div class="a-head">
        <p class="a-title">{{article.title}}</p>
        <div class="a-box">
          <div class="box-msg">
            <a href=""><font-awesome-icon :icon="['fas','book']"/> 大医凌然</a>
            <a href=""><font-awesome-icon :icon="['fas','user']"/> 志鸟村</a>
            <a><font-awesome-icon :icon="['fas','font']"/> 1555字数</a>
            <a><font-awesome-icon :icon="['fas','clock']"/> 2018.05.14 13:11</a>
          </div>
          <div class="box-comment">
            <a href=""><img src="//facepic.qidian.com/qd_face/349573/269/50" alt=""></a>
            <a href=""><img src="//facepic.qidian.com/qd_face/349573/269/50" alt=""></a>
            <a href=""><img src="//facepic.qidian.com/qd_face/349573/887004/50" alt=""></a>
            <span><a href=""><font-awesome-icon :icon="['fas','comment']"/></a> 12</span>
            <div class="box-info">
              <span class="box-close">×</span>
              <div class="box-c">
                <p>1.有个好奇？为何选用20.0版本。不是用最新的24.0版本？
                当然，最新版本不见的最好用、最适用。作者如此选用是因为比较适用于医学专业及多重交叉量表计算呢？还是因为，暗谕着故事时间序的寓意在？
                *IBM SPSS Statistics…版本时间序(资料来自IBM SPSS Statistics历史版本)：
                **IBM SPSS Statistics20.0.. 2011年8月
                ** IBM SPSS Statistics20.0.. 2016年3月
                2.另有一个好奇与欣赏。凌然毕业论文做啥专业？文叙中，仔细避免妄想症或者精神分裂症的影响，还录相给同学协作了专家效度审查。作者专业真让人欣赏！</p>
                <a href=""><font-awesome-icon :icon="['fas','comment']"/></a>
              </div>
              <p class="box-from">
                <span>来自 <a href="">发斯蒂芬是</a></span>
                <a>2018-05-16</a>
              </p>
              <p class="box-btn">
                <input type="text" />
                <button>回复</button>
              </p>
          </div>
        </div>
      </div>
      <div class="a-msg">
        <p v-for="p in ca">{{p}}</p>
        <div  id="admire">
          <button>赞赏</button>
        </div>
        <div class="a-control">
          <a href="">上一章</a><span></span><a href="">目录</a><span></span><a href="">下一章</a>
        </div>
      </div>
        <ul class="left-side" ref="leftSide">
          <li>
            <a href="">
             <em>
               <font-awesome-icon :icon="['fas','list']"/>
             </em>
              <span>目录</span>
            </a>
          </li>
          <li>
            <a href="">
              <em>
                <font-awesome-icon :icon="['fas','cog']"/>
              </em>
              <span>设置</span>
            </a>
          </li>
          <li>
            <a href="">
              <em>
                <font-awesome-icon :icon="['fas','mobile-alt']"/>
              </em>
              <span>手机</span>
            </a>
          </li>
          <li>
            <a href="">
              <em>
                <font-awesome-icon :icon="['fas','book']"/>
              </em>
              <span>书架</span>
            </a>
          </li>
          <li>
            <a href="">
              <em>
                <font-awesome-icon :icon="['fas','file-word']"/>
              </em>
              <span>书页</span>
            </a>
          </li>
          <li>
            <a href="">
              <em>
                <font-awesome-icon :icon="['fas','gamepad']"/>
              </em>
              <span>游戏</span>
            </a>
          </li>
        </ul>
        <ul class="right-side" ref="rightSide">
          <li>
            <a href="">
              <em>
                <font-awesome-icon :icon="['fa','dollar-sign']"/>
              </em>
              <span>打赏</span>
            </a>
          </li>
          <li>
            <a href="">
              <em>
                <font-awesome-icon :icon="['fa','credit-card']"/>
              </em>
              <span>月票</span>
            </a>
          </li>
          <li>
            <a href="">
              <em>
                <font-awesome-icon :icon="['far','comment-dots']"/>
              </em>
              <span>评论</span>
            </a>
          </li>
          <li>
            <a href="">
              <em>
                <font-awesome-icon :icon="['fa','chevron-up']"/>
              </em>
              <span>顶部</span>
            </a>
          </li>
        </ul>
    </div>
    </div>
    <div  ref="chapter"></div>
  </div>
</template>


<script>
  import NavThree from '@/components/read/NavThree'
    export default {
        name: 'Article',
        data() {
          return {
            article: {},
            ca: [],
            success: false
          }
        },
        components: {
          NavThree
        },
        created() {
          this.axios({
            method: 'get',
            url: 'http://localhost:8080/static/bk.json',
          }).then(response => {
            this.article = response.article;
            this.ca = this.article.chapter.split(/\/n/);
          });
        },
      mounted() {

          this.$nextTick(function () {
            let leftSide = this.$refs.leftSide;
            let rightSide = this.$refs.rightSide;
            let chapter = this.$refs.chapter;
            let cp = this.$refs.cp;
            let cpt;
            let cph;
            let t = this.$refs.aBody.offsetTop;
            let rt = rightSide.offsetTop;
            let rh = rightSide.offsetHeight;
            let ot = this.$refs.aBody.offsetHeight;
            let wh = window.innerHeight;


            let ct = chapter.offsetTop;
            let ch = chapter.offsetHeight;
            let cc = chapter.clientHeight;





            let bOff = document.body.offsetHeight;
            let scrollTop;

            let c = document.querySelector('#admic');

            leftSide.style.top = t + 'px';



            let leftTop = leftSide.offsetTop;
            let rightTop = rightSide.offsetTop;


            window.addEventListener('scroll', function () {
              scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
              cpt = cp.offsetTop;
              cph = cp.offsetHeight;
              console.log('scrolltop:', scrollTop);
              console.log('cpt:', cpt);
              console.log('cph:', cph);
              console.log('rh', rh);

              if(scrollTop > t) {
                leftSide.style.top = 0;
              }else {
                leftSide.style.top = (t - scrollTop) + 'px';
              }
              if(scrollTop > 0) {
                if(scrollTop > (cpt + cph - wh)) {
                  rightSide.style.bottom = (scrollTop + wh - cpt - cph) + 'px';
                }else {
                  rightSide.style.bottom = 0;
                }
              }else {
                rightSide.style.bottom = -60+ 'px';
              }
            })
          })


      }
    }
</script>


<style scoped>
  .nav{margin-bottom: 20px;}
  .nav>span{ color: #1a1a1a;  padding: 3px 4px; border-radius: 3px; }
  .nav>span>em{font-size: 12px;}
  .nav>span>a{font-size: 12px; line-height: 12px; color: #1a1a1a;}
  .nav>span>a:hover{text-decoration: underline;}

  .article{width: 100%; background-color: #e5e4db; -moz-user-select: none; -khtml-user-select: none; user-select: none;}
  .a-n{width: 800px;  margin:0 auto;}
  .article-body{width: 800px; margin: 0 auto; background-color: #F6F1E7;  border: 1px solid #d8d8d8;  }

  .a-img{width: 128px;  height: 168px; margin: 0 auto; border: 1px solid #efece5; padding: 4px; background-color: #fffbf2;  margin-bottom: 25px;}
  .a-img>img{width: 100%; height: 100%; overflow: hidden;}
  .a-content{margin: 9px; border: 1px solid #d8d8d8;  padding-top: 64px; padding-bottom: 20px;  background-color: #F6F1E7;}
  .a-content>h1{font-size: 32px;  height: 45px; line-height: 45px;  text-align: center; font-weight: normal;  margin-bottom: 7px; overflow: hidden; }
  .a-content>h2{font-size: 14px;  height: 26px; line-height: 26px;  text-align: center; margin-bottom: 48px;  overflow: hidden; color: rgba(0,0,0,.4);}
  .a-content>h2>a{color: rgba(0,0,0,.4);  margin-right: 5px;}
  .a-info{width: 360px; margin: 0 auto; margin-bottom: 48px;}
  .a-info:after{content: '.'; height: 0;  display: block; visibility: hidden; clear: both;}
  .a-info>li{float: left; text-align: center;}
  .a-center{padding: 0 80px;}
  .a-info>li>p{font-size: 18px; height: 26px; line-height: 26px;  margin-bottom: 5px; color: #262626;}
  .a-info>li>span{font-size: 12px;  height: 16px; line-height: 16px;  color: rgba(0,0,0,.4); }
  .a-content>h3{font-size: 16px;  height: 26px; line-height: 26px;  overflow: hidden; color: #262626; margin-bottom: 8px; text-align: center; font-weight: normal;}
  .a-content>h4{font-size: 12px; line-height: 16px;  color: rgba(0,0,0,.4);   text-align: center; margin-bottom: 48px;}
  .a-content>h4>a{color: rgba(0,0,0,.4);  margin-right: 20px;}
  .a-content>h5{font-size: 14px;  line-height: 26px; color: #666; font-weight: normal;  text-align: center;}
  .a-content>h6{font-size: 14px;  line-height: 26px;  color: rgba(0,0,0,.4);  font-weight: normal; text-align: center;}

  .a-chapter{width: 800px;  margin: 25px auto; padding: 60px 65px; background-color: #F6F1E7; position: relative; clear: both;}
  .a-mark{position: absolute; right: 40px; top: 0; color: #DDD8CF;  font-size: 30px;}
  .a-title{font-size: 24px; height: 32px; line-height: 32px;  color: #262626; overflow: hidden; margin-bottom: 12px;  text-align: left;}
  .a-box{font-size: 12px; line-height: 16px;  height: 34px;}
  .box-msg{float: left;}
  .box-msg>a{color: rgba(0,0,0,.4); margin-right: 16px; max-width: 100px; overflow: hidden;}
  .box-msg>a:first-child:hover,.box-msg>a:nth-child(2):hover{color: #ed4259;}
  .a-msg>p{font-size: 18px; line-height: 32px;  color: #262626; margin: 14px 0; text-indent: 32px;}

  .box-comment{float: right; position: relative;}
  .box-comment>a{margin-right: 12px;}
  .box-comment>a>img{width: 22px; height: 22px; border-radius: 50%; vertical-align: bottom;}
  .box-comment>span{font-size: 16px;  line-height: 22px;}
  .box-comment>span>a{color:  rgba(0,0,0,.4);}
  .box-comment:hover>.box-info{display: block;}
  .box-info{position: absolute; top: 22px;  right: 0;  width: 600px; height: 190px;  background-color: #FEFDF7;  padding: 40px 20px;  display: none;}
  .box-close{position: absolute;  right: 10px; top: 10px; font-size: 30px;  color: #A6A6A6; cursor: pointer;
    -webkit-transition: transform .5s;
    -moz-transition: transform .5s;
    -ms-transition: transform .5s;
    -o-transition: transform .5s;
    transition: transform .5s;}
  .box-close:hover{
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);}
  .box-c{margin-bottom: 12px; height: 32px;}
  .box-c>p{font-size: 14px; height: 32px; line-height: 32px;  width: 480px; overflow: hidden; text-overflow: ellipsis;  white-space: nowrap;  color: #262626; float: left;}
  .box-c>a{float: right; font-size: 14px; height: 32px; line-height: 32px; color: #A6A6A6;}
  .box-c>a:hover{color: #ed4259;}
  .box-from{font-size: 12px;  height: 16px; line-height: 16px;  color: #a6a6a6; margin-bottom: 12px;}
  .box-from>span>a{color: #3f5a93;}
  .box-from>a{float: right; color: #a6a6a6;}
  .box-btn>input{width: 480px;  height: 36px;}
  .box-btn>button{width: 60px;  height: 36px; float: right; font-size: 14px;  line-height: 34px;  border: 1px solid #bf2c24;  background-color: #bf2c24;  color: #fff;  outline: none;  border-radius: 2px;}
  #admire{margin-bottom: 20px;  text-align: center;}
  #admire>button{width: 160px; height: 60px; font-size: 24px;  color: #fff;  background-color: #bf2c24;  border-radius: 50px; border: none;}
  .a-control>a,.a-control>span{display: inline-block; vertical-align: middle;}
  .a-control>a:hover{background-color: #EEE9E0;}
  .a-control{width: 100%; height: 70px; margin-bottom: 24px;  border: 1px solid #d8d8d8;  background-color: #F2EDE4;}
  .a-control>a{font-size: 18px; line-height: 68px;  width: 33.2%; text-align: center; color: #262626;}
  .a-control>span{height: 60px; border-right: 1px solid #d8d8d8; }

  .left-side{position: fixed; top: 0; left: 50%;  margin-left: -468px;}
  .right-side{position: fixed; bottom: -60px; right: 50%;  margin-right: -468px;}
  .left-side>li>a,.right-side>li>a{width: 58px;  height: 58px; font-size: 12px;  display: block; text-align: center; border: 1px solid rgba(0,0,0,.1); padding-top: 14px;  background-color: #F8F3E9;  border-bottom: none; color: rgba(0,0,0,.4);}
  .left-side>li>a:last-child,.right-side>li>a:last-child{border-bottom:1px solid rgba(0,0,0,.1); }
  .left-side>li>a:hover,.right-side>li>a:hover{color: #ed4259;}
  .left-side>li>a>em,.right-side>li>a>em{display: block;  font-size: 14px;  color: #000;}
  .left-side>li>a:hover>em,.right-side>li>a:hover>em{color: #ed4259;}

</style>
