<template>
  <div id="app">
    <h1>ビットコイン 価格</h1>
    <ul>
      <li v-for="currency in info" :key="currency.code">
        {{ currency.code }} : {{ currency.rate_float | currencydecimal }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
    };
  },
  async mounted() {
    const response = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    this.info = response.data.bpi;
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
};
</script>
