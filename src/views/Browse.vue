<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('United States')" href="#" class="pure-menu-link">General Classes</a></li>
      <li class="pure-menu-item"><a @click="select('Canada')" href="#" class="pure-menu-link">Major Classes</a></li>
      <li class="pure-menu-item"><a @click="select('Mexico')" href="#" class="pure-menu-link">Elective Classes</a></li>
    </ul>
  </div>
  <classList :classes="classes" />
</div>
</template>

<script>
import classList from "../components/classList.vue"
export default {
  name: 'BrowseView',
  components: {
    classList
  },
  data() {
    return {
      classType: '',
    }
  },
  computed: {
    classes() {
      return this.$root.$data.classes.filter(classItem => classItem.classType === this.classType);
    }
  },
  methods: {
    select(classType) {
      this.classType = classType;
    }
  }
}
</script>

