<template>
  <div>
    <h2 class="title">通貨一覧</h2>
    <table class="table">
      <tr v-for="(data, index) in names" :key="index">
        <th @click="transition()">銘柄名:{{ data.name }}</th>
        <td>現在の価格：</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    transition() {
      this.$router.push({ name: "Detail" });
    },
  },
  data() {
    return {
      names: [
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" },
      ],
    };
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    },
  },
  created() {
    this.$axios
      .get("/public/v1/ticker", {
        headers: {
          Authorization: `Bearer ${this.idToken}`,
        },
      })
      .then((response) => {
        for (let i = 0; i < this.names.length; i++) {
          this.names[i].name = response.data.data[i].symbol;
        }
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
}
.table th {
  cursor: pointer;
}
.table th,
td {
  border-bottom: solid 3px #017fe5;
}
</style>