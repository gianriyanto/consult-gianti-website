<template>
  <div id="BlurryBackground">
    <div class="canvas">
      <span class="glass-cover"/>
      <span class="circle-1"/>
      <span class="circle-2"/>
      <span class="circle-3"/>
      <span class="circle-4"/>
      <span class="circle-5"/>
      <span class="circle-6"/>
      <span class="circle-7"/>
      <span class="circle-8"/>
      <span class="circle-9"/>
      <span class="circle-10"/>
      <span class="circle-11"/>
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
  height: 400vh;
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
  .circle-6{
    z-index: 0;
    display: flex;
    position: absolute;
    transform: translate(80vw, 215vh);
    background-color: #77b9d9;
    height: 500px;
    width: 500px;
    border-radius: 50%;
  }
  .circle-7{
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(75vw, 180vh);
    background-color: #fcbd91;
    height: 400px;
    width: 400px;
    border-radius: 50%;
  }
  .circle-8{
    z-index: 0;
    display: flex;
    position: absolute;
    transform: translate(-5vw, 210vh);
    background-color: #acfcdc;
    height: 400px;
    width: 400px;
    border-radius: 50%;
  }
  .circle-9{
    z-index: 0;
    display: flex;
    position: absolute;
    transform: translate(10vw, 240vh);
    background-color: #83d8f1;
    height: 450px;
    width: 450px;
    border-radius: 50%;
  }
  .circle-10{
    z-index: -2;
    display: flex;
    position: absolute;
    transform: translate(75vw, 110vh);
    background-color: #83d8f1;
    height: 400px;
    width: 400px;
    border-radius: 50%;
  }
  .circle-11{
    z-index: -2;
    display: flex;
    position: absolute;
    transform: translate(-5vw, 300vh);
    background-color: #f1be87;
    height: 550px;
    width: 550px;
    border-radius: 50%;
  }
}

</style>