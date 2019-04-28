<template>
  <div>
    <span>
      {{ name }} - {{ price | currency }}
      <button @click="removeFromCart">Remove</button>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeFromCart() {
      this.$store.dispatch('cart/removeProducts', [
        { name: this.name, price: this.price }
      ])
    }
  }
}
</script>

<style></style>
