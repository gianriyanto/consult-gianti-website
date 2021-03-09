<template>
  <div id="BlurryBackground3">
    <div class="canvas">
      <span class="glass-cover"/>
      <span class="circle-1"/>
      <span class="circle-2"/>
      <span class="circle-3"/>
      <span class="circle-4"/>
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
  height: 140vh;
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
    transform: translate(80vw, 40vh);
    background-color: #77b9d9;
    height: 500px;
    width: 500px;
    border-radius: 50%;
  }
  .circle-2{
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(75vw, 15vh);
    background-color: #fcbd91;
    height: 400px;
    width: 400px;
    border-radius: 50%;
  }
  .circle-3{
    z-index: 0;
    display: flex;
    position: absolute;
    transform: translate(-5vw, 40vh);
    background-color: #acfcdc;
    height: 400px;
    width: 400px;
    border-radius: 50%;
  }
  .circle-4{
    z-index: 0;
    display: flex;
    position: absolute;
    transform: translate(10vw, 70vh);
    background-color: #83d8f1;
    height: 450px;
    width: 450px;
    border-radius: 50%;
  }
}

</style>