<template>
  <div class="main-app">
    <main class="main-panel">
      <h2 class="payment-title">結帳</h2>
      <div class="main-container">
        <div class="left-main-side">
          <CheckOutStepper
            :currentPage="currentPage"
            :totalSteps="totalSteps"
            :stepsInfo="stepsInfo"
          />
          <CheckOutForm
            :currentPage="currentPage"
            @after-formData-update="formDataUpdate"
          />
        </div>
        <div class="right-main-side">
          <CheckOutCart :deliveryFee="formData.deliveryFee" />
        </div>
      </div>
      <PageControlBtn
        :currentPage="currentPage"
        @after-pagePre-btn="afterPagePreBtn"
        @after-pageNext-btn="afterPageNextBtn"
      />
    </main>
  </div>
</template>

<script>
import CheckOutStepper from "../components/CheckOutStepper.vue";
import CheckOutForm from "../components/CheckOutForm.vue";
import CheckOutCart from "../components/CheckOutCart.vue";
import PageControlBtn from "../components/PageControlBtn.vue";
import { v4 as uuidv4 } from "uuid";

const dummyData = {
  currentPage: 1,
  totalSteps: [1, 2, 3],
  stepsInfo: [
    { id: uuidv4(), stepNumber: 1, stepLebal: "寄送地址" },
    { id: uuidv4(), stepNumber: 2, stepLebal: "運送方式" },
    { id: uuidv4(), stepNumber: 3, stepLebal: "付款資訊" },
  ],
  formData: {
    gender: "",
    name: "",
    phone: "",
    email: "",
    country: "",
    address: "",
    deliveryFee: 0,
    cardOwner: "",
    cardNumber: "",
    validDate: "",
    cardCcv: "",
  },
};
export default {
  name: "CheckOut",
  components: {
    CheckOutStepper,
    CheckOutForm,
    CheckOutCart,
    PageControlBtn,
  },

  data() {
    return {
      currentPage: 1,
      totalSteps: [],
      stepsInfo: [],
      formData: {
        gender: "",
        name: "",
        phone: "",
        email: "",
        country: "",
        address: "",
        deliveryFee: 0,
        cardOwner: "",
        cardNumber: "",
        validDate: "",
        cardCcv: "",
      },
    };
  },
  created() {
    this.fretchData();
  },
  methods: {
    fretchData() {
      const { currentPage, totalSteps, stepsInfo, formData } = dummyData;
      const {
        gender,
        name,
        phone,
        email,
        country,
        address,
        deliveryFee,
        cardOwner,
        cardNumber,
        validDate,
        cardCcv,
      } = formData;
      this.currentPage = currentPage;
      this.totalSteps = totalSteps;
      this.stepsInfo = stepsInfo;
      this.formData = {
        gender,
        name,
        phone,
        email,
        country,
        address,
        deliveryFee,
        cardOwner,
        cardNumber,
        validDate,
        cardCcv,
      };
    },

    afterPagePreBtn(currentPage) {
      if (this.currentPage === 1) {
        return;
      } else {
        this.currentPage = currentPage - 1;
        console.log(this.currentPage);
      }
    },
    afterPageNextBtn(currentPage) {
      if (this.currentPage < 3) {
        this.currentPage = currentPage + 1;
        console.log(this.currentPage);
      } else {
        return;
      }
    },
    formDataUpdate(formDataUpdate) {
      this.formData = {
        ...this.formData,
        ...formDataUpdate,
      };
    },
  },
};
</script>
