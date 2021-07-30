<template>
  <div class="outer">
    <h2 class="title">ログイン</h2>
    <Validation-observer ref="obs" v-slot="ObserverProps">
      <ValidationProvider rules="required|email">
        <div slot-scope="ProviderProps">
          <input
            type="email"
            name="Eメールアドレス"
            class="input"
            placeholder="Eメールアドレス"
            v-model="email"
          />
          <p>{{ ProviderProps.errors[0] }}</p>
        </div>
      </ValidationProvider>
      <ValidationProvider rules="required|min:8">
        <div slot-scope="ProviderProps">
          <input
            type="password"
            name="パスワード"
            class="input"
            placeholder="パスワード"
            v-model="password"
          />
          <p>{{ ProviderProps.errors[0] }}</p>
        </div>
      </ValidationProvider>
      <button
        class="button"
        @click="login()"
        :disabled="ObserverProps.invalid || !ObserverProps.validated"
      >
        ログイン
      </button>
    </Validation-observer>
  </div>
</template>

<script>
import { extend, ValidationProvider, ValidationObserver } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "{_field_}は必須です",
});
extend("email", {
  ...email,
  message: "{_field_}が正しく入力されていません",
});
extend("min", {
  ...min,
  message: "{_field_}は8字以上です",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
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