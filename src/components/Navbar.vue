<template>
  <div>
    <b-navbar class="darks" toggleable="lg" type="light" variant="light">
      <b-navbar-brand
        ><img
          @click="goHome"
          :src="require('@/assets/navbar.png')"
          style="width: 10vw"
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
          <div class="custom-control custom-checkbox mr-5 my-2">
            <b-button @click="toggleDarkMode" id="btnDarkMode" variant="dark"
              >Dark Mode</b-button
            >
          </div>
          <b-button v-if="isLogin" variant="warning" id="popover-card">
            <i
              class="fa fa-shopping-cart text-white mr-3"
              aria-hidden="true"
            ></i>
            <b-badge variant="light">{{ this.cartCookie.length }}</b-badge>
          </b-button>
          <b-popover target="popover-card" triggers="hover" placement="bottom">
            <template #title>Keranjang Belanja</template>
            <b-container>
              <div
                v-if="!this.cartCookie.length"
                class="alert alert-secondary mt-3"
                role="alert"
              >
                Keranjang kosong!
              </div>
              <b-row v-for="value in cartCookie" :key="value" class="mb-3">
                <b-col cols="3">
                  <img width="55px" height="70px" :src="value.img" />
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
                  </p>
                </b-col>
                <b-col cols="2">
                  <b-badge variant="light">{{ value.jumlah }}</b-badge>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="text-center">
                  <b-button
                    v-if="this.cartCookie.length"
                    size="sm"
                    @click="deleteCart"
                    variant="danger"
                    class="button mr-3"
                    ><i
                      class="fa fa-trash text-white mr-3"
                      aria-hidden="true"
                    ></i>
                    Bersihkan Keranjang
                  </b-button>
                  <b-button
                    v-if="this.cartCookie.length"
                    size="sm"
                    @click="checkout"
                    variant="success"
                    class="button text-white"
                  >
                    Checkout
                    {{
                      totalPrice.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })
                    }}
                  </b-button>
                </b-col>
              </b-row>
            </b-container>
          </b-popover>
          <button
            v-if="!isLogin"
            id="login"
            @click="login"
            class="btn btn-sm btn-warning text-white"
          >
            <i class="fa fa-user" aria-hidden="true"></i> Login
          </button>
          <b-nav-item-dropdown v-if="isLogin" right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em
                >{{ namaUser }} <i class="fa fa-user" aria-hidden="true"></i
              ></em>
            </template>
            <li>
              <router-link class="dropdown-item" to="/profile"
                >Profile</router-link
              >
            </li>
            <li>
              <a class="dropdown-item item-logout"
                ><button @click="logout" class="btn btn-sm btn-danger">
                  Sign Out
                </button></a
              >
            </li>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { BNavbar, BButton, BBadge, BPopover, BContainer } from "bootstrap-vue";
import Cookies from "js-cookie";
import $ from "jquery";

export default {
  async mounted() {
    this.$route.query.item ? (this.item = this.$route.query.item) : "";

    (await Cookies.get("token"))
      ? (this.isLogin = true)
      : (this.isLogin = false);

    (await Cookies.get("cart"))
      ? (this.cartCookie = JSON.parse(Cookies.get("cart")))
      : "";

    if (Cookies.get("darkMode") === "true") {
      this.setDarkModeOn();
    } else {
      Cookies.set("darkMode", "false");
    }
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
      item: null,
      isLogin: false,
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
    deleteCart() {
      Cookies.remove("cart");
      alert("Keranjang telah dihapus");
      location.reload();
    },
    logout() {
      Cookies.remove("name");
      Cookies.remove("token");
      Cookies.remove("cart");
      this.item
        ? this.$router.push("/detail?item=" + this.item)
        : this.$router.push("/");
      location.reload();
    },
    login() {
      this.item
        ? this.$router.push("/login?item=" + this.item)
        : this.$router.push("/login");
    },
    checkout() {
      this.$router.push("/cart");
    },
    goHome() {
      this.$router.push("/");
    },
    toggleDarkMode() {
      if (Cookies.get("darkMode") === "true") {
        this.setDarkModeOff();
        Cookies.set("darkMode", "false");
      } else if (Cookies.get("darkMode") === "false") {
        this.setDarkModeOn();
        Cookies.set("darkMode", "true");
      }
    },
    setDarkModeOn() {
      $(document).ready(function () {
        $("#app").addClass("dark-mode");
        $("div").addClass("dark");
        $("label").addClass("text-white");
        $("#btnDarkMode").html("Light Mode").removeClass("btn-dark").addClass("btn-light");
      });
    },
    setDarkModeOff() {
      $(document).ready(function () {
        $("#app").removeClass("dark-mode");
        $("div").removeClass("dark");
        $("label").removeClass("text-white");
        $("#btnDarkMode").html("Dark Mode").removeClass("btn-light").addClass("btn-dark");
      });
    },
  },
  computed: {
    namaUser() {
      return Cookies.get("name");
    },
    totalPrice() {
      return this.cartCookie.reduce((a, b) => a + b.harga * b.jumlah, 0);
    },
  },
};
</script>

<style scoped>
.button {
  display: block;
  width: 100%;
  margin-top: 10px;
}
.item-logout:hover {
  background: white;
}
.navbar-brand img:hover {
  cursor: pointer;
}

.dark .darks,
.dark .navbar {
  background-color: #23272b !important;
}

.nav-link,
::v-deep .dropdown .nav-link {
  color: #23272b !important;
}

.darks,
.navbar {
  background-color: #f3f3f3 !important;
}

.dark .nav-link,
::v-deep .dark .dropdown .nav-link {
  color: #f3f3f3 !important;
}
</style>
