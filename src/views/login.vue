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
    login: true,
    user: {

    },
    polling: null
    }
  },
  mounted(){
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://apis.google.com/js/platform.js')
      document.head.appendChild(recaptchaScript)
      
      this.polling = setInterval(() => {
      if(window.user != ""){
        this.user = window.user;
        this.$router.push("/list");
      }
  }, 1000)

  },

  beforeDestroy() {
    clearInterval(this.polling);
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