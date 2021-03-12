<template>
  <section id="AboutMe">
    <blurry-background3/>
    <div class="content-wrapper">
      <div class="header-container">
        <span class="pre-header-container">
          <hr class="dash" noshade/>
          <span class="pre-header-text">
            About Me
          </span>
        </span>
        <span class="header-text">
          I build education blueprints from the ground up one person at a time by carefully leveraging your talent, skills, and passion.
        </span>
      </div>
      <div class="body-container">
        <span class="body-text">
          With over 20 years in the business, I look to solve one problem - simplify your future. I understand that the first-step can be daunting, let alone the entire nitty-gritty process of planning to study overseas. I designed a system and way-of-working to ensure your education experience is seamless and hassle-free so that you can focus on what matters most - to let your passion drive your profession.
        </span>
      </div>
      <img class="signature-image" src="@/assets/images/signature.svg" alt ="">
      <div class="signature">
        <img/>
      </div>
    </div>
    <HowIWork/>
  </section>
</template>

<script>
import BlurryBackground3 from "@/background/BlurryBackground3";
import HowIWork from "@/components/HowIWork";

export default {
  name: "AboutMe",
  components: {HowIWork, BlurryBackground3}
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {

  #AboutMe {
    height: 140vh;

    .content-wrapper {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      width: 45vw;

      .header-container {
        display: flex;
        flex-direction: column;
        text-align: left;

        .pre-header-container{
          display: flex;
          flex-direction: row;

          .dash{
            width: 20px;
            height: 1px;
            background-color: #4f4f4f;
            border: none;
            margin: auto 10px auto 0;
          }
          .pre-header-text {
            font-family: 'Bw Modelica Medium', serif;
            font-size: 16px;
            word-spacing: 1.5px;
            letter-spacing: -0.4px;
            line-height: 1.3;
            color: #4f4f4f;
          }
        }
        .header-text {
          padding-top: 20px;
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
          font-family: 'Bw Modelica Light', serif;
          font-size: 16px;
          word-spacing: 1.5px;
          letter-spacing: -0.5px;
          line-height: 2;
          color: #454545;
        }
      }
      .signature-image{
        width: 40%;
        height: auto;
      }
    }
  }
}

</style>