<template>
  <div class="order-panel">
    <h4 class="mission-title">購物籃</h4>
    <div class="products-list">
      <div
        class="product-item-container"
        v-for="product in products"
        :key="product.id"
      >
        <img class="product-img" :src="product.imgurl" alt="" />
        <div class="product-calculate-panel">
          <span class="product-item-title">{{ product.title }}</span>
          <div class="calculate-container">
            <button
              class="number-button remove-num-btn"
              @click.stop.prevent="removeQuantity(product)"
            >
              -
            </button>
            <span class="product_amount_total">{{ product.quantity }}</span>
            <button
              class="number-button add-num-btn"
              @click.stop.prevent="addQuantity(product)"
            >
              +
            </button>
          </div>
          <span class="product-item-price">{{
            product.quantity * product.price
          }}</span>
        </div>
      </div>
    </div>
    <div class="shipping-fee-container">
      <span>運費</span>
      <span class="shipping-free">{{ deliveryFee | deliveryFeeShow }}</span>
    </div>
    <div class="total-fee-container">
      <span>小計</span>
      <span class="total-fee">{{ checkTotalCost }}</span>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
const dummyData = {
  products: [
    {
      id: uuidv4(),
      title: "破壞補丁修身牛仔褲",
      price: 3999,
      imgurl: "https://upload.cc/i1/2022/03/25/n5MSYs.png",
      quantity: 0,
    },
    {
      id: uuidv4(),
      title: "刷色直筒牛仔褲",
      price: 1299,
      imgurl: "https://upload.cc/i1/2022/03/25/tV6EMq.png",
      quantity: 0,
    },
  ],
};

export default {
  props: {
    deliveryFee: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      products: [],
      totalCost: 0,
    };
  },
  created() {
    this.fretchProduct();
  },
  methods: {
    fretchProduct() {
      this.products = dummyData.products;
    },

    addQuantity(product) {
      product.quantity++;
      this.totalCost += product.price;
    },
    removeQuantity(product) {
      if (product.quantity === 0) return;
      else {
        product.quantity--;
        this.totalCost -= product.price;
      }
    },
  },
  computed: {
    checkTotalCost() {
      return this.totalCost + Number(this.deliveryFee);
    },
  },
  filters: {
    deliveryFeeShow(n) {
      return Number(n) === 0 ? "免費" : "500";
    },
  },
};
</script>
