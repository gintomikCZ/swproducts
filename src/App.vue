<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
*
  box-sizing: border-box
body
  margin: 0
  padding: 0
a
  text-decoration: none
  color: #594236
  &:hover
    text-decoration: underline
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  display: flex
  flex-direction: column
  height: 100vh
.page
  flex-grow: 1
  display: flex
  flex-direction: column
  justify-content: space-between
  padding: 20px
</style>
