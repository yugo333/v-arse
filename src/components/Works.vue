<template>
  <div id="btn">
    <h2>Don't Click</h2>
    <a id="url" href= "https://www.youtube.com/watch?v=NZ9eSyr_HTM">Danger</a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div{
  width: 40%;
  position: absolute;
  top:42vh;
  left: 30vw;
}
h2{
  font-size: 40px;
  color:springgreen;
}
#btn:hover h2{
  display: none;
}
#url{
  display: none;
}
#btn:hover #url{
  display: inline;
  font-size: 100px;
  color: crimson;
  text-shadow: 5px 5px 5px rgb(241, 90, 90);
}

</style>