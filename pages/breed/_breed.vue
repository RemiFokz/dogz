<template>
  <div>
    <WithScroll
      :perPage="perPage"
      :inView="inView"
      :count="byBreed.length"
      @needLoad="load"
    >
      <GridList :favorites="favorites" v-if="!loading" :items="byPage" />
    </WithScroll>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    perPage: 20,
    inView: 20,
    page: 1,
    loading: true
  }),
  methods: {
    ...mapActions({
      api_getByBreed: "api_getByBreed"
    }),
    ...mapMutations({
      ADD_TO_FAVORITE: "ADD_TO_FAVORITE",
      REMOVE_FROM_FAVORITE: "REMOVE_FROM_FAVORITE"
    }),
    load() {
      this.inView += this.perPage;
    }
  },
  created() {
    if (this.$route.params.breed) {
      this.api_getByBreed(this.$route.params.breed).finally(() => {
        this.loading = false;
      });
    }
  },
  computed: {
    ...mapState({
      byBreed: "byBreed",
      favorites: "favorites"
    }),
    byPage() {
      return [...this.byBreed].splice(0, this.inView * this.page);
    }
  }
};
</script>
