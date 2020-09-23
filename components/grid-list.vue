<template>
  <div class="grid-wrapper">
    <div v-for="item in items" :key="item.img">
      <div
        :class="{ active: item.favorite }"
        class="item"
        @click="check(item.favorite, item.img)"
      >
        <img :src="item.img" alt="alt" class="image" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapMutations({
      ADD_TO_FAVORITE: "ADD_TO_FAVORITE",
      REMOVE_FROM_FAVORITE: "REMOVE_FROM_FAVORITE"
    }),
    check(includes, item) {
      includes ? this.REMOVE_FROM_FAVORITE(item) : this.ADD_TO_FAVORITE(item);
    }
  }
};
</script>
<style lang="scss" scoped>
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  .item {
    position: relative;
    &.active {
      &:after {
        color: red;
        opacity: 1;
      }
    }
    &:after {
      content: "♥";
      font-size: 40px;
      position: absolute;
      opacity: 0;
      display: block;
      color: white;
      top: 5px;
      left: 5px;
      transition: opacity 0.3s ease;
      will-change: opacity;
    }
    &:hover {
      cursor: pointer;
      &:after {
        opacity: 1;
      }
    }
  }
  .image {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
}
</style>
