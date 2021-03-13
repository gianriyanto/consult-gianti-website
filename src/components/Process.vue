<template>
  <div id="Process">
    <div class="content-wrapper">
      <div v-for="(step, index) in process" :key="index" class="process-container">
        <span class="process-step">
          <span class="number"> {{ index + 1 }} </span>
        </span>
        <span class="process-header">
          {{ step.process }}
        </span>
        <span class="process-body">
          {{ step.description }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Process",
  data() {
    return {
      process: [
        {
          "process": "Discovery",
          "description": "Deep dive to explore of your talents, skills, and potential to plan your perfect education and experience.",
        },
        {
          "process": "Design",
          "description": "Work closely with clients to design long-term plans, strategies, and arrangements tailored for your needs.",
        },
        {
          "process": "Development",
          "description": "Everyone learns and grows differently. Your passion and potential is at the heart of  every decision we make.",
        },
        {
          "process": "Delivery",
          "description": "Deliver end-to-end consultation and counselling to ensure your education journey is progressing seamlessly",
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {

  #Process {

    .content-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .process-container {
        display: flex;
        flex-direction: column;
        width: 21%;

        .process-step {
          margin-left: 2px;
          display: flex;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          background-color: #343434;

          .number {
            margin: auto;
            font-family: 'Bw Modelica Medium', serif;
            font-size: 16px;
            color: white;
          }

        }

        .process-header {
          margin-top: 30px;
          font-family: 'Gilroy Bold', serif;
          font-size: 22px;
          word-spacing: 1.8px;
          letter-spacing: -1.1px;
          color: #1f1f1f;
        }

        .process-body {
          margin-top: 20px;
          font-family: 'Bw Modelica Light', serif;
          font-size: 13px;
          word-spacing: 1.8px;
          letter-spacing: -0.7px;
          line-height: 1.6;
          color: #000000;
        }
      }
    }
  }
}

</style>