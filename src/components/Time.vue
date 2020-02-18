<template>
  <transition>
    <h1>LogIn {{ new Date() | moment('LTS') }}</h1>
  </transition>
</template>

<script>
import moment from 'moment';

export default {

    filters: {
      moment(value, format) {
      return moment(value).format(format);
      }
    }
}
</script>

<style scoped>
h1{
  color:springgreen;
  font-family: 'Orbitron', sans-serif;
  position: absolute;
  right: 10px;
  top: 90vh;
  font-size: 50px;
}
</style>