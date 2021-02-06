<template>
  <div id="Main">
    <TopNav/>
    <Landing/>
    <GetStarted/>
  </div>
</template>

<script>
import Landing from "@/sections/Landing";
import TopNav from "@/nav/TopNav";
import GetStarted from "@/sections/GetStarted";

export default {
  name: "Main",
  components: {GetStarted, TopNav, Landing}
}
</script>

<style lang="scss" scoped>

  #Main{
    display: flex;
    flex-direction: column;

  }

</style>