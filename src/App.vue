<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/byulogo.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/browse.png">
          <p>Browse</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item">
          <img src="/images/shoppingcart.png">
          <p>{{ this.cartSize }} items</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <div id="footer">
    <ul class='footer'>
      <li class="link"><a href="https://github.com/BYUCS260/grocery-store-anahoward815.git">Github</a></li>
    </ul> 
  </div>
</div>
</template>

<script>
// import data from "@/main.js"
export default {
  name: 'AppView',
  computed: {
    cartSize() {
      return this.$root.$data.cart.length;
    }
  },
}
</script>


<style>
/* footer */
#footer ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #B84901;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

#footer li {
  float: left;
}

#footer li a {
  display: block;
  color: rgb(234, 235, 247);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
