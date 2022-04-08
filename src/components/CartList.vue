<template>
<div class="wrapper">
  <div class="classes">
    <div v-if="cartIsEmpty()">
      <h1>Cart is empty!</h1>
    </div>
    <div v-else class="class" v-for="class in cartItems" :key="class.id">
      <div class="info">
      <h1>{{class.classID}}</h1>
        <h1>{{class.name}}</h1>
        <p>{{class.classType}}</p>
      </div>
      <div class="image">
        <img :src="'/images/classes/'+class.image">
      </div>
      <div class="creditHours">
        <h2>{{class.creditHours}}</h2>
        <button class="auto" @click="removeFromCart(class)">Remove from Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    cartItems: Array,
  },
  methods: {
    removeFromCart(class) {
      this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(class), 1);
    },
    cartIsEmpty() {
      if (this.$root.$data.cart.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.classes {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.classItem {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.classItem img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.classItem .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.creditHours {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
