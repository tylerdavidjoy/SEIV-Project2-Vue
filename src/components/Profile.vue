<template>
  <div>
    <h1 style="font-size:60px">
      {{ student.stu_name }}'s Profile
    </h1>

    <table class = "list">
      <tbody >
         <tr>
           <td><label>Name:</label></td>
           <td>        
             <input type="text" v-model="student.stu_name" placeholder="Name"/>
            </td>
        </tr>

        <tr>
           <td><label>ID Number:</label></td>
            <td>         
              <input type="text" v-model="student.stu_id" placeholder="ID Number"/>
            </td>
        </tr>

        <tr>
          <td><label>Advisor:</label></td>
          <td>        
            <input type="text" v-model="student.adv_id" placeholder="Advisor" />
          </td>
        </tr>

        <tr>
          <td><label>GPA:</label></td>
          <td>        
            <input type="text" v-model="student.stu_gpa" placeholder="GPA" />
          </td>
        </tr>

        <tr>
          <td><label>Classification:</label></td>
          <td>        
            <input type="text" v-model="student.stu_classification" placeholder="Classification" />
          </td>
        </tr>

        <tr>
          <td><label>Graduation Date:</label></td>
          <td>        
            <input type="text" v-model="student.stu_grad_date" placeholder="Graduation Date" />
          </td>
        </tr>

        <tr>
          <td><label>Major:</label></td>
          <td>        
            <input type="text" v-model="major.major_name" placeholder="Major" />
          </td>
        </tr>

        <tr>
          <td><label>Hours Taken:</label></td>
          <td>        
            <input type="text" v-model="student.stu_hrs_taken" placeholder="Hours Taken" />
          </td>
        </tr>

        <tr>
          <td><label>Hours Left:</label></td>
          <td>        
            <input type="text" v-model="student.stu_hrs_not_taken" placeholder="Hours Taken" />
          </td>
        </tr>

      </tbody>
    </table>

    <div>
        <button v-on:click="planPage()">{{ student.stu_name }}'s Plan</button>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      student: [],
      major: [],
    };
  },
  methods: {
      planPage(){
            this.$router.push({name: 'Plan'})
          },
  },
  created() {
    axios
    .get(`http://team2.eaglesoftwareteam.com/student?stuid=${this.$route.params.student_id}`)
    .then(response => {
      console.log(response.data)
      this.student = response.data;
    })
    .catch(error => {
      console.log("ERROR: " + error.response)
    }),
    axios
    .get(`http://team2.eaglesoftwareteam.com/major?id=${this.student.major_id}`)
    .then(response => {
      console.log(response.data)
      this.major = response.data;
    })
    .catch(error => {
      console.log("ERROR: " + error.response)
    })
  }
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