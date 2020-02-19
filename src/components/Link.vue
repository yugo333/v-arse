<template>
  <div id="all">
    <div id="a">
      <a class="link" href="http://www.u5-official.com/">Portfolio</a>
      <br>
      <br>
    </div>
    <div id="b">
      <a class="link" href="https://www.youtube.com/channel/UChAhO3nKwVdZ5GYMF-HkE1g?view_as=subscriber">YouTube</a>
      <br>
      <br>
    </div>
    <div id="c">
      <a class="link" href="https://twitter.com/u5musicxit">Twitter</a>
      <br>
      <br>
    </div>
    <div id="d">
      <a class="link" href="https://github.com/yugo333">GitHub</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.link{
  color:springgreen;
  font-family: 'Orbitron', sans-serif;
  margin: 20px;
  transition: 3s ;
  font-size: 45px;
}
.link:hover{
  color:rgb(81, 0, 255);
  font-size: 60px;
}


#a{
  position: absolute;
  top:50px;
  left: 70%;
  text-align: center ;
  transition: .5s ;
  transform: rotateZ( 0deg ) ;
}
#a:hover {
  font-size: 60px;
  transform: rotateZ( 360deg ) ;
}
#b{
  position: absolute;
  top:200px;
  left: 70%;
  text-align: center ;
  transition: .5s ;
  transform: rotateZ( 0deg ) ;
}
#b:hover {
  font-size: 60px;
  transform: rotateZ( 360deg ) ;
}
#c{
  position: absolute;
  top:350px;
  left: 70%;
  text-align: center ;
  transition: .5s ;
  transform: rotateZ( 0deg ) ;
}
#c:hover {
  font-size: 60px;
  transform: rotateZ( 360deg ) ;
}
#d{
  position: absolute;
  top:500px;
  left: 70%;
  text-align: center ;
  transition: .5s ;
  transform: rotateZ( 0deg ) ;
}
#d:hover {
  font-size: 60px;
  transform: rotateZ( 360deg ) ;
}


</style>