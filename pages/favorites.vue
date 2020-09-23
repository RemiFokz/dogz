<template>
  <div>
    <GridList :items="favorites" />
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
