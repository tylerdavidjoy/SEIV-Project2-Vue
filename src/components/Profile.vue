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
             <input type="text" v-model="student.stu_name" placeholder="ex. Billy Bob"/>
            </td>
        </tr>

        <tr>
           <td><label>ID Number:</label></td>
            <td>         
              <input type="text" v-model="student.stu_id" placeholder="ex. 1234567" disabled/>
            </td>
        </tr>

        <tr>
          <td><label>Advisor:</label></td>
          <td>        
            <input type="text" v-model="advisor.advisor_name" placeholder="ex. Don Leftwich" disabled/>
          </td>
        </tr>

        <tr>
          <td><label>GPA:</label></td>
          <td>        
            <input type="text" v-model="student.stu_gpa" placeholder="ex. 3.89" disabled/>
          </td>
        </tr>

        <tr>
          <td><label>Classification:</label></td>
          <td>        
            <input type="text" v-model="student.stu_classification" placeholder="ex. Senior" disabled/>
          </td>
        </tr>

        <tr>
          <td><label>Graduation Date:</label></td>
          <td>        
            <input type="text" v-model="student.stu_grad_date" placeholder="yyyy-mm-dd hh:mm:ss" />
          </td>
        </tr>

        <tr>
          <td><label>Major:</label></td>
          <td>        
            <input type="text" v-model="major.major_name" placeholder="ex. Computer Science" disabled/>
          </td>
        </tr>

        <tr>
          <td><label>Hours Taken:</label></td>
          <td>        
            <input type="text" v-model="student.stu_hrs_taken" placeholder="ex. 120" disabled/>
          </td>
        </tr>

        <tr>
          <td><label>Hours Left:</label></td>
          <td>        
            <input type="text" v-model="student.stu_hrs_not_taken" placeholder="ex. 120" disabled/>
          </td>
        </tr>

      </tbody>
    </table>
    <div>
        <button v-on:click="cSave()">Save</button>
        <button v-on:click="backToList()">Cancel</button>
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
      advisor: [],
    };
  },
  methods: {
      planPage(){
            this.$router.push({name: 'Plan'})
          },
      cSave: function() {
      // Save the course
        axios
          .put(
            "http://team2.eaglesoftwareteam.com/student?=stuid" +
              this.$route.params.student_id,
            {
              stu_id: Number(this.student.stu_id),
              major_id: Number(this.student.major_id),
              plan_id: Number(this.student.plan_id),
              adv_id: Number(this.student.adv_id),
              stu_gpa: Number(this.student.stu_gpa),
              stu_name: this.student.stu_name,
              stu_hrs_taken: Number(this.student.stu_hrs_taken),
              stu_grad_date: this.student.stu_grad_date,
              stu_hrs_not_taken: Number(this.student.stu_hrs_not_taken),
              stu_classification: this.student.stu_classification,
            }
          )
          .then(() => {
            this.backToList();
          })
          .catch((error) => {
            console.log("ERROR: " + error.response);
            // Display  on page and ddon't change page
          });
      // Go back to select page
      this.backToList();
    },
    backToList: function(){
      this.$router.push({name: 'StudentList'})
    }
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
    }),
    axios
    .get(`http://team2.eaglesoftwareteam.com/advisor?advid=${this.student.advisor_id}`)
    .then(response => {
      console.log(response.data)
      this.advisor = response.data;
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