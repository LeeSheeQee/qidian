<template>
  <div id="footer">
    <div class="link-site">
     <div class="sites">
       <span>阅文集团旗下网站：</span>
       <a href="">起点中文网</a>
       <a href="">起点女生网</a>
       <a href="">创世中文网</a>
       <a href="">云起书院</a>
       <a href="">红袖添香</a>
       <a href="">小说阅读网</a>
       <a href="">言情小说吧</a>
       <a href="">潇湘书院</a>
       <a href="">天方听书网</a>
       <a href="">懒人听书</a>
       <a href="">阅文悦读</a>
       <a href="">QQ阅读</a>
       <a href="">起点读书</a>
       <a href="">作家助手</a>
       <a href="">起点国际版</a>
     </div>
      <div class="about">
        <a href="">关于起点</a>
        <a href="">联系我们</a>
        <a href="">加入我们</a>
        <a href="">帮助中心</a>
        <a href="">提交建议</a>
        <a href="">动漫频道</a>
        <a href="">举报中心</a>
        <p>
          <span>Copyright © 2002-2018 www.qidian.com All Rights Reserved</span>
          <span>版权所有</span>
          <span>上海玄霆娱乐信息科技有限公司</span>
        </p>
        <p>
          <span>上海玄霆娱乐信息科技有限公司</span>
          <span>增值电信业务经营许可证沪B2-20080046</span>
          <span>出版经营许可证 新出发沪批字第U3718号</span>
          <span>沪网文[2015]0081-031 新出网证（沪）字010</span>
          <span>沪ICP备08017520号-1</span>
        </p>
        <p>
          <span>本站所收录的作品、社区话题、用户评论、用户上传内容或图片等均属用户个人行为。如前述内容侵害您的权益，欢迎举报投诉，一经核实，立即删除，本站不承担任何责任</span>
        </p>
        <p>
          <span>联系方式</span>
          <span>总机</span>
          <span>021-61870500</span>
          <span>地址：中国（上海）自由贸易试验区碧波路690号6号楼101、201室</span>
        </p>
        <div class="safety" v-if="show">
          <a href="" class="s1"></a>
          <a href="" class="s2"></a>
          <a href="" class="s3"></a>
          <a href="" class="s4"></a>
          <a href="" class="s5"></a>
          <a href="" class="s6"></a>
          <a href="" class="s7"></a>
        </div>
        <p>
          <span>起点正积极配合国家最新发布的《关于办理侵犯知识产权刑事案件适用法律若干问题的意见》，</span>
        </p>
        <p @click = "pa">
          <span>采用刑事手段进行严厉打击盗版，目前相关公安机关已经抓获犯罪嫌疑人15名！正告盗版网站立即停止侵权行为！</span>
          <span>{{wel}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'HomeFooter',
        data () {
          return {
            show: false,
            wel: 'sssss'
          }
        },
        methods: {
          pa: function () {
            if (this.$route.path === '/') {
              this.show = true;
            }
          }
        },
      watch:{
        $route(to,from){
          if (to.path === '/') {
            this.show = true;
          } else {
            this.show = false;
          }
        }
      },
      mounted() {
        if (this.$route.path === '/') {
          this.show = true;
        }
      }
    }

</script>


<style scoped>
  #footer{width: 100%;font-size: 12px;  background: #fafafa;}
  .sites,.about{width: 1200px;margin: 0 auto;text-align: center}
  .sites>a,.about>a{font-size: 12px;  line-height: 27px;  margin-right: 16px;  color: #1a1a1a;}
  .sites>span{font-size: 12px;  line-height: 27px;  color: #1a1a1a;}
  .about>a{color: #666;}
  .about{color: #a6a6a6;margin-bottom: 20px;}
  .sites>a:hover,.about>a:hover{color: #ed4259;}
  .safety{padding: 20px 0;}
  .safety>a{width: 140px;  height: 52px;  margin-right: 14px;  border: 1px solid #ededed; display: inline-block}
  .s1{background: no-repeat url('../assets/foot_site.c7a69.png') 0 0}
  .s2{background: no-repeat url('../assets/foot_site.c7a69.png') 0 -52px}
  .s3{background: no-repeat url('../assets/foot_site.c7a69.png') 0 -104px}
  .s4{background: no-repeat url('../assets/foot_site.c7a69.png') 0 -156px}
  .s5{background: no-repeat url('../assets/foot_site.c7a69.png') 0 -208px}
  .s6{background: no-repeat url('../assets/foot_site.c7a69.png') 0 -260px}
  .s7{background: no-repeat url('../assets/foot_site.c7a69.png') 0 -312px}

</style>
