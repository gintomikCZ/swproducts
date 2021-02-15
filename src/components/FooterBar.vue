<template>
  <div class="footer-bar">
    <div class="footer-inside">
      <div>Contact us for additional information on Rockwell Automation SW products</div>
      <div>
        <a href="tel:+420775858851">+420 775 858851</a>
        <a href="mailto:tglabazna@controltech.cz">tglabazna@controltech.cz</a>
      </div>
      <div>ControlTech s.r.o., 2021</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterBar'
}
</script>
<style lang="stylus" scoped>
.footer-bar
  display: flex
  flex: 0 0 56px
  justify-content: flex-end
  border-top: 3px solid #cdcdcd
  align-items: center
  padding-top: 10px
.footer-inside
  text-align: right
  & a:first-child
    margin-right: 1rem
</style>
