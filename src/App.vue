<template>
  <div class="wrapper">
    <header-component />
    <div class="wrapper-content">
      <div class="view-sm isCenter">
        <router-view />
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style></style>
