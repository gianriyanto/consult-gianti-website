<template>
  <section id="About">
    <div class="content-wrapper">
      <div class="row-a">
        <span class="card-0 horizontal">
          <span class="text">
            The 4D Approach
          </span>
          <span class="sub-text">
            <span> Discovery </span>
            <span> Design </span>
            <span> Development </span>
            <span> Delivery </span>
          </span>
        </span>
      </div>
      <div class="row-b">
        <span class="card-1 vertical">
          <span class="image">

          </span>
          <span class="text">
            Free talent discovery test and consultation.
          </span>
        </span>
        <span class="card-2 vertical">
          <span class="text">
            You have a dream? I have a way.
          </span>
          <span class="image">

          </span>
        </span>
      </div>
      <div class="row-c">
        <span class="card-3 horizontal">
          <span class="text">
            Explore universities around the world
          </span>
          <span class="sub-text">
            Matchmaking the right course and university that unlocks your potential.
          </span>
        </span>
      </div>
      <div class="row-d">
        <span class="card-4 vertical">
          <span class="text">
            Hassle free process
          </span>
          <span class="image">

          </span>
          <span class="sub-text">
            Planning your studies abroad does not have to be complicated.
          </span>
        </span>
        <span class="card-5 vertical">
          <span class="text">
            Tailored consultations service.
          </span>
          <span class="sub-text">
            Everyone is different and there is no one size fits all solution to planning your education.
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
  display: flex;
  height: fit-content;
  margin-top: 200px;

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
        background-image: linear-gradient(to top right, white, white) ;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.15);

        .text{
          padding: 40px 0 0 40px;
          font-family: 'Bw Modelica Bold', serif;
          font-size: 50px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.1;
          color: black;
        }
        .sub-text{
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 0 0 0 40px;
          font-family: 'Bw Modelica Bold', serif;
          font-size: 20px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.1;
          color: black;
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
        flex-direction: column;
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);

        .image{
          padding: 0 40px;
          border: thin solid lightgrey;
          height: 50%;
        }

        .text{
          padding: 40px;
          font-family: 'Bw Modelica Bold', serif;
          font-size: 50px;
          word-spacing: 1.5px;
          letter-spacing: -1.5px;
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
          text-align: right;
          padding: 40px;
          font-family: 'Bw Modelica ExtraBold', serif;
          font-size: 54px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.1;
          color: #282828;
        }

        .image{
          padding: 0 40px;
          border: thin solid lightgrey;
          height: 50%;
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
          font-size: 60px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.1;
          color: #282828;
          margin-bottom: 10px;
        }
        .sub-text{
          padding-top: 10px;
          text-align: center;
          align-self: center;
          width: 65%;
          font-family: 'Bw Modelica Regular', serif;
          font-size: 20px;
          word-spacing: 1.5px;
          letter-spacing: -1.2px;
          color: #646464;
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
        flex-direction: column;
        justify-content: space-evenly;
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);

        .text{
          text-align: center;
          padding: 40px 40px 10px 40px;
          font-family: 'Bw Modelica ExtraBold', serif;
          font-size: 50px;
          word-spacing: 1.5px;
          letter-spacing: -1.6px;
          line-height: 1.1;
          color: #282828;
        }
        .image{
          padding: 0 40px;
          border: thin solid lightgrey;
          height: 50%;
        }
        .sub-text{
          text-align: center;
          padding: 0 40px 40px 40px;
          font-family: 'Bw Modelica Regular', serif;
          font-size: 18px;
          word-spacing: 1.5px;
          letter-spacing: -1px;
          line-height: 1.5;
          color: #606060;
        }
      }
      .card-5{
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);

        .text{
          padding: 40px 40px 16px 40px;
          font-family: 'Bw Modelica Bold', serif;
          font-size: 45px;
          word-spacing: 1.5px;
          letter-spacing: -1.8px;
          line-height: 1.1;
          color: #282828;
        }
        .sub-text{
          padding: 0 40px 0 40px;
          width: 70%;
          font-family: 'Bw Modelica Regular', serif;
          font-size: 16px;
          word-spacing: 1.5px;
          letter-spacing: -1px;
          line-height: 1.5;
          color: #606060;
        }
      }
    }
  }
}

</style>