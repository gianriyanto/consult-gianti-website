<template>
  <section id="Landing">
    <TopBar/>
    <div class="content-wrapper">
      <div class="header-wrapper">
        <landing-header id="LandingHeader"/>
        <overview-mobile id="OverviewMobile"/>
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
import OverviewMobile from "@/components/OverviewMobile";

export default {
  name: "Landing",
  components: {
    OverviewMobile,
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
          width: 100%;
        }
        #OverviewMobile{
          display: none;
        }
      }

      .footer-container{
        flex-grow: 1;
        display: flex;
        flex-direction: row;

        #SocialLinks {
          margin-top: auto;
          padding-bottom: 30px;
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

@media only screen and (max-width: 768px) {
  #Landing{
    position: relative;
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
        padding-top: 120px;
        flex-direction: column;

        #LandingHeader{
          width: 100%;
        }
      }

      .footer-container{
        width: 100%;

        #SocialLinks {
          margin-top: auto;
          padding-bottom: 20px;
        }
        #Overview{
          padding-top: 20px;
        }
      }
    }
  }
}

</style>