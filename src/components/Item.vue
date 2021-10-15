<template>
  <div v-if="dataReady">
    <b-row class="mb-5">
      <b-col cols="6">
        <b-breadcrumb>
          <b-breadcrumb-item @click="goHome">
            <i class="fa fa-home" aria-hidden="true"></i> Home
          </b-breadcrumb-item>
          <b-breadcrumb-item
            @click="goKategori()"
            >{{ this.rekomendasi[this.item].kategori }}</b-breadcrumb-item
          >
          <b-breadcrumb-item active>{{
            this.rekomendasi[this.item].judul
          }}</b-breadcrumb-item>
        </b-breadcrumb>
      </b-col>
    </b-row>

    <b-container fluid>
      <b-row>
        <b-col cols="4">
          <img width="100%" :src="this.rekomendasi[this.item].img" />
        </b-col>
        <b-col cols="5">
          <b-row>
            <b-col>
              <h3 class="mb-2">{{ this.rekomendasi[this.item].judul }}</h3>
              <p class="mb-5">
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
                {{ this.rekomendasi[this.item].rate }}/5
              </p>
              <h1 class="text-warning bg-light d-inline p-2">
                {{
                  this.rekomendasi[this.item].harga.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })
                }}
              </h1>
              <p class="mt-5 mb-3">
                {{ this.rekomendasi[this.item].deskripsi }}
              </p>
              <p>
                Kategori:
                <b-badge variant="info">{{
                  this.rekomendasi[this.item].kategori
                }}</b-badge>
              </p>
            </b-col>
          </b-row>
          <b-row class="cart-section">
            <b-col>
              <b-button @click="kurang" class="bg-white text-dark">-</b-button>
              <span class="mx-3">{{ this.jumlah }}</span>
              <b-button @click="tambah" class="bg-white text-dark">+</b-button>

              <b-button class="bg-warning mx-3">Beli Sekarang</b-button>

              <b-button @click="addCart" class="cart mx-3"
                ><i
                  class="fa fa-shopping-cart text-white mr-3"
                  aria-hidden="true"
                ></i
              ></b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BContainer, BBreadcrumb } from "bootstrap-vue";
import axios from "axios";
import Cookies from "js-cookie";

export default {
  async mounted() {
    await axios
      .get(
        "https://dmujitempbagifile.s3.ap-southeast-1.amazonaws.com/buku.json"
      )
      .then((response) => (this.rekomendasi = response.data));

    this.dataReady = true;

    this.$route.query.item
      ? (this.item = this.$route.query.item)
      : this.$router.push("/");

    if (
      this.rekomendasi[this.item] === "undefined" ||
      this.rekomendasi[this.item] === undefined
    ) {
      this.$router.push("/");
    }

    this.cartCookie = JSON.parse(Cookies.get("cart"));
  },
  data() {
    return {
      rekomendasi: {},
      item: null,
      jumlah: 0,
      cartCookie: [],
      dataReady: false,
    };
  },
  name: "Item",
  components: {
    BContainer,
    BBreadcrumb,
  },
  methods: {
    kurang() {
      if (this.jumlah > 0) {
        this.jumlah--;
      }
    },
    tambah() {
      this.jumlah++;
    },
    addCart() {
      if (Cookies.get("token") === undefined) {
        alert("Login terlebih dahulu");
        this.$router.push("/login?item=" + this.item);
      } else if (this.jumlah === 0) {
        alert("Jumlah barang 0");
      } else {
        const item = {
          item: this.item,
          jumlah: this.jumlah,
          judul: this.rekomendasi[this.item].judul,
          img: this.rekomendasi[this.item].img,
          harga: this.rekomendasi[this.item].harga,
        };

        var itemList = this.cartCookie;
        const addedItem = itemList.find(
          (product) => product.item === item.item
        );
        if (addedItem) {
          addedItem.jumlah += this.jumlah;
        } else {
          itemList.push(item);
        }
        Cookies.set("cart", JSON.stringify(itemList));
        alert("Buku telah dimasukkan ke dalam keranjang");
        location.reload();
      }
    },
    goHome() {
      this.$router.push("/");
    },
    goKategori() {
      this.$router.push("/kategori/"+this.rekomendasi[this.item].kategori);
    },
  },
};
</script>

<style scoped>
.breadcrumb-item a:hover {
  text-decoration: none;
}

.cart-section {
  margin-top: 8vw;
}

.dark .text-warning{
  background-color: #23272b!important;
}

.dark .breadcrumb{
  background-color: #23272b!important;
}

button.bg-white {
  height: 2.8vw !important;
  width: 2.8vw !important;
}

button.bg-warning {
  height: 2.8vw !important;
  border-color: #ffc107 !important;
}

.cart {
  height: 2.8vw !important;
  width: 2.8vw !important;
}
</style>
