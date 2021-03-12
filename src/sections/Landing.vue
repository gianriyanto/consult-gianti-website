<template>
  <section id="Landing">
    <TopBar/>
    <div class="content-wrapper">
      <div class="header-wrapper">
        <landing-header id="LandingHeader"/>
      </div>
      <div class="footer-container">
        <SocialLinks id="SocialLinks"/>
        <Overview id="Overview"/>
      </div>
    </div>
  </section>
</template>

<script>
import TopBar from "@/components/TopBar";
import Overview from "@/components/Overview";
import SocialLinks from "@/components/SocialLinks";
import LandingHeader from "@/components/LandingHeader";

export default {
  name: "Landing",
  components: {
    LandingHeader,
    SocialLinks,
    Overview,
    TopBar,
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
      height: 100%;
      width: 75vw;
      align-self: center;

      .header-wrapper{
        display: flex;
        padding-top: 18%;
        flex-direction: row;
        justify-content: space-between;

        #LandingHeader{
          width: 60%;
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