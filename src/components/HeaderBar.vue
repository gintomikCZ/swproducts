<template>
<div class="total-header-bar">
  <div class="header-bar">
    <img alt="home" class="header-bar-logo" src="../assets/logo50.png"/>
    <div class="header-right">Rockwell Automation software</div>
  </div>
  <div class="inputs-row">
    <input-select :value="family" placeholder="product family" :options="families" @input="onFamilyInput" />
    <input-select :value="product" placeholder="product" :options="products" @input="onProductInput" />
    <input-select :value="item" :options="items" placeholder="catalog number" @input="onItemInput" />
  </div>
</div>
</template>
<script>
import InputSelect from '@/components/InputSelect.vue'
export default {
  name: 'HeaderBar',
  data () {
    return {
      family: null,
      product: null,
      item: null
    }
  },
  created () {
    console.log(this.$store)
  },
  computed: {
    families () {
      return this.$store.state.products.families.map(family => {
        return { label: family.name, value: family.id }
      }).sort((a, b) => a.label.localeCompare(b.label))
    },
    products () {
      return this.$store.state.products.products.map(product => {
        return { label: product.name, value: product.id }
      }).sort((a, b) => a.label.localeCompare(b.label))
    },
    items () {
      return this.$store.state.products.items.map(item => {
        return { label: item.id, value: item.id }
      }).sort((a, b) => a.label.localeCompare(b.label))
    }
  },
  methods: {
    onFamilyInput (v) {
      if (this.$route.path === '/family/' + v) {
        return
      }
      this.$router.push('/family/' + v)
    },
    onProductInput (v) {
      if (this.$route.path === '/product/' + v) {
        return
      }
      this.$router.push('/product/' + v)
    },
    onItemInput (v) {
      if (this.$route.path === '/item/' + v) {
        return
      }
      this.$router.push('/item/' + v)
    }
  },
  components: { InputSelect }
}
</script>
<style lang="stylus" scoped>
.total-.header-bar
  flex: 0 0 132px
.header-bar
  display: flex
  justify-content: space-between
  border-bottom: 3px solid #cdcdcd
  padding-bottom: 10px
.header-right
  font-size: 1.5rem
  font-weight: bold
  display: flex
  align-items: flex-end
.inputs-row
  display: flex
  justify-content: space-around
  padding: 10px 0
  background: #efefef
  border-bottom: 3px solid #cdcdcd

</style>