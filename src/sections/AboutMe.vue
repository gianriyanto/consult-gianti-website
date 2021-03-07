<template>
  <section id="AboutMe">
    <blurry-background3/>
    <div class="content-wrapper">
      <div class="header-container">
        <span class="pre-header-text">
          About Me
        </span>
        <span class="header-text">
          I build education blueprints from the ground up one person at a time by carefully leveraging your talent, skills, and passion.
        </span>
      </div>
      <div class="body-container">
        <span class="body-text">
          With over 20 years in the business, I look to solve one problem - simplifying your future. I understand that the first-step can be daunting, let alone the entire nitty-gritty process of studying overseas. I designed a system and way-of-working at Aspectama to ensure your education experience is seamless and hassle-free so that you can focus on what matters most - to let your passion drive your profession.
        </span>
      </div>
      <div class="signature">
        <img/>
      </div>
    </div>
  </section>
</template>

<script>
import BlurryBackground3 from "@/background/BlurryBackground3";
export default {
  name: "AboutMe",
  components: {BlurryBackground3}
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {

  #AboutMe {
    height: fit-content;

    .content-wrapper {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      width: 45vw;

      .header-container {
        padding-top: 200px;
        display: flex;
        flex-direction: column;
        text-align: left;

        .pre-header-text {
          font-family: 'Gilroy Regular', serif;
          font-size: 20px;
          word-spacing: 1.5px;
          letter-spacing: -0.4px;
          line-height: 1.3;
          color: #919191;
        }
        .header-text {
          padding-top: 25px;
          font-family: 'Gilroy Bold', serif;
          font-size: 44px;
          word-spacing: 1.8px;
          letter-spacing: -1.3px;
          line-height: 1.3;
          color: #1a1a1a;
        }
      }
      .body-container {
        padding-top: 35px;

        .body-text{
          font-family: 'Bw Modelica Regular', serif;
          font-size: 16px;
          word-spacing: 1.5px;
          letter-spacing: -0.5px;
          line-height: 2;
          color: #2f2f2f;
        }
      }
      .signature{

      }
    }
  }
}

</style>