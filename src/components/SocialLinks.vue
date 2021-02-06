<template>
  <div id="SocialLinks">
    <span class="link-container">
      <globe-icon size="1x" class="icon"></globe-icon>
    </span>
    <span class="link-container">
      <instagram-icon size="1x" class="icon"></instagram-icon>
    </span>
    <span class="link-container">
      <facebook-icon size="1x" class="icon"></facebook-icon>
    </span>
    <span class="link-container">
      <MapIcon size="1x" class="icon"></MapIcon>
    </span>
  </div>
</template>

<script>
import { InstagramIcon } from 'vue-feather-icons'
import { FacebookIcon } from 'vue-feather-icons'
import { GlobeIcon } from 'vue-feather-icons'
import { MapIcon } from 'vue-feather-icons'

export default {
  name: "SocialLinks",
  components: {
    FacebookIcon,
    InstagramIcon,
    GlobeIcon,
    MapIcon
  },
}
</script>

<style lang="scss" scoped>

#SocialLinks{
  display: flex;
  flex-direction: row;
  height: 70px;
  align-items: center;

  .link-container{
    border: thin solid #1f1f1f;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-right: 10px;
    display: flex;

    .icon{
      margin: auto;
    }
  }
}

</style>