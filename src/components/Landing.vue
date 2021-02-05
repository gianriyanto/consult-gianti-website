<template>
  <section id="Landing">
    <particles-background/>
    <TopBar/>
    <div class="content-wrapper">
      <div class="pre-header-container">
        <hr class="dash" noshade/>
        <span class="pre-header-text">
          Hi there,
        </span>
      </div>
      <div class="header-container">
        <span class="header-text">
          I'm Gianti.
        </span>
        <span class="header-text">
          Your education counselor.
        </span>
        <span class="header-text">
          Nice to meet you
        </span>
      </div>
      <div>

      </div>
    </div>
  </section>
</template>

<script>
import ParticlesBackground from "@/background/ParticlesBackground";
import TopBar from "@/components/TopBar";
export default {
  name: "Landing",
  components: {TopBar, ParticlesBackground}
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {

  #Landing{

    #TopBar{

    }

    .content-wrapper{
      display: flex;
      flex-direction: column;
      width: 70vw;
      align-self: center;
      margin: 0 auto;
      border: thin solid lightgrey;

      .pre-header-container{
        display: flex;
        flex-direction: row;
        border: thin solid lightskyblue;
        padding-top: 70px;

        .dash {
          width: 30px;
          height: 2.5px;
          background-color: #5651ec;
          border: none;
          margin: auto 10px auto 0;
        }

        .pre-header-text{
          font-family: 'Bw Modelica Bold', serif;
          font-size: 21px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.2;
          color: #282828;
        }
      }

      .header-container {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        border: thin solid lightskyblue;
        text-align: left;

        .header-text {
          font-family: 'Bw Modelica Bold', serif;
          font-size: 45px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.2;
          color: #282828;
        }
      }

    }
  }

}

</style>