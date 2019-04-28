<template>
  <main>
    <section>
      <nuxt-link class="no-decoration" to="/cart">
        <cart-button />
      </nuxt-link>
      <div class="form-container">
        <OrderForm />
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
