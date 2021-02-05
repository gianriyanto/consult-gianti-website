<template>
  <div id="Main">
    <TopNav/>
    <Landing/>
    <section>

    </section>
    <section>

    </section>
  </div>
</template>

<script>
import Landing from "@/components/Landing";
import TopNav from "@/nav/TopNav";

export default {
  name: "Main",
  components: {TopNav, Landing}
}
</script>

<style lang="scss" scoped>

  #Main{
    display: flex;
    flex-direction: column;

  }

</style>