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
      <span class="circle-12"/>
      <span class="circle-13"/>
      <span class="circle-14"/>
      <span class="circle-15"/>
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
  height: 600vh;
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
    background-color: #77bade;
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
    background-color: #90d5f5;
    height: 450px;
    width: 450px;
    border-radius: 50%;
  }
  .circle-4{
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(-15vw, 65vh);
    background-color: #ff804e;
    height: 650px;
    width: 550px;
    border-radius: 50%;
  }
  .circle-5{
    z-index: -3;
    display: flex;
    position: absolute;
    transform: translate(-5vw, 44vh);
    background-color: #8de9ce;
    height: 600px;
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
    background-color: #f6924e;
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
    background-color: #5ad9bb;
    height: 400px;
    width: 400px;
    border-radius: 50%;
  }
  .circle-11{
    z-index: -2;
    display: flex;
    position: absolute;
    transform: translate(-5vw, 285vh);
    background-color: #ff9647;
    height: 550px;
    width: 550px;
    border-radius: 50%;
  }
  .circle-12{
    z-index: -2;
    display: flex;
    position: absolute;
    transform: translate(45vw, 350vh);
    background-color: #9af6e4;
    height: 500px;
    width: 500px;
    border-radius: 50%;
  }
  .circle-13{
    z-index: -2;
    display: flex;
    position: absolute;
    transform: translate(20vw, 400vh);
    background-color: #fcf2ba;
    height: 600px;
    width: 600px;
    border-radius: 50%;
  }
  .circle-14{
    z-index: -2;
    display: flex;
    position: absolute;
    transform: translate(40vw, 470vh);
    background-color: #bbffbe;
    height: 500px;
    width: 500px;
    border-radius: 50%;
  }
  .circle-15{
    z-index: -2;
    display: flex;
    position: absolute;
    transform: translate(20vw, 500vh);
    background-color: #b8d9fc;
    height: 600px;
    width: 600px;
    border-radius: 50%;
  }
}

</style>