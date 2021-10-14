<template>
  <div>
    <Navbar class="mb-5" />
    <b-container fluid>
      <b-row class="mb-5">
        <b-col>
          <Item />
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="8">
          <h1 class="text-center mb-5">ANOTHER RECOMMENDATION</h1>
          <Rekomendasi />
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Item from "@/components/Item.vue";
import Rekomendasi from "@/components/Rekomendasi.vue";
import Footer from "@/components/Footer.vue";
import { BContainer } from "bootstrap-vue";

export default {
  name: "Detail",
  components: {
    Navbar,
    BContainer,
    Item,
    Rekomendasi,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.justify-content-center{
  margin-top: 15vw;
}
</style>
