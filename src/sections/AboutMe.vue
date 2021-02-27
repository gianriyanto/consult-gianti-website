<template>
  <section id="AboutMe">
    <blurry-background3/>
    <div class="content-wrapper">
      <div class="header-container">
        <span class="pre-header-text">
          About Me
        </span>
        <span class="header-text">
          We can build new digital products from ground up, or upgrade existing ones to cope with new demands and growing user base.
        </span>
      </div>
      <div class="body-container">
        <span class="body-text">
          Aspectama is a team of multidisciplinary digital product experts who can take on any challenge in the sphere of web and mobile app-development. We create digital experiences that are human-centered and future proof.
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
          font-size: 41px;
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