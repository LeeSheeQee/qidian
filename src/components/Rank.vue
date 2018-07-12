<template>
  <div class="rank">
   <section>
      <div class="rank-side">
        <RankSide></RankSide>
      </div>
      <div class="rank-content">
        <p>
          <span class="rank-title">人气榜单</span><span
          class="rank-time">2018-07-10 14:55更新</span><span
        class="rank-rule">榜单规则</span>
        </p>
        <div class="rank-list">
          <a href="" class="active">全部分类</a><em>·</em><a
          href="">奇幻</a><em>·</em><a
          href="">武侠</a><em>·</em><a
          href="">仙侠</a><em>·</em><a
          href="">都市</a><em>·</em><a
          href="">现实</a><em>·</em><a
          href="">军事</a><em>·</em><a
          href="">历史</a><em>·</em><a
          href="">游戏</a><em>·</em><a
          href="">体育</a><em>·</em><a
          href="">科幻</a><em>·</em><a
          href="">灵异</a><em>·</em><a
          href="">二次元</a>
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
      </div>
     <div class="clear"></div>
   </section>
  </div>
</template>

<script>
   import RankSide from '@/components/rank/RankSide'
   import ListRank from '@/components/ListRank'
    export default {
        name: 'Rank',
        data() {
          return {
            listR1: {},
            listR2: {},
            listR3: {},
            listR4: {},
            listR5: {},
            listR6: {}
          }
        },
        components: {
          RankSide,
          ListRank,
        },
        mounted() {
          this.getListRank();
        },
        methods: {
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
        }
    }
</script>


<style scoped>
  section{width: 1200px;  margin: 0 auto;}
  .rank{padding-top: 20px;}
  .rank-side{float: left;}
  .rank-content{float: right; width: 954px;}
  .rank-content>p{margin-bottom: 15px;}
  .rank-title{font-size: 26px;  line-height: 26px;}
  .rank-time,.rank-rule{font-size: 14px;  color: #666;  margin-left: 10px;}
  .rank-rule{float: right;}
  .rank-list{width: 100%; height: 40px; line-height: 40px;  background-color: #f7f6f2;  padding-left: 12px; margin-bottom: 24px;}
  .rank-list>a{font-size: 12px; color: #a6a6a6;}
  .rank-list>a.active{color: #ed4259; font-weight: bold;}
  .rank-list>a:hover{color: #ed4259;}
  .rank-list>em{font-size: 14px;  color: #a6a6a6; margin: 0 10px;}

  /*pai hang*/
  .list-rank{width: 100%; margin-bottom: 40px;}
  .list-rank>li{float: left; width: 216px; margin: 0 15px;}
  .list-rank>li:nth-child(4n+1){margin-left: 0;}
  .list-rank>li:nth-child(2n+0){margin-right: 0;}

</style>
