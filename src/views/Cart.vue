<template>
<div>
  <CartList :cartItems="cart" />
</div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'CartView',
  components: {
    CartList
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    }
  },
}
</script>

