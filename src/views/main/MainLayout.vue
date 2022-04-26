<template>
<div>
  <Navbar />

</div>
<div>
  <Sidebar />
</div>
<div>
  <router-view></router-view>

</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "MainLayout",
  components: { Navbar, Sidebar },
};
</script>

<style>
</style>