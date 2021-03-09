<template>
  <div id="HowIWork">
    <div class="content-wrapper">
      <div class="header-container">
        <span class="pre-header-container">
          <hr class="dash" noshade/>
          <span class="pre-header-text">
            How I Work
          </span>
        </span>
        <span class="header-text">
          Trust the process.
        </span>
      </div>
      <Process id="Process"/>
    </div>
  </div>
</template>

<script>
import Process from "@/components/Process";

export default {
  name: "HowIWork",
  components: {Process}
}
</script>

<style lang="scss" scoped>

#HowIWork{
  height: fit-content;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 70vw;

    .header-container {
      padding-top: 150px;
      text-align: left;
      display: flex;
      flex-direction: column;

      .pre-header-container{
        display: flex;
        flex-direction: row;

        .dash{
          width: 20px;
          height: 1px;
          background-color: #4f4f4f;
          border: none;
          margin: auto 10px auto 0;
        }
        .pre-header-text {
          font-family: 'Bw Modelica Medium', serif;
          font-size: 16px;
          word-spacing: 1.5px;
          letter-spacing: -0.4px;
          line-height: 1.3;
          color: #4f4f4f;
        }
      }
      .header-text {
        padding-top: 20px;
        font-family: 'Gilroy Bold', serif;
        font-size: 44px;
        word-spacing: 1.8px;
        letter-spacing: -1.3px;
        line-height: 1.3;
        color: #1a1a1a;
      }
    }
    #Process{
      padding-top: 50px;
    }
  }
}

</style>