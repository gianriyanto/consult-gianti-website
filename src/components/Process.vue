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
          "description": "Discovery Process description",
        },
        {
          "process": "Design",
          "description": "Design Process description",
        },
        {
          "process": "Development",
          "description": "Development Process description",
        },
        {
          "process": "Delivery",
          "description": "Delivery Process description",
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

#Process{

  .content-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .process-container{
      display: flex;
      flex-direction: column;

      .process-step{
        margin-left: 2px;
        display: flex;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        background-color: #343434;

        .number{
          margin: auto;
          font-family: 'Bw Modelica Medium', serif;
          font-size: 15px;
          color: white;
        }

      }
      .process-header{
        margin-top: 30px;
        font-family: 'Gilroy Bold', serif;
        font-size: 25px;
        word-spacing: 1.8px;
        letter-spacing: -1.3px;
        color: #1f1f1f;
      }
      .process-body{
        margin-top: 20px;
        font-family: 'Gilroy Regular', serif;
        font-size: 15px;
        word-spacing: 1.8px;
        letter-spacing: -0.8px;
        color: #1f1f1f;
      }
    }
  }

}

</style>