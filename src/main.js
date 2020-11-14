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

//      userData = {user_id:userID,role_type:role, role_id: roleID, plan_id:planID};
  
  getUser(profile,profile.getEmail()); //Ask backend for user data UNCOMMENT WHEN BACKEND IS FIXED

};

getUser.use;

function getUser(profile,email) {
  axios
  .get("http://team2.eaglesoftwareteam.com/user?email=" + email)
  .then(response => {
    console.log(response.data)    
    var userID = response.data.user_id;
    var role = response.data.user_role;
    console.log(role);
    getRoleID(profile,userID,role);
  })
  .catch(error => {
    console.log("ERROR: " + error.response)
    createUser(email);
  })
};

function createUser(profile,email){
  var payload = {user_role:"student", user_email:email};
  axios
    .post("http://team2.eaglesoftwareteam.com/user", payload)
    .then(response => {
      console.log(response.data)
      var userID = response.data.user_id;
      var role = "student";
      getRoleID(profile,userID,role);
  })
  .catch(error => {
    console.log("ERROR: " + error.response)
  })
};

function getRoleID(profile,userID,role){
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
        getPlan(profile,userID,role,roleID);
      }
      
      else {
        roleID = response.data.advisor_id;
        setGlobalUser(profile,userID,role,roleID,"");
      }
  })
  .catch(error => {
    console.log("ERROR: " + error.response)
  })
};

function getPlan(profile,userID,role,roleID)
{
  var planID = "";
  planID.use;
  axios
    .get("http://team2.eaglesoftwareteam.com/plan?stuid=" + roleID)
    .then(response => {
      console.log(response.data)
      planID = response.data.plan_id;
      setGlobalUser(profile,userID,role,roleID,planID);
  })
  .catch(error => {
    console.log("ERROR: " + error.response)
  })
};


function setGlobalUser(profile,userID,role,roleID,planID){
  window.user = {
    id: profile.getId(),
    name: profile.getName(),
    imgUrl: profile.getImageUrl(),
    email: profile.getEmail(),
    userID: userID,
    role_type: role,
    role_id: roleID,
    plan_id: planID
  }; 
  
  console.log(window.user);
}