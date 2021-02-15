<template>
  <div class="page">
    <header-bar/>
    <div class="page-inside" v-if="this.family">
      <div class="title">
        <span>product family: </span>
        <strong>{{ family.name }}</strong>
      </div>
      <div>
        <div class="title">
          <span>available products</span>
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
      return this.$store.state.products.families.find(family => {
        return '' + family.id === this.familyId
      })
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
  max-height: calc(100vh - 198px)
  overflow: auto
  padding: 20px
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: flex-start
.title
  font-size: 1.2rem
  margin: 20px 0
  text-align: left
.subtitle
  font-size: 1rem
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
    font-size: .9rem
    cursor: pointer
    text-align: left
    transition: background-color .4s ease-in-out
    &:hover
      background: #faff81
    &:not(:last-child)
      border-bottom: 1px solid #dedede
</style>