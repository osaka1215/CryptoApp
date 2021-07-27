<template>
  <div>
    <h2 class="title">{{ this.name }}の詳細</h2>
    <p>{{ coin }}</p>
    <table class="table">
      <tr>
        <th>売り注文の最良気配値</th>
        <td>{{ this.ask }}円</td>
      </tr>
      <tr>
        <th>買い注文の最良気配値</th>
        <td>{{ this.bid }}円</td>
      </tr>
      <tr>
        <th>最高気配値</th>
        <td>{{ this.high }}円</td>
      </tr>
      <tr>
        <th>最低気配値</th>
        <td>{{ this.low }}円</td>
      </tr>
      <tr>
        <th>最終取引価格</th>
        <td>{{ this.last }}円</td>
      </tr>
      <tr>
        <th>約定日時</th>
        <td>{{ this.timestamp }}</td>
      </tr>
    </table>
    <button class="button" @click="transition">通貨一覧へ戻る</button>
  </div>
</template>
<script>
export default {
  props: ["coin"],
  methods: {
    transition() {
      this.$router.push({ name: "List" });
    },
  },
  data() {
    return {
      name: "",
      ask: "",
      bid: "",
      high: "",
      low: "",
      last: "",
      timestamp: "",
    };
  },
  created() {
    this.$axios
      .get("/public/v1/ticker?symbol=${this.coin}")
      .then((response) => {
        console.log(response);
        this.name = response.data.data[0].symbol;
        this.ask = response.data.data[0].ask;
        this.bid = response.data.data[0].bid;
        this.high = response.data.data[0].high;
        this.low = response.data.data[0].low;
        this.last = response.data.data[0].last;
        this.timestamp = response.data.data[0].timestamp;
      });
  },
};
</script>

<style scoped>
.title {
  margin: 5% 0;
  font-size: 30px;
  font-weight: bold;
}
.table {
  width: 70%;
  margin: 0 auto;
  margin-bottom: 100px;
}
.table {
  width: 750px;
}
.table th,
td {
  border-bottom: solid 3px #017fe5;
  text-align: left;
}
.table tr {
  margin-bottom: 20px;
}
.button {
  font-size: 20px;
  width: 250px;
  height: 50px;
  color: #fff;
  background-color: #017fe5;
  border: solid 0px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
}
</style>