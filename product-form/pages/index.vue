<template>
  <main>
    <section>
      <div class="form-container">
        <OrderForm />
      </div>
    </section>
  </main>
</template>

<script>
import OrderForm from '../components/OrderForm.vue'
export default {
  components: {
    OrderForm
  }
}
</script>

<style scoped>
.form-container {
  margin: 0 auto;
  width: 70vw;
}
</style>
