<template>
  <section id="Contact">
    <blurry-background5/>
    <div class="content-wrapper">
      <div class="header-container">
        <span class="pre-header-container">
          Ready to build your future?
        </span>
        <span class="pre-header-container">
          Let's get
          <span class="underline"
                v-scroll-to="{ el: '#GetStarted', easing: [.2, .80, .30, 1],duration: 1500}">
            started.
          </span>
        </span>
      </div>
      <div class="button-container">
        <button class="my-card-button">
          <span class="button-label">
            Take my card
          </span>
        </button>
        <button class="contact-button">
          <span class="button-label" v-scroll-to="{ el: '#GetStarted', easing: [.2, .80, .30, 1],duration: 1500}">
            Get in touch
          </span>
        </button>
      </div>
    </div>
    <div class="social-links-container">
      <a class="link-container"
         v-on:click="goToSite('http://aspectamaalsut.co.id')">
        <globe-icon size="1.5x" class="icon"></globe-icon>
      </a>
      <a class="link-container"
         v-on:click="goToSite('https://www.instagram.com/aspectama/?hl=en')">
        <instagram-icon size="1.5x" class="icon"></instagram-icon>
      </a>
      <a class="link-container"
         v-on:click="goToSite('https://www.facebook.com/AspectamaStudentAdvisor/')">
        <facebook-icon size="1.5x" class="icon"></facebook-icon>
      </a>
      <a class="link-container"
         v-on:click="goToSite('https://goo.gl/maps/9iiTnMrh5BNJEuMT7')">
        <MapIcon size="1.5x" class="icon"></MapIcon>
      </a>
    </div>
  </section>
</template>

<script>
import BlurryBackground5 from "@/background/BlurryBackground5";
import { InstagramIcon } from 'vue-feather-icons'
import { FacebookIcon } from 'vue-feather-icons'
import { GlobeIcon } from 'vue-feather-icons'
import { MapIcon } from 'vue-feather-icons'

export default {
  name: "Contact",
  components: {
    BlurryBackground5,
    FacebookIcon,
    InstagramIcon,
    GlobeIcon,
    MapIcon
  },
  methods: {
    goToSite(url) {
      window.open(url, '_blank');
    }
  },
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {
  #Contact {
    display: flex;
    flex-direction: column;
    height: 80vh;

    .content-wrapper {
      display: flex;
      flex-direction: column;
      margin: auto;
      width: 75vw;

      .header-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        .pre-header-container {
          font-family: 'Gilroy Bold', serif;
          font-size: 60px;
          word-spacing: 1.5px;
          letter-spacing: -1.5px;
          line-height: 1.2;
          color: #282828;

          .underline {
            border-bottom: 2px solid currentColor;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
              opacity: 0.6;
            }
          }
        }
      }

      .button-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 41%;
        padding-top: 60px;
        align-self: center;
        height: 51px;

        .my-card-button {
          width: 180px;
          border: thin solid black;
          background: rgb(28, 25, 25);
          backdrop-filter: blur(20.0px);
          -webkit-backdrop-filter: blur(20.0px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
          border-radius: 30px;

          .button-label {
            font-family: "Gilroy SemiBold", serif;
            font-size: 16px;
            margin: auto;
            color: white;
          }
        }

        .contact-button {
          width: 180px;
          border: thin solid black;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(20.0px);
          -webkit-backdrop-filter: blur(20.0px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
          border-radius: 30px;

          .button-label {
            font-family: "Gilroy SemiBold", serif;
            font-size: 16px;
            margin: auto;
            color: black;
          }
        }
      }
    }

    .social-links-container{
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      height: 100px;
      align-items: center;
      width: 90vw;

      .link-container {
        border-radius: 50%;
        width: 45px;
        height: 45px;
        margin-right: 7px;
        display: flex;
        cursor: pointer;
        transition: all .3s ease-in-out;

        &:hover {
          opacity: 0.5;
        }

        .icon {
          color: black;
          margin: auto;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px){
  #Contact {
    display: flex;
    flex-direction: column;
    height: fit-content;
    z-index: 1;

    .content-wrapper {
      display: flex;
      flex-direction: column;
      margin: auto;
      width: 75vw;
      padding-top: 80px;

      .header-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        .pre-header-container {
          font-family: 'Gilroy Bold', serif;
          font-size: 40px;
          word-spacing: 1.5px;
          letter-spacing: -1.5px;
          line-height: 1.2;
          color: #282828;

          .underline {
            border-bottom: 2px solid currentColor;
            cursor: pointer;
          }
        }
      }

      .button-container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 80%;
        padding-top: 60px;
        align-self: center;

        .my-card-button {
          width: 100%;
          height: 45px;
          align-self: center;
          border: thin solid black;
          background: rgb(28, 25, 25);
          backdrop-filter: blur(20.0px);
          -webkit-backdrop-filter: blur(20.0px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
          border-radius: 30px;
          margin-bottom: 20px;

          .button-label {
            font-family: "Gilroy SemiBold", serif;
            font-size: 16px;
            margin: auto;
            color: white;
          }
        }

        .contact-button {
          width: 100%;
          height: 45px;
          align-self: center;
          border: thin solid black;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(20.0px);
          -webkit-backdrop-filter: blur(20.0px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
          border-radius: 30px;

          .button-label {
            font-family: "Gilroy SemiBold", serif;
            font-size: 16px;
            margin: auto;
            color: black;
          }
        }
      }
    }

    .social-links-container{
      padding-top: 30px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      height: 100px;
      align-items: center;
      width: 60%;

      .link-container {
        border-radius: 50%;
        width: 45px;
        height: 45px;
        margin-right: 7px;
        display: flex;

        .icon {
          color: black;
          margin: auto;
        }
      }
    }
  }
}

</style>