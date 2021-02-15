<template>
  <div class="page">
    <header-bar/>
    <div class="page-inside" v-if="item">
      <div class="title">
        <span>catalog number: </span>
        <strong>{{ item.id }}</strong>
      </div>
      <div class="subtitle" v-if="product">
        <span>product: </span>
        <router-link :to="'/product/' + product.id">
          <strong>{{ product.name }}</strong>
        </router-link>
      </div>
      <div class="subtitle" v-if="family">
        <span>product family: </span>
        <router-link :to="'/family/' + family.id">
          <strong>{{ family.name }}</strong>
        </router-link>
      </div>
      <div class="subtitle">
        <span>license and support: </span>
        <strong>{{ license }}</strong>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>
<script>
import HeaderBar from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'
export default {
  name: 'ItemPage',
  data () {
    return {
      itemId: null
    }
  },
  computed: {
    item () {
      return this.$store.state.products.items.find(item => {
        return item.id === this.itemId
      })
    },
    license () {
      return this.$store.state.licenses[this.item.license]
    },
    product () {
      if (!this.item) return null
      return this.$store.state.products.products.find(product => {
        return '' + product.id === '' + this.item.product
      })
    },
    family () {
      if (!this.product) return null
      return this.$store.state.products.families.find(family => {
        return '' + this.product.family === '' + family.id
      })
    },
  },
  watch: {
    $route (to) {
      this.itemId = to.params.id
    }
  },
  created () {
    this.itemId = this.$route.params.id
  },
  components: { HeaderBar, FooterBar }
}
</script>
