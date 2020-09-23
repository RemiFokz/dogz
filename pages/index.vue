<template>
  <div class="container">
    doogs
    <GridList v-if="!loading" :favorites="favorites" :items="random" />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapState({
      random: "random",
      favorites: "favorites"
    })
  },
  methods: {
    ...mapActions({
      api_getRandom: "api_getRandom"
    })
  },
  created() {
    this.api_getRandom().finally(() => (this.loading = false));
  }
};
</script>
