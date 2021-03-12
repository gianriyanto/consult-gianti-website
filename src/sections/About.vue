<template>
  <section id="About">
    <div class="content-wrapper">
      <div class="row-a">
        <span class="card-0 horizontal">
          <span class="sub-text">
            <span class="approach-container">
              <img class="image" src="@/assets/images/discovery.svg" alt ="">
              <span class="approach-text">
                Discovery
              </span>
            </span>
            <span class="approach-container">
              <img class="image" src="@/assets/images/design.svg" alt ="">
              <span class="approach-text">
                Design
              </span>
            </span>
            <span class="approach-container">
              <img class="image" src="@/assets/images/development.svg" alt ="">
              <span class="approach-text">
                Development
              </span>
            </span>
            <span class="approach-container">
              <img class="image" src="@/assets/images/delivery.svg" alt ="">
              <span class="approach-text">
                Delivery
              </span>
            </span>
          </span>
          <span class="text-header">
            The 4D Approach
          </span>
          <span class="text">
            The 4D approach is a tailored roadmap that allows us to tailor an end to end solution to your educational journey from discovery to delivery.
          </span>
        </span>
      </div>
      <div class="row-b">
        <span class="card-1 vertical">
          <span class="image">
            <img src="@/assets/images/puzzle.svg" alt ="">
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
            <img src="@/assets/images/rocket.svg" alt ="">
          </span>
        </span>
      </div>
      <div class="row-c">
        <span class="card-3 horizontal">
          <span class="image">
            <img src="@/assets/images/world_map.svg" alt ="">
          </span>
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
            <img src="@/assets/images/process.svg" alt ="">
          </span>
          <span class="sub-text">
            Planning your studies abroad does not have to be complicated.
          </span>
        </span>
        <span class="card-5 vertical">
          <span class="image">
            <img src="@/assets/images/isometric.svg" alt ="">
          </span>
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

@media only screen and (min-width: 769px) {

  #About {
    display: flex;
    height: fit-content;
    margin-top: 150px;

    .content-wrapper {
      display: flex;
      flex-direction: column;
      height: fit-content;
      max-width: 850px;
      width: 55vw;
      margin: 0 auto;

      .horizontal {
        width: 100%;
        height: 65vh;
        max-height: 500px;
        border-radius: 25px;
      }

      .vertical {
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

        .card-0 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-image: linear-gradient(to top right, white, white);
          box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.15);

          .text-header {
            margin: 0px auto 10px auto;
            font-family: 'Bw Modelica Bold', serif;
            font-size: 60px;
            word-spacing: 1.5px;
            letter-spacing: -1.8px;
            line-height: 1.1;
            color: black;
          }

          .text {
            text-align: center;
            width: 70%;
            margin: 0 auto 40px auto;
            font-family: 'Bw Modelica Light', serif;
            font-size: 17px;
            word-spacing: 1.5px;
            letter-spacing: -0.8px;
            line-height: 1.5;
            color: #3e3e3e;
          }

          .sub-text {
            margin: 40px auto 30px auto;
            width: 90%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;

            .approach-container {
              width: 25%;
              display: flex;
              flex-direction: column-reverse;
              justify-content: center;

              .image {
                margin: 10px auto;
                width: 90%;
              }

              .approach-text {
                font-family: 'Bw Modelica Medium', serif;
                text-align: center;
                font-size: 18px;
                word-spacing: 1.5px;
                letter-spacing: -1px;
                line-height: 1.1;
                color: #282828;
              }
            }
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

        .card-1 {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          background-color: #ffffff;
          box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);

          .image {
            margin: 30px auto 0 auto;
            height: 50%;
            width: 80%;
          }

          .text {
            height: 50%;
            padding: 5px 40px 40px 40px;
            font-family: 'Bw Modelica ExtraBold', serif;
            font-size: 50px;
            word-spacing: 1.5px;
            letter-spacing: -1.5px;
            line-height: 1.2;
            color: #282828;
          }
        }

        .card-2 {
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);

          .text {
            text-align: right;
            height: 40%;
            padding: 40px 40px 0 40px;
            font-family: 'Bw Modelica ExtraBold', serif;
            font-size: 54px;
            word-spacing: 1.5px;
            letter-spacing: -1.8px;
            line-height: 1.1;
            color: #282828;
          }

          .image {
            margin: 0 auto;
            height: 80%;
            width: 100%
          }
        }
      }

      .row-c {
        display: flex;
        align-self: center;
        width: 100%;
        margin: 20px 0;

        .card-3 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #ffffff;
          box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.15);

          .image {
            margin: 0 auto;
            height: 40%;
            width: 40%;
          }

          .text {
            height: fit-content;
            text-align: center;
            font-family: 'Bw Modelica ExtraBold', serif;
            padding: 40px 60px 0 60px;
            font-size: 60px;
            margin: 0 auto;
            width: 75%;
            word-spacing: 1.5px;
            letter-spacing: -1.8px;
            line-height: 1.1;
            color: #282828;
          }

          .sub-text {
            margin-top: 15px;
            text-align: center;
            align-self: center;
            width: 65%;
            font-family: 'Bw Modelica Regular', serif;
            font-size: 17px;
            word-spacing: 1.5px;
            letter-spacing: -1.2px;
            color: #7e7e7e;
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

        .card-4 {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          background-color: #ffffff;
          box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);

          .text {
            text-align: center;
            padding: 40px 40px 0 40px;
            font-family: 'Bw Modelica ExtraBold', serif;
            font-size: 50px;
            word-spacing: 1.5px;
            letter-spacing: -1.6px;
            line-height: 1.1;
            color: #282828;
          }

          .image {
            margin: 0 auto;
            height: 60%;
            width: 100%;
          }

          .sub-text {
            text-align: center;
            padding: 15px 40px 40px 40px;
            font-family: 'Bw Modelica Regular', serif;
            font-size: 18px;
            word-spacing: 1.5px;
            letter-spacing: -1px;
            line-height: 1.5;
            color: #606060;
          }
        }

        .card-5 {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          background-color: #ffffff;
          box-shadow: 0 8px 32px 0 rgba(105, 109, 165, 0.1);

          .image {
            margin: 30px auto 0 auto;
            height: 50%;
            width: 80%;
          }

          .text {
            padding: 0 40px 15px 40px;
            font-family: 'Bw Modelica ExtraBold', serif;
            font-size: 40px;
            word-spacing: 1.5px;
            letter-spacing: -1.5px;
            line-height: 1.1;
            color: #282828;
          }

          .sub-text {
            padding: 0 40px 40px 40px;
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

}
</style>