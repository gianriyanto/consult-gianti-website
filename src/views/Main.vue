<template>
  <div id="Main">
    <TopNav/>
    <Landing/>
    <GetStarted/>
    <AboutMe/>
    <HowIWork/>
    <About/>
    <Contact/>
  </div>
</template>

<script>
import Landing from "@/sections/Landing";
import TopNav from "@/nav/TopNav";
import GetStarted from "@/sections/GetStarted";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import AboutMe from "@/sections/AboutMe";
import HowIWork from "@/sections/HowIWork";

export default {
  name: "Main",
  components: {
    HowIWork,
    AboutMe,
    Contact,
    About,
    TopNav,
    Landing,
    GetStarted,
  }
}
</script>

<style lang="scss" scoped>

  #Main {
    display: flex;
    flex-direction: column;

  }

</style>