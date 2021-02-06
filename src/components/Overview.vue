<template>
  <div id="Overview">
    <div class="overview-container">
      <div class="overview-item">
        <span class="overview-number">
          50
        </span>
        <span class="overview-description">
          Years of combined experience
        </span>
      </div>
      <div class="overview-item">
        <span class="overview-number">
          90
        </span>
        <span class="overview-description">
          Universities I have enrolled to
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview"
}
</script>

<style lang="scss" scoped>

.overview-container {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  height: fit-content;

  .overview-item{
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    width: 230px;
    align-items: center;

    .overview-number{
      font-family: 'Gilroy Bold', serif;
      font-size: 60px;
      word-spacing: 1.5px;
      letter-spacing: -0.5px;
      color: #282828;
      margin-right: 20px;
    }

    .overview-description{
      font-family: 'Gilroy Regular', serif;
      font-size: 15px;
      word-spacing: 1.5px;
      letter-spacing: -0.5px;
      line-height: 1.3;
      padding-bottom: 10px;
      color: #282828;
    }
  }
}

</style>