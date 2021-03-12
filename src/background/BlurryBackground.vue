<template>
  <div id="BlurryBackground">
    <div class="canvas">
      <span class="glass-cover"/>
      <span class="circle-1"/>
      <span class="circle-2"/>
      <span class="circle-3"/>
      <span class="circle-4"/>
      <span class="circle-5"/>
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
  height: 180vh;
  width: 100vw;
  z-index: -1;
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
    transform: translate(15vw, 40vh);
    background-color: #fffba6;
    height: 450px;
    width: 450px;
    border-radius: 50%;
  }
  .circle-4{
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(-15vw, 65vh);
    background-color: #76d9ba;
    height: 550px;
    width: 550px;
    border-radius: 50%;
  }
  .circle-5{
    z-index: -3;
    display: flex;
    position: absolute;
    transform: translate(-5vw, 40vh);
    background-color: #ef946a;
    height: 450px;
    width: 450px;
    border-radius: 50%;
  }
}

</style>