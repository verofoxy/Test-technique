<script>
import NavLink from "./components/NavLink.vue";

export default {
  name: "App",
  components: {
   NavLink
  },
  props : {
    msg: {
      type: String,
      default: "Welcome to Your Vue.js App"
    }
  }
};
</script>

<template>
  <div>
    <nav>
    <NavLink url="/"> Home />
    <NavLink url="/contact"> contact/>
    </nav>
    <p> Bienvenue sur notre page d' <HomeLink/></p>
  </div>
</template>

<style  lang="scss">
a {
  color: #2c3e50;
  text-decoration: none;
}
</style>
