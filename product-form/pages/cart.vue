<template>
  <div>
    <template v-if="items.length > 0">
      <cart-item
        v-for="item in items"
        :key="item.name"
        :name="item.name"
        :price="item.price"
      />
    </template>
    <p>Total: {{ total | currency }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CartItem from '../components/CartItem.vue'
export default {
  components: {
    CartItem
  },
  computed: {
    ...mapState('cart', ['items', 'total'])
  }
}
</script>

<style></style>
