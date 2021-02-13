<template>
  <div id="Main">
    <TopNav/>
    <Landing/>
    <GetStarted/>
    <About/>
  </div>
</template>

<script>
import Landing from "@/sections/Landing";
import TopNav from "@/nav/TopNav";
import GetStarted from "@/sections/GetStarted";
import About from "@/sections/About";

export default {
  name: "Main",
  components: {
    About,
    GetStarted,
    TopNav,
    Landing
  }
}
</script>

<style lang="scss" scoped>

  #Main {
    display: flex;
    flex-direction: column;

  }

</style>