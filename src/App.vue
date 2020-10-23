<template>
  <div id="app">
    <meta name="google-signin-client_id" content="761915308223-ua9pjnk2765b2qd88dda10htmhlu64js.apps.googleusercontent.com">
    <div id="nav" class="nav">
      <span><button v-if="$route.name != 'Login'" v-on:click="goHome()" class="btn btn-dark btn-lg" style="margin-left: 1600%; display: inline-block" >Home</button></span>
      <span><button v-if="$route.name != 'Login'" v-on:click="signOut()" class="btn btn-dark btn-lg" style="margin-left: 1150%; width:100%; display: inline-block" >Log Out</button></span>
      <span><button v-if="$route.name != 'Login'" v-on:click="userPage()" class="btn btn-dark btn-lg" style="margin-left: -200%; width:100%; display: inline-block" >user</button></span>
    </div>
    <router-view />
  </div>
</template>

<script src="https://apis.google.com/js/platform.js" async defer></script>

<script>
export default {
      methods: {
      signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
            });
        
        if(process.env.NODE_ENV === 'development'){
          window.location.href = 'http://localhost:8080/';
        }
        else
        {
          window.location.href = 'http://team2.eaglesoftwareteam.com/';
        }
      },
      goHome() {
        this.$router.push("/list");
      },
      userPage(){
        this.$router.push("/profile");
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #00D0DD;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
