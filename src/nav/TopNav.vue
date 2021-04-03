<template>
  <div id="TopNav">
    <div class="content-wrapper">
      <span class="logo-container">
        <img class="image" src="@/assets/logo/AspectamaLogo.png">
      </span>
      <span class="get-started-button">
        <button class="button-label" v-scroll-to="{ el: '#GetStarted', easing: [.2, .80, .30, 1],duration: 1500}"> Get started </button>
      </span>
      <button class="contact-button">
        <span class="button-label">
          Take my card
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav"
}
</script>

<style scoped lang="scss">

@media only screen and (min-width: 769px) {
  #TopNav{
    position: fixed;
    width: 100vw;
    z-index: 10;
    background-color: transparent;

    .content-wrapper {
      margin: 56px auto 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 53px;
      width: 90vw;

      .logo {
        width: 23px;
        height: 47px;
        background-color: #1f1f1f;
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
        border-bottom: 0;
        cursor: pointer;
        transition: all .35s ease-in-out;

        &:hover{
          opacity: 0.7;
        }
      }
      .logo-container{
        height: 100%;
        cursor: pointer;
        transition: all .3s ease-in-out;
        opacity: 0.8;

        .image{
          padding-top: 5px;
          height: 100%;
          width: auto;
        }

        &:hover{
          opacity: 0.6;
        }
      }
      .get-started-button{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: auto;
        margin-right: 30px;

        .button-label{
          background-color: transparent;
          font-family: "Bw Modelica Medium", serif;
          font-size: 15px;
          color: #1f1f1f
        }
      }
      .contact-button {
        align-self: center;
        width: 130px;
        height: 43px;
        border: thin solid #1f1f1f;
        background-image: linear-gradient(to left, #1f1f1f, #262626);
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
        border-radius: 30px;
        transition: all .35s ease-in-out;

        .button-label{
          font-family: "Bw Modelica Medium", serif;
          font-size: 12px;
          margin: auto;
          color: white;
        }
        &:hover{
          opacity: 0.7;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #TopNav{
    position: fixed;
    width: 100vw;
    z-index: 10;

    .content-wrapper {
      margin: 0 auto;
      padding-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 40px;
      width: 90vw;

      .logo-container{
        height: 90%;
        cursor: pointer;
        opacity: 1;

        .image{
          padding-top: 5px;
          height: 100%;
          width: auto;
        }
      }
      .get-started-button{
        display: none;
      }
      .contact-button {
        align-self: center;
        width: fit-content;
        padding: 0 15px;
        height: 30px;
        border: thin solid #242424;
        background-color: #242424;
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
        border-radius: 30px;

        .button-label{
          font-family: "Bw Modelica Medium", serif;
          font-size: 10px;
          margin: auto;
          color: white;
        }
      }
    }
  }
}

</style>