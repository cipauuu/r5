<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <h3 class="mb-0">KATEGORI</h3>
          <hr />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="9"><p>Aksi</p></b-col>
        <b-col cols="3" class="text-right"><p>(100)</p></b-col>
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
