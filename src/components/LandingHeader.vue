<template>
  <div id="LandingHeader">
    <div class="content-wrapper">
      <div class="header-container">
        <hr class="dash" noshade/>
        <span class="pre-header-container">
          Hi there.
        </span>
      </div>
      <div class="header-wrapper">
        <span class="header-container">
          I'm Gianti, your
        </span>
        <span class="header-container">
          education counselor.
        </span>
      </div>
      <div class="subheader-container"
           v-observe-visibility="animateElement">
        <span class="subheader-text">
          I founded Aspectama to bridge aspiring professionals with an education experience that unlocks your talents and passion.
        </span>
      </div>
      <div class="button-container">
        <button :class="buttonStyle">
          <font-awesome-icon class="whatsapp-icon" :icon="['fab', 'whatsapp']" v-on:click="goToSite('https://wa.me/+6281368681214')"/>
          <span class="button-label">
            Whatsapp
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
    <div class="portrait-container">
      <img class="image" src="@/assets/images/gianti_portrait.png">
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
    flex-direction: row;

    .content-wrapper{
      margin-top: auto;
      width: 70%;
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
          font-family: 'Bw Modelica Bold', serif;
          font-size: 29px;
          word-spacing: 1.5px;
          letter-spacing: -0.5px;
          line-height: 1.3;
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
          font-size: 55px;
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
          font-family: "Bw Modelica Regular", serif;
          font-size: 16px;
          color: #4e4e4e;
          letter-spacing: -0.5px;
          line-height: 2;
        }
      }

      .button-container {
        padding-top: 20px;
        display: flex;
        flex-direction: row;
        text-align: left;
        height: 46px;

        .normal-button {
          z-index: 2;
          position: sticky;
          transition: all 1.2s ease-in-out;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 0 23px;
          background-color: #242424;
          border: thin solid black;
          border-radius: 30px;
          width: 160px;
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
            font-size: 15px;
            margin: auto;
            color: black;
          }
        }
      }
    }
    .portrait-container{
      display: flex;
      width: 45%;

      .image{
        margin: auto;
        min-width: 400px;
        max-height: 400px;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #LandingHeader {
    display: flex;
    flex-direction: column;

    .content-wrapper {
      margin-top: auto;
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
          color: #282828;
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
          color: #282828;
        }
      }

      .subheader-container {
        display: none;
      }

      .button-container {
        display: none;
        padding-top: 20px;
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
          height: 45px;
          width: 100%;
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
    .portrait-container{
      display: none;
    }
  }
}

</style>