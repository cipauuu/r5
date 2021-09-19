<template>
  <div>
    <b-container class="bg-light py-3" fluid>
      <b-row class="mb-3">
        <b-col class="text-center">
          <p class="mb-0">FOLLOW US</p>
          <a href="http://www.facebook.com"
            ><img
              class="mr-2"
              :src="require('@/assets/facebook.png')"
              style="width:1.5vw"
          /></a>
          <a href="http://www.twitter.com"
            ><img
              class="mr-2"
              :src="require('@/assets/twitter.png')"
              style="width:1.5vw"
          /></a>
          <a href="http://www.instagram.com"
            ><img :src="require('@/assets/instagram.png')" style="width:1.5vw"
          /></a>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <p class="mb-0">Copyright © 2021 - UI/UX & Front-end R5</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BContainer } from "bootstrap-vue";

export default {
  name: "Navbar",
  components: {
    BContainer,
  },
};
</script>

<style scoped></style>
