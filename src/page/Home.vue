<template>
  <div>
    <Navbar class="mb-5" />

    <b-container fluid>
      <b-row>
        <b-col cols="3"><Kategori/></b-col>
        <b-col cols="9">2 of 3</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Kategori from "@/components/Kategori.vue";
import { BContainer } from "bootstrap-vue";

export default {
  name: "Home",
  components: {
    Navbar, BContainer, Kategori, 
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
