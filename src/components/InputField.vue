<template>
<div>
  <input
    :type="type"
    :value="value"
    @input="onInput"
    @change="onChange"
    @focus="onFocus"
    @blur="onBlur"
    :placeholder="placeholder"
    :class="{'invalid': error}"
  />
  <div class="error-message">
    <transition name="slide">
      <div v-if="error">{{ errorMessage }}</div>
    </transition>
  </div>
</div>
</template>
<script>
export default {
  name: 'InputField',
  props: {
    type: { type: String, default: 'text' },
    value: { required: true, validator: v => { return v === null || typeof v === 'string' } },
    error: { type: Boolean, default: false },
    errorMessage: { type: String, default: '' },
    placeholder: { type: String, default: '' }
  },
  methods: {
    onFocus () {
      this.$emit('focus')
    },
    onBlur () {
      this.$emit('blur')
    },
    onInput (e) {
      this.$emit('input', e.target.value)
    },
    onChange () {
      this.$emit('change')
    }
  }
}
</script>
<style scoped lang="stylus">
input
  font-size: 1.2rem
  color: #2a2a2a
  padding: .5em .75em
  border-radius: 4px
  appearance: none
  border-style: solid
input.invalid
  border-color: red
.error-message
  margin: 0.5rem auto
  min-height: 1rem
  min-width: 1rem
  font-size: .8rem
  color: red
</style>