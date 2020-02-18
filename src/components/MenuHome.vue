<template>
  <div id="menu">
    <router-link to='/' class="list">Home</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      home:true,
    }
  }
}
</script>

<style scoped>

#menu{
width: 20%;
height: 30px;
padding: 35px;
}
.list{
margin-top: 20%;
font-family: 'Orbitron', sans-serif;
color:springgreen;
}
.list:hover{
  text-shadow: 5px 5px 5px rgb(152, 243, 197);
  font-size: 45px;
}
</style>
