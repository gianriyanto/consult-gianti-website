<template>
  <div id="Overview">
    <div class="overview-item">
      <span class="overview-number">
        28
      </span>
      <span class="overview-description">
        <span class="description-text">
          Years
        </span>
        <span class="description-text">
          of combined experience
        </span>
      </span>
    </div>
    <div class="overview-item">
      <span class="overview-number">
        90
      </span>
      <span class="overview-description">
        <span class="description-text">
          Universities
        </span>
        <span class="description-text">
          that clients enrolled
        </span>
      </span>
    </div>
    <div class="overview-item">
      <span class="overview-number">
        100+
      </span>
      <span class="overview-description">
        <span class="description-text">
          Clients
        </span>
        <span class="description-text">
          sent abroad
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview"
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {
  #Overview {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    height: fit-content;

    .overview-item {
      padding-top: 10px;
      display: flex;
      flex-direction: row;
      width: fit-content;
      align-items: center;

      .overview-number {
        font-family: 'Gilroy Bold', serif;
        font-size: 60px;
        word-spacing: 1.5px;
        letter-spacing: -0.5px;
        color: #282828;
        margin-right: 20px;
      }

      .overview-description {
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;

        .description-text {
          font-family: 'Gilroy Regular', serif;
          font-size: 15px;
          word-spacing: 1.5px;
          letter-spacing: -0.5px;
          line-height: 1.3;
          color: #282828;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #Overview {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;

    .overview-item {
      margin: 0 auto;
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      width: fit-content;
      align-items: center;

      .overview-number {
        font-family: 'Gilroy Bold', serif;
        font-size: 42px;
        word-spacing: 1.5px;
        letter-spacing: -0.5px;
        color: #282828;
      }

      .overview-description {
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;

        .description-text {
          text-align: center;
          font-family: 'Gilroy Regular', serif;
          font-size: 18px;
          word-spacing: 1.5px;
          letter-spacing: -0.4px;
          line-height: 1.3;
          color: #282828;
        }
      }
    }
  }
}


</style>