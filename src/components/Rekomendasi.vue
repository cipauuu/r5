<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col v-for="value in rekomendasi" :key="value" cols="4">
          <b-card
            :title="value.judul"
            :img-src="value.url"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
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
        { judul: "Conan", publisher: "Dadang", url: "https://www.bukukita.com/babacms/displaybuku/111835_f.jpg" },
        { judul: "One Piece", publisher: "Situmorang", url: "https://japanesestation.com/wp-content/uploads/2020/04/EU48hGrU4AcRCdo.jpg" },
        { judul: "Naruto", publisher: "Agus", url: "https://legendofthegoldenwind.files.wordpress.com/2019/01/yellowcover.jpg?w=1400" },
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

<style scoped>
.card-img-top{
  height: 30vw;
}
</style>
