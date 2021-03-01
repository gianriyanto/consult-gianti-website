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
    <div class="subheader-container"
         v-observe-visibility="animateElement">
      <span class="subheader-text">
        I founded Aspectama to help architect personalised education blueprints for aspiring professionals like you.
      </span>
    </div>
    <div class="button-container">
      <button :class="buttonStyle">
        <font-awesome-icon class="whatsapp-icon" :icon="['fab', 'whatsapp']" />
        <span class="button-label">
          Say hi!
        </span>
      </button>
      <button class="get-started-button">
        <span class="button-label">
          Let's get started
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingHeader",
  data(){
    return {
      buttonStyle: 'normal-button'
    }
  },
  methods: {
    animateElement(isVisible) {
      if(!isVisible){
        // trigger animation for the element
        this.buttonStyle = 'floating-button';
      } else {
        this.buttonStyle = 'normal-button';
      }
    }
  }
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
      font-size: 50px;
      word-spacing: 1.3px;
      letter-spacing: -0.7px;
      line-height: 1.2;
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
    height: 48px;

    .normal-button {
      z-index: 2;
      position: sticky;
      transition: all 1.2s ease-in-out;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0 23px;
      background-color: #2b2b2b;
      border: thin solid black;
      border-radius: 30px;
      width: 130px;
      margin-right: 15px;
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.2 );

      .whatsapp-icon {
        align-self: center;
        font-size: 19px;
        color: white;
        margin-right: 7px;
      }

      .button-label {
        font-family: "Gilroy SemiBold", serif;
        font-size: 14px;
        padding-top: 3px;
        color: white;
      }
    }
    .floating-button{
      z-index: 2;
      position: fixed;
      cursor: pointer;
      top: 0;
      transform: translate(75vw, 87vh);
      background-color: #242424;
      border-radius: 50%;
      width: 65px;
      height: 65px;
      transition: all 1.2s ease-in-out;
      box-shadow: 0 8px 32px 0 rgba(99, 100, 114, 0.4);

      .whatsapp-icon{
        margin: auto;
        color: white;
        font-size: 30px;
      }

      .button-label {
        display: none;
      }

      &:hover{
        opacity: 0.8;
      }
    }

    .get-started-button {
      width: 150px;
      border: thin solid black;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur( 20.0px );
      -webkit-backdrop-filter: blur( 20.0px );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.2 );
      border-radius: 30px;

      .button-label {
        font-family: "Gilroy SemiBold", serif;
        font-size: 14px;
        margin: auto;
        color: black;
      }
    }
  }
}

</style>