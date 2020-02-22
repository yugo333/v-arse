<template>
  <div id="app">
    <router-view></router-view>
    <div class="cntroller">
      <transition name="home" appear>
        <router-view name="menuHome"></router-view>
      </transition>
      <transition name="works" appear>
        <router-view name="menuWorks"></router-view>
      </transition>
      <transition name="about" appear>
        <router-view name="menuAbout"></router-view>
      </transition>
      <transition name="link" appear>
        <router-view name="menuLink"></router-view>
      </transition>
    </div>
    <router-view name="time"></router-view>
  </div>
</template>

<script>

</script>

<style scoped>
#app{
  width: 100%;
  height: 100%;
  position: relative;
}

.cntroller{
  width: 20%;
  height: 60vh;
  /* position: absolute; */
  /* top: 30vh; */
  padding-left: 5%;
  font-size: 35px;
}


/* home */
.home-enter,                    /*押した時の最初の位置と最後の位置を一括指定できる*/
.home-leave-to{
  opacity: 0;
}
.home-enter-active{
  animation: home 1s;       /*@keyframesの指定*/
  transition: opacity 2s;       /*オパシティーの設定、animation、transitionは一つずつしかかけない*/
}

@keyframes home {
  from{
    transform: translateX(1000px);
  }
  to{
    transform: translateX(0);
  }
}
/* works */
.works-enter,                    /*押した時の最初の位置と最後の位置を一括指定できる*/
.works-leave-to{
  opacity: 0;
}
.works-enter-active{
  animation: works 2s;       /*@keyframesの指定*/
  transition: opacity 2s;       /*オパシティーの設定、animation、transitionは一つずつしかかけない*/
}
@keyframes works {
  from{
    transform: translateX(1400px);
  }
  to{
    transform: translateX(0);
  }
}
/* about */
.about-enter,                    /*押した時の最初の位置と最後の位置を一括指定できる*/
.about-leave-to{
  opacity: 0;
}
.about-enter-active{
  animation: about 3s;       /*@keyframesの指定*/
  transition: opacity 2s;       /*オパシティーの設定、animation、transitionは一つずつしかかけない*/
}
@keyframes about {
  from{
    transform: translateX(1700px);
  }
  to{
    transform: translateX(0);
  }
}
/* link */
.link-enter,                    /*押した時の最初の位置と最後の位置を一括指定できる*/
.link-leave-to{
  opacity: 0;
}
.link-enter-active{
  animation: link 4s;       /*@keyframesの指定*/
  transition: opacity 2s;       /*オパシティーの設定、animation、transitionは一つずつしかかけない*/
}
@keyframes link {
  from{
    transform: translateX(2000px);
  }
  to{
    transform: translateX(0);
  }
}
</style>
