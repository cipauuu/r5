<template>
  <div id="rekomendasi">
    <b-container fluid>
      <b-row>
        <b-col
          v-for="value in rekomendasi.slice(0, 4)"
          :key="value"
          cols="3"
          class="d-flex align-items-stretch"
        >
          <b-card
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
          >
            <img class="card-img-top" :src="value.img" />
            <b-badge variant="info" class="mt-3">{{ value.kategori }}</b-badge>
            <h5 class="card-title mt-2">{{ value.judul }}</h5>
            <template #footer>
              <b-row>
                <b-col cols="6" class="my-auto">
                  <p class="mb-0">
                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                    {{ value.rate }}/5
                  </p>
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
    <div id="refresh">
      <button
        type="button"
        class="btn btn-dark"
        v-on:click="refresh"
        v-b-tooltip.hover
        title="Refresh rekomendasi"
      >
        <i class="fa fa-refresh" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>


<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>

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
  methods: {
    refresh: function (event) {
      let temp = this.rekomendasi;
      this.rekomendasi = temp.sort(() => Math.random() - 0.5);

      // scroll ke atas
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
.card-img-top {
  height: 20vw;
}

.card-title {
  font-size: 20px;
}

#refresh {
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  font-size: 18px;
}
</style>
