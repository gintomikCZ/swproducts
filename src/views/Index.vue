<template>
  <div class="page">
    <header-bar/>
    <div class="central-page">
      <h1>welcome</h1>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'
export default {
  name: 'Index',
  components: { HeaderBar, FooterBar }
}
</script>
<style lang="stylus" scoped>

.central-page
  display: flex
  flex-direction: column
  justify-content: center
</style>