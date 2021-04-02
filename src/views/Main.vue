<template>
  <div id="Main">
    <TopNav/>
    <blurry-background id="BlurryBackground"/>
    <Landing id="Landing"/>
    <GetStarted id="GetStarted"/>
    <AboutMe id="AboutMe"/>
    <Features id="Features"/>
    <Contact id="Contact"/>
  </div>
</template>

<script>
import Landing from "@/sections/Landing";
import TopNav from "@/nav/TopNav";
import GetStarted from "@/sections/GetStarted";
import Features from "@/sections/Features";
import Contact from "@/sections/Contact";
import AboutMe from "@/sections/AboutMe";
import BlurryBackground from "@/background/BlurryBackground";

export default {
  name: "Main",
  components: {
    BlurryBackground,
    AboutMe,
    Contact,
    Features,
    TopNav,
    Landing,
    GetStarted,
  }
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {
  #Main {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (max-width: 768px) {
  #Main{
    width: 100%;
    height: fit-content;
  }
}

</style>