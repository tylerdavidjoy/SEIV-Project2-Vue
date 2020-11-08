<template>
  <div>
    <h1 style="font-size:60px">
      {{ $route.params.name }}'s Profile
    </h1>

    <table class = "list">
      <tbody >
         <tr>
           <td><label>Name:</label></td>
           <td>        
             <input type="text" v-model="$route.params.student.stu_name" placeholder="Name"/>
            </td>
        </tr>

        <tr>
           <td><label>ID Number:</label></td>
            <td>         
              <input type="text" v-model="$route.params.student.stu_id" placeholder="ID Number"/>
            </td>
        </tr>

        <tr>
          <td><label>Advisor:</label></td>
          <td>        
            <input type="text" v-model="$route.params.student.adv_id" placeholder="Advisor" />
          </td>
        </tr>

        <tr>
          <td><label>GPA:</label></td>
          <td>        
            <input type="text" v-model="$route.params.student.stu_gpa" placeholder="GPA" />
          </td>
        </tr>

        <tr>
          <td><label>Classification:</label></td>
          <td>        
            <input type="text" v-model="$route.params.student.stu_classification" placeholder="Classification" />
          </td>
        </tr>

        <tr>
          <td><label>Graduation Date:</label></td>
          <td>        
            <input type="text" v-model="$route.params.student.stu_grad_date" placeholder="Graduation Date" />
          </td>
        </tr>

        <tr>
          <td><label>Major:</label></td>
          <td>        
            <input type="text" v-model="$route.params.student.major_id" placeholder="Major" />
          </td>
        </tr>

        <tr>
          <td><label>Hours Taken:</label></td>
          <td>        
            <input type="text" v-model="$route.params.student.stu_hrs_taken" placeholder="Hours Taken" />
          </td>
        </tr>

        <tr>
          <td><label>Hours Left:</label></td>
          <td>        
            <input type="text" v-model="$route.params.student.stu_hrs_not_taken" placeholder="Hours Taken" />
          </td>
        </tr>

      </tbody>
    </table>

    <div>
        <button v-on:click="planPage()">{{$route.params.name }}'s Plan</button>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      student: {
        Student_Name: "",
        Student_ID: "",
        Student_Advisor: "",
        Student_Hours_Taken: "",
        Student_GPA: "",
        Student_Classification: "",
        Student_Hours_To_Graduate: "",
        Student_Major: "",
      }
    };
  },
  methods: {
      planPage(){
            this.$router.push({name: 'Plan'})
          },
  },
}; 
</script>

<style>
 label {
  margin:auto;
  padding:10px;
}

input {
  margin:5px;
  padding:10px;
}

.list {
  margin-left:auto;
  margin-right:auto;
  margin-bottom: 10px;
  width: 35%;
  border: 6px solid #00D0DD;
  padding: 10px;
  background-color: #C0C0C0;
  text-align: center;
}

tbody {
  margin-left: auto;
  margin-right: auto;
}

button {
  background-color: #00D0DD;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin:5px;
}

</style>