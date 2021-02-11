<template>
  <div class="page">
    <div class="flex-column-start">
      <div class="container">
        <img alt="ControlTech logo" src="../assets/logo.png">
        <h1>{{ title }}</h1>
      </div>
      <div class="container">
        <p>Tato aplikace je určena k internímu užití v rámci společnosti ControlTech s.r.o.</p>
        <p>Zadejte prosím heslo.</p>
      </div>
      <div class="container">
        <login />
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: 'IndexGuest',
  computed: {
    title () {
      return this.$store.getters.getTitle
    }
  },
  components: { Login }
}
</script>
<style lang="stylus" scoped>
.container
  border-bottom: 1px solid #cdcdcd
  padding: 20px
  flex: 0 0 auto
p
  margin: 0
.flex-column-start
  flex: 1
  display: flex
  justify-content: flex-start
  flex-direction: column
</style>