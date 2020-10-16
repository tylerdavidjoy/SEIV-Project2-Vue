<template>
    <div class="vue-tempalte">

        <form>
          <div class ="center">
            <tbody>
              <tr>
                <td><label>Email address</label></td>
                <td>        
                  <input type="email" class="form-control form-control-lg" />
                </td>
              </tr>
            </tbody>
          </div>
            <button type="submit" class="btn btn-dark btn-lg " style="width:20%; margin-bottom:2%">Submit</button>

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
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
label {
  margin-right:2%;
}

.center
{
  margin-top:5%;
  margin-left:15%;
  margin-bottom: 5%;
}

</style>