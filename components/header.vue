<template>
  <nav>
    <h1>
      {{ header }}
    </h1>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/favorites">Favorites</nuxt-link>
    <Select :items="allBreeds" @change="toBreed" />
  </nav>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    header: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      allBreeds: "allBreeds"
    })
  },
  methods: {
    ...mapActions({
      api_getAllBreeds: "api_getAllBreeds"
    }),

    toBreed(item) {
      this.$router.push(`/breed/${item}`);
    }
  },
  created() {
    this.api_getAllBreeds();
  }
};
</script>
<style lang="scss" scoped>
nav {
  padding: 20px 0;
}
</style>
