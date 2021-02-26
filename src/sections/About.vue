<template>
  <section id="About">
    <div class="content-wrapper">
      <div class="row-a">
        <span class="card-0 horizontal">
          <span class="text">
            Lorem ipsum dolor sit amet.
          </span>
        </span>
      </div>
      <div class="row-b">
        <span class="card-1 vertical">
          <span class="text">
            Ut enim ad minim veniam, quis nostrud.
          </span>
        </span>
        <span class="card-2 vertical">
          <span class="text">
            Ullamco laboris nisi ut aliquip.
          </span>
        </span>
      </div>
      <div class="row-c">
        <span class="card-3 horizontal">
          <span class="text">
            Duis aute irure dolor in reprehenderit in.
          </span>
          <span class="sub-text">
            Dolore eu fugiat nulla pariatur.
          </span>
        </span>
      </div>
      <div class="row-d">
        <span class="card-4 vertical">
          <span class="text">
            Sint Culpa occaecat.
          </span>
        </span>
        <span class="card-5 vertical">
          <span class="text">
            Sunt in culpa qui officia deserunt.
          </span>
        </span>
      </div>
      <div class="row-e">
        <span class="card-6 horizontal">
          <span class="text">
            Mollit anim id est laborum.
          </span>
          <span class="sub-text">
            Dolore eu fugiat nulla pariatur.
          </span>
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
  display: none;
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
      height: 65vh;
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
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.15);

        .text{
          padding: 40px;
          font-family: 'Bw Modelica Bold', serif;
          font-size: 60px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.1;
          color: #282828;
        }
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
        display: flex;
        flex-direction: column-reverse;
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);

        .text{
          padding: 40px;
          font-family: 'Bw Modelica Bold', serif;
          font-size: 50px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.1;
          color: #282828;
        }
      }
      .card-2{
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);

        .text{
          padding: 40px;
          font-family: 'Bw Modelica ExtraBold', serif;
          font-size: 70px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.1;
          color: #282828;
        }
      }
    }
    .row-c {
      display: flex;
      align-self: center;
      width: 100%;
      margin: 20px 0;

      .card-3{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.15);

        .text{
          text-align: center;
          font-family: 'Bw Modelica ExtraBold', serif;
          font-size: 65px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.1;
          color: #282828;
          margin-bottom: 10px;
        }
        .sub-text{
          text-align: center;
          font-family: 'Bw Modelica Medium', serif;
          font-size: 27px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          color: #989898;
        }
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
        display: flex;
        flex-direction: column-reverse;
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);

        .text{
          text-align: right;
          padding: 40px;
          font-family: 'Bw Modelica ExtraBold', serif;
          font-size: 70px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.1;
          color: #282828;
        }
      }
      .card-5{
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);

        .text{
          padding: 40px;
          font-family: 'Bw Modelica Bold', serif;
          font-size: 60px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.1;
          color: #282828;
        }
      }
    }
    .row-e {
      display: flex;
      align-self: center;
      width: 100%;
      margin: 20px 0;

      .card-6{
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.15);

        .text{
          margin-top: auto;
          padding-top: 40px;
          padding-left: 40px;
          font-family: 'Bw Modelica Bold', serif;
          font-size: 60px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          color: #282828;
        }

        .sub-text{
          padding-bottom: 40px;
          padding-left: 40px;
          font-family: 'Bw Modelica Bold', serif;
          font-size: 30px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          color: #989898;
        }
      }
    }
  }
}

</style>