<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#"
        ><img :src="require('@/assets/navbar.png')" style="width: 10vw"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-5">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tentang-kami"
              >Tentang Kami</router-link
            >
          </li>
          <b-nav-item-dropdown text="Kategori">
            <li v-for="value in kategori" :key="value">
              <router-link class="dropdown-item" :to="value.link">{{
                value.nama
              }}</router-link>
            </li>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Cari Buku"
          ></b-form-input>
          <b-button
            variant="warning"
            size="sm"
            class="my-2 my-sm-0 text-white"
            type="submit"
            ><i class="fa fa-search" aria-hidden="true"></i> Cari</b-button
          >
        </b-nav-form>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button variant="warning" id="popover-card">
            <i
              class="fa fa-shopping-cart text-white mr-3"
              aria-hidden="true"
            ></i>
            <b-badge variant="light">{{ this.cartCookie.length }}</b-badge>
          </b-button>
          <b-popover target="popover-card" triggers="hover" placement="bottom">
            <template #title>Keranjang Belanja</template>
            <b-container>
              <b-row v-for="value in cartCookie" :key="value">
                <b-col cols="3">
                  <img width="100%" :src="value.img" />
                </b-col>
                <b-col cols="7">
                  <p class="mb-0">{{ value.judul }}</p>
                  <p class="text-warning">
                    {{
                      (value.harga * value.jumlah).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })
                    }}
                  </p></b-col
                >
                <b-col cols="2"
                  ><b-badge variant="light">{{ value.jumlah }}</b-badge></b-col
                >
              </b-row>
              <b-row>
                <b-col class="text-center">
                  <b-button size="sm" @click="deleteCart" variant="danger" class="mr-3"
                    ><i class="fa fa-trash" aria-hidden="true"></i>
                  </b-button>
                  <b-button size="sm" variant="warning" class="text-white"
                    >Tampilkan Keranjang</b-button
                  >
                </b-col>
              </b-row>
            </b-container>
          </b-popover>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Nama User <i class="fa fa-user" aria-hidden="true"></i></em>
            </template>
            <li>
              <router-link class="dropdown-item" to="/profile"
                >Profile</router-link
              >
            </li>
            <b-dropdown-item href="#"
              ><button class="btn btn-sm btn-danger">
                Sign Out
              </button></b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { BNavbar, BButton, BBadge, BPopover, BContainer } from "bootstrap-vue";
import Cookies from "js-cookie";

export default {
  mounted() {
    this.cartCookie = JSON.parse(Cookies.get("cart"));
  },
  data() {
    return {
      kategori: [
        { nama: "Aksi", link: "/kategori/aksi" },
        { nama: "Anak-anak", link: "/kategori/anak-anak" },
        { nama: "Fiksi", link: "/kategori/fiksi" },
        { nama: "Horror", link: "/kategori/horror" },
        { nama: "Non-aksi", link: "/kategori/non-aksi" },
        { nama: "Romansa", link: "/kategori/romansa" },
      ],
      cartCookie: [],
    };
  },
  name: "Navbar",
  components: {
    BNavbar,
    BButton,
    BBadge,
    BPopover,
    BContainer,
  },
  methods: {
    deleteCart(){
      Cookies.remove('cart')
      location.reload();
    }
  }
};
</script>

<style scoped></style>
