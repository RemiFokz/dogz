<template>
  <div class="grid-wrapper">
    <div v-for="item in items" :key="item">
      <div
        :class="{ active: favorites.includes(item) }"
        class="item"
        @click="check(favorites.includes(item), item)"
      >
        <img :src="item" alt="alt" class="image" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
// хранения данных по тз вызывает душевные и моральные страдания с точки зрения архитектуры приложения
// тут можно побить компонентно побольше, но в рамках тз нет смысла особо
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    favorites: {
      type: Array,
      default: () => []
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
