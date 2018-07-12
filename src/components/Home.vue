<template>
  <div class="home">
    <div id="fix-nav" ref="nav">
      <FixNav></FixNav>
    </div>
    <div id="header">
      <ul class="classify-list">
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
      <div class="center-box">
        <div id="cs-part">
          <Carousel v-bind:csMsg = "csAll"></Carousel>
        </div>
        <div class="advert">
          <a href=""><img src="../assets/home/a1.png" alt=""></a><a href=""
        ><img src="../assets/home/a2.png" alt=""></a><a href=""
        ><img src="../assets/home/a3.png" alt=""></a>
        </div>
      </div>
      <div class="notice-wrap">
        <h4>
          <a href="">{{msg.noticeTitle}}</a>
        </h4>
        <p class="msg" v-for="newMsg in msg.msg">
          <a href="">[资讯] {{newMsg}}</a>
        </p>
        <p class="game-msg" v-for="gameMsg in msg.gameMsg">
          <a href=""><span>页游</span> {{gameMsg}}</a>
        </p>
        <div class="now-box">
          <font-awesome-icon :icon="['fas','comment-dots']" style="color: #bf2c24;"/>
          <ul class="now-msg">
            <li v-for="nowMsg in msg.nowMsg"> <span class="now-in">{{nowMsg}}</span></li>
          </ul>
        </div>
        <div class="gg">
          <a href="">
            <img src="../assets/home/g1.jpg" alt="">
          </a>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <section>
      <div class="s-left">
        <List v-bind:list = "bookList"></List>
      </div>
      <div class="s-center">
        <div class="edit-rec">
          <p>编辑推荐</p>
          <div class="edit-cs">
            <Carousel2 v-bind:booksMsg = "csBooks" v-if="success2"></Carousel2>
          </div>
        </div>
        <ul class="edit-rec-list" v-for="recList in editRec">
          <li v-for="recBook in recList.book">
            <p class="rec-title"><a href="">{{recBook.title}}</a></p>
            <p class="follow"><span>{{recBook.people}}</span><span class="follow-s">人在追</span></p>
            <p class="des">{{recBook.des}}</p>
          </li>
        </ul>
        <ul class="rec-bottom">
          <li>
            <h3>
              <a href="">大医凌然</a>
            </h3>
            <p>医学院学生凌然有一个小目标，要成为世界上最伟大的医生，结果不小心实现了。</p>
            <a href="" class="rc-img">
              <img src="../assets/home/book1.jpg" alt="">
            </a>
          </li>
          <li>
            <h3>
              <a href="">砂隐之最强技师</a>
            </h3>
            <p>收集神秘技能卡牌，转化忍术，做忍界最强技能大师！</p>
            <a href="" class="rc-img">
              <img src="../assets/home/book2.jpg" alt="">
            </a>
          </li>
        </ul>
      </div>
      <div class="s-right">
        <List v-bind:list = "bookList2"></List>
      </div>
    </section>
    <section>
      <div class="banner">
        <a href="">
          <img src="../assets/home/banner.jpg" alt="">
        </a>
      </div>
      <ul class="list-rank">
        <li>
          <ListRank  v-bind:listRank = "listR1"></ListRank>
        </li>
        <li>
          <ListRank  v-bind:listRank = "listR2"></ListRank>
        </li>
        <li>
          <ListRank  v-bind:listRank = "listR3"></ListRank>
        </li>
        <li>
          <ListRank  v-bind:listRank = "listR4"></ListRank>
        </li>
        <li>
          <ListRank  v-bind:listRank = "listR5"></ListRank>
        </li>
      </ul>

    </section>
    <section>
      <div class="banner">
        <a href="">
          <img src="../assets/home/banner.jpg" alt="">
        </a>
      </div>
      <div class="list-hot">
        <div class="hot">
          <p class="m-title">热门作品</p>
          <Carousel3 v-bind:cs3msg="Cs3Msg"  v-if="success"></Carousel3>
        </div>
        <ul class="hot-book-list">
          <li v-for="hotMsg in hot.data">
            <HotBookList v-bind:msg = "hotMsg"></HotBookList>
          </li>
        </ul>
        <div class="hot-right">
          <div class="hr-type">架空历史</div>
          <div class="hr-name"><a href="">红楼名侦探</a></div>
          <p class="hr-hot">5,032,793<span>人气</span></p>
          <p class="hr-des">以推理能力名震官场！</p>
          <div class="hr-img">
            <a href="">
              <img src="../assets/home/hot_right1.jpg" alt="">
            </a>
            <span></span>
          </div>
        </div>
        <div class="hot-right">
          <div class="hr-type">东方玄幻</div>
          <div class="hr-name"><a href="">超级基因猎场</a></div>
          <p class="hr-hot">5,032,793<span>人气</span></p>
          <p class="hr-des">猎杀马蜂王，取得基因碎片</p>
          <div class="hr-img">
            <a href="">
              <img src="../assets/home/hot_right2.jpg" alt="">
            </a>
            <span></span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="new-book">
        <div class="c-left">
          <div class="hot">
            <p class="m-title">新书推荐</p>
            <Carousel3 v-bind:cs3msg="Cs3Msg2" v-if="success"></Carousel3>
          </div>
        </div>
        <div class="c-center">
          <ul class="center-book-list">
            <li v-for="message in cMessage">
              <div class="c-img">
                <a v-bind:href="'info/'+message.href" target="_blank"><img v-bind:src="message.img" v-bind:alt="message.title"></a>
                <span class="c-score">{{message.score}}</span>
              </div>
              <div class="c-message">
                <a class="c-title"  v-bind:href="'info/'+message.href" target="_blank">{{message.title}}</a>
                <p class="c-des">{{message.des}}</p>
                <div>

                  <a  v-bind:href="'authormsg/'+message.href" target="_blank" class="c-author"><img src="../assets/user.f22d3.png" alt="">{{message.author}}</a>
                  <span class="c-tag2">{{message.number}}</span>
                  <span class="c-tag1">{{message.type}}</span>

                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="c-right">
          <ListRank  v-bind:listRank = "listR6"></ListRank>
        </div>
        <div class="banner">
          <a href="">
            <img src="../assets/home/banner.jpg" alt="">
          </a>
        </div>
      </div>
    </section>
    <section>
      <div class="new-book">
        <div class="c-left">
          <div class="hot">
            <p class="m-title">完本精品</p>
            <Carousel3 v-bind:cs3msg="Cs3Msg3" v-if="success"></Carousel3>
          </div>
        </div>
        <div class="c-center">
          <ul class="center-book-list">
            <li v-for="message in cMessage2">
              <div class="c-img">
                <a v-bind:href="'info/'+message.href" target="_blank"><img v-bind:src="message.img" v-bind:alt="message.title"></a>
                <span class="c-score">{{message.score}}</span>
              </div>
              <div class="c-message">
                <a class="c-title"  v-bind:href="'info/'+message.href" target="_blank">{{message.title}}</a>
                <p class="c-des">{{message.des}}</p>
                <div>

                  <a  v-bind:href="'authormsg/'+message.href" target="_blank" class="c-author"><img src="../assets/user.f22d3.png" alt="">{{message.author}}</a>
                  <span class="c-tag2">{{message.number}}</span>
                  <span class="c-tag1">{{message.type}}</span>

                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="c-right">
          <ListRank  v-bind:listRank = "listR7"></ListRank>
        </div>
        <div class="banner">
          <a href="">
            <img src="../assets/home/banner.jpg" alt="">
          </a>
        </div>
      </div>
    </section>
    <section>
      <div class="new-book">
        <div class="c-left">
          <div class="hot">
            <p class="m-title">最近更新</p>
            <UpdateBook v-bind:msg="updateMsg"></UpdateBook>
          </div>
        </div>
        <div class="c-center update-box">
          <PartArticle v-bind:msg="partArticle"></PartArticle>
        </div>
        <div class="c-right">
          <div class="hot god">
            <p class="m-title">大神俱乐部</p>
            <GodAuthor v-bind:msg="godAuthor"></GodAuthor>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </section>
    <div class="free-read">
      <div class="free-head">
        <h3 class="free-title">限时免费</h3>
        <p class="free-vip">VIP章节免费读</p>
        <div class="free-clock">
          <font-awesome-icon :icon="['fa','clock']"/>
        </div>
        <p class="free-time">{{countDown.day}}天 {{countDown.hour}}:{{countDown.minute}}:{{countDown.second}}</p>
        <a href="" class="free-go">进入限免通道 &gt;</a>
      </div>
      <div class="free-body">
        <FreeRead v-bind:msg="cMessage"></FreeRead>
      </div>
    </div>
    <div class="search-out">
      <div class="search-content">
        <div class="search-des">没有找到？试试这里</div>
        <div class="search-box">
          <a class="type-choose"  v-on:click="SearchShow('type')">
            <span>{{searchMsg.type}}</span>
            <span class="sj"></span>
          </a>
          <ul class="search-type-list" v-show="searchMsg.type1 === '1'">
            <li v-on:click="Choose($event)">玄幻</li>
            <li v-on:click="Choose($event)">奇幻</li>
            <li v-on:click="Choose($event)">武侠</li>
            <li v-on:click="Choose($event)">仙侠</li>
            <li v-on:click="Choose($event)">都市</li>
            <li v-on:click="Choose($event)">现实</li>
            <li v-on:click="Choose($event)">军事</li>
            <li v-on:click="Choose($event)">历史</li>
            <li v-on:click="Choose($event)">游戏</li>
            <li v-on:click="Choose($event)">体育</li>
            <li v-on:click="Choose($event)">灵异</li>
            <li v-on:click="Choose($event)">女生网</li>
            <li v-on:click="Choose($event)">二次元</li>
          </ul>
        </div>
        <div class="search-box">
          <a class="type-choose" v-on:click="SearchShow('serialize')">
            <span>{{searchMsg.serialize}}</span>
            <span class="sj"></span></a>
          <ul class="search-type-list" v-show="searchMsg.serialize1 === '1'">
            <li v-on:click="Choose($event)">连载</li>
            <li v-on:click="Choose($event)">完本</li>
          </ul>
        </div>
        <div class="search-box">
          <a class="type-choose" v-on:click="SearchShow('free')">
            <span>{{searchMsg.free}}</span>
            <span class="sj"></span></a>
          <ul class="search-type-list" v-show="searchMsg.free1 === '1'">
            <li v-on:click="Choose($event)">免费</li>
            <li v-on:click="Choose($event)">收费</li>
          </ul>
        </div>
        <div class="search-box search-long">
          <a class="type-choose" v-on:click="SearchShow('words')">
            <span>{{searchMsg.words}}</span>
            <span class="sj"></span></a>
          <ul class="search-type-list" v-show="searchMsg.words1 === '1'">
            <li v-on:click="Choose($event)">200万以上</li>
            <li v-on:click="Choose($event)">100万-200万字</li>
            <li v-on:click="Choose($event)">50万-100万字</li>
            <li v-on:click="Choose($event)">30万-50万字</li>
            <li v-on:click="Choose($event)">30万以下</li>
          </ul>
        </div>
        <div class="search-box search-long">
          <a class="type-choose" v-on:click="SearchShow('tag')">
            <span>{{searchMsg.tag}}</span>
            <span class="sj"></span>
          </a>
          <ul class="search-type-list"  v-show="searchMsg.tag1 === '1'">
            <li v-on:click="Choose($event)">全部标签</li>
            <li v-on:click="Choose($event)">热血</li>
            <li v-on:click="Choose($event)">腹黑</li>
            <li v-on:click="Choose($event)">猥琐</li>
            <li v-on:click="Choose($event)">恶搞</li>
            <li v-on:click="Choose($event)">爆笑</li>
            <li v-on:click="Choose($event)">重生</li>
            <li v-on:click="Choose($event)">技术流</li>
            <li v-on:click="Choose($event)">系统流</li>
            <li v-on:click="Choose($event)">丧尸</li>
            <li v-on:click="Choose($event)">僵尸</li>
            <li v-on:click="Choose($event)">盗墓</li>
            <li v-on:click="Choose($event)">玄学</li>
            <li v-on:click="Choose($event)">鉴宝</li>
          </ul>
        </div>
        <div class="search-box">
          <a href="" class="search-btn">按条件找书</a>
        </div>
        <div class="search-box">
          <div class="search-line"></div>
        </div>
        <div class="search-box">
          <p class="search-all">大家都在搜</p>
        </div>
        <div class="search-box">
          <div class="search-key">
            <a href="">玄幻+连载+100万~200万</a>
            <a href="">都市+连载+vip</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
//  $(function () {
//    var owl = $('.owl-carousel').owlCarousel({
//      items: 1,
//      loop: true,
//      dots: true,
//      autoplay: true,
//      autoplayTimeout: 4000,
//      autoplayHoverPause: false
//    });
//  })
  import Carousel from '@/components/Carousel'
  import Carousel2 from '@/components/Carousel2'
  import Carousel3 from '@/components/Carousel3'
  import UpdateBook from '@/components/UpdateBook.vue'
  import List from '@/components/List'
  import ListRank from '@/components/ListRank'
  import HotBookList from '@/components/hotBookList'
  import PartArticle from '@/components/PartArticle'
  import GodAuthor from '@/components/GodAuthor'
  import FreeRead from '@/components/FreeRead'
  import FixNav from '@/components/FixNav'
  import cs1 from '../assets/home/c1.jpg'
  import cs2 from '../assets/home/c2.jpg'
  import cs3 from '../assets/home/c3.jpg'
  import cs4 from '../assets/home/c4.jpg'
  import cs5 from '../assets/home/c5.jpg'
  import cb1 from '../assets/home/cb1.jpg'
  import cb2 from '../assets/home/cb2.jpg'
  import cb3 from '../assets/home/cb3.jpg'
  import cb4 from '../assets/home/cb4.jpg'
  import cb5 from '../assets/home/cb5.jpg'
  import cb6 from '../assets/home/cb6.jpg'
  import fn1 from '../assets/home/fn1.jpg'
  import fn2 from '../assets/home/fn2.jpg'
  import fn3 from '../assets/home/fn3.jpg'
  import fn4 from '../assets/home/fn4.jpg'
  import fn5 from '../assets/home/fn5.jpg'
  import fn6 from '../assets/home/fn6.jpg'
  import head1 from  '../assets/home/head1.jpg'
  import head2 from  '../assets/home/head2.jpg'
  import head3 from  '../assets/home/head3.jpg'
  export default {
    name: 'Home',
    data() {
      return {
        csAll: [
          {src: cs1, title: '洪荒之妖皇逆天'},
          {src: cs2, title: '黑巫师朱鹏'},
          {src: cs3, title: '王者荣耀穿越系统'},
          {src: cs4, title: '放开那个原始人'},
          {src: cs5, title: '世界杯预言帝'}
        ],
        msg:{},
        bookList: {},
        bookList2: {},
        editRec: [
          {
            "book": [
              {
                "title": "重生打造完美未来",
                "people": "52,874",
                "des": "人无法用相同的自己收获不同的未来，希望自己的未来有改变就必须先改变自己。"
              },
              {
                "title": "属性面板看穿别人战斗力",
                "people": "41,114",
                "des": "这一世终于可以感受养几个恶仆上街调戏良家少女的日子啦。"
              },
              {
                "title": "700年老祖宗揭棺而起了！",
                "people": "158,668",
                "des": "在某个异界大陆上空飘了十几万年之后，死了七百年的高文从棺材里穿出来了！"
              }
            ]
          },
          {
            "book": [
              {
                "title": "一卷推衍之术，执掌苍生大劫",
                "people": "95,398",
                "des": "苦修成绩作废，而后从杂役弟子做起，借一卷推衍之术，执掌苍生大劫！"
              },
              {
                "title": "幸运获得了怪兽工厂的应用",
                "people": "509,910",
                "des": "这帮力大无穷的怪兽，干起活来一个能顶一百个，还带各种技能。"
              },
              {
                "title": "术士行走在美漫世界",
                "people": "168,236",
                "des": "恶魔是我的奴仆，邪能是我的力量，暗影与烈焰伴我左右，我是一名术士。"
              }
            ]
          }
        ],
        cMessage: [
              {
                "title": "这世界的土著好凶猛：惊天大骗子",
                "author": "红林小盗",
                "name": "这世界的土著好凶猛 ",
                "cost": "5起点币⁄千字",
                "type": "都市生活",
                "number": "138万字",
                "img": cb1,
                "score": "9.2",
                "href": 11,
                "des": "港岛最赚钱行业有三：股票、地产、电影，叶景诚决定先玩玩股票。"
              },
              {
                "title": "觉醒命运之眼，逆天改命",
                "author": "八月飞鹰",
                "name": "命运之眼 ",
                "cost": "5起点币⁄千字",
                "type": "东方玄幻",
                "number": "338万字",
                "img": cb2,
                "href": 12,
                "score": "7.8",
                "des": "为了改变国破家亡，自己必死的命运，王楚开始了自己打破命运的旅程。"
              },
              {
                "title": "女装的绝地求生：女装金手指！",
                "author": "大烟缸",
                "name": "女装的绝地求生 ",
                "cost": "5起点币⁄千字",
                "type": "虚拟网游",
                "number": "355万字",
                "img": cb3,
                "href": 13,
                "score": "6.9",
                "des": "每一次吃鸡之前，随机一套女装，幸运女神套装:幸运+999！"
              },
              {
                "title": "史上最牛魔头：诸天悟道牛魔王！",
                "author": "南朝陈",
                "name": "史上最牛魔头 ",
                "cost": "5起点币⁄千字",
                "type": "修真文明",
                "number": "138万字",
                "img": cb4,
                "href": 14,
                "score": "7.2",
                "des": "诸天悟道，冲破杀劫，成就史上最牛魔头！"
              },
              {
                "title": "缺啥我抽啥！",
                "author": "在水鬼故事",
                "name": "领主的卡片有点东西",
                "cost": "5起点币⁄千字",
                "type": "都市生活",
                "number": "138万字",
                "img": cb5,
                "href": 15,
                "score": "9.1",
                "des": "开局一系统，装备全靠抽。缺啥我抽啥，我的卡片有点东西。"
              },
              {
                "title": "倾危大秦：力挽狂澜稳社稷",
                "author": "孑与2",
                "name": "倾危大秦",
                "cost": "5起点币⁄千字",
                "type": "两晋隋唐",
                "number": "466万字",
                "img": cb6,
                "href": 16,
                "score": "8.5",
                "des": "一个2000多年后的灵魂，穿越到了令无数人惋惜的秦公子扶苏身上。"
              }
        ],
        cMessage2: [
          {
            "title": "港岛大亨：纵横香江",
            "author": "红林小盗",
            "type": "都市生活",
            "number": "138万字",
            "img": fn1,
            "score": "9.2",
            "href": 17,
            "des": "港岛最赚钱行业有三：股票、地产、电影，叶景诚决定先玩玩股票"
          },
          {
            "title": "史上最强师兄：非主角的逆袭！",
            "author": "八月飞鹰",
            "type": "东方玄幻",
            "number": "338万字",
            "img": fn2,
            "href": 18,
            "score": "7.8",
            "des": "二次穿越到当前的时代，简直就如同一个人玩惯了地狱模式之后，突然被丢去玩简单模式。"
          },
          {
            "title": "网游之代练传说：快速冲级！",
            "author": "大烟缸",
            "type": "虚拟网游",
            "number": "355万字",
            "img": fn3,
            "href": 19,
            "score": "6.9",
            "des": "这是一个没有特长，善良而市侩的小人物艰辛的“被”奋斗史"
          },
          {
            "title": "斩邪：手握乾坤，斩邪留正！",
            "author": "南朝陈",
            "type": "修真文明",
            "number": "138万字",
            "img": fn4,
            "href": 20,
            "score": "7.2",
            "des": "弱冠书生手握乾坤，斩邪留正，一曲正气歌，浩然起苍茫！"
          },
          {
            "title": "放下铁匠铺，立地成佛",
            "author": "在水鬼故事",
            "type": "都市生活",
            "number": "138万字",
            "img": fn5,
            "href": 21,
            "score": "9.1",
            "des": "修真界，有一家神奇的铁匠铺，它的每件作品，都能引起全世界的追逐。"
          },
          {
            "title": "唐砖：我的大唐没有悲哀",
            "author": "孑与2",
            "type": "两晋隋唐",
            "number": "466万字",
            "img": fn6,
            "href": 22,
            "score": "8.5",
            "des": "剪一枝秃笔，为李唐盛世延篇，去掉阴暗的部分"
          }
        ],
        partArticle: [
          {
            "type": "二次元",
            "name": "海贼王之金发罗伊",
            "article": "第五章摩尔福特岛与劳伦斯",
            "author": "进击滴白牛君",
            "time": "06-30 09:10",
            "vip": false
          },
          {
            "type": "历史",
            "name": "大明天子录",
            "article": "第四十一章第一次会议",
            "author": "俏皮的毛豆",
            "time": "06-30 09:10",
            "vip": true
          },
          {
            "type": "都市",
            "name": "重生之电音人生",
            "article": "第4章热潮",
            "author": "不是哲学家",
            "time": "06-30 09:10",
            "vip": false
          },
          {
            "type": "科幻",
            "name": "传奇位面一破碎",
            "article": "第十章新的力",
            "author": "鸥崲欧到起非",
            "time": "06-30 09:10",
            "vip": false
          },
          {
            "type": "仙侠",
            "name": "活在神话中",
            "article": "六三引星",
            "author": "悬天月",
            "time": "06-30 09:10",
            "vip": true
          },
          {
            "type": "二次元",
            "name": "海贼之命运酒家",
            "article": "第六章怪力",
            "author": "路边的田菊菜",
            "time": "06-30 09:10",
            "vip": false
          },
          {
            "type": "科幻",
            "name": "极品穿梭王者系统",
            "article": "【678】我们比他们更奸诈",
            "author": "青默",
            "time": "06-30 09:10",
            "vip": true
          },
          {
            "type": "都市",
            "name": "纨绔玉帝",
            "article": "第三六节紫衫龙王",
            "author": "搬砖老汉",
            "time": "06-30 09:10",
            "vip": false
          },
          {
            "type": "玄幻",
            "name": "厉害了我人族",
            "article": "290人多也成灾啊",
            "author": "光化十",
            "time": "06-30 09:10",
            "vip": true
          },
          {
            "type": "玄幻",
            "name": "凡人的宿命",
            "article": "第二十九章梦魇",
            "author": "驻城",
            "time": "06-30 09:10",
            "vip": false
          },
          {
            "type": "武侠",
            "name": "江湖奇功录",
            "article": "今天更新推迟到晚上十点左右",
            "author": "寒刀客",
            "time": "06-30 09:10",
            "vip": false
          },
          {
            "type": "玄幻",
            "name": "执剑破琼天",
            "article": "17.在此一举了",
            "author": "大汉字",
            "time": "06-30 09:10",
            "vip": false
          },
          {
            "type": "科幻",
            "name": "星空大都市",
            "article": "第五章【史上最强撼的职业】",
            "author": "我在那年等你",
            "time": "06-30 09:10",
            "vip": true
          },
          {
            "type": "都市",
            "name": "万象破灭",
            "article": "第二章道学院",
            "author": "可爱的初九",
            "time": "06-30 09:10",
            "vip": false
          },
          {
            "type": "游戏",
            "name": "重生之最强荣耀",
            "article": "第236章学院",
            "author": "乡下半亩地",
            "time": "06-30 09:10",
            "vip": false
          },
          {
            "type": "仙侠",
            "name": "西游之传奇大圣",
            "article": "第一百三十三章收礼物",
            "author": "风吹散承诺0",
            "time": "06-30 09:10",
            "vip": false
          },
          {
            "type": "奇幻",
            "name": "无上召唤之人族崛起",
            "article": "今天座飞机，无更新了",
            "author": "游侠骑士",
            "time": "06-30 09:10",
            "vip": false
          },
          {
            "type": "都市",
            "name": "回归的强者",
            "article": "灭鬼和直播（3）",
            "author": "千殇万世",
            "time": "06-30 09:10",
            "vip": false
          },
          {
            "type": "玄幻",
            "name": "玄冥复仇者",
            "article": "15.霸王扛鼎",
            "author": "水晶疙瘩",
            "time": "06-30 09:10",
            "vip": false
          },
          {
            "type": "游戏",
            "name": "穿越之王者卖农药",
            "article": "第六十二章本源再解",
            "author": "野狐封圣",
            "time": "06-30 09:10",
            "vip": false
          }
        ],
        godAuthor: [
          {
            "author": "净无痕",
            "lv": "阅文集团白金作家",
            "works": ["太古神王"],
            "des": "阅文集团白金作家，网络文学知名玄幻作家，名校高材生，作品深受读者喜爱。",
            "img": head1
          },
          {
            "author": "宅猪",
            "lv": "阅文集团白金作家",
            "works": ["独步天下","帝尊","重生西游"],
            "des": "阅文集团白金作家，网络文学知名作家，文笔老道，故事精彩纷呈，深受读者喜爱。",
            "img": head2
          },
          {
            "author": "会说话的肘子",
            "lv": "阅文集团白金作家",
            "works": ["大王饶命","我是大玩家","英雄联盟之灾变时代"],
            "des": "阅文集团白金作家，网络文学知名玄幻作家，名校高材生，作品深受读者喜爱。网络文学大神作家",
            "img": head3
          }
        ],
        countDown: {
          "day": 0,
          "hour": 0,
          "minute": 0,
          "second": 0
        },
        listR1: {},
        listR2: {},
        listR3: {},
        listR4: {},
        listR5: {},
        listR6: {},
        listR7: {},
        csBooks: {},
        Cs3Msg: [],
        Cs3Msg2: [],
        Cs3Msg3: [],
        hot: {},
        success: false,
        success2: false,
        updateMsg: [],
        searchMsg: {
          'type': '玄幻',
          'type1': '0',
          'serialize': '连载',
          'serialize1': '0',
          'free': '免费',
          'free1': '0',
          'words': '200万以上',
          'words1': '0',
          'tag': '全部标签',
          'tag1': '0',
        },

      }
    },
    components: {
      Carousel,
      Carousel2,
      Carousel3,
      List,
      ListRank,
      HotBookList,
      UpdateBook,
      PartArticle,
      GodAuthor,
      FreeRead,
      FixNav
    },
    created() {
      this.getCs3();
      this.getBookList(1);
      this.getBookList(2);
      this.getListRank();
      this.getBooks();
      this.getHot();
      this.getUpdateMsg();
      this.countDown.day = 3;
    },
    mounted() {
     this.getMsg();
      this.scrollMsg();
      this.CountDown();
      this.SearchHide();
      this.ShowNavFix();
    },
    methods: {
      getMsg () {
//        获取右侧推荐数据
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/static/notice.json',
        }).then(response => {
          this.msg = response;
        });
      },
      getBookList(num) {
//        获取本周数据推荐信息
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/static/list' + num + '.json'
        }).then(response => {
          if(num === 1) {
            this.bookList = response;
          } else if(num === 2) {
            this.bookList2 = response;
          }
        })
      },
      getBooks() {
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/static/books.json',
        }).then(response => {
          this.csBooks = response;
          this.success2 = true;
        });
      },
      getCs3() {
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/static/c3.json',
        }).then(response => {
          this.Cs3Msg = response.hot;
          this.Cs3Msg2 = response.nBook;
          this.Cs3Msg3 = response.finish;
          this.success = true;
        });
      },
      getListRank() {
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/static/listRank.json'
        }).then(response => {
          this.listR1 = response.newBook;
          this.listR2 = response.hotSell;
          this.listR3 = response.vip;
          this.listR4 = response.week;
          this.listR5 = response.authorBook;
          this.listR6 = response.newAuthor;
          this.listR7 = response.finish;
        })
      },
      getUpdateMsg() {
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/static/update.json'
        }).then(response => {
          this.updateMsg = response.update;
        })
      },
      scrollMsg() {
//        自动滚动事件

        let nowMsg = document.querySelector('.now-msg');
        let topWidth  = 0;
        let moveWidth = 0;
        let len = 5;
        let t = setInterval(function () {
          topWidth -= 22;
          if( topWidth <= -22*len ) {
            topWidth = 0;
          }
          let t2 = setInterval(function () {
            moveWidth += 1;
            if (moveWidth < 22) {
              nowMsg.style.top = -moveWidth + 'px';
            } else {
              clearInterval(t2);
              nowMsg.style.top = topWidth + 'px';
              moveWidth = 0;
            }
          }, 10)
        }, 2500);
      },
      getHot() {
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/static/hot.json',
        }).then(response => {
          this.hot = response;
        });
      },
      CountDown() {
        let that = this;
        let day = this.countDown.day;
        let hour = this.countDown.hour;
        let minute = this.countDown.minute;
        let second = this.countDown.second;
       let clockTimer =  setInterval(Clock, 1000);
        function Clock() {
          second--;
          if(second < 0) {
              second = 59;
              minute--;
              if(minute < 0) {
                minute = 59;
                hour--;
                if(hour < 0) {
                  hour = 23;
                  day--;
                  if(day < 0 ) {
                    clearInterval(clockTimer);
                    second = 0;
                    minute = 0;
                    hour = 0;
                    day = 0;
                  }
                }
              }
          }
          if(second < 10) {
            that.countDown.second = "0" + second;
          }else {
            that.countDown.second = second;
          }
          if( minute < 10) {
            that.countDown.minute = "0" + minute;
          }else {
            that.countDown.minute = minute;
          }
         if( hour < 10) {
            that.countDown.hour = "0" + hour;
         }else {
           that.countDown.hour = hour;
         }
          if(day < 10) {
            that.countDown.day = "0" + day;
          }else {
            that.countDown.day = day;
          }
        }
      },
      Choose(e) {
        e.target.parentNode.parentNode.children[0].children[0].innerHTML = e.target.innerHTML;
      },
      SearchShow(msg) {
        this.searchMsg.type1 = '0';
        this.searchMsg.serialize1 = '0';
        this.searchMsg.words1 = '0';
        this.searchMsg.free1 = '0';
        this.searchMsg.tag1 = '0';
        if( msg === 'type') {
          this.searchMsg.type1 = '1';
        }else if(msg === 'serialize') {
          this.searchMsg.serialize1 = '1';
        }else if(msg === 'words') {
          this.searchMsg.words1 = '1';
        }else if(msg === 'free') {
          this.searchMsg.free1 = '1';
        }else if(msg === 'tag') {
          this.searchMsg.tag1 = '1';
        }
      },
      SearchHide( ) {
        let that = this;
        let spans = document.querySelectorAll('.search-box>a');
        for(let i = 0; i < spans.length; i++ ){
          spans[i].addEventListener('click',function (event) {
            event.stopPropagation();
          })
        }
        document.addEventListener('click',function () {
          that.searchMsg.type1 = '0';
          that.searchMsg.serialize1 = '0';
          that.searchMsg.words1 = '0';
          that.searchMsg.free1 = '0';
          that.searchMsg.tag1 = '0';
        })
      },
      ShowNavFix() {
        let nav = this.$refs.nav;

        window.addEventListener('scroll', function () {
          var supportPageOffset = window.pageXOffset !== undefined;
          var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

          var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
          var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
         if(y >= 500){

           nav.style.top = 0;

         }else {
           nav.style.top = -50 + 'px';
         }
        })
      }
    }
  }


</script>

<style scoped>
  .home{width: 100%}
  #fix-nav{width: 100%; background: red;  position: fixed;  top:-50px; left: 0; z-index: 9999;  height: 42px;  -webkit-transition: top 0.5s;  -moz-transition: top 0.5s;  -ms-transition: top 0.5s;  -o-transition: top 0.5s;  transition: top 0.5s;}
  #header{width: 1200px;  margin: 0 auto; margin-bottom: 40px;}
  .classify-list{float: left; width: 216px; height: 421px;  border: 1px solid #e6e6e6;  background-color: #F7F6F2;}
  .center-box{float: left;  width: 758px; height: 410px;  padding-left: 10px;}
  .notice-wrap{float: right;  width: 216px; height: 410px; border: 1px solid #e6e6e6; background: #fcfcfa;  padding: 10px; position: relative}
  .classify-list>li{float: left;  width: 50%; height: 60px; text-align: center; padding-top: 15px;  padding-left: 24px; cursor: pointer;}
  .classify-list>li:hover p{color: #ed4259;}
  .classify-list>li:hover{background-image: url('../assets/type2.png')}
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
  #cs-part{width: 100%; height: 250px; }
  .advert{width: 100%;  height: 160px;  padding-top: 30px;}
  .advert>a{display: inline-block;  width: 33%; height: 160px; overflow: hidden; text-align: center;}

  .owl-dots{width: 100%}
  .owl-dots>div{width: 30px;height: 20px;background: red;}
  .notice-wrap>h4{text-align: center; margin-bottom: 5px;}
  .msg,.game-msg{font-size: 14px; line-height: 25px; margin-bottom: 5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
  .game-msg{color: #bf2c24;}
  .game-msg>a>span{background: #bf2c24; color: #fff; padding: 0 2px;}
  .now-msg{ width: 170px; top: 0; left: 0;  position: absolute; padding: 0; margin: 0;  padding-left: 20px;}
  .now-box{position: relative; overflow: hidden;  height: 22px; }
  .now-msg>li{width: 100%;   height: 22px;}
  .now-msg>li>.now-in{line-height: 22px; display: inline-block; height: 22px; overflow: hidden; }
  .gg{width: 100%;  height: 150px; position: absolute; bottom: 0; left: 0; overflow: hidden;  padding: 5px;}
  .gg>a>img{width: 100%; height: auto;}
  .now-icon{color: #bf2c24;}
  /*中部信息*/
  section{min-height: 600px; width: 1200px; margin: 0 auto; }
  .s-left{float: left; margin-right: 30px; width: 216px; }
  .s-center{ float: left; width: 708px;}
  .s-right{float: right;  width: 216px;}
  /*编辑推荐*/
  .edit-rec{width: 100%; height: 230px;}
  .edit-rec>p{font-size: 18px; font-weight: bold; color: #1a1a1a; border-bottom: 1px solid #000;  padding-bottom: 5px;}
  .edit-cs{width: 100%; height: 137px;  padding-top: 30px;}
  .edit-rec-list{width: 100%; height: 140px;  border-top: 1px solid #E6E6E6; padding: 25px 0;}
  .edit-rec-list>li{float: left; width: 33.33%; padding: 0 10px;}
  .rec-title{font-size: 16px; line-height: 22px; width: 100%; overflow: hidden; color: #1a1a1a;}
  .follow{color: #bf2c24; font-size: 16px; font-weight: bold; padding: 2px 0 4px 0;}
  .follow>.follow-s{font-size: 12px; font-weight: normal;}
  .des{    font-size: 12px;  line-height: 20px;  overflow: hidden;  height: 36px;  color: #666;}
  .rec-bottom{width: 100%; height: 100px;}
  .rec-bottom>li{float: left; width: 334px; background: #f7f6f2; margin-right: 30px; padding: 14px 0 0 14px; position: relative;   -webkit-transition: all 0.5s;  -moz-transition: transform 1s;  -ms-transition: all 0.5s;  -o-transition: all 0.5s;}
  .rec-bottom>li:last-child{float: right; margin-right: 0;}
  .rec-bottom>li:hover{  -webkit-box-shadow: 0 5px 16px #d9d4c7;  -moz-box-shadow: 0 5px 16px #d9d4c7;  box-shadow: 0 5px 16px #d9d4c7;}
  .rec-bottom>li>h3{margin-bottom: 5px; overflow: hidden; height: 24px;}
  .rec-bottom>li>h3>a{color: #fc6c28;}
  .rec-bottom>li>p{overflow: hidden;  height: 38px; font-size: 12px; width: 228px;}
  .rc-img{position: absolute; right: 7px; top: 7px; width: 51px; height: 68px; overflow: hidden; display: block;     -webkit-transition: transform 1s;  -moz-transition: transform 1s;  -ms-transition: transform 1s;  -o-transition: transform 1s;}
  .rc-img>img{width: 100%; height: auto;}
  .rc-img>img:hover{ transition: transform 1s; transform: scale(1.2);}
  /*排行部分*/
  .banner{margin-bottom: 40px; width: 100%;}
  .banner>img{width: 100%;  height: auto;}
  .list-rank{width: 100%; margin-bottom: 40px;}
  .list-rank>li{float: left; width: 216px; margin: 0 15px;}
  .list-rank>li:first-child{margin-left: 0;}
  .list-rank>li:last-child{margin-right: 0;}
  /*热门作品*/
  .hot{width: 216px;  margin-right: 30px; float: left}
  .m-title{font-size: 22px; line-height: 30px; padding-bottom: 8px;  border-bottom: 1px solid #666666;}
  .hot-book-list>li{width: 216px;  height: 194px;  margin: 0 30px 45px 0;  float: left;}
  .hot-book-list>li:nth-child(4){margin-right: 0;}
  .hot-right{width: 216px;  float: left;position: relative;  border-bottom: 1px solid #EBEBEB;  margin-bottom: 15px;}
  .hot-right:last-child{border-bottom: none;}
  .hr-type{font-size: 12px; height: 18px;  line-height: 18px;  color: #bf2c24; border: 1px solid #df9591; padding: 0 3px; margin-bottom: 2px; width: 60px; text-align: center;}
  .hr-name{height: 24px;  line-height: 24px;  width: 100%;  overflow: hidden;}
  .hr-name>a{font-size: 16px; color: #1a1a1a; overflow: hidden;}
  .hr-hot{color: #bf2c24; width: 100%;  overflow: hidden; font-size: 14px;}
  .hr-hot>span{font-size: 12px;}
  .hr-des{font-size: 12px;  color: #666;  width: 100%;  height: 16px; line-height: 16px;  overflow: hidden; margin-bottom: 10px;}
  .hr-img{position: absolute; right:0; top:0; width: 52px;  height: 91px; transform: perspective(60px) rotateY(-10deg);}
  .hr-img:after{position: absolute;  z-index: 2;  top: 2%;  left: 100%;  width: 10%;  height: 92%;  content: ' ';  -webkit-transform: perspective(60px) rotateY(30deg);  -moz-transform: perspective(60px) rotateY(30deg);  transform: perspective(60px) rotateY(30deg);  background-color: #efefef;  box-shadow: inset 0 0 5px #333;}
  .hr-img>span{    position: absolute;
    z-index: -1;
    top: 84.1%;
    left: 7px;
    width: 20px;
    height: 10px;
    content: '';
    -webkit-transform: perspective(74px) rotateX(-70deg) rotateY(-5deg);
    -moz-transform: perspective(74px) rotateX(-70deg) rotateY(-5deg);
    -ms-transform: scale(0);
    transform: perspective(74px) rotateX(-70deg) rotateY(-5deg);
    box-shadow: 25px 0 5px 5px #adadad;}
  .hr-img>a>img{width: 100%;  height: 91px;}
  .hr-img>a{display: block; transform: translateZ(50px); z-index: 100;}
  /*新书推荐*/
  .new-book,.list-hot{width: 100%; }
  .c-left>.hot{margin-right: 0;}
  .center-book-list{width: 738px;    border-top: 1px solid #666;   margin-top: 38px; padding-top: 15px;}
  .center-book-list>li{float: left; width: 339px; height: 120px; margin: 0 30px 20px 0;  border-bottom: 1px solid #E6E6E6; }

  .c-center{float: left;  width: 768px; }
  .c-left{width: 216px; float: left; }
  .c-title{font-size: 16px; line-height: 21px; width: 100%; overflow: hidden; height: 21px; display: block; color: #1a1a1a; margin-bottom: 8px;}
  .c-des{font-size: 12px; width: 100%;  overflow: hidden; color: #666;  height: 40px; margin-bottom: 10px;}
  .c-img{width: 72px; height: 96px; overflow: hidden; float: left;  margin-right: 12px; position: relative;}
  .c-img>a>img{width: 100%; height:96px; }
  .c-score{position: absolute;  left: 0;  bottom: 0; background: #ed4259; color: #fff;  padding: 0 3px 0 2px; border-radius: 0 5px 0 0; font-size: 12px;}
  .c-message{float: left; width: 255px; height: 96px;}
  .c-message>div{font-size: 12px; height: 18px;}
  .c-author{ color: #a6a6a6; }
  .c-author>img{width: 14px;  height: 14px; margin-right: 5px;  vertical-align: middle}
  .c-tag1{color: #a6a6a6; border: 1px solid #a6a6a6;  padding: 0 3px; float: right}
  .c-tag2{color: #bf2c24; border: 1px solid #df9591;  padding: 0 3px; float: right; margin-left: 10px;}
  .c-right{float: right;  width: 216px; padding-top: 9px;}

  .update-box{width: 738px; padding-top: 10px;}
  .god>.m-title{padding-bottom: 0;}

  /*免费阅读*/
  .free-read{padding: 30px 0; margin: 0 auto; width: 1200px;  height: 287px;}
  .free-head{width: 172px;  height: 220px;  float: left;  background-color: #f7f6f2;  text-align: center; padding-top: 25px;}
  .free-vip{font-size: 12px;  color: #999;  width: 100%;  overflow: hidden; height: 16px; line-height: 16px;}
  .free-title{color: #ed4259;}
  .free-clock{font-size: 50px;  color: #1a1a1a; margin: 10px 0;}
  .free-time{height: 22px;  line-height: 22px; color: #bf2c24;  margin-bottom: 10px;  font-size: 18px;  overflow: hidden;}
  .free-go{font-size: 14px; color: #3f5a93; height: 20px; line-height: 20px;  overflow: hidden;}

  /*search*/
  .search-out{width: 100%;  height: 80px; background-color: #f2f2f2;}
  .search-content{width: 1200px;  margin: 0 auto;}
  .search-des{width: 174px; height: 80px; margin-right: 24px; padding-left: 48px; line-height: 80px;  font-size: 14px;  color: #1a1a1a; float: left;}
  .search-box{margin-top: 23px; float: left;  position: relative; margin-right: 12px;}
  .type-choose{width: 72px; height: 34px; line-height: 34px;  display: block; overflow: hidden; color: gray; background-color: #fff;  padding: 0 36px 0 10px; font-size: 12px;  position: relative;  cursor: pointer;}
  .type-choose:hover{color: #1a1a1a;}
  .sj{    position: absolute;  top: 14px;  right: 10px;  width: 0;  height: 0;  border-top: 5px solid #a6a6a6;  border-right: 5px solid transparent;  border-bottom: 0 none;  border-left: 5px solid transparent; }
  .search-type-list{position: absolute; top: 34px; left: 0; z-index: 99; width: 100%; max-height: 300px;  overflow: scroll; overflow-x:hidden; }
  .search-type-list>li{background-color: #fff;  font-size: 12px;  height: 34px; line-height: 34px;  overflow: hidden; width: 72px; padding: 0 36px 0 10px;  color: gray;  cursor: pointer;}
  .search-type-list>li:hover{background-color: #f7f7f7; color: #1a1a1a;}
  .search-long{width: 140px;}
  .search-long>.type-choose{width: 140px;}
  .search-long>.search-type-list{width: 140px;}
  .search-long>.search-type-list>li{width: 140px;}
  .search-btn{width: 100px; height: 34px; line-height: 34px; font-size: 14px; text-align: center; background-color: #bf2c24;  border: 1px solid #bf2c24;  color: #fff;  display: block; cursor: pointer;}
  .search-all{font-size: 12px;  margin-right: 16px;  color:#a6a6a6; width: 60px;  height: 32px;}
  .search-key>a{color: #666;  font-size: 12px;  display: block;}
  .search-line{width: 0;  height: 30px; border-left: 1px solid #d9d9d9; margin: 0 20px;}

</style>
