<template>
  <div class="container">
    <div class=" wrapper-person">
      <div v-if="item">
        <img :src="item.img" :alt="item.descr" />
        <h1 class="title" style="color: #fff">{{ item.title }}</h1>
        <p>{{ item.descr }}</p>
        <div class="card-stats">
            <div
              class="one-third"
              v-for="(stat, index) in item.info"
              :key="index"
            >
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat">{{ stat.title }}</div>
            </div>
          </div>
        <div>
          <router-link to="/" class="btn btnOrange" style="margin-top: 16px"
            >bact to home</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items'
export default {
  name: 'ItemAliasPage',
  data() {
    return {
      item: null
    }
  },
  created() {
    const alias = this.$route.params.itemAlias
    const item = items.find(el => el.alias === alias)

    this.item = item
    console.log(item)
  }
}
</script>

<style lang="scss">
.wrapper-person{
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  .card-stats{
    border-radius: 14px;
    margin: 30px 0;
  }
}
</style>
