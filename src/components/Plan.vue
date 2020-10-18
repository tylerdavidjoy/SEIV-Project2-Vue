<template>
  <div>
    <h1 style="margin-top:2%;">Plan</h1>

    <table style="float: left">
      <h3 class="left">Freshman Fall</h3>
      <tbody>
         <tr>
           <td><label>Number</label></td>
           <td><label>Name</label></td>
           <td><label>Credits</label></td>
        </tr>
        
        <tr v-for="(data,index) in semesters.freshmanF" :key='index'>
           <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
           <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
           <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
        </tr>

        <tr>
          <button v-on:click="selectCourse('freshmanF')">+ Add Class</button>
        </tr>
      </tbody>
    </table>

    <table style="display: inline-block;">
      <h3 class="right">Freshman Spring</h3>
      <tbody>
         <tr>
           <td><label>Number</label></td>
           <td><label>Name</label></td>
           <td><label>Credits</label></td>
        </tr>
        
        <tr v-for="(data,index) in semesters.freshmanS" :key='index'>
           <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
           <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
           <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
        </tr>

        <tr>
          <button v-on:click="selectCourse('freshmanS')">+ Add Class</button>
        </tr>
      </tbody>
    </table>

  <div/>

    <table style="float:left;">
      <h3 class="left">Sophmore Fall</h3>
      <tbody>
         <tr>
           <td><label>Number</label></td>
           <td><label>Name</label></td>
           <td><label>Credits</label></td>
        </tr>
        
        <tr v-for="(data,index) in semesters.sophmoreF" :key='index'>
           <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
           <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
           <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
        </tr>

        <tr>
          <button v-on:click="selectCourse('sophmoreF')">+ Add Class</button>
        </tr>
      </tbody>
    </table>

    <table style="display: inline-block;">
      <h3 class="right">Sophmore Spring</h3>
      <tbody>
         <tr>
           <td><label>Number</label></td>
           <td><label>Name</label></td>
           <td><label>Credits</label></td>
        </tr>
        
        <tr v-for="(data,index) in semesters.sophmoreS" :key='index'>
           <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
           <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
           <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
        </tr>

        <tr>
          <button v-on:click="selectCourse('sophmoreS')">+ Add Class</button>
        </tr>
      </tbody>
    </table>

    <div/>

      <table style="float: left;">
      <h3 class="left">Junior Fall</h3>
      <tbody>
         <tr>
           <td><label>Number</label></td>
           <td><label>Name</label></td>
           <td><label>Credits</label></td>
        </tr>
        
        <tr v-for="(data,index) in semesters.juniorF" :key='index'>
           <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
           <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
           <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
        </tr>

        <tr>
          <button v-on:click="selectCourse('juniorF')">+ Add Class</button>
        </tr>
      </tbody>
    </table>

    <table style="display: inline-block;">
      <h3 class="right">Junior Spring</h3>
      <tbody>
         <tr>
           <td><label>Number</label></td>
           <td><label>Name</label></td>
           <td><label>Credits</label></td>
        </tr>
        
        <tr v-for="(data,index) in semesters.juniorS" :key='index'>
           <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
           <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
           <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
        </tr>

        <tr>
          <button v-on:click="selectCourse('juniorS')">+ Add Class</button>
        </tr>
      </tbody>
    </table>

    <div/>

      <table style="float: left;">
      <h3 class="left">Senior Fall</h3>
      <tbody>
         <tr>
           <td><label>Number</label></td>
           <td><label>Name</label></td>
           <td><label>Credits</label></td>
        </tr>
        
        <tr v-for="(data,index) in semesters.seniorF" :key='index'>
           <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
           <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
           <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
        </tr>

        <tr>
          <button v-on:click="selectCourse('seniorF')">+ Add Class</button>
        </tr>
      </tbody>
    </table>

      <table style="display: inline-block;">
      <h3 class="right">Senior Spring</h3>
      <tbody>
         <tr>
           <td><label>Number</label></td>
           <td><label>Name</label></td>
           <td><label>Credits</label></td>
        </tr>
        
        <tr v-for="(data,index) in semesters.seniorS" :key='index'>
           <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
           <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
           <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
        </tr>

        <tr>
          <button v-on:click="selectCourse('seniorS')">+ Add Class</button>
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
      var course = {Course_Number: temp.Course_Number, Course_Name:temp.Course_Name, Course_Credit: temp.Course_Credit}
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
.left{
  text-align:center;
  width:300%
}

.right{
  text-align:center;
  width:150%;
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