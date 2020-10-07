<template>
    <div class="vue-tempalte">

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

            <div class="social-icons">
                <ul>
                    <button style="width:10%; margin-bottom:2%; margin-top:2%; color:#00D0DD"><i class="fa fa-google" ></i></button>
                </ul>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              username:null ,
              password:null
            }
        },
        methods: {
          login: function() {
            this.$router.push("/list");
        }
      }
    }
</script>


<style scoped>

.forgot-password,
.forgot-password a {
  text-align: center;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}

.forgot-password a {
  color: #2554FF;
}

.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}

.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}

.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
}

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
  margin-top:5%;
  margin-left:30%;
  margin-bottom: 5%;
}

</style>