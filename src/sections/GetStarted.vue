<template>
  <section id="GetStarted">
    <blurry-background2/>
    <div class="content-wrapper">
      <div class="header-container">
        <span class="header-text">
          So, tell me a little bit about yourself
        </span>
      </div>
      <Typeform id="Typeform"/>
    </div>
  </section>
</template>

<script>
import BlurryBackground2 from "@/background/BlurryBackground2";
import Typeform from "@/components/Typeform";

export default {
  name: "GetStarted",
  components: {Typeform, BlurryBackground2}
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {

  #GetStarted{
    height: 100vh;

    .content-wrapper {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      width: 39vw;

      .header-container {
        align-self: center;
        width: 60%;
        padding-top: 100px;
        text-align: center;

        .header-text {
          font-family: 'Bw Modelica Bold', serif;
          font-size: 40px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.3;
          color: #282828;
        }
      }
      #Typeform{
        align-self: center;
        width: 70%;
      }
    }
  }
}

</style>