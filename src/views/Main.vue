<template>
  <div id="Main">
    <TopNav/>
    <blurry-background/>
    <Landing/>
    <GetStarted/>
    <AboutMe/>
    <Features/>
    <Contact/>
  </div>
</template>

<script>
import Landing from "@/sections/Landing";
import TopNav from "@/nav/TopNav";
import GetStarted from "@/sections/GetStarted";
import Features from "@/sections/Features";
import Contact from "@/sections/Contact";
import AboutMe from "@/sections/AboutMe";k
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

  #Main{
    display: flex;
    flex-direction: column;
  }

</style>