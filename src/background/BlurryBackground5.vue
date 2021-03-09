<template>
  <div id="BlurryBackground5">
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
  name: "BlurryBackground5"
}
</script>

<style lang="scss" scoped>

.canvas{
  display: flex;
  position: absolute;
  height: 75vh;
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
    transform: translate(50vw, 30vh);
    background-color: #9eddfd;
    height: 700px;
    width: 700px;
    border-radius: 50%;
  }
  .circle-2{
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(1vw, 40vh);
    background-color: #8ff8ca;
    height: 500px;
    width: 500px;
    border-radius: 50%;
  }
  .circle-3{
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(23vw, 15vh);
    background-color: #ffdf8b;
    height: 400px;
    width: 400px;
    border-radius: 50%;
  }
  .circle-4{
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(23vw, 40vh);
    background-color: #efafaf;
    height: 300px;
    width: 300px;
    border-radius: 50%;
  }
}

</style>