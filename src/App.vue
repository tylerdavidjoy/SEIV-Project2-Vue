<template>
  <div id="app">
    <meta name="google-signin-client_id" content="761915308223-ua9pjnk2765b2qd88dda10htmhlu64js.apps.googleusercontent.com">
    <div id="nav" class="nav">
      <button v-if="$route.name != 'Login'" v-on:click="signOut()" class="btn btn-dark btn-lg" style="margin-left: 90%;" >Log Out</button>
    </div>
    <router-view />
  </div>
</template>

<script src="https://apis.google.com/js/platform.js" async defer></script>

<script>
export default {
      methods: {
      signOut: function() {
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
