<template>
  <div class="notfound">
    <h1>404</h1>
    <div class="cloak__wrapper">
      <div class="cloak__container">
        <div class="cloak"></div>
      </div>
    </div>
    <div class="info">
      <h2>We can't find that page</h2>
      <p>
        We're fairly sure that page used to be here, but seems to have gone
        missing. We do apologise on it's behalf.
      </p>
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style></style>
