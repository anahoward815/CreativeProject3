<template>
<div class="wrapper">
  <div class="classes">
    <div class="classItem" v-for="classItem in classes" :key="classItem.id">
      <div class="info">
      <h1>{{classItem.classID}}</h1>
        <h1>{{classItem.name}}</h1>
        <p>{{classItem.classType}}</p>
      </div>
      <div class="image">
        <img :src="'/images/classes/'+classItem.image">
      </div>   
      <div class="creditHours">
        <h2>{{classItem.creditHours}}</h2>
        <button class="auto" @click="addToCart(classItem)">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'classList',
  props: {
    classes: Array,
  },
  methods: {
    addToCart(classItem) {
      this.$root.$data.cart.push(classItem);
    },
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
  background: #020274;
  color: #ffffff;
  padding: 10px 20px;
  height: 100px;
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
