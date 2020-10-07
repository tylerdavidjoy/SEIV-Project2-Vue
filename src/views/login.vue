<template>
  <div class="vue-tempalte">
    <h1 v-if="this.login == true" style="font-size:60px">
      Log-in
    </h1>

    <h1 v-else style="font-size:60px">
      Forgot Password
    </h1>

    <div class="login">
      <div v-if="this.login == true">
        <Signin />
      </div>
      <div v-else>
        <ForgotPass />
      </div>
    </div>
  </div>
</template>

<script>
import Signin from "@/components/Signin.vue";
import ForgotPass from "@/components/ForgotPass.vue";
export default {
  name: "Login",
  components: {
    Signin,
    ForgotPass
  },
  data() {
    return {
    login: true
    }
  }
};
</script>

<style>
.login
{
  margin: auto;
  width: 40%;
  background-color: #C0C0C0;
  border: 6px solid #00D0DD;
}
label{
  margin-right:2%;
}
</style>