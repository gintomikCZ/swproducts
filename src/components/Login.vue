<template>
  <form @submit.prevent="onSubmit">
    <div>
      <input-field
        type="password"
        v-model="password"
        @focus="onFocus"
        :error="error"
        :error-message="errorMessage"
      />
    </div>
    <div>
      <button type="submit">enter</button>
    </div>
  </form>
</template>
<script>
import InputField from '@/components/InputField.vue'
export default {
  name: 'Login',
  data () {
    return {
      password: null,
      error: false,
      errorMessage: ''
    }
  },
  methods: {
    onSubmit () {
      if (!this.password) {
        this.errorMessage = 'Zadejte prosím heslo.'
        this.error = true
        return
      }
      if (btoa(this.password) !== this.$store.state.pswEnc) {
        this.errorMessage = 'Heslo není správné.'
        this.error = true
        return
      }
      this.$store.commit('setAuthorized', true)
      this.$router.push('/home')
    },
    onFocus () {
      this.error = false
    }
  },
  components: { InputField }
}
</script>
