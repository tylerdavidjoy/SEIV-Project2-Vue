<template>
    <div class="vue-tempalte">
    <meta name="google-signin-client_id" content="761915308223-ua9pjnk2765b2qd88dda10htmhlu64js.apps.googleusercontent.com">
        <form>
          <div class = "center">
            <tbody>
              <tr>
                <td>        
                  <input type="email" class="form-control form-control-lg" placeholder="Email" />
                </td>
              </tr>

              <tr>
                <td>        
                  <input type="password" class="form-control form-control-lg" placeholder="Password" />
                </td>
              </tr>

            </tbody>
          </div>
            <button v-on:click="login()" class="btn btn-dark btn-lg " style="width:20%">Sign In</button>

            <!--<p class="forgot-password mt-2 mb-4">
                <button v-on:click="toggleLogin()" class="btn btn-dark " style="width:30%">Forgot password</button>
            </p>
            -->

          <div class="g-signin2" data-onsuccess="onSignIn" data-onfailure="failed" data-theme="dark" style="margin: 2% auto; width:200px"></div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        username:"" ,
        password:"",
        user: {
          id:"",
          name: "",
          imgURL: "",
          email: "",
          role: "",
          roleID:"",
          planID:""
        }
      }
    },
    methods: {
      login: function() {
        if(this.getUser()) //If I can get the user information
        {
          if(this.user.role == "student"){
            if(!this.getPlan()){
              return; //Exit if fails, do not redirect
            }
          }
          window.user = this.user; //Update the global user info
          this.$router.push("/list");
        }
      },
      getUser() {
        axios
        .get("http://team2.eaglesoftwareteam.com/user?user_email=" + this.user.email)
        .then(response => {
          console.log(response.data)
          this.user.roleID = response.data.user_id;
          this.user.role = response.data.user_role;
          return true;
      })
      .catch(error => {
        console.log("ERROR: " + error.response)
        return false;
      })
    },
    getRoleID(){
      var url = "";
      if(this.user.role == "student"){
        url = "http://team2.eaglesoftwareteam.com/student_user?user_id=" + this.user.id;
      }
      else{
        //url = "http://team2.eaglesoftwareteam.com/student_user?user_id=" + this.user.id;
      }
        axios
        .get(url)
        .then(response => {
          console.log(response.data)
          this.user.roleID = response.data.stu_id;
          return true;
      })
      .catch(error => {
        console.log("ERROR: " + error.response)
        return false;
      })
    },
    getPlan(){
      axios
        .get("http://team2.eaglesoftwareteam.com/plan?stu_id=" + this.user.roleID)
        .then(response => {
          console.log(response.data)
          this.user.planID = response.data.plan_id;
          return true;
      })
      .catch(error => {
        console.log("ERROR: " + error.response)
        return false;
      })
    }
    
    }
  };
</script>

<script>
window.onLoadCallback = function(){
  gapi.auth2.init({
      client_id: '761915308223-ua9pjnk2765b2qd88dda10htmhlu64js.apps.googleusercontent.com'
    });
}
</script>

<style scoped>
tbody {
  margin-left: auto;
  margin-right: auto;
  width:400%;
}

 tr {
  margin-left: auto;
  margin-right: auto;
  padding:10px;
}

.center
{
  margin: 5% auto;
  width: 300px;
}

#customBtn {
      display: inline-block;
      background: white;
      color: #444;
      width: 190px;
      border-radius: 5px;
      border: thin solid #888;
      box-shadow: 1px 1px 1px grey;
      white-space: nowrap;
}

#customBtn:hover {
  cursor: pointer;
}

span.label {
  font-family: serif;
  font-weight: normal;
}

span.icon {
  background-image: url('https://img-authors.flaticon.com/google.jpg');
  display: inline-block;
  vertical-align: middle;
  width: 42px;
  height: 42px;
}

span.buttonText {
  display: inline-block;
  vertical-align: middle;
  padding-left: 42px;
  padding-right: 42px;
  font-size: 14px;
  font-weight: bold;
  /* Use the Roboto font that is loaded in the <head> */
  font-family: 'Roboto', sans-serif;
}

</style>