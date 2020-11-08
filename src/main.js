import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

Vue.config.productionTip = false;
var viewModel = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
viewModel.use;

window.onSignIn = function (googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());

//      userData = {user_id:userID,role_type:role, role_id: roleID, plan_id:planID};
  
var userdata = getUser(profile.getEmail()); //Ask backend for user data UNCOMMENT WHEN BACKEND IS FIXED

  window.user = {
    id: profile.getId(),
    name: profile.getName(),
    imgUrl: profile.getImageUrl(),
    email: profile.getEmail(),
    userID: userdata.user_id,
    role_type: userdata.role_type,
    role_id: userdata.role_id,
    plan_id: userdata.plan_id
  }; 



  console.log(window.user);
};

getUser.use;

function getUser(email) {
  axios
  .get("http://team2.eaglesoftwareteam.com/user?email=" + email)
  .then(response => {
    console.log(response.data)    
    var userID = response.data.user_id;
    var role = response.data.user_role;
    console.log(role);
    return getRoleID(userID,role);
  })
  .catch(error => {
    console.log("ERROR: " + error.response)
    return createUser(email);
  })
};

function createUser(email){
  var payload = {user_role:"student", user_email:email};
  axios
    .post("http://team2.eaglesoftwareteam.com/user", payload)
    .then(response => {
      console.log(response.data)
      var userID = response.data.user_id;
      var role = "student";
      return getRoleID(userID,role);
  })
  .catch(error => {
    console.log("ERROR: " + error.response)
  })
};

function getRoleID(userID,role){
  var url = "";
  var roleID ="";

  if(role == "student"){
    url = "http://team2.eaglesoftwareteam.com/student_user?userid=" + userID;
  }
  else{
    url = "http://team2.eaglesoftwareteam.com/advisor_user?userid=" + userID;
  }
    axios
    .get(url)
    .then(response => {
      console.log(response.data)
      if(role == "student")
      {
        roleID = response.data[0].stu_id;
        return getPlan(userID,role,roleID);
      }
      
      else {
        roleID = response.data.advisor_id;
        var userData = {user_id:userID,role_type:role, role_id: roleID, plan_id:""};
        return userData;
      }
  })
  .catch(error => {
    console.log("ERROR: " + error.response)
  })
};

function getPlan(userID,role,roleID)
{
  var planID = "";
  axios
    .get("http://team2.eaglesoftwareteam.com/plan?stuid=" + roleID)
    .then(response => {
      console.log(response.data)
      planID = response.data.plan_id;
      var userData = {user_id:userID,role_type:role, role_id: roleID, plan_id:planID};
      return userData;
  })
  .catch(error => {
    console.log("ERROR: " + error.response)
  })
};
