<template>
  <div class="page">
    <header-bar/>
    <div class="page-inside" v-if="product">
      <div class="title">
        <span>produkt: </span>
        <strong>{{ product.name }}</strong>
      </div>
      <div class="subtitle" v-if="family">
        <span>patří do produktové skupiny: </span>
        <router-link :to="'/family/' + family.id">
          <strong>{{ family.name }}</strong>
        </router-link>
      </div>
      <div>
        <div class="subtitle">
          <span>obsahuje katalogová čísla</span>
        </div>
        <ul class="product-list">
          <li v-for="item of items" :key="item.id" @click="onItemClick(item.id)">{{ item.id + ', ' + item.license}}</li>
        </ul>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>
<script>
import HeaderBar from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'
export default {
  name: 'ProductPage',
  data () {
    return {
      productId: null
    }
  },
  computed: {
    product () {
      return this.$store.state.products.products.find(product => {
        return '' + product.id === this.productId
      })
    },
    family () {
      if (!this.product) return null
      return this.$store.state.products.families.find(family => {
        return '' + this.product.family === '' + family.id
      })
    },
    items () {
      return this.$store.state.products.items.filter(item => {
        return '' + item.product === this.productId
      }).map(it => {
        return {
          id: it.id,
          license: this.$store.state.licenses[it.license]
        }
      })
    }
  },
  watch: {
    $route (to) {
      this.productId = to.params.id
    }
  },
  created () {
    this.productId = this.$route.params.id
  },
  methods: {
    onItemClick (v) {
      this.$router.push('/item/' + v)
    }
  },
  components: { HeaderBar, FooterBar }
}
</script>
