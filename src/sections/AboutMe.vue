<template>
  <section id="AboutMe">
    <div class="content-wrapper">
      <div class="header-container">
        <span class="pre-header-container">
          <hr class="dash" noshade/>
          <span class="pre-header-text">
            About Me
          </span>
        </span>
        <span class="header-text">
          {{ header }}
        </span>
      </div>
      <div class="body-container">
        <span class="body-text">
          {{ body[0] }}
        </span>
        <span class="body-text">
          {{ body[1] }}
        </span>
        <span class="body-text">
          {{ body[2] }}
        </span>
      </div>
      <img class="signature-image" src="@/assets/images/signature.png" alt ="">
      <div class="signature">
        <img/>
      </div>
    </div>
    <HowIWork/>
  </section>
</template>

<script>
import HowIWork from "@/components/HowIWork";

export default {
  name: "AboutMe",
  components: {HowIWork},
  data() {
    return {
      header: "I build personalised education blueprints to kkick start your professional career.",
      body: [
        "With over 20 years creating a network of opportunities around the world and navigating through the education system, I look to solve one problem - simplifying your future.",
        "The first-steps to applications can be daunting, let alone the tedious amount of paperwork and processes. I designed a methodology and system to ensure your experience is seamless so that you can focus on what truly matters.",
        "You’ve got an incredible career ahead of you, my knowledge and expertise in learning ensures that every decision we make together is another step closer to your success."
      ]
    }
  }
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
      padding-top: 200px;
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
          font-size: 45px;
          word-spacing: 1.8px;
          letter-spacing: -1.3px;
          line-height: 1.3;
          color: #1a1a1a;
        }
      }
      .body-container {
        display: flex;
        flex-direction: column;
        padding-top: 35px;

        .body-text{
          padding-top: 15px;
          font-family: 'Bw Modelica Light', serif;
          font-size: 16px;
          word-spacing: 1.5px;
          letter-spacing: -0.5px;
          line-height: 2;
          color: #454545;
        }
      }
      .signature-image{
        padding-top: 20px;
        width: 27%;
        height: auto;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #AboutMe {
    height: fit-content;

    .content-wrapper {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding-top: 80px;
      width: 72%;

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
            font-size: 20px;
            word-spacing: 1.5px;
            letter-spacing: -0.4px;
            line-height: 1.3;
            color: #4f4f4f;
          }
        }
        .header-text {
          padding-top: 20px;
          font-family: 'Gilroy Bold', serif;
          font-size: 40px;
          word-spacing: 1.8px;
          letter-spacing: -1.3px;
          line-height: 1.3;
          color: #1a1a1a;
        }
      }
      .body-container {
        display: flex;
        flex-direction: column;

        .body-text{
          padding-top: 15px;
          font-family: 'Bw Modelica Regular', serif;
          font-size: 15px;
          word-spacing: 1.5px;
          letter-spacing: -0.5px;
          line-height: 2;
          color: #454545;
        }
      }
      .signature-image{
        width: 35%;
        height: auto;
      }
    }
  }
}

</style>