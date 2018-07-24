<template>
  <div class="ca">
    <ul class="ca-bd" ref="ul">
      <li class="ca-part" v-for="book in msg">
        <div class="ca-img">
          <a href="">
            <img v-bind:src="book.img">
          </a>
        </div>
        <a href="" class="ca-name">{{book.name}}</a>
        <p class="ca-score"><a href="">{{book.type}}</a>·{{book.score}}分</p>
        <p class="ca-des">{{book.des}}</p>
        <a href="" class="ca-join">加入书架</a>
      </li>
    </ul>
    <div class="dire">
      <div ref="left"><font-awesome-icon :icon="['fas','chevron-left']"/></div>
      <div ref="right"><font-awesome-icon :icon="['fas','chevron-right']"/></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'CarouselA',
        props: ['msg'],
        mounted() {
          let ul = this.$refs.ul;
          let lis = ul.children;
          let len = lis.length;
          let w = 0, m = 0;
          let _w = 226;
          let index = 0;
          let aw = 0;
          let v = 1;
          let aTime;
          let mTime;
          let tStar, tEnd, d1, d2;
          let mWidth = len *  _w;
          let left = this.$refs.left;
          let right =this.$refs.right;
          let dire = 0;
          let one = true;
          ul.style.width = mWidth + 'px';
          ul.addEventListener('mouseenter', function () {
            clearInterval(mTime)
          });
          ul.addEventListener('mouseleave', function () {
            mTime = setInterval(move, 3000);
          });

           mTime = setInterval(move, 3000);

          function move() {
            clearInterval(aTime);
            aw = 0;
            aTime = setInterval(animate, 20);
          }

          function animate() {
            aw+= 10 * v;
            if(dire === 0) {
              if(aw < _w) {
                ul.style.left = -aw + 'px';
              }else {
                clearInterval(aTime);
                ul.style.left = -_w + 'px';
                ul.appendChild(lis[index]);
                ul.style.left = 0;
                aw = 0;
              }
            }else {
              if(one) {
                prependChild(ul, lis[len - 1]);
                ul.style.left = -_w + 'px';

                one = false;
              }
              if(aw < _w) {
                ul.style.left = -(_w - aw) + 'px';
              }else {
                clearInterval(aTime);
                ul.style.left = 0;
                aw = 0;
                dire = 0;
                one = true;
              }
            }
          }

//          right

          left.addEventListener('click', function () {
            clearInterval(mTime);
            dire = 0;
            move();
          })
//          left
          right.addEventListener('click', function () {
            clearInterval(mTime);
            dire = 1;
            move();
          })

          function prependChild(parent, newChild) {
            if (parent.firstChild) {

              parent.insertBefore(newChild, parent.firstChild);
            } else {
              parent.appendChild(newChild);
            }
            return parent;
          }


//          this.mywindow.onfocus=function(){
//            mTime = setInterval(move, 3000);
//          }
//
//
//          this.mywindow.onblur=function(){
//            clearInterval(mTime);
//          }
        }
    }
</script>


<style scoped>
  .ca{width: 226px; height: 300px;   text-align: center; position: relative;  overflow: hidden;}
  .ca-bd{position: absolute;  top: 0; left: 0;  height: 300px;}
  .ca-bd>li{margin-bottom: 20px;  width: 226px;  float: left;}
  .ca-img{width: 84px;  height: 112px;  margin: 0 auto; margin-bottom: 10px;}
  .ca-img>a>img{width: 100%;  height: 100%;}
  .ca-name{width: 100%; height: 24px; line-height: 24px;  font-size: 18px;  overflow: hidden; color: #262626; margin-bottom: 10px; display: block;}
  .ca-name:hover{color: #ED4259;}
  .ca-score{width: 100%;  height: 16px; line-height: 16px;  font-size: 12px;   overflow: hidden; color: #bf2c24;  margin-bottom: 10px;}
  .ca-score>a{color: #bf2c24;}
  .ca-des{font-size: 12px;  height: 60px; line-height: 20px;  width: 100%;  overflow: hidden; color: gray;  margin-bottom: 16px;  text-align: left;}
  .ca-join{width: 100px;  height: 30px; font-size: 14px;  line-height: 30px;  text-align: center; color: #3f5a93; border: 1px solid #3f5a93;  border-radius: 20px;  display: block; margin: 0 auto;}
  .ca-join:hover{border-color: #2972CC;}
  .dire{width: 100%;  height: 26px; position: absolute; top: 137px; left: 0;  color: #e6e6e6; font-size: 26px;}
  .dire>div:first-child{float: left;}
  .dire>div{cursor: pointer;}
  .dire>div:hover{color: #CDCDCD;}
  .dire>div:last-child{float: right;}
</style>
