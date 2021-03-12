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
          <span class="button-label">
            Contact
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import BlurryBackground5 from "@/background/BlurryBackground5";
export default {
  name: "Contact",
  components: {BlurryBackground5}
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {

  #Contact {
    display: flex;
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
        height: 50px;

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
  }
}

</style>