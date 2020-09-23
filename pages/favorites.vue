<template>
  <div>
    <GridList @remove="remove" :items="favorites" />
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      favorites: "favoritesDogs"
    })
  }
};
</script>
