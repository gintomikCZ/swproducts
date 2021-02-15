<template>
    <div class="p-relative" ref="myContainer">
      <input
        v-model="search"
        :placeholder="placeholder"
        ref="myInput"
        @focus="onFocus"
        @keyup.arrow-down="onKeyupArrowDown"
        @keyup.arrow-up="onKeyupArrowUp"
        @keyup.enter="onKeyupEnter"
        />
      <transition name="grow-down" @after-enter="afterEnter" @after-leave="afterLeave">
        <div ref="body" v-if="show" class="select-body">
          <div
            v-for="(option, index) in filteredOptions"
            :key="option.value" class="select-body-item"
            :class="{ 'active': index === position }"
            @click="onItemClick(option.value)">
            <span>{{ option.label }}</span>
          </div>
        </div>
      </transition>
    </div>
</template>
<script>
export default {
  name: 'InputSelect',
  props: {
    placeholder: { type: String, default: '' },
    value: { required: true, validator: v => { return v === null || typeof v === 'string' }},
    options: { type: Array, reuired: true }
  },
  computed: {
    filteredOptions () {
      return this.options.filter(item => item.label.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
    }
  },
  data () {
    return {
      search: '',
      show: false,
      position: null
    }
  },
  methods: {
    onFocus () {
      this.show = true
    },
    afterLeave () {
      document.removeEventListener('click', this.close)
    },
    afterEnter () {
      document.addEventListener('click', this.close)
    },
    close () {
      this.show = false
    },
    onItemClick (v) {
      this.$emit('input', v)
      this.$refs.body.blur()
    },
    onKeyupArrowDown () {
      if (this.position === null) {
        this.position = 0
        return
      }
      if (this.position === this.options.length - 1) {
        this.position = 0
        return
      }
      this.position += 1
    },
    onKeyupArrowUp () {
      if (this.position === null) {
        this.position = 0
        return
      }
      if (this.position === 0) {
        this.position = this.options.length - 1
        return
      }
      this.position -= 1
    },
    onKeyupEnter () {
      if (this.position === null) {
        return
      }
      this.$emit('input', this.options[this.position].value)
      this.$refs.body.blur()
    }
  }
}
</script>
<style lang="stylus" scoped>
.p-relative
  position: relative
.grow-down-enter, .grow-down-leave-to
  transform: scale(1, 0)
  transform-origin: left
.grow-down-enter-to, .grow-down-leave
  transform-origin: top
  transform: scaleY(1)
.grow-down-enter-active, .grow-down-leave-active
  transform-origin: top
  transition: transform .4s ease-in-out
.select-body
  position: absolute
  top: calc(100% + 5px)
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25)
  border: 1px solid #cacaca
  border-radius: 4px
  background: #fff
  max-height: 400px
  overflow-y: auto
  z-index: 9
  min-width: 120%
.select-body-item
  font-size: 0.9rem
  text-align: left
  padding: .5em .75em
  cursor: pointer
  transition: background-color .4s ease-in-out
  &:hover, &.active
    background: #faff81
  &:not(:last-child)
    border-bottom: 1px solid #dadada
input
  font-size: 1.2rem
  color: #2a2a2a
  padding: .5em .75em
  border-radius: 4px
  appearance: none
  border-style: solid
</style>
