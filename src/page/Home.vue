<template>
  <div>
    <Navbar class="mb-5" />

    <b-container fluid>
      <b-row class="mb-5">
        <b-col cols="3">
          <Kategori />
        </b-col>
        <b-col cols="9">
          <Rekomendasi />
        </b-col>
      </b-row>
      <b-row class="mb-5">
        <b-col>
          <BukuTerbaru />
        </b-col>
      </b-row>
      <b-row class="mb-5">
        <b-col>
          <BukuTerlaris />
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Kategori from "@/components/Kategori.vue";
import Rekomendasi from "@/components/Rekomendasi.vue";
import BukuTerbaru from "@/components/BukuTerbaru.vue";
import BukuTerlaris from "@/components/BukuTerlaris.vue";
import Footer from "@/components/Footer.vue";
import { BContainer } from "bootstrap-vue";

export default {
  name: "Home",
  components: {
    Navbar,
    BContainer,
    Kategori,
    Rekomendasi,
    BukuTerbaru,
    BukuTerlaris,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
