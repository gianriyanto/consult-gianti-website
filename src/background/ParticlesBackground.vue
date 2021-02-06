<template>
  <div id="ParticlesBackground">
    <vue-particles
        color="#5471f1"
        :particleOpacity="0.4"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#b1b1b1"
        :linesWidth="0.5"
        :lineLinked="true"
        :lineOpacity="0.3"
        :linesDistance="250"
        :moveSpeed="1"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse">
    </vue-particles>
  </div>

</template>

<script>
export default {
  name: "ParticlesBackground"
}
</script>

<style scoped lang="scss">

#ParticlesBackground{
  z-index: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  color: #b1b1b1;
}

</style>