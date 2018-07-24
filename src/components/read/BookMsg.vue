<template>
  <div class="read">
    <FixNav></FixNav>
    <div id="top-bg">
    </div>
    <section>
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
      <div id="book">
        <div class="book-head">
          <div class="book-img">
            <a href="">
              <img v-bind:src="book.img" alt="">
            </a>
          </div>
          <div class="book-msg">
            <p class="book-title">
              <span class="book-name">{{book.name}}</span>
              <a href="" class="book-author">{{book.author}} 著</a>
            </p>
            <div class="book-tag">
              <span v-for="t in book.tag">{{t}}</span>
            </div>
            <p class="book-des">{{book.des}}</p>
            <div class="book-box">
              <span class="book-word">{{book.words}}<i>万字</i></span>
              <span class="book-click">{{book.click}}<i>万总会员点击·周{{book.wClick}}万</i></span>
              <span class="book-reward">{{book.rc}}<i>万总荐·周{{book.tRc}}</i></span>
            </div>
            <div class="book-read">
              <a v-bind:href="'//localhost:8080/book/article/' + book.number" class="book-free">免费试读</a>
              <a href="">加入书架</a>
              <a href="">投票互动</a>
            </div>
          </div>
          <div class="book-right">
            <p class="book-score">
              <span>{{book.score|NL}}.</span>
              <span>{{book.score|NR}}</span>
            </p>
            <p class="book-comment">{{book.comment}}人评论</p>
            <div class="my-comment">
              <p>我要评价</p>
              <div class="book-star" ref="star">
                <img src="../../assets/star-off.b2a1b.png" alt="">
                <img src="../../assets/star-off.b2a1b.png" alt="">
                <img src="../../assets/star-off.b2a1b.png" alt="">
                <img src="../../assets/star-off.b2a1b.png" alt="">
                <img src="../../assets/star-off.b2a1b.png" alt="">
              </div>
            </div>
            <p class="book-down">
              <a href="" class="bd"> <font-awesome-icon :icon="['fas','download']"/> 下载</a>
            </p>
          </div>
        </div>
        <div class="book-bd">
          <ul class="bd-name">
            <li v-bind:class="{'active': isActive}" v-on:click="tab(1)">作品信息</li>
            <li v-bind:class="{'active': !isActive}" v-on:click="tab(2)">目录<span>（{{book.catalog}}章）</span></li>
            <li>作品讨论<span>（{{book.talk}}条）</span></li>
          </ul>
          <div class="bd-left" v-show="isActive">
            <p class="bd-des">{{book.bookDes}}</p>
            <ul class="bd-box">
              <li class="bd-self">
                <p>作者自定义标签</p>
                <div class="bd-content">
                  <a href="" v-for="t in book.selfTag">{{t}}</a>
                </div>
                <div class="clear"></div>
              </li>
              <li class="bd-honor">
                <p>荣誉动态</p>
                <div class="bd-content">
                  <div class="bd-h">
                    <p v-for="h in book.tHonor">{{h}}</p>
                  </div>
                  <img v-bind:src="img" alt="" v-for="img in book.honor">
                  <a href="">荣誉殿堂</a>
                </div>
                <div class="clear"></div>
              </li>
              <li class="bd-update">
                <p>最近更新</p>
                <div class="bd-content">
                  <p>
                    <a href="">{{book.update}}</a>
                    <span>·{{book.time}}</span>
                  </p>
                  <span>连续{{book.continue}}天更新</span>
                </div>
                <div class="clear"></div>
              </li>
            </ul>
            <div class="fans">
              <p class="fans-title">粉丝互动</p>
              <ul>
                <li class="fans-img">
                  <p class="fans-tab">
                    <span class="active">月票</span>
                    <em>|</em>
                    <span>推荐票</span>
                  </p>
                  <div class="fans-ticket">
                    <i>本月票数</i>
                    <p class="ticket-num">{{book.ticket}}</p>
                    <p class="ticket-rank">排名6·还差 <span>{{book.lessTicket}}</span> 票追上前一名</p>
                  </div>
                  <div class="ticket-img">
                    <div></div>
                  </div>
                  <a href="" class="ticket-btn">投月票</a>
                  <p class="ticket-intro"><span>1</span>张月票=<span>100</span>点粉丝值</p>
                </li>
                <li class="fans-img2">
                  <p class="reward-title">打赏</p>
                  <div class="fans-reward">
                    <i> 本周打赏人数</i>
                    <p class="reward-num">{{book.reward}}</p>
                    <p class="reward-today">今日<span>{{book.tReward}}</span>人打赏</p>
                  </div>
                  <div class="reward-img">
                    <div></div>
                  </div>
                  <a href="" class="ticket-btn">打赏作者</a>
                  <p class="ticket-intro"><span>100</span>起点币=<span>100</span>点粉丝值</p>
                </li>
                <li>
                  <p class="fans-rank">粉丝等级</p>
                  <div class="fans-h">
                    <img src="../../assets/user.f22d3.png" alt="">
                    <a href="">登录</a>
                    <span>查看粉丝等级</span>
                  </div>
                  <p class="fans-d">粉丝动态</p>
                  <div id="dyc">
                    <ul class="fans-dynamic" ref="dynamic">
                      <li class="tk" v-for="d in book.msg">
                        <a href="">{{d.name}}</a>
                        <span class="fans-do">投了</span>
                        <span v-if="d.type === 1">{{d.num}}月票</span>
                        <span v-if="d.type === 2">{{d.num}}推荐票</span>
                        <span v-if="d.type === 3">{{d.num}}起点币</span>
                        <em v-bind:class="{'t1': d.type===1,'t2': d.type===2,'t3': d.type===3}"></em>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div class="recommend">
              <p class="recommend-title">喜欢这本书的人还喜欢</p>
              <ul>
                <li v-for="book in like">
                  <a href=""><img v-bind:src="book.img" alt=""></a>
                  <p class="recommend-name">
                    <a href="">{{book.name}}</a>
                  </p>
                </li>
              </ul>
            </div>
            <div class="discuss">
              <p class="discuss-tab">
                <span>作品讨论区</span>
                <span class="line">|</span>
                <span>书友评论区</span>
                <a href="">我要发帖</a>
              </p>
              <ul class="discuss-box">
                <li v-for="c in comment">
                  <div class="discuss-img">
                    <a href=""><img v-bind:src="c.img" alt=""></a>
                  </div>
                  <div class="discuss-msg">
                    <p class="discuss-user">
                      <a href=""> <span class="discuss-v" v-if="c.vip">[盟主] </span>{{c.name}}</a>发表了帖子
                    </p>
                    <p class="discuss-content" v-bind:class="{'active': c.vip}">
                      <a href="">
                        <span class="discuss-good" v-if="c.good">精华</span>
                        <span class="discuss-up" v-if="c.good">置顶</span>
                        <span class="discuss-title active">{{c.des}}</span>
                      </a>
                    </p>
                    <p class="discuss-reply">
                      <span>{{c.time}}</span>
                      <a href=""><font-awesome-icon :icon="['far','comment']"/> {{c.reply}}条回复</a>
                      <a href=""><font-awesome-icon :icon="['far','thumbs-up']"/> {{c.like}}赞</a>
                    </p>
                  </div>
                </li>
              </ul>
              <p id="to-discuss">
                <a href="">去讨论去  <font-awesome-icon :icon="['fas','chevron-right']"/></a>
              </p>
            </div>
          </div v>
          <div class="bd-right" v-show="isActive">
            <div class="author">
              <div class="author-img">
                <a href="">
                  <img src="//facepic.qidian.com/qd_face/349573/a4362633/0" alt="">
                </a>
                <span>大神</span>
              </div>
              <a href="" class="author-name">志鸟村</a>
              <p class="author-des">著名科幻作家，在其笔下读者能感受到一个前所未有的未来世界，各种高科技更是让人眼睛一亮。</p>
              <ul class="work-state">
                <li>
                  <div class="work-all"></div>
                  <p>作品总数</p>
                  <p class="work-num">7</p>
                </li>
                <li>
                  <div class="work-word"></div>
                  <p>累计字数</p>
                  <p class="work-num">2094.87万</p>
                </li>
                <li>
                  <div class="work-day"></div>
                  <p>创作天数</p>
                  <p class="work-num">3201</p>
                </li>
              </ul>
              <div id="other">
                <p class="other-title">其他作品 <a href="">更多 <font-awesome-icon :icon="['fas','chevron-right']"/></a></p>
                <CarouselA v-bind:msg = 'cMsg' v-if="cas"></CarouselA>
              </div>
            </div>
            <div class="week">
              <p class="other-title">本周强推 · 仙侠</p>
              <WeekA  v-bind:msg = "listR1"></WeekA>
            </div>
            <div class="week">
              <p class="other-title">粉丝排行榜<a href="">更多 <font-awesome-icon :icon="['fas','chevron-right']"/></a></p>
              <FansRank v-bind:msg="listR2"></FansRank>
            </div>
            <div class="week">
              <p class="other-title">本书名人榜</p>
              <FansFamous v-bind:msg="listR3"></FansFamous>
            </div>
          </div v-show>
          <div class="clear"></div>
          <ChapterAll v-show="!isActive" v-bind:msg="chapters"> </ChapterAll>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
  import FixNav from '@/components/FixNav'
  import CarouselA from '@/components/read/CarouselA'
  import WeekA from '@/components/read/WeekA'
  import FansRank from '@/components/read/FansRank'
  import FansFamous from '@/components/read/FansFamous'
  import ChapterAll from '@/components/read/ChapterAll'
  import starOn from '../../assets/star-on.02731.png'
  import starOff from '../../assets/star-off.b2a1b.png'
    export default {
        name: 'BookMsg',
        data() {
          return {
            isActive: true,
            book: {},
            cMsg: [],
            cas: false,
            listR1: [],
            listR2: [],
            listR3: [],
            like: [],
            comment: [],
            chapters: {}
          }
        },
        components: {
          FixNav,
          CarouselA,
          WeekA,
          FansRank,
          FansFamous,
          ChapterAll
        },
        created() {
          let path = this.$route.path;
          let num = path.match(/\d/)[0];
          this.getMsg(parseInt(num));
          this.getCa();
          this.getLike();
        },
        mounted() {
          let star = this.$refs.star.children;
          let src;

          for(let i = 0; i < star.length; i++) {
            star[i].addEventListener('mouseenter', function () {
              star[i].addEventListener('mouseleave', function () {
                for(let j = 0; j <= i; j++) {
                  src = star[j].setAttribute('src', starOff);
                }
              })

              for(let x = 0; x < star.length; x ++ ){
                src = star[x].setAttribute('src', starOff);
              }
              for(let j = 0; j <= i; j++) {
                src = star[j].setAttribute('src', starOn);
              }
            })
            star[i].addEventListener('mouseleave', function () {
              for(let j = 0; j <= i; j++) {
                src = star[j].setAttribute('src', starOff);
              }
            })
            star[i].addEventListener('click', function () {
                star[i].addEventListener('mouseleave', function () {
                  for(let j = 0; j <= i; j++) {
                    src = star[j].setAttribute('src', starOn);
                  }
                })

              for(let j = 0; j <= i; j++) {
                src = star[j].setAttribute('src', starOn);
              }
            })
          }
          this.getListRank();
          this.$nextTick(function () {
            this.move();
          })

        },
        updated() {

        },
        methods: {
          tab(num) {
            if(num === 1) {
              this.isActive = true;
            }else {
              this.isActive = false;
            }
          },
          getMsg (n) {
//        获取右侧推荐数据
            this.axios({
              method: 'get',
              url: 'http://localhost:8080/static/bk.json',
            }).then(response => {
            if(n === 1) {
              this.book = response.book1;
            }else {
              this.book = response.book2;
            }
            });
          },
          getCa () {
//        获取右侧推荐数据
            this.axios({
              method: 'get',
              url: 'http://localhost:8080/static/ca.json',
            }).then(response => {
              this.cMsg = response.ca;
              this.cas = true;
            });
          },
          getListRank() {
            this.axios({
              method: 'get',
              url: 'http://localhost:8080/static/listRank.json'
            }).then(response => {
              this.listR1 = response.xianxia;
              this.listR2 = response.fans;
              this.listR3 = response.famous;

            })
          },
          getLike() {
            this.axios({
              method: 'get',
              url: 'http://localhost:8080/static/bk.json',
            }).then(response => {
              this.like = response.like1;
              this.comment = response.comment1;
              this.chapters = response.chapter;
            });
          },
          move() {
            let dynamic = this.$refs.dynamic;
            let dc = dynamic.children;
            let len = dc.length;
            let w = 28;
            let _w = 0;
            let top = 0;
            let bt,at;

            at = setInterval(A, 2000);

            function A() {
              clearInterval(bt);
              bt = setInterval(B, 20);
            }
            function B() {
              top-= 4;
              _w -= 4;
              if(_w >  -w) {
                dynamic.style.top = top  + 'px';
              }else {
                if(top < -w * (len - 6)){
                  top = 0;
                }
                _w = 0;
                clearInterval(bt);
              }
            }
            dynamic.addEventListener('mouseenter', function () {
              clearInterval(at);
            });
            dynamic.addEventListener('mouseleave', function () {
              at = setInterval(A, 2000);
            })
          }
        }
    }
</script>


<style scoped>
  section{width: 990px;  margin: 0 auto; margin-top: -270px;}
  #top-bg{width: 100%;  height: 292px;  background: no-repeat url('//qidian.qpic.cn/qidian_common/349573/38bb2e374423eaa00f2fc8a54befaa1a/0')}
  .nav{margin-bottom: 135px;}
  .nav>span{background-color: rgba(0,0,0,.2); color: #fff;  padding: 3px 4px; border-radius: 3px; }
  .nav>span>em{font-size: 12px;}
  .nav>span>a{font-size: 12px; line-height: 12px; color: #fff;}
  .nav>span>a:hover{text-decoration: underline;}
  #book{width: 100%;  margin-bottom: 50px;}
  .book-head{background: #fff;  margin-bottom: 50px;  padding: 20px 20px 0 20px;  width: 100%;  height: 232px;}
  .book-img{float: left;}
  .book-msg{float: left;  width: 560px; height: 192px; }
  .book-right{float: right; width: 148px; height: 192px;  text-align: right;  position: relative; background: #fff; }
  .book-img{width: 144px; height: 192px; overflow: hidden;  margin-right: 20px;  }
  .book-img img{width: 100%;  height: 100%;     -webkit-transition: transform 0.3s;
    -moz-transition: transform 0.3s;
    -ms-transition: transform 0.3s;
    -o-transition: transform 0.3s;
    transition: transform 0.3s;}
  .book-img img:hover{
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);}
  .book-title{width: 100%;  height: 38px; overflow: hidden; margin-bottom: 12px;}
  .book-name{ height: 38px; line-height: 38px;  font-size: 28px;  font-weight: bold;  color: #262626;}
  .book-author{font-size: 14px; color: #262626; margin-left: 20px;}
  .book-tag{width: 100%;  height: 24px; overflow: hidden; margin-bottom: 12px;}
  .book-tag>span{height: 24px;  line-height: 24px;  display: inline-block;  padding: 0 10px; margin-right: 12px;  color: #3f5a93; border: 1px solid #9fadc9;  border-radius: 15px;}
  .book-des{width: 100%;  height: 20px; font-size: 14px;  color: #262626; line-height: 20px;  margin-bottom: 12px;}
  .book-box{width: 100%;  height: 24px; margin-bottom:12px; overflow: hidden;}
  .book-box>span{font-size: 20px; color: #262626; font-weight: bold; word-spacing: .5px;}
  .book-box>span>i{font-size: 12px; color: #666;  font-style: normal; font-weight: normal;}
  .book-word{padding-right: 15px;}
  .book-click{padding: 0 15px;  border-left: 1px solid #e6e6e6; border-right: 1px solid #e6e6e6;}
  .book-reward{padding-left: 15px;}
  .book-read>a{width: 120px;  height: 34px; font-size: 14px; border: 1px solid #3f5a93;  text-align: center; display: inline-block;  margin-right: 20px; line-height: 34px;  color: #3f5a93;  transition: color .3s,background-color .3s;}
  .book-read>a.book-free{color: #fff; background-color: #bf2c24;  border-color: #bf2c24;     }
  .book-read>a.book-free:hover{background-color: #ED4259; border-color: #ED4259;}
  .book-read>a:hover{background-color: #F0F5FF; border-color: #2972CC;}
  .book-score{font-size: 32px;  font-weight: bold;  height: 44px; line-height: 44px;  color: #262626;}
  .book-score>span:last-child{font-size: 24px;}
  .book-comment{font-size: 12px;  width: 100%;  overflow: hidden; color: #a6a6a6; height: 18px; line-height: 18px;  margin: 4px 0 12px 0;}
  .my-comment>p{font-size: 12px;  width: 100%;  overflow: hidden; color:  #262626; height: 18px; line-height: 18px;  margin-bottom: 12px;}
  .book-down{position: absolute;  bottom: 0; right: 0;}
  .bd{font-size: 14px;  line-height: 14px;   color: #3f5a93;}
  .book-star>img{width: 21px;  height: auto; margin-left: 2px;  cursor: pointer;}

  .bd-name{width: 100%; height: 40px; border-bottom: 1px solid #e6e6e6; margin-bottom: 35px;}
  .bd-name>li{font-size: 18px;  height: 40px; line-height: 40px;  padding: 0 20px; color: #a6a6a6;  font-weight: bold;   float: left; border-bottom: 2px solid transparent; cursor: pointer;}
  .bd-name>li:hover{color: #ed4259;  }
  .bd-name>li>span{font-size: 14px; }
  .bd-name>li.active{color: #ed4259;  border-bottom: 2px solid #ed4259;}
  .bd-des{width: 100%;  padding-bottom: 20px;  border-bottom: 1px solid #e6e6e6; color: #262626; font-size: 14px;  line-height: 28px;}
  .bd-left{width: 700px; float: left;}
  .bd-right{ float: right; width: 250px; }

  .bd-box>li{width: 100%; padding-top: 19px;}
  .bd-box>li>p{float: left; font-size: 14px;  line-height: 28px;  width: 98px; margin-right: 20px; color: #999;}
  .bd-content{float: left;  width: 532px;}
  .bd-self>.bd-content{border-bottom: 1px solid #e6e6e6; padding-bottom: 20px;}
  .bd-self>.bd-content>a{display: inline-block; font-size: 12px; line-height: 16px; color: #3f5a93; border: 1px solid #3f5a93;  border-radius: 100px; padding: 3px 9px; margin-right: 8px;}
  .bd-self>.bd-content>a:hover{color: #2972CC;}
  .bd-honor>.bd-content{border-bottom: 1px solid #e6e6e6; padding-bottom: 20px;}
  .bd-honor>.bd-content>img{width: 50px;  height: 50px; margin-right: 15px; vertical-align: middle}
  .bd-honor>.bd-content>div{width: 100%;  height: 42px; overflow: hidden;}
  .bd-honor>.bd-content>div:hover{height: auto;}
  .bd-honor>.bd-content>div>p{font-size: 14px;  height: 22px; line-height: 22px;  width: 100%;  overflow: hidden; color: #262626; margin-bottom: 20px;  cursor: pointer;}
  .bd-honor>.bd-content>a{color : #3f5a93;  font-size: 14px;  line-height: 22px;}
  .bd-update>.bd-content>p{margin-bottom: 10px;}
  .bd-update>.bd-content>p>a{width: 80%;  height: 22px; line-height: 22px; font-size: 14px; color: #3f5a93;}
  .bd-update>.bd-content>p>span{width: 80%;  height: 22px; line-height: 22px; font-size: 14px; color: #999;}
  .bd-update>.bd-content>span{display: inline-block;  color: #bf2c24; border: 1px solid #bf2c24;  padding: 3px 9px; font-size: 12px; line-height: 16px; margin-right: 8px;  border-radius: 100px; cursor: pointer;  margin-bottom: 20px;}

  .fans{margin-bottom: 30px;}
  .fans-title{font-size: 22px;  height: 25px; line-height: 25px;  margin-bottom: 14px;}
  .fans>ul{width: 700px; height: 312px; background-color: #f7f6f2;}
  .fans>ul>li{width: 232px; height: 312px;  padding: 20px 0;  float: left;  text-align: center;}
  .fans-tab,.reward-title{font-size: 18px;  line-height: 22px;  color: #a6a6a6; margin-bottom: 12px;  font-weight: bold;}
  .reward-title{color: #ed4259;}
  .fans-tab>em{padding: 0 10px;}
  .fans-tab>.active{color: #ed4259;}
  .fans-ticket>i,.fans-reward>i{color: #a6a6a6; font-size: 12px; line-height: 16px;  margin-bottom: 7px; font-style: normal;}
  .ticket-num,.reward-num{font-size: 30px;  height: 33px; line-height: 33px;  margin-bottom: 7px; width: 100%;  overflow: hidden;}
  .ticket-rank,.reward-today{font-size: 12px; line-height: 16px;  margin-bottom: 14px;}
  .ticket-rank>span,.reward-today>span{color: #ed4259;}
  .ticket-img,.reward-img{width: 44px;  height: 52px; margin: 0 auto; position: relative; overflow: hidden; border-bottom: 2px solid #d67772; margin-bottom: 20px;}
  .ticket-img>div,.reward-img>div{width: 40px;  height: 52px; position: absolute; top: 12px;  left: 2px;
    -webkit-transition: top .5s ease-out;
    -moz-transition: top .5s ease-out;
    -ms-transition: top .5s ease-out;
    -o-transition: top .5s ease-out;
    transition: top .5s ease-out;}
  .ticket-img>div{ background: no-repeat url('../../assets/sprite.385d7.png') -299px 0;}
  .reward-img>div{ background: no-repeat url('../../assets/sprite.385d7.png') -146px -222px;}
  .fans-img:hover>.ticket-img>div,.fans-img2:hover>.reward-img>div{top: 0;}
  .ticket-btn{width: 120px; height: 34px; line-height: 34px;  font-size: 14px;  color: #fff;  background: #bf2c24;display: block; margin-bottom: 3px; margin-left: 58px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;}
  .ticket-btn:hover{background-color: #ED4259;}
  .ticket-intro{color: grey;  font-size: 12px;  line-height: 28px;  overflow: hidden;}
  .ticket-intro>span{color: #1a1a1a;}
  /*rank*/
  .fans-rank{font-size: 18px; line-height: 22px;  margin-bottom: 14px;  font-weight: bold;}
  .fans-h img{width: 44px;  height: 44px; vertical-align: middle;}
  .fans-h{ width: 190px; height: 52px; padding-bottom: 16px; border-bottom: 1px solid #e5e5e5; margin: 0 auto;}
  .fans-h>a{font-size: 12px;  line-height: 16px;  color: #3f5a93;}
  .fans-h>span{font-size: 12px; line-height: 16px;}
  .fans-d{font-size: 18px;  line-height: 22px;  margin-bottom: 10px;  margin-top: 20px; font-weight: bold;}
  #dyc{width: 100%; height:  140px; overflow: hidden; position: relative;}
  .fans-dynamic{padding: 0 20px;  width: 100%; position: absolute; top: 0;  left: 0; }
  .fans-dynamic>li{font-size: 12px; line-height: 28px;  height: 28px; width: 100%;  overflow: hidden; text-align: left; padding-right: 14px;  position: relative; border-top: 1px solid #e5e5e5;}
  .fans-dynamic>li:last-child{border-top: 1px solid transparent;}
  .fans-dynamic>li.rw{color: #ed4259; }
  .rw>em{width: 14px;  height: 14px; display: block;  background: no-repeat url('../../assets/sprite.385d7.png') -320px -188px; position: absolute; top: 7px; right: 0;}
  .tk>em{width: 14px;  height: 14px; display: block;  position: absolute; top: 7px; right: 0;}
  .tk>em.t1{background: no-repeat url('../../assets/sprite.385d7.png') -323px -164px; }
  .tk>em.t2{background: no-repeat url('../../assets/sprite.385d7.png') -325px -138px; }
  .tk>em.t3{background: no-repeat url('../../assets/sprite.385d7.png') -320px -188px; }
  .fans-dynamic>li>a{font-size: 12px; max-width: 80px;  white-space: nowrap;  overflow: hidden; display: block; float: left;  text-overflow: ellipsis;}
  .fans-dynamic>li.rw>a{color: #ed4259;}
  .fans-dynamic>li>a:hover{color: #ed4259;}
  .fans-do{color: #999; margin: 0 4px;}
  /*recommend*/
  .recommend{margin-bottom: 20px;}
  .recommend-title{font-size: 22px; height: 25px; line-height: 25px;  margin-bottom: 14px;  font-weight: bold;}
  .recommend>ul{width: 100%; height: 180px;}
  .recommend>ul>li{width: 86px; height: 180px;  float: left;  margin-left: 36px; }
  .recommend>ul>li:first-child{margin-left: 0;}
  .recommend>ul>li>a{display: block; width: 84px; height: 112px; overflow: hidden;}
  .recommend>ul>li>a>img{margin-bottom: 10px;
    -webkit-transition: transform 0.5s;
    -moz-transition: transform 0.5s;
    -ms-transition: transform 0.5s;
    -o-transition: transform 0.5s;
    transition: transform 0.5s;
    -webkit-box-shadow: 0 1px 6px rgba(0,0,0,.35), 0 0 5px #f9f2e9 inset;
    -moz-box-shadow: 0 1px 6px rgba(0,0,0,.35), 0 0 5px #f9f2e9 inset;
    box-shadow: 0 1px 6px rgba(0,0,0,.35), 0 0 5px #f9f2e9 inset;}
  .recommend>ul>li>a>img:hover{
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);}
  .recommend-name{height: 21px; width: 100%;  overflow: hidden; text-align: center; font-size: 14px;  line-height: 21px;  font-weight: bold;}

  /*discuss*/
  .discuss-tab{font-size: 22px; color: #a6a6a6;  min-height: 36px; line-height: 36px;}
  .discuss-tab>span{cursor: pointer;}
  .line{margin: 0 4px;}
  .discuss-tab>a{display: block;  width: 66px;  height: 22px; font-size: 12px;  line-height: 22px;  float: right; border: 1px solid #9facc9;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;  color: #3f5a93;  text-align: center;}
  .discuss-tab>a:hover{color: #2972CC;}
  .discuss-box{width: 700px;}
  .discuss-box>li{width: 100%;  height: 111px; padding: 16px 0;  border-top:1px solid #e5e5e5;}
  .discuss-img{width:44px;  height: 44px; float: left;  margin-right:12px;}
  .discuss-img>a>img{width: 100%; height: 100%; border-radius: 50%;}
  .discuss-msg{float: left; width: 643px; }
  .discuss-user{font-size: 12px;  line-height: 20px;  height: 20px; color: #a6a6a6;}
  .discuss-user>a{color: #3f5a93; margin-right: 4px;  font-weight:bold;}
  .discuss-user>a:hover{color: #2972D6;}
  .discuss-content{width: 100%; height: 22px; line-height: 22px;  overflow: hidden; font-size: 14px;  font-weight: bold;    transition: color .3s,background-color .3s;  margin-bottom: 16px;}
  .discuss-content>a:hover{color:#ed4259;}
  .discuss-content.active>a>.discuss-title{color:#ed4259;}
  .discuss-content>a>.discuss-good{color: #fff; background-color: #4A90E2;  padding: 2px 3px; font-weight: normal;  font-size: 12px;  margin-right:6px;}
  .discuss-content>a>.discuss-up{color: #fff; background-color: #ED4259;  padding: 2px 3px; font-weight: normal;  font-size: 12px;margin-right:6px;}
  .discuss-reply{color: #a6a6a6; font-size: 14px;}
  .discuss-reply>span{margin-right: 6px;}
  .discuss-reply>a{color: #a6a6a6;  margin-right:6px;}
  .discuss-reply>a:hover{color:#ed4259;}
  #to-discuss{width: 100%;  height: 34px; line-height: 34px;}
  #to-discuss>a{display: block; text-align: center; font-size: 12px;  color: #3f5a93; background-color: #f7f6f2;}
  #to-discuss>a:hover{color: #2972CC; background-color: #F7F6F2;}

  /*bd-right*/
  .author{background-color: #F7F6F2;  text-align: center; padding: 20px 12px; margin-bottom: 20px;}
  .author-img{width: 100px; height: 100px;  position: relative; margin: 0 auto; margin-bottom: 16px;}
  .author-img>a>img{width: 100%;  height: 100%; border-radius: 50%;}
  .author-img>span{ position: absolute; bottom: -5px; left: 50%;  background-color: #BF2C24; color: #fff; font-size: 12px;  margin-left: -12px;}
  .author-name{margin-bottom: 8px; display: block; font-size: 18px;  height: 22px; line-height: 22px; width: 100%; overflow: hidden;}
  .author-des{font-size: 12px; line-height: 24px; max-height: 72px; overflow: hidden; margin-bottom: 20px;}
  /*work state*/
  .work-state{width: 100%;  padding: 20px 0; background-color: #F7F6F2;  height: 136px; text-align: center; border-top:1px solid #e5e5e5; border-bottom: 1px solid #e5e5e5; margin-bottom: 20px;}
  .work-state>li{float: left; width: 33.33%;  height: 96px; }
  .work-state>li>p{font-size: 12px;  color: #666;  line-height: 18px; height: 18px; overflow: hidden;}
  .work-state>li>p.work-num{font-size: 14px; color: #bf2c24;  height: 18px; line-height: 18px;}
  .work-state>li>div{width: 48px; height: 48px; margin: 0 auto;}
  .work-all{background: no-repeat url('../../assets/sprite.385d7.png') -193px -80px;}
  .work-word{background: no-repeat url('../../assets/sprite.385d7.png') -249px -150px;}
  .work-day{background: no-repeat url('../../assets/sprite.385d7.png') -50px -222px;}
  /*other*/
  .other-title{font-size: 18px; height: 20px; line-height: 20px; margin-bottom: 10px; overflow: hidden; text-align: left; font-weight: bold;}
  .other-title>a{font-size: 12px; color: #3f5a93; float: right; font-weight: normal;}

  .week{text-align: left; background-color: #F7F6F2;  padding: 20px 12px 10px 12px; margin-bottom: 20px;}
</style>
