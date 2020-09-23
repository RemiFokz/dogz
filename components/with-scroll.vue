<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    inView: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  },
  methods: {
    load() {
      let btm =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (btm && this.inView <= this.count) {
        this.$emit("needLoad");
      }
    }
  },
  beforeMount() {
    document.addEventListener("scroll", this.load);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.load);
  }
};
</script>
