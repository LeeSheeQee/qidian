<template>
 <div class="easy-cs">
   <div class="cs-body">
     <div v-for="csmsg in csMsg" class="cs-part">
       <a>
         <img v-bind:src="csmsg.src" alt="">
       </a>
     </div>
   </div>
   <div class="cs-control">
     <a v-for="csmsg in csMsg">{{csmsg.title}}</a>
     <!--<button class="cs-left">left</button>-->
     <!--<button class="cs-right">right</button>-->
   </div>
 </div>
</template>

<script>
    export default {
        name: 'Carousel',
        props: ['csMsg'],
        mounted() {
          let baseWidth = document.querySelector('.easy-cs').offsetWidth;
          let csPart = document.querySelectorAll('.cs-part');
          let csBody = document.querySelector('.cs-body');
          let csDots = document.querySelectorAll('.cs-control>a');
          let len = csPart.length;
          let bodyWidth = 0;
          let partTimer;
          let canMove = true;
          let moveWidth = 0;
//          let rightBtn = document.querySelector('.cs-right');
//          let leftBtn = document.querySelector('.cs-left');
          let one = true;
          csBody.style.width = 5 * baseWidth + 'px';

//          设置轮播导航宽度
          for( let i = 0; i < len; i++) {
            if (i === 0) {
              addClass(csDots[0], 'active')
            }
            csDots[i].style.width = baseWidth/len + 'px';
            csDots[i].style.height = '30px';
          }

//          导航点击事件
          for ( let k = 0; k < len; k++) {
            csPart[k].addEventListener('mouseenter', function () {
              clearInterval(bodyTimer);
            });
            csPart[k].addEventListener('mouseleave', function () {
              bodyTimer = setInterval(csPlay, bT);
            });
            csDots[k].onclick = function () {
              clearInterval(bodyTimer);
              clearInterval(partTimer);

                partTimer = setInterval(function () {
                  if( k > currentNum) {
                    if(one) {
                      csBody.insertBefore(csPart[k], csPart[currentNum + 1]);
                      one = false;
                    }
                    moveWidth = moveWidth + w;
                    if( moveWidth < baseWidth ) {
                      csBody.style.left =  - moveWidth + 'px';
                    }else {
                      clearInterval(partTimer);
                      moveWidth = 0;
//                      div回到正确位置
                      csBody.style.left = -baseWidth + 'px';
                      for( let j = currentNum; j < k; j++) {
                        if(j === currentNum) {
                          csBody.style.left = 0;
                        }
                        csBody.appendChild(csPart[j])
                      }
                      currentNum = k;
                      one = true;
                      for( let j = 0; j < len; j++) {
                        removeClass(csDots[j], 'active');
                      }
                      addClass(csDots[currentNum], 'active');
                    }
                  } else if ( k < currentNum) {

                    if(one) {
                      csBody.insertBefore(csPart[k], csPart[currentNum])
                      csBody.style.left = - baseWidth + 'px';
                      one = false;
                    }
                    moveWidth = moveWidth + w;
                    if( moveWidth < baseWidth ) {
                      csBody.style.left =   (moveWidth - baseWidth) + 'px';
                    }else {
                      clearInterval(partTimer);
                      moveWidth = 0;
//                      div回到正确位置
                      csBody.style.left = 0;
                      for( let j = k + 1; j < currentNum; j++) {
                        csBody.insertBefore(csPart[j], csPart[currentNum])
                      }
                      currentNum = k;
                      one = true;
                      for( let j = 0; j < len; j++) {
                        removeClass(csDots[j], 'active');
                      }
                      addClass(csDots[currentNum], 'active');
                    }
                  }

                }, 10);
                bodyTimer = setInterval(csPlay, bT);

            }
          }



//          设置轮播部分高度
         for ( let i = 0; i < len; i++) {
           if (i === 0) {
             addClass(csPart[0], 'active')
           }
           csPart[i].style.width = baseWidth + 'px';
         }
          let bT = 3000;
          let pT = 500;
          let currentNum = 0;
          let w = (baseWidth / pT) * 10;
          let bodyTimer = setInterval(csPlay, bT);
//          rightBtn.onclick = function () {
//            clearInterval(bodyTimer);
//            clearInterval(partTimer);
//            partTimer = setInterval(move, 10);
//            bodyTimer = setInterval(csPlay, bT);
//          };
//          leftBtn.onclick = function () {
//            clearInterval(bodyTimer);
//            clearInterval(partTimer);
//            partTimer = setInterval(moveLeft, 10);
//            bodyTimer = setInterval(csPlay, bT);
//          };
          function csPlay() {
             if(canMove) {
               partTimer = setInterval(move, 10);
             }
          }
          function move() {
            canMove = false;
            moveWidth = moveWidth + w;
            if(moveWidth < baseWidth) {
              csBody.style.left =  - moveWidth + 'px';
            } else {
              clearInterval(partTimer);
              moveWidth = 0;
              csBody.style.left = baseWidth + 'px';

              rightAppend(currentNum);
              currentNum = currentNum + 1;
              if (currentNum === len) {
                currentNum = 0;
              }
              for( let j = 0; j < len; j++) {
                removeClass(csDots[j], 'active');
              }
              addClass(csDots[currentNum], 'active');
              csBody.style.left = 0;
              canMove = true;
            }
          }
//          function moveClick() {
//            if(one) {
//                csBody.insertBefore(csPart[clickNum], csPart[currentNum + 1])
////              let csPart2 = document.querySelectorAll('.cs-part');
////              prependChild(csBody, csPart2[len-1]);
////              csBody.style.left = -baseWidth + 'px';
//              one = false;
//            }
//            moveWidth = moveWidth + w;
//            if( moveWidth < baseWidth ) {
//              csBody.style.left =  - moveWidth + 'px';
//            }else {
//              clearInterval(partTimer);
//              moveWidth = 0;
////              csBody.style.left = baseWidth + 'px';
////              rightAppend(currentNum);
//              currentNum = currentNum + 1;
//              if (currentNum === len) {
//                currentNum = 0;
//              }
//              for( let j = 0; j < len; j++) {
//                removeClass(csDots[j], 'active');
//              }
//              addClass(csDots[currentNum], 'active');
//              csBody.style.left = -baseWidth + 'px';
//            }
//          }

          function moveLeft() {
           if(one) {
             let csPart2 = document.querySelectorAll('.cs-part');
             prependChild(csBody, csPart2[len-1]);
             csBody.style.left = -baseWidth + 'px';

             one = false;
           }
            moveWidth = moveWidth + w;
            if(moveWidth < baseWidth) {
              csBody.style.left =   (-baseWidth + moveWidth) + 'px';
            } else {
              clearInterval(partTimer);
              moveWidth = 0;
              one = true;
              csBody.style.left = 0 ;
              currentNum = currentNum - 1;
              if (currentNum === -1) {
                currentNum = len - 1;
              }
              for( let j = 0; j < len; j++) {
                removeClass(csDots[j], 'active');
              }
              addClass(csDots[currentNum], 'active');
            }
          }
          function addClass(div, name) {
           let currentC = div.getAttribute('class');
           if(currentC) {
             currentC = div.getAttribute('class') + ' ' + name;
           }else {
             currentC = name;
           }
           div.setAttribute('class', currentC);
          }
          function removeClass(div, name) {
            let currentC = div.getAttribute('class');
            if(currentC) {
              currentC = currentC.replace(name, '');
            }
            div.setAttribute('class', currentC);
          }
          function rightAppend(num = 0) {
            csBody.appendChild(csPart[num])
          }
          function prependChild(parent, newChild) {
            if (parent.firstChild) {

              parent.insertBefore(newChild, parent.firstChild);
            } else {
              parent.appendChild(newChild);
            }
            return parent;
          }
//          document.addEventListener("visibilitychange", function() {
//
//            if(document.hidden === true) {
//              clearInterval(bodyTimer);
//            } else {
//              bodyTimer = setInterval(csPlay, bT);
//            }
//          });

        }
    }
</script>


<style scoped>
  .easy-cs{width: 100%; min-height: 250px; position: relative;   overflow: hidden;}
  .cs-body{position: absolute;  top: 0; left: 0;}
  .cs-part{ float: left; overflow: hidden; cursor: pointer;}
  .cs-part>a>img{width: 100%; height: auto;}
  .cs-control{position: absolute; left: 0; bottom: 0; z-index: 999;width: 100%; }
  .cs-control>a{display: inline-block; background: rgba(0, 0, 0, 0.8); color: #fff; text-align: center; cursor: pointer;  line-height: 30px;}
  .cs-control>.active{background: #ed4259;}
</style>
