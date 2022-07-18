<template>
  <div class="form-content">
    <form id="a-form" action="">
      <div class="part" :class="{ 'd-none': currentPage !== 1 }">
        <h2 class="mission-title">寄送地址</h2>
        <div class="form-container">
          <div class="form-row form-title">
            <label for="">稱謂</label>
            <div class="select-wrapper">
              <select name="" id="customer-gender" required>
                <option value="Mr.">先生</option>
                <option value="Mrs.">小姐</option>
              </select>
            </div>
          </div>
          <div class="form-row form-name">
            <label for="">姓名</label>
            <input
              id="customer-name"
              class=""
              type="footer-index"
              placeholder="請輸入姓名"
              v-model="formData.name"
              required
            />
          </div>
          <div class="form-row form-phone">
            <label for="">電話</label>
            <input
              id="phone-number"
              class=""
              type="footer-index"
              placeholder="請輸入電話"
              v-model="formData.phone"
              required
            />
          </div>
          <div class="form-row form-Email">
            <label for="">Email</label>
            <input
              id="Email-address"
              class=""
              type="footer-index"
              placeholder="請輸入電子郵件"
              v-model="formData.email"
              required
            />
          </div>
          <div class="form-row form-country">
            <label for="">縣市</label>
            <div class="select-wrapper">
              <select name="" id="country" required>
                <option value="">請選擇縣市</option>
                <option value="台北市">台北市</option>
              </select>
            </div>
          </div>
          <div class="form-row form-address">
            <label for="">地址</label>
            <input
              id="costumer-address"
              type="footer-index"
              placeholder="請輸入地址"
              v-model="formData.country"
              required
            />
          </div>
        </div>
      </div>
      <div class="part" :class="{ 'd-none': currentPage !== 2 }">
        <h2 class="mission-title">運送方式</h2>

        <label
          for="normal"
          :class="[
            'shipment-choice-container normalShipping',
            { active: formData.deliveryFee === 0 },
          ]"
        >
          <input
            type="radio"
            name="shipping"
            id="normal"
            value="0"
            v-model="formData.deliveryFee"
          />
          <span>標準運送</span>
          <span>約3~7個工作天</span>
          <span>免費</span>
        </label>

        <label
          for="dhl"
          :class="[
            'shipment-choice-container DHLShipping',
            { active: formData.deliveryFee === 500 },
          ]"
        >
          <input
            type="radio"
            name="shipping"
            id="dhl"
            value="500"
            v-model="formData.deliveryFee"
          />
          <span>DHL貨運</span>
          <span>48小時內送達</span>
          <span>$500</span>
        </label>
      </div>
      <div class="part" :class="{ 'd-none': currentPage !== 3 }">
        <h2 class="mission-title">付款資訊</h2>
        <div class="form-container-b">
          <div class="form-row form-card-owner">
            <label for="">持卡人姓名</label>
            <input
              id="card-owner"
              type="footer-index"
              placeholder="王小明"
              v-model="formData.cardOwner"
              required
            />
          </div>
          <div class="form-row form-card-number">
            <label for="">卡號</label>
            <input
              id="card-number"
              type="footer-index"
              placeholder="1111 2222 3333 4444"
              v-model="formData.cardNumber"
              required
            />
          </div>
          <div class="form-row form-valid-date">
            <label for="">有效期限</label>
            <input
              id="valid-date"
              type="footer-index"
              placeholder="MM/YY"
              v-model="formData.validDate"
              required
            />
          </div>
          <div class="form-row form-card-ccv">
            <label for="">CVC/CCV</label>
            <input
              id="card-ccv"
              type="footer-index"
              placeholder="123"
              v-model="formData.cardCcv"
              required
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CheckOutForm",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
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
  methods: {},

  watch: {
    formData: {
      handler: function (formDataUpdate) {
        this.$emit("after-formData-update", formDataUpdate);
      },
      deep: true,
    },
  },
};
</script>
