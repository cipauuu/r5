<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col v-for="value in rekomendasi" :key="value" cols="4">
          <b-card
            :title="value.judul"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              {{ value.publisher }}
            </b-card-text>

            <b-button href="#" variant="secondary">Details</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BContainer, BCard } from "bootstrap-vue";

export default {
  data() {
    return {
      rekomendasi: [
        { judul: "Conan", publisher: "Dadang" },
        { judul: "One Piece", publisher: "Situmorang" },
        { judul: "Naruto", publisher: "Agus" },
      ],
    };
  },
  name: "Navbar",
  components: {
    BContainer,
    BCard,
  },
};
</script>

<style scoped></style>
