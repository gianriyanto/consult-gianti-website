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
      </div>
      <div class="sub-header-container">
        <span class="sub-header-text">
          Nice to meet you,
        </span>
      </div>
      <div class="body-container">
        <div class="overview">
          <span class="overview-number">
            50
          </span>
          <span class="overview-description">
            Years of combined experience
          </span>
        </div>
        <div class="overview">
          <span class="overview-number">
            90
          </span>
          <span class="overview-description">
            Universities I have enrolled to
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ParticlesBackground from "@/background/ParticlesBackground";
import TopBar from "@/components/TopBar";

export default {
  name: "Landing",
  components: { TopBar, ParticlesBackground}
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

      .pre-header-container{
        display: flex;
        flex-direction: row;
        padding-top: 140px;

        .dash {
          width: 40px;
          height: 2px;
          background-color: #5651ec;
          border: none;
          margin: auto 10px auto 0;
        }

        .pre-header-text{
          font-family: 'Bw Modelica Medium', serif;
          font-size: 21px;
          word-spacing: 1.5px;
          letter-spacing: -0.5px;
          line-height: 1.2;
          color: #282828;
        }
      }

      .header-container {
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        text-align: left;

        .header-text {
          font-family: 'Bw Modelica Bold', serif;
          font-size: 42px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.3;
          color: #282828;
        }
      }
      .sub-header-container{
        display: flex;
        flex-direction: column;
        text-align: left;

        .sub-header-text{
          font-family: 'Bw Modelica Bold', serif;
          font-size: 42px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.3;
          color: #282828;
        }
      }

      .body-container {
        padding-top: 100px;
        display: flex;
        flex-direction: column;
        margin-left: auto;

        .overview{
          display: flex;
          flex-direction: row;
          width: 230px;
          align-items: center;

          .overview-number{
            font-family: 'Gilroy Bold', serif;
            font-size: 60px;
            word-spacing: 1.5px;
            letter-spacing: -0.5px;
            color: #282828;
            margin-right: 20px;
          }

          .overview-description{
            font-family: 'Gilroy Regular', serif;
            font-size: 15px;
            word-spacing: 1.5px;
            letter-spacing: -0.5px;
            line-height: 1.3;
            padding-bottom: 10px;
            color: #282828;
          }
        }
      }

    }
  }

}

</style>