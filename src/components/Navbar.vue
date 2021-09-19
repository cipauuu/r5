<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#"
        ><img :src="require('@/assets/navbar.png')" style="width:10vw"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-5">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Tentang Kami</b-nav-item>
          <b-nav-item-dropdown text="Kategori">
            <b-dropdown-item href="#">Aksi</b-dropdown-item>
            <b-dropdown-item href="#">Anak-anak</b-dropdown-item>
            <b-dropdown-item href="#">Fiksi</b-dropdown-item>
            <b-dropdown-item href="#">Horor</b-dropdown-item>
            <b-dropdown-item href="#">Non-aksi</b-dropdown-item>
            <b-dropdown-item href="#">Romansa</b-dropdown-item>
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
            <b-dropdown-item href="#">Profile</b-dropdown-item>
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
  name: "Navbar",
  components: {
    BNavbar,
  },
};
</script>

<style scoped></style>
