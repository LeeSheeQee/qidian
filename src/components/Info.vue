<template>
  <div>info center
    <div>
      {{$route.params}}
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Info',
        created() {
          let x = this.$route.params;
          console.log(x);
        }
    }
</script>


<style scoped>

</style>
