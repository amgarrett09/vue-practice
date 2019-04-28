<template>
  <main>
    <section>
      <nuxt-link class="no-decoration" to="/cart">
        <cart-button />
      </nuxt-link>
      <div class="form-container">
        <OrderForm :products="products" />
      </div>
    </section>
  </main>
</template>

<script>
import OrderForm from '../components/OrderForm.vue'
import CartButton from '../components/CartButton.vue'
export default {
  components: {
    OrderForm,
    CartButton
  },
  async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.get('http://localhost:5000/products')
      return {
        products: data
      }
    } catch (err) {
      error({
        statusCode: 503,
        message: 'Unable to fetch products at this time. Please try again.'
      })
    }
  }
}
</script>

<style scoped>
.form-container {
  margin: 0 auto;
  width: 70vw;
}
.no-decoration {
  text-decoration: none;
}
</style>
