<template>
  <div id="TestimonyCard">
    <div class="card">
      <span class="header">
        <font-awesome-icon class="quote-icon" :icon="['fas', 'quote-left']" /> {{ testimony.header }}
      </span>
      <span class="message">
        {{ testimony.message }}
      </span>
    </div>
    <div class="client-container">
      <img class="image" :src="require(`@/assets/clients/${ testimony.imageURL }`)" alt=""/>
      <span class="client">
        <span class="name">
          {{ testimony.client }}
        </span>
        <span class="university">
          {{ testimony.university }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonyCard",
  props: ['testimonyData'],
  data() {
    return {
      testimony: this.testimonyData,
    }
  },
}
</script>

<style scoped lang="scss">

@media only screen and (min-width: 769px) {
  #TestimonyCard {
    flex: 0 0 auto;
    margin: auto 53px auto 0;
    width: 300px;

    .card {
      display: flex;
      flex-direction: column;
      padding: 30px 40px;
      height: fit-content;
      border-radius: 13px;
      background-color: #f8f8f8;
      text-align: left;

      .quote-icon {
        font-size: 28px;
        margin-right: 8px;
        color: black;
      }

      .header {
        font-family: "PT Serif", serif;
        letter-spacing: -1px;
        font-size: 18px;
        color: #51a4ec;
      }

      .message {
        margin-top: 20px;
        font-family: "Bw Modelica Regular", serif;
        line-height: 1.5;
        font-size: 14px;
        letter-spacing: -0.6px;
        color: #585858;
      }
    }

    .client-container {
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      padding: 10px 2px;
      height: 60px;
      text-align: left;

      .image {
        display: block;
        width: 50px;
        height: 50px;
        background-color: #f1f1f1;;
        border-radius: 50%;
        margin-right: 20px;
      }

      .client {
        display: flex;
        flex-direction: column;
        margin-top: 5px;

        .name {
          font-family: "Bw Modelica ExtraBold", serif;
          letter-spacing: -0.5px;
          font-size: 17px;
          color: black;
        }

        .university {
          margin-top: 4px;
          font-family: "Gilroy Medium", serif;
          letter-spacing: -0.5px;
          font-size: 14px;
          color: #51a4ec;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #TestimonyCard {
    flex: 0 0 auto;
    margin: auto 25px auto 30px;
    width: 85%;

    .card {
      display: flex;
      flex-direction: column;
      padding: 30px 40px;
      height: fit-content;
      border-radius: 13px;
      background-color: #fafafa;
      text-align: left;

      .quote-icon {
        font-size: 28px;
        margin-right: 8px;
        color: black;
      }

      .header {
        font-family: "PT Serif", serif;
        letter-spacing: -1px;
        font-size: 27px;
        color: #5651ec;
      }

      .message {
        margin-top: 20px;
        font-family: "Gilroy Regular", serif;
        line-height: 1.5;
        font-size: 17px;
        letter-spacing: -0.5px;
        color: #585858;
      }
    }

    .client-container {
      margin-top: 15px;
      margin-left: 5px;
      display: flex;
      flex-direction: row;
      padding: 10px 2px;
      height: 60px;
      text-align: left;

      .image {
        display: block;
        width: 50px;
        height: 50px;
        background-color: #f1f1f1;;
        border-radius: 50%;
        margin-right: 20px;
      }

      .client {
        display: flex;
        flex-direction: column;
        margin-top: 5px;

        .name {
          font-family: "Bw Modelica ExtraBold", serif;
          letter-spacing: -0.5px;
          font-size: 17px;
          color: black;
        }

        .university {
          margin-top: 4px;
          font-family: "Gilroy Medium", serif;
          letter-spacing: -0.5px;
          font-size: 14px;
          color: #5651ec;
        }
      }
    }
  }
}

</style>