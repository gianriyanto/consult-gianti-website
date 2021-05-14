<template>
  <div id="OverviewMobile">
    <div class="overview">
      <div class="overview-item">
        <span class="overview-number">
          100+
        </span>
        <span class="overview-description">
          <span class="description-text">
            Client
          </span>
          <span class="description-text">
            partnerships
          </span>
        </span>
      </div>
      <div class="overview-item">
        <span class="overview-number">
          28
        </span>
          <span class="overview-description">
          <span class="description-text">
            Years of
          </span>
          <span class="description-text">
            experience
          </span>
        </span>
      </div>
    </div>
    <div class="portrait-container">
      <img class="image" src="@/assets/images/gianti_portrait.png">
    </div>
    <span class="header-text">
      Ready to build your future? I'd love to hear from you!
    </span>
    <button class="whatsapp-button">
      <span class="button-label">
          WhatsApp Me
        </span>
    </button>
    <button class="get-started-button">
        <span class="button-label"
              v-scroll-to="{ el: '#GetStarted', easing: [.2, .80, .30, 1],duration: 1500}">
          Get started
        </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "OverviewMobile"
}
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 768px) {
  #OverviewMobile {
    padding-top: 15%;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;

    .overview {
      border-top: 1px solid #919191;
      padding-top: 20px;
      display: flex;
      flex-direction: row;

      .overview-item {
        margin: 0 auto;
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        width: fit-content;
        align-items: center;

        .overview-number {
          font-family: 'Gilroy Bold', serif;
          font-size: 36px;
          word-spacing: 1.5px;
          letter-spacing: -0.5px;
          color: #282828;
        }

        .overview-description {
          display: flex;
          flex-direction: column;
          padding-bottom: 10px;

          .description-text {
            text-align: center;
            font-family: 'Gilroy Regular', serif;
            font-size: 12px;
            word-spacing: 1.5px;
            letter-spacing: -0.2px;
            line-height: 1.3;
            color: #282828;
          }
        }
      }
    }

    .portrait-container{
      display: flex;
      margin: 25px auto 0 auto;

      .image{
        width: 110px;
      }
    }

    .header-text{
      margin: 10% auto 0 auto;
      font-family: "Bw Modelica Regular", serif;
      font-size: 13px;
      color: black;
      letter-spacing: -0.6px;
      text-align: center;
      width: 70%;
    }

    .whatsapp-button {
      border: thin solid black;
      height: 45px;
      width: 70%;
      margin: 25px auto 0 auto;
      background-color: transparent;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
      border-radius: 10px;

      .button-label {
        font-family: "Gilroy SemiBold", serif;
        font-size: 13px;
        letter-spacing: 0.5px;
        margin: auto;
        color: black;
      }
    }

    .get-started-button {
      border: thin solid black;
      height: 45px;
      width: 70%;
      margin: 20px auto 0 auto;
      background-color: #242424;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
      border-radius: 10px;

      .button-label {
        font-family: "Gilroy Regular", serif;
        font-size: 13px;
        letter-spacing: 0.5px;
        margin: auto;
        color: white;
      }
    }
  }
}

</style>