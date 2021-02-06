<template>
  <div id="LandingHeader">
    <div class="pre-header-container">
      <hr class="dash" noshade/>
      <span class="pre-header-text">
        Hi there,
      </span>
    </div>
    <div class="header-wrapper">
      <span class="header-text">
        I'm Gianti.
      </span>
      <span class="header-text">
        Your education counselor.
      </span>
    </div>
    <div class="subheader-container">
      <span class="subheader-text">
        I founded Aspectama to help architect personalised education blueprints for aspiring professionals like you.
      </span>
    </div>
    <div class="button-container">
      <button class="get-started-button">
        <span class="button-label">
          Let's get started
        </span>
      </button>
      <button class="contact-button">
        <font-awesome-icon class="whatsapp-icon" :icon="['fab', 'whatsapp']" />
        <span class="button-label">
          Say hi!
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingHeader"
}
</script>

<style lang="scss" scoped>

#LandingHeader{
  display: flex;
  flex-direction: column;

  .pre-header-container{
    display: flex;
    flex-direction: row;

    .dash {
      width: 37px;
      height: 2px;
      background-color: #5651ec;
      border: none;
      margin: auto 10px auto 0;
    }

    .pre-header-text{
      font-family: 'Bw Modelica Medium', serif;
      font-size: 19px;
      word-spacing: 1.5px;
      letter-spacing: -0.5px;
      line-height: 1.2;
      color: #282828;
    }
  }

  .header-wrapper {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    text-align: left;

    .header-text {
      font-family: 'Bw Modelica Bold', serif;
      font-size: 45px;
      word-spacing: 1.5px;
      letter-spacing: -1.8px;
      line-height: 1.3;
      color: #282828;
    }
  }

  .subheader-container{
    width: 90%;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    text-align: left;

    .subheader-text{
      font-family: "Bw Modelica Regular", serif;
      font-size: 15px;
      color: #1f1f1f;
      letter-spacing: -0.3px;
      line-height: 1.8;
    }
  }

  .button-container {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    text-align: left;
    height: 40px;

    .get-started-button {
      cursor: pointer;
      width: 150px;
      background-color: #1f1f1f;
      border-radius: 30px;
      margin-right: 15px;

      .button-label {
        font-family: "Gilroy Regular", serif;
        font-size: 13px;
        margin: auto;
        color: white;
      }
    }
    .contact-button {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      width: fit-content;
      padding: 0 23px;
      background-color: transparent;
      border: thin solid black;
      border-radius: 30px;
      margin-right: 25px;

      .whatsapp-icon {
        align-self: center;
        font-size: 19px;
        color: black;
        margin-right: 7px;
      }

      .button-label {
        font-family: "Gilroy SemiBold", serif;
        font-size: 14px;
        padding-top: 3px;
        color: black;
      }
    }
  }
}

</style>