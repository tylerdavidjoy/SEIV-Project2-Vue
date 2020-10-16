<template>
  <div>
    <h1 style="margin-top:2%;">Plan</h1>

    <table>
      <h3>Freshman Fall</h3>
      <tbody>
         <tr>
           <td><label>Number</label></td>
           <td><label>Name</label></td>
           <td><label>Credits</label></td>
        </tr>
        
        <tr v-for="(data,index) in semesters.freshmanF" :key='index'>
           <td><input type="text" placeholder="number" disabled/>{{data.Course_Number}}</td>
           <td><input type="text" placeholder="name" disabled/>{{data.Course_Name}}</td>
           <td><input type="text" placeholder="credits" disabled/>{{data.Course_Credit}}</td>
        </tr>

        <tr>
          <button v-on:click="selectCourse('freshmanF')">+ Add Class</button>
        </tr>
      </tbody>
    </table>

    <table>
      <h3>Sophmore Fall</h3>
      <tbody>
         <tr>
           <td><label>Number</label></td>
           <td><label>Name</label></td>
           <td><label>Credits</label></td>
        </tr>
        
        <tr v-for="(data,index) in semesters.sophmoreF" :key='index'>
           <td><input type="text" placeholder="number" disabled/>{{data.Course_Number}}</td>
           <td><input type="text" placeholder="name" disabled/>{{data.Course_Name}}</td>
           <td><input type="text" placeholder="credits" disabled/>{{data.Course_Credit}}</td>
        </tr>

        <tr>
          <button v-on:click="selectCourse('sophmoreF')">+ Add Class</button>
        </tr>
      </tbody>
    </table>

      <table>
      <h3>Junior Fall</h3>
      <tbody>
         <tr>
           <td><label>Number</label></td>
           <td><label>Name</label></td>
           <td><label>Credits</label></td>
        </tr>
        
        <tr v-for="(data,index) in semesters.juniorF" :key='index'>
           <td><input type="text" placeholder="number" disabled/>{{data.Course_Number}}</td>
           <td><input type="text" placeholder="name" disabled/>{{data.Course_Name}}</td>
           <td><input type="text" placeholder="credits" disabled/>{{data.Course_Credit}}</td>
        </tr>

        <tr>
          <button v-on:click="selectCourse('juniorF')">+ Add Class</button>
        </tr>
      </tbody>
    </table>

      <table>
      <h3>Senior Fall</h3>
      <tbody>
         <tr>
           <td><label>Number</label></td>
           <td><label>Name</label></td>
           <td><label>Credits</label></td>
        </tr>
        
        <tr v-for="(data,index) in semesters.seniorF" :key='index'>
           <td><input type="text" placeholder="number" disabled/>{{data.Course_Number}}</td>
           <td><input type="text" placeholder="name" disabled/>{{data.Course_Name}}</td>
           <td><input type="text" placeholder="credits" disabled/>{{data.Course_Credit}}</td>
        </tr>

        <tr>
          <button v-on:click="selectCourse('seniorF')">+ Add Class</button>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      semesters: {
        freshmanF: [],
        freshmanS: [],
        sophmoreF: [],
        sophmoreS: [],
        juniorF: [],
        juniorS: [],
        seniorF: [],
        seniorS: []
      }
    };
  },
  methods:{
    selectCourse(sem) {
      this.$router.push({name: 'ListView', params: {semester:sem}})
    },
     getCourse(){
       var course = {};
        axios
        .get(
          "http://team2.eaglesoftwareteam.com/courses/id=" + this.$route.params.id
        )
        .then((response) => {
          console.log(response.data);
          course = response.data;
          this.addCourse(course)
        })
        .catch((error) => {
          console.log("ERROR: " + error.response);
        });

        return course;
     },
     addCourse(temp){
      var course = {number: temp.number, name:temp.name, credits: temp.credits}
      switch(this.$route.params.semester){
              case "freshmanF":
                this.semesters.freshmanF.push(course)
                break;
              case "freshmanS":
                this.semesters.freshmanS.push(course);
                break;
              case "sophmoreF":
                this.semesters.sophmoreF.push(course);
                break;
              case "sophmoreS":
                this.semesters.sophmoreS.push(course);
                break;
              case "juniorF":
                this.semesters.juniorF.push(course);
                break;
              case "juniorS":
                this.semesters.juniorS.push(course);
                break;
              case "seniorF":
                this.semesters.seniorF.push(course);
                break;
              case "seniorS":
                this.semesters.seniorS.push(course);
                break;
            }
     }
  },
  created(){
    if(this.$route.params.semester){
      this.getCourse();      
    }
  }
};
</script>

<style>
 label {
  margin:auto;
  padding:10px;
}
table {
  margin: 5%;
}
h3{
  text-align:center;
  width:300%
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
  background-color:silver;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin:5px;
  width:300%;
}

</style>