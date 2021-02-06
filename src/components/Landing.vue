<template>
  <section id="Landing">
    <particles-background/>
    <blurry-background/>
    <TopBar/>
    <div class="content-wrapper">
      <div class="header-wrapper">
        <landing-header id="LandingHeader"/>
        <img class="landing-image" src="@/assets/images/graduation.svg" alt=""/>
      </div>
      <div class="footer-container">
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
import LandingHeader from "@/components/LandingHeader";

export default {
  name: "Landing",
  components: {
    LandingHeader,
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
    display: flex;
    flex-direction: column;

    #TopBar{
      display: none;
    }

    .content-wrapper{
      display: flex;
      flex-direction: column;
      width: 71vw;
      height: 95vh;
      align-self: center;
      margin: auto;

      .header-wrapper{
        display: flex;
        padding-top: 20%;
        flex-direction: row;
        justify-content: space-between;

        #LandingHeader{
          width: 55%;
        }

        .landing-image{
          display: none;
          width: 40%;
        }
      }

      .footer-container{
        flex-grow: 1;
        display: flex;
        flex-direction: row;

        #SocialLinks {
          margin-top: auto;
        }
        #Overview{
          margin-top: auto;
          margin-left: auto;
          padding-right: 50px;
          padding-bottom: 20px;
        }
      }
    }
  }

}

</style>