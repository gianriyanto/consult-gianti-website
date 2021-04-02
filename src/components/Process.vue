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
          "description": "Deep exploration of your talents, skills, and potential to plan your perfect education experience.",
        },
        {
          "process": "Design",
          "description": "Work closely with clients to design long-term plans and decisions tailored to your needs.",
        },
        {
          "process": "Development",
          "description": "Everyone learns and grows differently. Your passion is at the heart of every decision we make.",
        },
        {
          "process": "Delivery",
          "description": "End-to-end service and counselling to ensure the entire process is progressing seamlessly.",
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
          background-image: linear-gradient(to top right, #292929, #4f4f4f);
          box-shadow: 0 8px 32px 0 rgba(99, 100, 114, 0.3);

          .number {
            margin: auto;
            font-family: 'Bw Modelica Medium', serif;
            font-size: 16px;
            color: white;
          }

        }

        .process-header {
          margin-top: 30px;
          font-family: 'Gilroy Regular', serif;
          font-size: 22px;
          word-spacing: 1.8px;
          letter-spacing: -0.6px;
          color: #393939;
        }

        .process-body {
          margin-top: 20px;
          font-family: 'Bw Modelica Light', serif;
          font-size: 14px;
          word-spacing: 1.8px;
          letter-spacing: -0.7px;
          line-height: 1.9;
          color: #515151;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px){
  #Process {
    .content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .process-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: 50px;

        .process-step {
          margin-left: 2px;
          display: flex;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          background-image: linear-gradient(to top right, #292929, #4f4f4f);
          box-shadow: 0 8px 32px 0 rgba(99, 100, 114, 0.3);

          .number {
            margin: auto;
            font-family: 'Bw Modelica Medium', serif;
            font-size: 18px;
            color: white;
          }
        }

        .process-header {
          margin-top: 30px;
          font-family: 'Gilroy Bold', serif;
          font-size: 30px;
          word-spacing: 1.8px;
          letter-spacing: -0.6px;
          color: #393939;
        }

        .process-body {
          margin-top: 10px;
          font-family: 'Bw Modelica Regular', serif;
          font-size: 15px;
          word-spacing: 1.8px;
          letter-spacing: -1px;
          line-height: 1.8;
          color: #515151;
        }
      }
    }
  }
}

</style>