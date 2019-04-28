<template>
  <div class="cart-button">Cart ({{ items.length }})</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('cart', ['items'])
  }
}
</script>

<style scoped>
.cart-button {
  width: 64px;
  height: 32px;
  border: 1px solid black;
  padding-top: 10px;
  text-align: center;
  color: black;
}
</style>
