<template>
  <div
    class="product-card"
    :class="{ 'product-card--active': clicked }"
    @click="handleClick"
  >
    <div>{{ product }}</div>
    <div>{{ price | currency }}</div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    handleClick() {
      this.clicked = !this.clicked

      if (this.clicked) {
        this.$emit('add-product', { name: this.product, price: this.price })
      } else {
        this.$emit('remove-product', { name: this.product, price: this.price })
      }
    }
  }
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  background-color: mediumvioletred;
  width: 70%;
  margin: 10px auto;
  padding: 20px 30px 20px 30px;
  font-size: 1.5rem;
}
.product-card--active {
  background-color: mediumseagreen;
}
</style>
