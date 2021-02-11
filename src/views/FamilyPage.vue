<template>
  <div class="page">
    <header-bar/>
    <div class="page-inside" v-if="this.family">
      <div class="title">
        <span>produktová skupina: </span>
        <strong>{{ family.name }}</strong>
      </div>
      <div>
        <div class="title">
          <span>obsahuje produkty</span>
        </div>
        <ul class="product-list">
          <li v-for="product of products" :key="product.id" @click="onItemClick(product.id)">{{ product.name }}</li>
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
  name: 'FamilyPage',
  data () {
    return {
      familyId: null
    }
  },
  computed: {
    family () {
      return this.$store.getters.getFamily(this.familyId)
    },
    products () {
      return this.$store.state.products.products.filter(product => {
        return '' + product.family === this.familyId
      })
    }
  },
  watch: {
    $route (to) {
      this.familyId = to.params.id
    }
  },
  created () {
    this.familyId = this.$route.params.id
  },
  methods: {
    onItemClick (v) {
      this.$router.push('/product/' + v)
    }
  },
  components: { HeaderBar, FooterBar }
}
</script>
<style lang="stylus">
.page-inside
  flex: 1
  padding: 20px
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: flex-start
.title
  font-size: 1.5rem
  margin: 20px 0
  text-align: left
.subtitle
  font-size: 1.2rem
  margin: 20px 0
  text-align: left
.product-list
  margin: 0
  padding: 0
  list-style: none
  border: 1px solid #cdcdcd
  border-radius: 4px
  & li
    padding: .5em .75em
    font-size: 1rem
    cursor: pointer
    text-align: left
    &:hover
      background: #faff81
    &:not(:last-child)
      border-bottom: 1px solid #dedede
</style>