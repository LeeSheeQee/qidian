<template>
  <div>
    <section>
      <div class="count">
        <div class="count-down">
          <span
          >{{countDown.day}}</span><span
        >{{countDown.hour}}</span
        ><span>{{countDown.minute}}</span><span
        >{{countDown.second}}</span>
        </div>
      </div>
      <div class="free-left"><FinishPart v-bind:msg="freeMsg"></FinishPart></div>
      <div class="free-right">
        <h3>下期预告</h3>
        <FreeRight v-bind:msg="freeRight"></FreeRight>
      </div>
      <div class="clear"></div>
    </section>
  </div>
</template>

<script>
    import FinishPart from '@/components/finish/FinishPart'
    import FreeRight from '@/components/finish/FreeRight'
    export default {
        name: 'Free',
        data() {
          return {
            countDown: {
              "day": 0,
              "hour": 0,
              "minute": 0,
              "second": 0
            },
            freeMsg: [],
            freeRight: []
          }
        },
        components: {
          FinishPart,
          FreeRight
        },
        created() {
          this.countDown.day = 3;
        },
        mounted() {
          this.CountDown();
          this.GetFree();
        },
        methods: {
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

              that.countDown.day = day;

            }
          },
          GetFree() {
            this.axios({
              method: 'get',
              url: 'http://localhost:8080/static/c3.json',
            }).then(response => {
              this.freeMsg = response.free;
              this.freeRight = response.right;
            });
          }


        }
    }
</script>


<style scoped>
  section{width: 1200px;  margin: 0 auto;}
  .count{width: 1200px; height: 160px;  background: no-repeat url('../assets/count_down.51ee3.png');  margin-bottom: 40px;  position: relative;}
  .count-down{position: absolute; top: 60px; left:343px;  text-align: center;}
  .count-down>span{display: inline-block; height: 60px; font-size: 24px;  width: 60px;  margin-right: 10px; color: #fff;}
  .free-left{float: left; margin-bottom: 30px;}
  .free-right{float: right;}
  .free-right>h3{text-align: left;  font-weight: 400; border-bottom: 1px solid #666;  padding-bottom: 4px;}

</style>
