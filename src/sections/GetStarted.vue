<template>
  <section id="GetStarted">
    <div class="placeholder-get-started"> </div>
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
import Typeform from "@/components/Typeform";

export default {
  name: "GetStarted",
  components: {Typeform}
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {

  #GetStarted{
    height: fit-content;
    margin-top: 100px;

    .placeholder-get-started{
      background-image: linear-gradient(to right top, #232323, #272727, #2a2a2a, #2e2e2e, #323232, #353535, #383838, #3b3b3b, #3e3e3e, #404040, #434343, #464646);
      height: 90vh;
      width: 100vw;
    }

    .content-wrapper {
      display: none;
      flex-direction: column;
      margin: 0 auto;
      width: 39vw;

      .header-container {
        align-self: center;
        width: 60%;
        padding-top: 20px;
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