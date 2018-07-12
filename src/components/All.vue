<template>
  <div id="all">
    <section>
      <div class="all-left">
        <RankSidebar></RankSidebar>
      </div>
      <div class="all-right">
        <AllContent></AllContent>
      </div>
      <div class="clear"></div>
    </section>
  </div>
</template>

<script>
  import RankSidebar from '@/components/all/RankSidebar'
  import AllContent from '@/components/all/AllContent'
    export default {
        name: 'All',
        components: {
          RankSidebar,
          AllContent
        }
    }
</script>


<style scoped>
  #all{width: 100%; margin-bottom: 20px;  padding-top: 20px;}
  section{width: 1200px; margin: 0 auto;}
  .all-left{float: left; width: 216px;}
  .all-right{float: right;  width: 954px;}
</style>
