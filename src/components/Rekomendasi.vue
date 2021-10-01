<template>
  <div id="rekomendasi" >
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
    <div id="refresh">
      <button type="button" class="btn btn-dark" v-on:click="refresh"><i class="fa fa-refresh" aria-hidden="true"></i></button>
    </div>
  </div>
</template>


<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>

<script>
import { BContainer, BCard, BBadge } from "bootstrap-vue";
import axios from 'axios'

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
      refresh : function (event) {
        alert('button is clicked')
      }
    }
};
</script>

<style scoped>
.card-img-top {
  height: 20vw;
}

.card-title{
  font-size: 20px;
}

#refresh {
  /* display: none; Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
}
</style>
