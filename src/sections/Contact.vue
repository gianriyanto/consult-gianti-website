<template>
  <section id="Contact">
    <div class="content-wrapper">
      <div class="header-container">
        <span class="header-text">
          Ready to build your future?
        </span>
        <span class="header-text">
          Let's get started.
        </span>
      </div>
      <div class="button-container">
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
export default {
  name: "Contact"
}
</script>

<style lang="scss" scoped>

#Contact {
  height: 60vh;
  border: thin solid lightgrey;

  .content-wrapper{
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 75vw;

    .header-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      .header-text {
        font-family: 'Gilroy Bold', serif;
        font-size: 50px;
        word-spacing: 1.5px;
        letter-spacing: -1.5px;
        line-height: 1.2;
        color: #282828;
      }
    }
    .button-container {
      padding-top: 30px;
      align-self: center;

      .contact-button {
        width: 160px;
        height: 43px;
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

</style>