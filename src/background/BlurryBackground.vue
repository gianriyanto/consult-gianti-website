<template>
  <div id="BlurryBackground">
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
  }

  .circle-1{
    z-index: 0;
    display: flex;
    position: absolute;
    transform: translate(65vw, 0);
    background-color: #81d2ff;
    height: 500px;
    width: 500px;
    border-radius: 50%;
  }
  .circle-2{
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(75vw, 30vh);
    background-color: #7ce2ca;
    height: 400px;
    width: 400px;
    border-radius: 50%;
  }
  .circle-3{
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(20vw, 40vh);
    background-color: #fff975;
    height: 450px;
    width: 450px;
    border-radius: 50%;
  }
  .circle-4{
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(0vw, 65vh);
    background-color: #5eeec0;
    height: 550px;
    width: 550px;
    border-radius: 50%;
  }
}

</style>