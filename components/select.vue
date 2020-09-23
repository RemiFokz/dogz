<template>
  <select @change="$emit('change', $event.target.value)">
    <option v-for="(item, index) in items" :key="index">{{ item }}</option>
  </select>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    selected: {
      type: String,
      default: "Select breed"
    }
  }
};
</script>
