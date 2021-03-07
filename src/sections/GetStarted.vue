<template>
  <section id="GetStarted">
    <blurry-background2/>
    <div class="content-wrapper">
      <div class="pre-header-container">
        <span class="pre-header-text">
          Tell me a little bit about yourself
        </span>
      </div>
      <Typeform id="Typeform"/>
    </div>
  </section>
</template>

<script>
import Typeform from "@/components/Typeform";
import BlurryBackground2 from "@/background/BlurryBackground2";

export default {
  name: "GetStarted",
  components: {
    BlurryBackground2,
    Typeform
  }
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {

  #GetStarted{
    height: fit-content;

    .content-wrapper {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      width: 70vw;

      .pre-header-container {
        padding-top: 100px;
        text-align: left;

        .pre-header-text {
          font-family: 'Bw Modelica Bold', serif;
          font-size: 30px;
          word-spacing: 1.5px;
          letter-spacing: -1.4px;
          line-height: 1.3;
          color: #282828;
        }
      }
      #Typeform{
        padding-top: 60px;
      }
    }
  }
}

</style>