<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#"
        ><img :src="require('@/assets/navbar.png')" style="width:10vw"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-5">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/tentang-kami">Tentang Kami</router-link></li>
          <b-nav-item-dropdown text="Kategori">
            <li v-for="value in kategori" :key="value"><router-link class="dropdown-item" :to="value.link">{{ value.nama }}</router-link></li>
        </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Cari Buku"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Cari</b-button
          >
        </b-nav-form>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Nama User <i class="fa fa-user" aria-hidden="true"></i></em>
            </template>
            <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
            <b-dropdown-item href="#"><button class="btn btn-sm btn-danger">Sign Out</button></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { BNavbar } from "bootstrap-vue";

export default {
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
    };
  },
  name: "Navbar",
  components: {
    BNavbar,
  },
};
</script>

<style scoped></style>
