<template>
  <div id="alpha-shop-forum">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/FooteR";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>
