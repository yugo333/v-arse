<template>
  <div id="menu">
    <transition name="home" appear>
      <h1 v-if="home">Home</h1>
    </transition>
    <transition name="works" appear>
      <h1 v-if="works">Works</h1>
    </transition>
    <transition name="about" appear>
      <h1 v-if="about">About</h1>
    </transition>
    <transition name="link" appear>
      <h1 v-if="link">Link</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      home:true,
      works:true,
      about:true,
      link:true,
    }
  }
}
</script>

<style scoped>
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


#menu{
width: 20%;
height: 330px;
padding: 20px;
}
h1{
margin-top: 20%;
font-family: 'Orbitron', sans-serif;
color:springgreen;
}
h1:hover{
  text-shadow: 5px 5px 5px rgb(152, 243, 197);
  font-size: 40px;
}
</style>
