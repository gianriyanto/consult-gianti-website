<template>
  <div id="BlurryBackground">
    <div class="canvas">
      <span class="glass-cover">

      </span>
      <span class="circle-1">

      </span>
      <span class="circle-2">

      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlurryBackground"
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
      background: rgba( 255, 255, 255, 0.6 );
      backdrop-filter: blur( 70.0px );
      -webkit-backdrop-filter: blur( 70.0px );
      border-radius: 10px;
    }

    .circle-1{
      z-index: 0;
      display: flex;
      position: absolute;
      transform: translate(55vw, 100px);
      background-color: #5657ff;
      height: 500px;
      width: 500px;
      border-radius: 50%;
    }
    .circle-2{
      z-index: -1;
      display: flex;
      position: absolute;
      transform: translate(40vw, 0);
      background-color: #68dddd;
      height: 400px;
      width: 400px;
      border-radius: 50%;
    }
  }

</style>