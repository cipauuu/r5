<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col
          v-for="value in rekomendasi.slice(0, 4)"
          :key="value"
          cols="3"
          class="d-flex align-items-stretch"
        >
          <b-card
            :title="value.judul"
            :img-src="value.img"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
          >
            <template #footer>
              <b-row>
                <b-col cols="6" class="my-auto">
                  <b-badge variant="info" class="mb-3">{{ value.kategori }}</b-badge>
                </b-col>
                <b-col cols="6" class="my-auto">
                  <b-button href="#" variant="secondary">Details</b-button>
                </b-col>
              </b-row>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BContainer, BCard, BBadge } from "bootstrap-vue";
import axios from "axios";

export default {
  mounted() {
    axios
      .get(
        "https://dmujitempbagifile.s3.ap-southeast-1.amazonaws.com/buku.json"
      )
      .then((response) => (this.rekomendasi = response.data));
    console.log(this.rekomendasi);
  },
  data() {
    return {
      rekomendasi: {},
    };
  },
  name: "Navbar",
  components: {
    BContainer,
    BCard,
    BBadge,
  },
};
</script>

<style scoped>
.card-img-top {
  height: 20vw;
}

.card-title{
  font-size: 20px;
}
</style>
