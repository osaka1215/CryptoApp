<template>
  <div>
    <h2 class="title">通貨一覧</h2>
    <table id="elements" class="table">
      <tr v-for="(data, index) in names" :key="index">
        <th @click="transition()">{{ data.name }}</th>
        <td>最終取引価格:¥{{ data.price }}</td>
      </tr>
    </table>
    <br />
    <button class="button" @click="logOut">ログアウト</button>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  methods: {
    transition() {
      let elements = document.getElementById("elements");
      let elements_th = elements.getElementsByTagName("th");
      let elements_length = elements_th.length;

      for (let i = 0; i < elements_length; i++) {
        elements_th[i].onclick = function () {
          router.push({
            name: "Detail",
            params: { coin: this.innerHTML },
          });
        };
      }
    },
    logOut() {
      this.$store.dispatch("logOut");
    },
  },
  data() {
    return {
      names: [
        { name: "", price: "" },
        { name: "", price: "" },
        { name: "", price: "" },
        { name: "", price: "" },
        { name: "", price: "" },
        { name: "", price: "" },
        { name: "", price: "" },
        { name: "", price: "" },
        { name: "", price: "" },
        { name: "", price: "" },
        { name: "", price: "" },
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
          this.names[i].price = response.data.data[i].last;
        }
      })
      .catch((error) => {
        console.log(error);
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