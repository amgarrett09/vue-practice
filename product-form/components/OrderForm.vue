<template>
  <div class="order-form">
    <ProductCard
      v-for="product in products"
      :key="product.name"
      :product="product.name"
      :price="product.price"
      @add-product="addProduct"
      @remove-product="removeProduct"
    />
    <br />
    <div class="total">
      <div>Total</div>
      <div>{{ totalPrice | currency }}</div>
    </div>
    <div class="order-form__submit">
      <button type="submit" @click.prevent="addToCart">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  components: {
    ProductCard
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      totalPrice: 0,
      activeItems: []
    }
  },
  methods: {
    addProduct(product) {
      this.totalPrice += product.price
      this.activeItems.push(product)
    },
    removeProduct(product) {
      this.totalPrice -= product.price
      this.activeItems = this.activeItems.filter(
        item => item.name !== product.name
      )
    },
    addToCart() {
      this.$store.dispatch('cart/addProducts', this.activeItems)
    }
  }
}
</script>

<style scoped>
.total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 30px 10px 30px;
  width: 70%;
  margin: 10px auto;
  font-size: 1.5rem;
}
.order-form__submit {
  text-align: center;
}
</style>
