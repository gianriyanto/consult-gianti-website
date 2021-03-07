<template>
  <section id="HowIWork">
    <div class="content-wrapper">
      <span class="pre-header-container">
        <hr class="dash" noshade/>
        <span class="text">
          How I Work
        </span>
      </span>
      <span class="header-container">
        <span class="header-text">
          Trust the process
        </span>
      </span>
      <span class="process-container">

      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "HowIWork"
}
</script>

<style lang="scss" scoped>

#HowIWork{
  height: fit-content;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 80vw;

    .pre-header-container{
      padding-top: 100px;
      display: flex;
      flex-direction: row;

      .dash{
        width: 30px;
        height: 1px;
        background-color: #919191;
        border: none;
        margin: auto 10px auto 0;
      }
      .text {
        font-family: 'Bw Modelica Light', serif;
        font-size: 20px;
        word-spacing: 1.5px;
        letter-spacing: -0.4px;
        line-height: 1.3;
        color: #919191;
      }
    }
    .header-container{
      padding-top: 25px;
      display: flex;
      flex-direction: row;

      .dash{
        width: 30px;
        height: 2px;
        background-color: #919191;
        border: none;
        margin: auto 10px auto 0;
      }
      .header-text {
        font-family: 'Gilroy Bold', serif;
        font-size: 35px;
        word-spacing: 1.5px;
        letter-spacing: -0.4px;
        line-height: 1.3;
        color: #292929;
      }
    }
    .process-container{
      padding-top: 50px;
      border: thin solid grey;
    }
  }
}

</style>