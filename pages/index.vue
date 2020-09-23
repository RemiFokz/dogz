<template>
  <div class="container">
    doogs
    <GridList v-if="!loading" :items="random" />
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapGetters({
      random: "randomDogs"
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
