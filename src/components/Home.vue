<template>
  <div>
    <div id="wrapper">
      <transition enter-active-class="animated zoomInDown"  appear>
        <img v-show="show" src="./../assets/logo.png">
      </transition>
      <div id="w-the">
        <transition enter-active-class="animated bounceInLeft"  appear>
          <h1 class="title2">the</h1>
        </transition>
      </div>
      <transition enter-active-class="animated bounceInRight"  appear>
        <h1 class="title">VueRyder</h1>
      </transition>
    </div>
    <!-- <component :is="menuComponent"></component>
    <component :is="xTime"></component> -->
  </div>
</template>

<script>
// import Menu from "./components/Menu.vue";
// import Time from "./components/Time.v"

export default {
  data(){
    return{
      show:true,
      // menuComponent:"Menu",
      // xTime:"Time",
    }
  },
  // components:{
  //   Menu: Menu,
  //   Time:Time,
  // }
};
</script>

<style scoped>

#wrapper {
  color: #2c3e50;
  margin: 0 auto;
  width: 320px;
  padding-top: 40px;
}
.title{
  color: chartreuse;
  position: absolute;
  top: 130px;
  margin: 0 auto;
  font-size: 50px;
  font-family: 'Monoton', cursive;
  text-shadow: 5px 5px 7px white;
}
#w-the{
  width: 31%;
  margin: 0 auto;
}
.title2{
  color: chartreuse;
  position: absolute;
  top: 70px;
  font-size: 50px;
  font-family: 'Monoton', cursive;
  text-shadow: 5px 5px 7px white;
}
</style>
