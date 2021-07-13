<template>
  <div id="app">
    <h2>api</h2>
  </div>
</template>
<script>
export default {
  created() {
    this.$axios
      .get("/public/v1/ticker")
      .then((response) => console.log(response));
  },
};
</script>