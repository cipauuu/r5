<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <h3 class="mb-0">KATEGORI</h3>
          <hr />
        </b-col>
      </b-row>
      <b-row v-for="value in kategori" :key="value">
        <b-col cols="9"
          ><router-link class="text-dark" :to="value.link">{{
            value.nama
          }}</router-link></b-col
        >
        <b-col cols="3" class="text-right"
          ><p>{{ value.jumlah }}</p></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BContainer } from "bootstrap-vue";

export default {
  data() {
    return {
      kategori: [
        { nama: "Aksi", jumlah: "(100)", link: "/kategori/aksi" },
        { nama: "Anak-anak", jumlah: "(100)", link: "/kategori/anak-anak" },
        { nama: "Fiksi", jumlah: "(100)", link: "/kategori/fiksi" },
        { nama: "Horror", jumlah: "(100)", link: "/kategori/horror" },
        { nama: "Non-aksi", jumlah: "(100)", link: "/kategori/non-aksi" },
        { nama: "Romansa", jumlah: "(100)", link: "/kategori/romansa" },
      ],
    };
  },
  name: "Kategori",
  components: {
    BContainer,
  },
};
</script>

<style scoped></style>
