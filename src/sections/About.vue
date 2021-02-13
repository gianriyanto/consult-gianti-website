<template>
  <section id="About">
    <div class="content-wrapper">
      <div class="row-a">
        <span class="card-0 horizontal">

        </span>
      </div>
      <div class="row-b">
        <span class="card-1 vertical">

        </span>
        <span class="card-2 vertical">

        </span>
      </div>
      <div class="row-c">
        <span class="card-3 horizontal">

        </span>
      </div>
      <div class="row-d">
        <span class="card-4 vertical">

        </span>
        <span class="card-5 vertical">

        </span>
      </div>
      <div class="row-e">
        <span class="card-6 horizontal">

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
    max-width: 850px;
    width: 55vw;
    margin: 0 auto;

    .horizontal{
      width: 100%;
      height: 70vh;
      max-height: 500px;
      border-radius: 25px;
    }
    .vertical{
      width: 49%;
      height: 70vh;
      max-height: 700px;
      border-radius: 25px;
    }

    .row-a {
      display: flex;
      align-self: center;
      width: 100%;
      margin: 20px 0;

      .card-0{
        background-color: #ffffff;
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
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);
      }
      .card-2{
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);
      }
    }
    .row-c {
      display: flex;
      align-self: center;
      width: 100%;
      margin: 20px 0;

      .card-3{
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.15);
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
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);
      }
      .card-5{
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);
      }
    }
    .row-e {
      display: flex;
      align-self: center;
      width: 100%;
      margin: 20px 0;

      .card-6{
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.15);
      }
    }
  }
}

</style>