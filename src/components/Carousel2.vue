<template>
  <div>
    <div class="cs" ref="cs">
      <div class="cs-body" ref="csbody">
        <div class="cs-img" v-for="bookMsg in booksMsg.books">
          <a href="">
            <img v-bind:src="bookMsg.img" v-bind:alt="bookMsg.name" v-bind:title="bookMsg.name">
          </a>
        </div>
      </div>
      <div class="cs-des" v-for="(bookMsg, index) in booksMsg.books" v-bind:class="{active2:isActive===index}">
        <p class="cs-title">{{bookMsg.name}}</p>
        <p class="cs-message">{{bookMsg.des}}</p>
        <button>书籍详情</button>
        <p></p>
      </div>
      <ul class="navigator">
        <li v-for="(bookMsg, index) in booksMsg.books" v-bind:class="{active:isActive===index}"></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Carousel2',
        props: ['booksMsg'],
      data() {
          return {
            isActive: 0
          }
      },
        mounted() {
          this.cs();
        },
        methods: {
          cs() {
            let csbody = this.$refs.csbody;
            let csImg = csbody.children;
            let cs = this.$refs.cs;
            let len = csImg.length;
            let zIndex = 500;
            let middle = Math.floor(len/2);
            let wArray = [];
            let pw = 40;
            if(len > 4) {
              let left = 105;
              let width = 90;
              let top = 0;
              for( let i = 0; i <= middle; i++){
                csImg[i].style.left = left + 'px';
                csImg[i].style.zIndex = zIndex;
                csImg[i].style.width = width + 'px';
                csImg[i].style.top = top + 'px';
                wArray.push(width);
                width = width * 0.9;

                left += pw;
                zIndex -= 1;
                top += 10;
                if(i > 2) {
                  csImg[i].style.display = 'none';
                }
              }


              let initClass = csImg[0].getAttribute('class') + ' active';
              csImg[0].setAttribute('class', initClass);

              left = 105;
              width = 90;
              top = 0;
              zIndex = 500;

              for( let j = len - 1, num = 0; j > middle; j--,num++){
                top += 10;
                left -= pw;
                zIndex -= 1;
                width = width * 0.9;
                wArray.push(width);
                csImg[j].style.left = left + 'px';
                csImg[j].style.zIndex = zIndex;
                csImg[j].style.width = width + 'px';
                csImg[j].style.top = top + 'px';

                if(num > 1) {
                  csImg[j].style.display = 'none';
                }
              }
              left = 105;
              width = 90;
              top = 0;
              zIndex = 500;
              let mleft = parseFloat(csImg[middle].style.left);
              let mzIdex = parseFloat(csImg[middle].style.zIndex);
              let mWidth = parseFloat(csImg[middle].style.width);
              let mTop = parseFloat(csImg[middle].style.top);
              let _middle = middle + 1;
              let acitveM = 0;
              let _left;
              let _top;
              let _width;
              let partWidth = width * 0.1;


              let csTimer;
              let dir = 'up';
              let that = this;
              let moveTimer;
              function move() {
                initClass = csImg[acitveM].getAttribute('class').replace('active','');
                csImg[acitveM].setAttribute('class', initClass);

                ++acitveM;
                if(acitveM===len){
                  acitveM = 0;
                }
                that.isActive = acitveM;

                initClass = csImg[acitveM].getAttribute('class') + ' active';
                csImg[acitveM].setAttribute('class', initClass);
                for( let k = 0; k < len; k++) {
                  _left = parseFloat(csImg[k].style.left);
                  _top = parseFloat(csImg[k].style.top);
                  zIndex = (parseFloat(csImg[k].style.zIndex));
                  _width = parseFloat(csImg[k].style.width);
                  csImg[k].style.display = 'block';
                  if(_left > 105) {
                    zIndex++;
                    _width = _width + partWidth;
                    _top -= 10;
                    acitveM++;
                  }else {
                    zIndex--;
                    _width = _width - partWidth;
                    _top += 10;
                    acitveM--;
                  }
                  left = parseFloat(csImg[k].style.left) - pw;

                  csImg[k].style.width = _width + 'px';
                  csImg[k].style.left = left + 'px';
                  csImg[k].style.zIndex = zIndex;
                  csImg[k].style.top = _top + 'px';
                }
                csImg[_middle].style.left = mleft + 'px';
                csImg[_middle].style.zIndex = mzIdex;
                csImg[_middle].style.width = mWidth + 'px';
                csImg[_middle].style.top = mTop + 'px';
                csImg[_middle].style.display = 'none';
                acitveM++;
                ++_middle;
                if(_middle === len){
                  _middle = 0;
                }
                csImg[_middle].style.display = 'none';

              }
              csTimer = setInterval(move, 3000);




            }
          }
      }
    }
</script>


<style scoped>
  .cs{position: relative; width: 100%;  height: 150px;}
  .cs-body{width: 100%; position: relative; background: red}
  .cs-img{width: 90px; position: absolute; top: 0; left: 0; z-index: 1; transition: all linear 0.5s; }
  .cs-img>a>img{width: 100%;  height: auto; border: 1px solid #000;}
  .cs-des{display: none; position: absolute; top: 0; right: 0; width: 400px; height: 122px;}
  .cs-des.active2{display: block;}
  .active>.cs-des{display: block;}
  .cs-title{font-size: 18px;  font-weight: bold;  margin-bottom: 10px;}
  .cs-message{font-size: 14px; color: #666; line-height: 24px;  height: 48px; overflow: hidden; margin-bottom: 14px;}
  .cs-des>button{background: #bf2c24; color: #fff;  border: 1px solid #bf2c24;  width: 100px; height: 30px; border-radius: 15px;  font-size: 14px; }
  .navigator{position: absolute;  bottom: 0;  left: 100px;  z-index: 800;}
  .navigator>li{width: 8px; height: 8px;  border-radius: 50%; background: #ddd; float: left;  margin-right: 7px; }
  .navigator>.active{border: 2px solid #ed4259;}
</style>
