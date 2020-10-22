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
             <input type="text" v-model="$route.params.student.Student_Name" placeholder="Name"/>
            </td>
        </tr>

        <tr>
           <td><label>ID Number:</label></td>
            <td>         
              <input type="text" v-model="$route.params.student.Student_ID" placeholder="ID Number"/>
            </td>
        </tr>

        <tr>
          <td><label>Advisor:</label></td>
          <td>        
            <input type="text" v-model="$route.params.student.Student_Advisor" placeholder="Advisor" />
          </td>
        </tr>

        <tr>
          <td><label>Hours Taken:</label></td>
          <td>        
            <input type="text" v-model="$route.params.student.Student_Hours_Taken" placeholder="Hours Taken" />
          </td>
        </tr>

        <tr>
          <td><label>GPA:</label></td>
          <td>        
            <input type="text" v-model="$route.params.student.Student_GPA" placeholder="GPA" />
          </td>
        </tr>

        <tr>
          <td><label>Classification:</label></td>
          <td>        
            <input type="text" v-model="$route.params.student.Student_Classification" placeholder="Classification" />
          </td>
        </tr>

        <tr>
          <td><label>Hours to Graduate:</label></td>
          <td>        
            <input type="text" v-model="$route.params.student.Student_Hours_To_Graduate" placeholder="Hours to Graduate" />
          </td>
        </tr>

        <tr>
          <td><label>Major:</label></td>
          <td>        
            <input type="text" v-model="$route.params.student.Student_Major" placeholder="Major" />
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
//import axios from "axios";

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
      /*
    cSave: function(addNew) {
      // Save the course
      if (addNew) {
        axios
          .post(
            "http://team2.eaglesoftwareteam.com/courses",
            {
              Course_Number: this.course.Course_Number,
              Course_Name: this.course.Course_Name,
              Course_Professor_Full_Name: this.course.Course_Professor_Full_Name,
              Course_Semester: this.course.Course_Semester,
              Course_Credit: Number(this.course.Course_Credit),
              Course_Start_Time: this.course.Course_Start_Time,
              Course_End_Time: this.course.Course_End_Time,
              Course_Room: this.course.Course_Room,
              Course_Description: this.course.Course_Description,
              Course_Department: this.course.Course_Department,
              Course_Level: Number(this.course.Course_Level),
            }
          )
          .then(() => {
            this.backToList();
          })
          .catch((error) => {
            console.log("ERROR: " + error.response);
            // Display error and don't change page
          });
      } else {
        axios
          .put(
            "http://team2.eaglesoftwareteam.com/courses/" +
              this.$route.params.id,
            {
              Course_Number: this.course.Course_Number,
              Course_Name: this.course.Course_Name,
              Course_Professor_Full_Name: this.course.Course_Professor_Full_Name,
              Course_Semester: this.course.Course_Semester,
              Course_Credit: Number(this.course.Course_Credit),
              Course_Start_Time: this.course.Course_Start_Time,
              Course_End_Time: this.course.Course_End_Time,
              Course_Room: this.course.Course_Room,
              Course_Description: this.course.Course_Description,
              Course_Department: this.course.Course_Department,
              Course_Level: Number(this.course.Course_Level),
            }
          )
          .then(() => {
            this.backToList();
          })
          .catch((error) => {
            console.log("ERROR: " + error.response);
            // Display  on page and ddon't change page
          });
      }
      // Go back to select page
      this.backToList();
    },
    cDelete: function(addNew) {
      // Delete the course
      if (!addNew) {
        axios
          .delete(
            "http://team2.eaglesoftwareteam.com/courses/" +
              this.$route.params.id
          )
          .then(() => {
            this.backToList();
          })
          .catch((error) => {
            console.log("ERROR: " + error.response);
          });
      }
    },
    backToList: function() {
      this.$router.push("/list");
    },
  },
  created() {
    if (!this.$route.params.new) {
      axios
        .get(
          "http://team2.eaglesoftwareteam.com/courses/id=" + this.$route.params.id
        )
        .then((response) => {
          console.log(response.data);
          this.course = response.data;
        })
        .catch((error) => {
          console.log("ERROR: " + error.response);
        });
    }*/
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