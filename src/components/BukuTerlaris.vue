<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="6">
          <h3>BUKU TERLARIS</h3>
        </b-col>
        <b-col cols="6" class="text-right">
          <router-link class="text-dark" to="/buku-terlaris"
            >view more >></router-link
          >
        </b-col>
      </b-row>
      <hr />
      <b-row class="mb-3">
        <b-col cols="6">
          <b-row
            v-for="(value, index) in terbaru.slice(0,3)"
            :key="(value, index)"
            class="mb-3"
          >
            <b-col cols="1">
              <p>{{ index + 1 }}</p>
            </b-col>
            <b-col cols="2">
              <img :src="value.url" style="height:10vw" />
            </b-col>
            <b-col cols="9" class="my-auto">
              <p class="mb-0">{{ value.judul }}</p>
              <p class="mb-0"><i class="fa fa-star text-warning" aria-hidden="true"></i> {{ value.rating }}/5</p>
              <b-badge variant="info" class="mb-3">{{ value.kategori }}</b-badge>
              <br/>
              <b-button href="#" size="sm" variant="secondary">Details</b-button>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="6">
          <b-row
            v-for="(value, index) in terbaru.slice(3)"
            :key="(value, index)"
            class="mb-3"
          >
            <b-col cols="1">
              <p>{{ index + 4 }}</p>
            </b-col>
            <b-col cols="2">
              <img :src="value.url" style="height:10vw" />
            </b-col>
            <b-col cols="9" class="my-auto">
              <p class="mb-0">{{ value.judul }}</p>
              <p class="mb-0"><i class="fa fa-star text-warning" aria-hidden="true"></i> {{ value.rating }}/5</p>
              <b-badge variant="info" class="mb-3">{{ value.kategori }}</b-badge>
              <br/>
              <b-button href="#" size="sm" variant="secondary">Details</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BContainer, BBadge } from "bootstrap-vue";

export default {
  data() {
    return {
      terbaru: [
        {
          url:
            "https://legendofthegoldenwind.files.wordpress.com/2019/01/yellowcover.jpg?w=1400",
          judul: "Naruto",
          rating: "4.5",
          kategori: "Anak-anak",
        },
        {
          url:
            "https://japanesestation.com/wp-content/uploads/2020/04/EU48hGrU4AcRCdo.jpg",
          judul: "One Piece",
          rating: "5",
          kategori: "Anak-anak",
        },
        {
          url: "https://www.bukukita.com/babacms/displaybuku/111835_f.jpg",
          judul: "Conan",
          rating: "4",
          kategori: "Anak-anak",
        },
        {
          url:
            "http://p2k.unhamzah.ac.id/_sepakbola/_baca_image.php?td=49&kodegb=250px-BakusouKyoudaiLetsGo.jpg",
          judul: "Tamiya",
          rating: "4",
          kategori: "Anak-anak",
        },
        {
          url:
            "https://upload.wikimedia.org/wikipedia/id/c/c3/OnePunchMan_manga_cover.png",
          judul: "One Punch Man",
          rating: "4",
          kategori: "Anak-anak",
        },
        {
          url:
            "https://cdn2.bulbagarden.net/upload/thumb/e/e3/Pokemon_Adventures_volume_18_VIZ_cover.jpg/1200px-Pokemon_Adventures_volume_18_VIZ_cover.jpg",
          judul: "Pokemon",
          rating: "4",
          kategori: "Anak-anak",
        },
      ],
    };
  },
  name: "BukuTerlaris",
  components: {
    BContainer, BBadge,
  },
};
</script>

<style scoped></style>
