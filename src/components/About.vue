<template>
  <div id="text">
    <div id="titles"><div id="titlecontent">
      <p>Episode II

        ATTACK OF THE CLONES

        There is unrest in the Galactic
        Senate. Several thousand solar
        systems have declared their
        intentions to leave the Republic.
        This separatist movement,
        under the leadership of the
        mysterious Count Dooku, has
        made it difficult for the limited
        number of Jedi Knights to
        maintain peace and order in
        the galaxy.

        Senator Amidala, the former
        Queen of Naboo, is returning
        to the Galactic Senate to vote
        on the critical issue of creating
        an ARMY OF THE REPUBLIC
        to assist the overwhelmed
        Jedi....
      </p>

    </div></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#text{
  position: relative;
}
#titles{
    position: absolute;
    width: 26em;
    height: 50em;
    bottom: -720px;
    font-size: 350%;
    font-weight: bold;
    color: gold;
    text-align: justify;
    overflow: hidden;
    transform-origin: 50% 100%;
    transform: perspective(300px) rotateX(25deg);
    z-index: 30;
}
#titles:after{
    position: absolute;
    content: ' ';
    left: 0;
    right: 0;
    top: 0;
    bottom: 60%;
    background-image: linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%);
    pointer-events: none;
    z-index: 30;
}

#titlecontent{
    position: absolute;
    top: 100%;
    animation: scroll 100s linear 1s infinite;
}
@keyframes scroll {
    0% { top: 100%; }
    100% { top: -170%; }
}
</style>