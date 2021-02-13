<template>
  <section id="About">
    <div class="content-wrapper">
      <div class="row-a">
        <span class="card-0">

        </span>
      </div>
      <div class="row-b">
        <span class="card-1">

        </span>
        <span class="card-2">

        </span>
      </div>
      <div class="row-c">
        <span class="card-3">

        </span>
      </div>
      <div class="row-d">
        <span class="card-4">

        </span>
        <span class="card-5">

        </span>
      </div>
      <div class="row-e">
        <span class="card-6">

        </span>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="scss" scoped>

#About{
  height: fit-content;
  margin-top: 100px;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 55vw;
    margin: 0 auto;

    .row-a {
      display: flex;
      align-self: center;
      width: 100%;
      margin: 20px 0;

      .card-0{
        width: 100%;
        height: 500px;
        background-color: #ffffff;
        border-radius: 25px;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.15);
      }
    }

    .row-b {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-self: center;
      width: 100%;
      border-radius: 30px;

      .card-1{
        width: 49%;
        height: 550px;
        background-color: #ffffff;
        border-radius: 25px;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);
      }
      .card-2{
        width: 49%;
        height: 550px;
        background-color: #ffffff;
        border-radius: 25px;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);
      }
    }
    .row-c {
      display: flex;
      align-self: center;
      width: 100%;
      margin: 20px 0;

      .card-3{
        width: 100%;
        height: 500px;
        background-color: #ffffff;
        border-radius: 25px;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);
      }
    }
    .row-d {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-self: center;
      width: 100%;
      border-radius: 30px;

      .card-4{
        width: 49%;
        height: 570px;
        background-color: #ffffff;
        border-radius: 25px;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);
      }
      .card-5{
        width: 49%;
        height: 570px;
        background-color: #ffffff;
        border-radius: 25px;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);
      }
    }
    .row-e {
      display: flex;
      align-self: center;
      width: 100%;
      margin: 20px 0;

      .card-6{
        width: 100%;
        height: 450px;
        background-color: #ffffff;
        border-radius: 25px;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);
      }
    }
  }
}

</style>