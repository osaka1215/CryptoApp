<template>
  <div class="outer">
    <h2 class="title">会員登録</h2>
    <input
      type="email"
      class="input"
      placeholder="Eメールアドレス"
      v-model="email"
    />
    <input
      type="password"
      class="input"
      placeholder="パスワード"
      v-model="password"
    />
    <button class="button" @click="register">アカウント作成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        email: this.email,
        password: this.password,
      });
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
.title {
  margin: 5% 0;
  font-size: 30px;
  font-weight: bold;
}
.input {
  width: 400px;
  height: 50px;
  margin: 50px auto;
  border: solid 3px #c4c4c4;
  border-radius: 10px;
  display: block;
  text-align: center;
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