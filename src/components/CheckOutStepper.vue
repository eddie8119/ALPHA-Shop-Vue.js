<template>
  <div class="shipping-step-container">
    <div
      :class="[
        'shipping-step step-one',
        { active: currentPage === 1 },
        { checked: currentPage !== 1 },
      ]"
    >
      <div class="step-circle-container"></div>
      <div class="step-lebal-container">寄送地址</div>
    </div>
    <span class="connect-line"></span>
    <div
      class="shipping-step step-two"
      :class="[{ active: currentPage === 2 }, { checked: currentPage === 3 }]"
    >
      <div class="step-circle-container"></div>
      <div class="step-lebal-container">運送方式</div>
    </div>
    <span class="connect-line"></span>
    <div
      class="shipping-step step-three"
      :class="{ active: currentPage === 3 }"
    >
      <div class="step-circle-container"></div>
      <div class="step-lebal-container">付款資訊</div>
    </div>
  </div>
</template>

<!-- <template>
  <div class="shipping-step-container">
    <div
      v-for="stepInfo in stepsInfo"
      :key="stepInfo.id"
      class="shipping-step"
      :class="[{ active: currentPage === stepInfo.stepNumber }]"
    >
      <div class="step-circle-container"></div>
      <div class="step-lebal-container">{{ stepInfo.stepLebal }}</div>
      <span class="connect-line"></span>
    </div>
  </div>
</template> -->

<script>
export default {
  name: "CheckOutStepper",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalSteps: {
      type: Array,
      required: true,
    },
    stepsInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>
