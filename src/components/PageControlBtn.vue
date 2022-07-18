<template>
  <div class="page-control-btn">
    <div class="page-btn-container">
      <button
        :class="['page-btn page-before', { 'd-none': currentPage !== 1 }]"
      ></button>
      <button
        :class="['page-btn page-before', { 'd-none': currentPage === 1 }]"
        @click.stop.prevent="handelPagePreClick"
      >
        &larr;上一步
      </button>
      <button
        class="page-btn page-next"
        v-if="currentPage < 3"
        @click.stop.prevent="handelPageNextClick"
      >
        下一步&rarr;
      </button>
      <button class="page-btn page-next" v-else>確認下單</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageControlBtn",
  props: {
    currentPage: {
      type: Number,
      require: true,
    },
  },
  methods: {
    handelPagePreClick() {
      this.$emit("after-pagePre-btn", this.currentPage);
    },
    handelPageNextClick() {
      this.$emit("after-pageNext-btn", this.currentPage);
    },
  },
};
</script>
