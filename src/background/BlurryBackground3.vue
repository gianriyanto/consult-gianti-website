<template>
  <div id="BlurryBackground3">
    <div class="canvas">
      <span class="glass-cover"/>
      <span class="circle-1"/>
      <span class="circle-2"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlurryBackground3"
}
</script>

<style lang="scss" scoped>


.canvas{
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -10;

  .glass-cover{
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba( 255, 255, 255, 0.6 );
    backdrop-filter: blur( 70.0px );
    -webkit-backdrop-filter: blur( 70.0px );
  }

  .circle-1{
    z-index: 0;
    display: flex;
    position: absolute;
    transform: translate(55vw, 10vh);
    background-color: #8bccee;
    height: 500px;
    width: 500px;
    border-radius: 50%;
  }
  .circle-2{
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(5vw, 40vh);
    background-color: #74ecd0;
    height: 400px;
    width: 400px;
    border-radius: 50%;
  }
}

</style>