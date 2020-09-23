export const state = () => ({
  allBreeds: [],
  byBreed: [],
  favorites: [],
  random: []
});
export const getters = {
  byBreedDogs(state) {
    return state.byBreed.map(el => {
      return {
        img: el,
        favorite: state.favorites.includes(el)
      };
    });
  },
  randomDogs(state) {
    return state.random.map(el => {
      return {
        img: el,
        favorite: state.favorites.includes(el)
      };
    });
  },
  favoritesDogs(state) {
    return state.favorites.map(el => {
      return {
        img: el,
        favorite: true
      };
    });
  }
};

export const mutations = {
  SET_ALL_BREEDS(state, breads) {
    state.allBreeds = [...new Set(Object.keys(breads))];
  },
  SET_BY_BREED(state, images) {
    state.byBreed = images;
  },
  SET_RANDOM(state, images) {
    state.random = images;
  },
  ADD_TO_FAVORITE(state, item) {
    state.favorites.push(item);
  },
  REMOVE_FROM_FAVORITE(state, item) {
    state.favorites = state.favorites.filter(x => x !== item);
  }
};
export const actions = {
  async api_getAllBreeds({ commit }) {
    try {
      const response = await this.$axios.get("breeds/list/all");
      commit("SET_ALL_BREEDS", response.data.message);
    } catch (error) {
      throw error;
    }
  },
  async api_getByBreed({ commit }, breed) {
    try {
      const response = await this.$axios.get(`breed/${breed}/images`);
      commit("SET_BY_BREED", response.data.message);
    } catch (error) {
      throw error;
    }
  },
  async api_getRandom({ commit }, num = 20) {
    try {
      const response = await this.$axios.get(`breeds/image/random/${num}`);
      commit("SET_RANDOM", response.data.message);
    } catch (error) {
      throw error;
    }
  }
};
