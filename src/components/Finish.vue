<template>
  <div id="finish">
    <section>
      <div class="all-left">
        <RankSidebar></RankSidebar>
      </div>
      <div class="all-right">
        <FinishContent></FinishContent>
      </div>
      <div class="clear"></div>
    </section>
  </div>
</template>

<script>
   import FinishContent from '@/components/finish/FinishContent'
   import RankSidebar from '@/components/finish/RankSidebar'
    export default {
        name: 'Finish',
        components: {
          RankSidebar,
          FinishContent
        }
    }
</script>


<style scoped>
  #finish{width: 100%; margin-bottom: 20px;  padding-top: 20px;}
  section{width: 1200px; margin: 0 auto;}
  .all-left{float: left; width: 216px;}
  .all-right{float: right;  width: 954px;}
</style>
