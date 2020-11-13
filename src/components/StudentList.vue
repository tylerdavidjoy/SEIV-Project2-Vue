<template>
  <div class="main">
    <h1 style="font-size:60px">Students</h1>

    <div v-for="(data,index) in display" :key='index'>
      <button class="list" v-on:click="view(student)">
        <tbody>
          <tr> 
            <td class="list-content-small">Name: {{student.stu_name}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">ID Number: {{student.stu_id}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">Classification: {{student.stu_classification}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">Major: {{ student.stu_major }}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">GPA: {{student.stu_gpa}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">Graduation Date: {{student.stu_grad_date}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">Advisor: {{student.stu_adv}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">Hours fulfilled: {{student.stu_hrs_taken}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">Hours left: {{student.stu_hrs_not_taken}}</td>
          </tr>
        </tbody>
      </button>
    </div>
    <button v-on:click="changePage('previous')" style="width:7%; height: 36px; margin:10px;">Previous</button>
    <button v-on:click="changePage('next')" style="width:7%; height: 36px; margin:10px;">Next</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Students",
  data() {
    return {
        studentTable: [],
        majorTable: [],
        advisorTable: [],
        students: [],
        page: 1,
        numPerPage:10,
        hover: false,
        search: "",
        selected: ""
      }
    },
    methods: {
        view: function(data){
            this.$router.push({name: 'Profile', params: {student_id:data.stu_id}})
          },
        buildStudents: function(){
            this.studentTable.forEach((student) => {
              this.students.push({
                stu_name: student.stu_name,
                stu_id: student.stu_id,
                stu_classification: student.stu_classification,
                stu_major: this.majorTable[student.major_id],
                stu_gpa: student.stu_gpa,
                stu_grad_date: student.stu_grad_date,
                stu_adv: this.advisorTable[student.advisor_id],
                stu_hrs_taken: student.stu_hrs_taken,
                stu_hrs_not_taken: student.stu_hrs_not_taken
              })
            })
        },
        updateDisplay: function () {
          this.display = [];
          console.log("Update");
          if(this.students.length == 0){
            console.log("No students");
            return;
          }

          for(var i = ((this.page - 1) * this.numPerPage); i < (this.page * this.numPerPage); i++){
            this.display.push(this.students[i]);
          }
          console.log(this.display);
        },
        changePage: function(direction){
          if(direction == "next"){
            if(this.page+1 * this.numPerPage < this.students.length)
            this.page++;
          }

          if(direction == "previous"){
            if(this.page > 1){
              this.page--;
            }
          }

          this.updateDisplay();
        },
    },
    created() {
    axios
    .get("http://team2.eaglesoftwareteam.com/student")
    .then(response => {
      console.log(response.data)
      this.studentTable = response.data;
    })
    .catch(error => {
      console.log("ERROR: " + error.response)
    }),
    axios
    .get("http://team2.eaglesoftwareteam.com/major")
    .then(response => {
      console.log(response.data)

      response.data.forEach((data) => {
        this.majorTable[data.major_id] = data.major_name;
      })
    })
    .catch(error => {
      console.log("ERROR: " + error.response)
    }),
    axios
    .get("http://team2.eaglesoftwareteam.com/advisor")
    .then(response => {
      console.log(response.data)
      response.data.forEach((data => {
        this.advisorTable[data.advisor_id] = data.advisor_name;

        this.buildStudents();
        this.updateDisplay();
      }))
    })
    .catch(error => {
      console.log("ERROR: " + error.response)
    })
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.list {
  margin-left:auto;
  margin-right:auto;
  margin-bottom: 10px;
  width: 45%;
  border: 6px solid #00D0DD;
  padding: 10px;
  background-color: #C0C0C0;
  text-align: left;
}

.main {
  background-color: #E5E5E5;
  }

.list-content-large{
  color: black;
  font-size: 20px;
  }

  .list-content-small{
  color: black;
  font-size: 16px;
  margin-left:30%;
  }

  .list-content-description{
  border: 2px solid black;
  background-color: white;  
  color: black;
  font-size: 15px;
  width:80%;
  margin-right:10px;
  }

  .listHighlight{
    background-color: #9E9E9E;
    }

  button {
  background-color: #00D0DD;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  padding: 0px 0px;
}

select {
  background-color: #00D0DD;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
input, label{
  padding: 0px;
}
</style>
