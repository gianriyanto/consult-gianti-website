<template>
  <div id="SocialLinks">
    <a class="link-container"
       v-on:click="goToSite('http://aspectamaalsut.co.id')">
      <globe-icon size="1x" class="icon"></globe-icon>
    </a>
    <a class="link-container"
      v-on:click="goToSite('https://www.instagram.com/aspectama/?hl=en')">
      <instagram-icon size="1x" class="icon"></instagram-icon>
    </a>
    <a class="link-container"
       v-on:click="goToSite('https://www.facebook.com/AspectamaStudentAdvisor/')">
      <facebook-icon size="1x" class="icon"></facebook-icon>
    </a>
    <a class="link-container"
       v-on:click="goToSite('https://goo.gl/maps/9iiTnMrh5BNJEuMT7')">
      <MapIcon size="1x" class="icon"></MapIcon>
    </a>
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
  methods: {
    goToSite(url) {
      window.open(url, '_blank');
    }
  },
}
</script>

<style lang="scss" scoped>

#SocialLinks{
  display: flex;
  flex-direction: row;
  height: 100px;
  align-items: center;

  .link-container{
    border: thin solid #1f1f1f;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    margin-right: 13px;
    display: flex;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
      opacity: 0.5;
    }

    .icon{
      color: black;
      margin: auto;
    }
  }
}

</style>