<template>
  <section id="Landing">
    <particles-background/>
    <blurry-background/>
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
      <div class="subheader-container">
        <span class="subheader-text">
          I founded Aspectama to help architect personalised education blueprints for aspiring professionals like you.
        </span>
      </div>
      <div class="button-container">
        <button class="get-started-button">
          <span class="button-label">
            Let's get started
          </span>
        </button>
        <button class="learn-more-button">
          <span class="button-label">
            Learn more
          </span>
        </button>
      </div>
      <div class="body-container">
        <SocialLinks id="SocialLinks"/>
        <Overview id="Overview"/>
      </div>
    </div>
  </section>
</template>

<script>
import ParticlesBackground from "@/background/ParticlesBackground";
import TopBar from "@/components/TopBar";
import Overview from "@/components/Overview";
import SocialLinks from "@/components/SocialLinks";
import BlurryBackground from "@/background/BlurryBackground";

export default {
  name: "Landing",
  components: {
    BlurryBackground,
    SocialLinks,
    Overview,
    TopBar,
    ParticlesBackground
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {

  #Landing{
    height: 100vh;
    width: 100vw;

    #TopBar{
      display: none;
    }

    .content-wrapper{
      display: flex;
      flex-direction: column;
      width: 73vw;
      height: 95vh;
      align-self: center;
      margin: auto;

      .pre-header-container{
        display: flex;
        flex-direction: row;
        padding-top: 23%;

        .dash {
          width: 37px;
          height: 2px;
          background-color: #5651ec;
          border: none;
          margin: auto 10px auto 0;
        }

        .pre-header-text{
          font-family: 'Bw Modelica Medium', serif;
          font-size: 19px;
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
          font-size: 45px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.3;
          color: #282828;
        }
      }

      .subheader-container{
        width: 35%;
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        text-align: left;

        .subheader-text{
          font-family: "Bw Modelica Regular", serif;
          font-size: 16px;
          color: #1f1f1f;
          letter-spacing: -0.3px;
          line-height: 1.8;
        }
      }

      .button-container{
        padding-top: 20px;
        display: flex;
        flex-direction: row;
        text-align: left;

        .get-started-button{
          cursor: pointer;
          width: 150px;
          height: 44px;
          background-color: #1f1f1f;
          border-radius: 30px;
          margin-right: 25px;

          .button-label {
            font-family: "Gilroy Regular", serif;
            font-size: 13px;
            margin: auto;
            color: white;
          }
        }
        .learn-more-button{
          cursor: pointer;
          width: fit-content;
          background: transparent;
          border-radius: 10px;

          .button-label {
            font-family: "Gilroy Regular", serif;
            font-size: 14px;
            margin: auto;
            color: #1f1f1f;
          }
        }
      }
      .body-container{
        flex-grow: 1;
        display: flex;
        flex-direction: row;

        #SocialLinks {
          margin-top: auto;
        }
        #Overview{
          margin-top: auto;
          margin-left: auto;
        }
      }
    }
  }

}

</style>