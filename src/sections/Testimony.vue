<template>
  <section id="Testimony">
    <div class="wrapper">
      <div class="header-container"
           data-aos="fade"
           data-aos-duration="1200"
           data-aos-easing="ease-in-out">
        <span class="header">
          {{ header }}
        </span>
        <span class="subheader">
          {{ subheader }}
        </span>
      </div>
      <div class="testimony-container">
        <TestimonyCard v-for="testimony in testimonies"
                       :key="testimony.index"
                       v-bind:testimonyData="testimony"
                       data-aos="fade"
                       data-aos-duration="1500"
                       data-aos-easing="ease-in-out"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TestimonyCard from "@/components/TestimonyCard";

export default {
  name: "Testimony",
  components: {
    TestimonyCard
  },
  data () {
    return{
      header: 'Client Stories',
      subheader: 'I am lucky to have worked with many aspiring professionals discover their future and watch them embark on their new learning journey.',
      testimonies: [
        {
          client: 'Khairifa Jasmine',
          university: 'Illinois Institute of Technology',
          header: 'Built my future from the very start.',
          message: "Aspectama’s service has genuinely help built my future from the very start. The always available of its counsellor assisted me in finding the most suited university, from the hassle of paperwork, visa, until my readiness to depart.",
          imageURL: "khairifa.jpeg"
        },
        {
          client: 'Noah Ampulembang',
          university: 'Whatcom Community College',
          header: 'A great help during my time of indecisiveness.',
          message: "The counsellor did most of the heavy lifting in terms of managing the documents and requirements to be able to study abroad. They were a great help during my time of indecisiveness, helping me narrow the university & major options to best suit my needs.",
          imageURL: "noah.jpeg"
        },
        {
          client: 'Ryan Djunaedi',
          university: 'Caésar Ritz College',
          header: 'Always have your best interest at heart.',
          message: "Having Aspectama’s counsellor by my side is like having a second mother. The counsellor will never forget you and will push you to aim higher. Most importantly, the counsellor will always have your best interest at heart.",
          imageURL: "ryan.jpeg"
        },
        {
          client: 'Nathania Soetanto ',
          university: 'Southern Cross University',
          header: "Admitted to my dream university",
          message: "I was admitted to my dream university in Australia. From providing me an English tutor to achieve high TOEFL score, applying to universities, until I finally settled pursuing my Bachelor degree with good scholarship awarded to meet my education budget.",
          imageURL: "nathania.jpeg"
        },
        {
          client: 'Novella Alvina',
          university: 'Durham University',
          header: 'Professional and caring describes her best.',
          message: "Chen's professionalism in working inspires me to no end. She provides unlimited support and motivation for me to become the best version of myself. Professional and caring describes her best in my eyes.",
          imageURL: "novella.jpeg"
        },
        {
          client: 'Fajrul Yusoff',
          university: 'Westminster University',
          header: 'Best service.',
          message: "Being in Malaysia didn’t stop Aspectama from giving their best service. From failing my high school, the counsellors guided me all the way until I was given a chance to correct my youth mistakes in the past, until I am able to pursue my degree in the United Kingdom.",
          imageURL: "fajrul.jpeg"
        },
        {
          client: 'Benedictus Brian Prasetya',
          university: 'Gilon Institute of Higher Education',
          header: 'The solution to my problem',
          message: "Aspectama found the solution to my problem. I always wanted to study and gain work experience overseas. They gave some valuable insights to help navigate through my unique situation. They designed a path for my future career with their dedicated assistance from scratch, all hassle free.",
          imageURL: "benedictus.jpeg"
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

@media only screen and (min-width: 769px) {
  #Testimony {
    position: relative;
    width: 100vw;
    margin-top: 50px;
    padding-top: 150px;
    padding-bottom: 100px;

    .wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 0 auto;

      .header-container {
        width: 450px;
        display: flex;
        flex-direction: column;
        text-align: left;
        line-height: 1.5;
        margin: 0 calc((100vw - 77vw) / 2);

        .header {
          font-family: "Bw Modelica ExtraBold", serif;
          letter-spacing: -2px;
          font-size: 51px;
          color: #292929;
        }

        .subheader {
          width: 85%;
          font-family: 'Bw Modelica Light', serif;
          font-size: 15px;
          word-spacing: 1.5px;
          letter-spacing: -1px;
          line-height: 1.5;
          color: #484848;
        }
      }

      .testimony-container {
        display: flex;
        flex-direction: row;
        align-content: center;
        padding-left: calc((100vw - 85vw) / 2);
        margin-top: 35px;
        height: fit-content;
        overflow: scroll !important;

        &::-webkit-scrollbar {
          display: none;
        }

        #TestimonyCard {

        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #Testimony {
    display: None;
    position: relative;
    width: 100%;
    margin-top: 70px;

    .wrapper {
      position: relative;
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: flex-start;
      margin: 0 auto;

      .header-container {
        align-self: center;
        width: 85%;
        display: flex;
        flex-direction: column;
        text-align: left;
        line-height: 1.7;
        margin-left: 5px;

        .header {
          font-family: "Bw Modelica ExtraBold", serif;
          letter-spacing: -1.5px;
          font-size: 35px;
          color: #5b1fff;
        }

        .subheader {
          margin-top: 10px;
          margin-left: 5px;
          font-family: "Gilroy Medium", serif;
          font-size: 17px;
          color: #585858;
        }
      }

      .testimony-container {
        display: flex;
        flex-direction: row;
        align-content: center;
        padding-left: calc((100vw - 1100px) / 2);
        margin-top: 30px;
        height: fit-content;
        overflow: scroll !important;

        &::-webkit-scrollbar {
          display: none;
        }

        #TestimonyCard { }
      }
    }
  }
}

</style>