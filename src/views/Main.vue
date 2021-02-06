<template>
  <div id="Main">
    <TopNav/>
    <Landing/>
    <GetStarted/>
  </div>
</template>

<script>
import Landing from "@/components/Landing";
import TopNav from "@/nav/TopNav";
import GetStarted from "@/components/GetStarted";

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