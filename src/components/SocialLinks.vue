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
    <a class="link-container"
       v-on:click="goToSite('gianti@aspectama.co.id')">
      <MailIcon size="1x" class="icon"></MailIcon>
    </a>
  </div>
</template>

<script>
import { InstagramIcon } from 'vue-feather-icons'
import { FacebookIcon } from 'vue-feather-icons'
import { GlobeIcon } from 'vue-feather-icons'
import { MapIcon } from 'vue-feather-icons'
import { MailIcon } from 'vue-feather-icons'

export default {
  name: "SocialLinks",
  components: {
    FacebookIcon,
    InstagramIcon,
    GlobeIcon,
    MapIcon,
    MailIcon
  },
  methods: {
    goToSite(url) {
      window.open(url, '_blank');
    }
  },
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {
  #SocialLinks {
    display: flex;
    flex-direction: row;
    height: 100px;
    align-items: center;

    .link-container {
      border: thin solid #1f1f1f;
      border-radius: 50%;
      width: 46px;
      height: 46px;
      margin-right: 14px;
      display: flex;
      cursor: pointer;
      transition: all .3s ease-in-out;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(20.0px);
      -webkit-backdrop-filter: blur(20.0px);
      box-shadow: 0 8px 32px 0 rgba(84, 87, 129, 0.1);

      &:hover {
        opacity: 0.5;
      }

      .icon {
        color: black;
        margin: auto;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  display: none;
}

</style>