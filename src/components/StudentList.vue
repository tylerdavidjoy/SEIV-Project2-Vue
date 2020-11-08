<template>
  <div class="main">
    <h1 style="font-size:60px">Students</h1>

    <!--
    <div>
      <select v-model="selected"
      @change="sort()" style="margin:10px; height:20px">
        <option disabled value="">Sort</option>
        <option>Course: A-Z</option>
        <option>Course: Z-A</option>
        <option>Professor: A-Z</option>
        <option>Course: Asc#</option>
      </select>

      <input type="text" v-model="search" placeholder="Search" style="width: 40%; height: 30px"/>
      <button v-on:click="searchItem()" style="width:7%; height: 36px; margin:10px;">Search</button>
      <button v-on:click="addNew(true)" style="width:4%; height: 25px; margin:10px;"> Add +</button> 
    </div>
    -->
    <div v-for="(data,index) in students" :key='index'>
      <button class="list" v-on:click="view(data)">
        <tbody>
          <tr> 
            <td class="list-content-small">Name: {{data.stu_name}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">ID Number: {{data.stu_id}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">Classification: {{data.stu_classification}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">Major: {{data.major_id}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">GPA: {{data.stu_gpa}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">Graduation Date: {{data.stu_grad_date}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">Advisor: {{data.adv_id}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">Hours fulfilled: {{data.stu_hrs_taken}}</td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">Hours left: {{data.stu_hrs_not_taken}}</td>
          </tr>
        </tbody>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Students",
  data() {
    return {
      students: [],
        hover: false,
        search: "",
        selected: ""
      }
      
    },
    methods: {
        view: function(data){
            this.$router.push({name: 'Profile', params: {name:data.Student_Name, student:data}})
          },
        
    created() {
    axios
    .get("http://team2.eaglesoftwareteam.com/courses")
    .then(response => {
      console.log(response)
      this.students = response.data;
    })
    .catch(error => {
      console.log("ERROR: " + error.response)
    })
  }

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
