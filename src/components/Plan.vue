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
        
        <tr>
           <td><input type="text" placeholder="number" /></td>
           <td><input type="text" placeholder="name" /></td>
           <td><input type="text" placeholder="credits" /></td>
        </tr>

        <tr>
          <button v-on:click="addClass('freshmanF')">+ Add Class</button>
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
        
        <tr>
           <td><input type="text" placeholder="number" /></td>
           <td><input type="text" placeholder="name" /></td>
           <td><input type="text" placeholder="credits" /></td>
        </tr>

        <tr>
          <button v-on:click="addClass('sophmoreF')">+ Add Class</button>
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
        
        <tr>
           <td><input type="text" placeholder="number" /></td>
           <td><input type="text" placeholder="name" /></td>
           <td><input type="text" placeholder="credits" /></td>
        </tr>

        <tr>
          <button v-on:click="addClass('juniorF')">+ Add Class</button>
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
        
        <tr>
           <td><input type="text" placeholder="number" /></td>
           <td><input type="text" placeholder="name" /></td>
           <td><input type="text" placeholder="credits" /></td>
        </tr>

        <tr>
          <button v-on:click="addClass('seniorF')">+ Add Class</button>
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
    addClass(sem) {
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
        })
        .catch((error) => {
          console.log("ERROR: " + error.response);
        });

        return course;
     }
  },
  created(){
    if(this.$router.params.semester){
      var temp = this.getCourse()
      var course = {number: temp.number, name:temp.name, credits: temp.credits}

      switch(this.$router.params.semester){
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