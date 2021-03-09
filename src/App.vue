<template>
  <div id="app">
    <div class="app-wrapper">
      <Main id="Main"></Main>
    </div>
  </div>
</template>

<script>

import Main from "@/views/Main";

export default {
  name: 'App',
  components: {
    Main

  }
}
</script>

<style lang="scss">

#app {
  background-color: transparent;

  .app-wrapper{

  }
}

html, body {
  margin: 0 !important;
  padding: 0 !important;
}
button{
  cursor: pointer;
  text-decoration: none;
  outline: none;
  border: 0;
  transition: all 0.25s ease-in-out;

  &:hover{
    opacity: 0.6;
  }
}

a {
  color: transparent;
  text-decoration: none;
  a:visited {
    text-decoration: none;
    color: transparent;
  }
}


@media only screen and (max-width: 768px) {

  .app-wrapper{

  }
}

@font-face {
  font-family: "Gilroy Bold";
  src: local("Gilroy Bold"),
  url(./assets/fonts/Gilroy/Gilroy-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Medium";
  src: local("Gilroy Medium"),
  url(./assets/fonts/Gilroy/Gilroy-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Regular";
  src: local("Gilroy Regular"),
  url(./assets/fonts/Gilroy/Gilroy-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy SemiBold";
  src: local("Gilroy SemiBold"),
  url(./assets/fonts/Gilroy/Gilroy-SemiBold.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Heavy";
  src: local("Gilroy Heavy"),
  url(./assets/fonts/Gilroy/Gilroy-Heavy.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Light";
  src: local("Gilroy Light"),
  url(./assets/fonts/Gilroy/Gilroy-Light.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Thin";
  src: local("Gilroy Thin"),
  url(./assets/fonts/Gilroy/Gilroy-Thin.ttf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica ExtraBold";
  src: local("Bw Modelica ExtraBold"),
  url(./assets/fonts/BwModelica/BwModelica-ExtraBold.ttf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Bold";
  src: local("Bw Modelica Bold"),
  url(./assets/fonts/BwModelica/BwModelica-Bold.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Medium";
  src: local("Bw Modelica Medium"),
  url(./assets/fonts/BwModelica/BwModelica-Medium.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Regular";
  src: local("Bw Modelica Regular"),
  url(./assets/fonts/BwModelica/BwModelica-Regular.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Light";
  src: local("Bw Modelica Light"),
  url(./assets/fonts/BwModelica/BwModelica-Light.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Thin";
  src: local("Bw Modelica Thin"),
  url(./assets/fonts/BwModelica/BwModelica-Thin.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Hairline";
  src: local("Bw Modelica Hairline"),
  url(./assets/fonts/BwModelica/BwModelica-Hairline.otf) format("truetype");
}
</style>
