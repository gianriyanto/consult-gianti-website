<template>
  <div id="BlurryBackground2">
    <div class="canvas">
      <span class="glass-cover"/>
      <span class="circle-1"/>
      <span class="circle-2"/>
      <span class="circle-3"/>
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
  height: 100vh;
  width: 100vw;
  z-index: -10;

  .glass-cover{
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba( 255, 255, 255, 0.75 );
    backdrop-filter: blur( 80.0px );
    -webkit-backdrop-filter: blur( 80.0px );
    border-radius: 10px;
  }

  .circle-1{
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(2vw, 10vh);
    background-color: #7a7bf8;
    height: 50vw;
    width: 50vw;
    border-radius: 50%;
  }
  .circle-2{
    z-index: 0;
    display: flex;
    position: absolute;
    transform: translate(50vw, 20vh);
    background-color: #46cbcb;
    height: 10vw;
    width: 10vw;
    border-radius: 50%;
  }
  .circle-3{
    z-index: 0;
    display: flex;
    position: absolute;
    transform: translate(40vw, 30vh);
    background-color: #46cbcb;
    height: 30vw;
    width: 30vh;
    border-radius: 50%;
  }
}

</style>