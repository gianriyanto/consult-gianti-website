<template>
  <div id="LandingHeader">
    <div class="header-container">
      <hr class="dash" noshade/>
      <span class="pre-header-container">
        Hi there,
      </span>
    </div>
    <div class="header-wrapper">
      <span class="header-container">
        I'm Gianti.
      </span>
      <span class="header-container">
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
        <font-awesome-icon class="whatsapp-icon" :icon="['fab', 'whatsapp']" v-on:click="goToSite('https://wa.me/+6281368681214')"/>
        <span class="button-label">
          Say hi!
        </span>
      </button>
      <button class="get-started-button">
        <span class="button-label"
              v-scroll-to="{ el: '#GetStarted', easing: [.2, .80, .30, 1],duration: 1500}">
          Get started
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
    },
    goToSite(url) {
      window.open(url, '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {
  #LandingHeader {
    display: flex;
    flex-direction: column;

    .header-container {
      display: flex;
      flex-direction: row;

      .dash {
        width: 37px;
        height: 2px;
        background-color: #4f4f4f;
        border: none;
        margin: auto 10px auto 0;
      }

      .pre-header-container {
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

      .header-container {
        font-family: 'Bw Modelica Bold', serif;
        font-size: 50px;
        word-spacing: 1.3px;
        letter-spacing: -0.7px;
        line-height: 1.2;
        color: #282828;
      }
    }

    .subheader-container {
      width: 80%;
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      text-align: left;

      .subheader-text {
        font-family: "Bw Modelica Light", serif;
        font-size: 16px;
        color: #4e4e4e;
        letter-spacing: -0.3px;
        line-height: 2;
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
        width: 140px;
        margin-right: 15px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);

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

      .floating-button {
        z-index: 2;
        position: fixed;
        cursor: pointer;
        top: 0;
        transform: translate(78vw, 86vh);
        background-image: linear-gradient(to top right, #242424, #484848);
        border-radius: 50%;
        width: 70px;
        height: 70px;
        transition: all 1.2s ease-in-out;
        box-shadow: 0 8px 32px 0 rgba(99, 100, 114, 0.4);

        .whatsapp-icon {
          margin: auto;
          color: white;
          font-size: 30px;
        }

        .button-label {
          display: none;
        }

        &:hover {
          opacity: 0.8;
        }
      }

      .get-started-button {
        width: 150px;
        border: thin solid black;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20.0px);
        -webkit-backdrop-filter: blur(20.0px);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
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
}

@media only screen and (max-width: 768px) {
  #LandingHeader {
    display: flex;
    flex-direction: column;

    .header-container {
      display: flex;
      flex-direction: row;
      text-align: center;
      margin: 0 auto;

      .dash {
        display: none;
      }

      .pre-header-container {
        font-family: 'Bw Modelica Medium', serif;
        font-size: 17px;
        word-spacing: 1.5px;
        letter-spacing: -0.5px;
        line-height: 1.2;
        color: #242424;
      }
    }

    .header-wrapper {
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 100%;

      .header-container {
        font-family: 'Bw Modelica Bold', serif;
        font-size: 34px;
        word-spacing: 1.3px;
        letter-spacing: -0.7px;
        line-height: 1.35;
        color: #474747;
      }
    }

    .subheader-container {
      display: none;
    }

    .button-container {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      text-align: center;
      height: fit-content;
      width: 60%;

      .normal-button {
        display: none;
      }

      .floating-button {
        display: none;
      }

      .get-started-button {
        height: 43px;
        width: 100%;
        background-color: #242424;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
        border-radius: 30px;

        .button-label {
          font-family: "Gilroy SemiBold", serif;
          font-size: 15px;
          letter-spacing: 0.5px;
          margin: auto;
          color: white;
        }
      }
    }
  }
}

</style>