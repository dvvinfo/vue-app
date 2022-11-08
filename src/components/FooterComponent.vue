<template>
  <footer class="footer">
    <div class="container">
      <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <router-link :to="link.url" class="navbar-link">{{link.title}}</router-link>
          </li>
        </ul>
    </div>
  </footer>
</template>

<script>
import { app, links } from "@/_config";
export default {
  // props: {
  //   links: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  name: "FooterComponent",
  data() {
    return {
      title: app.title,
      links: links,
    };
  },
};
</script>

<style></style>
