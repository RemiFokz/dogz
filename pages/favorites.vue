<template>
  <div>
    <GridList :favorites="favorites" @remove="remove" :items="favorites" />
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      favorites: "favorites"
    })
  },
  methods: {
    ...mapMutations({
      REMOVE_FROM_FAVORITE: "REMOVE_FROM_FAVORITE"
    }),
    remove(e) {
      this.REMOVE_FROM_FAVORITE(e);
    }
  }
};
</script>
