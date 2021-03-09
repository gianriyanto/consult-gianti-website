<template>
  <div id="BlurryBackground">
    <div class="canvas">
      <span class="glass-cover"/>
      <span class="circle-1"/>
      <span class="circle-2"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlurryBackground2"
}
</script>

<style lang="scss" scoped>

.canvas{
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -10;
  overflow-x: hidden;

  .glass-cover{
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba( 255, 255, 255, 0.6 );
    backdrop-filter: blur( 90.0px );
    -webkit-backdrop-filter: blur( 90.0px );
  }

  .circle-1{
    z-index: 0;
    display: flex;
    position: absolute;
    transform: translate(90vw, 5vh);
    background-color: #69e5c8;
    height: 500px;
    width: 500px;
    border-radius: 50%;
  }
  .circle-2{
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(10vw, 40vh);
    background-color: #5ab5be;
    height: 400px;
    width: 400px;
    border-radius: 50%;
  }
}

</style>