<template>
  <div>
    <h1 v-if="$route.params.new != true" style="font-size:60px">
      Edit Course {{ $route.params.id }}
    </h1>
    <h1 v-else style="font-size:60px">Add Course</h1>

    <table class = "list">
      <tbody >
         <tr>
           <td><label>Number:</label></td>
           <td>        
             <input type="text" v-model="course.Course_Number" placeholder="Number"/>
            </td>
        </tr>

        <tr>
           <td><label>Name:</label></td>
            <td>        
              <input type="text" v-model="course.Course_Name" placeholder="Name" v-if="$route.params.new != true" disabled/>
              <input type="text" v-model="course.Course_Name" placeholder="Name" v-else/>
            </td>
        </tr>

        <tr>
          <td><label>Professor:</label></td>
          <td>        
            <input type="text" v-model="course.Course_Professor_Full_Name" placeholder="Professor" />
          </td>
        </tr>

        <tr>
          <td><label>Semester:</label></td>
          <td>        
            <input type="text" v-model="course.Course_Semester" placeholder="Semester" />
          </td>
        </tr>

        <tr>
          <td><label>Credit:</label></td>
          <td>        
            <input type="number" v-model="course.Course_Credit" placeholder="Credit" />
          </td>
        </tr>

        <tr>
          <td><label>Start Time:</label></td>
          <td>        
            <input type="text" v-model="course.Course_Start_Time" placeholder="Start Time" />
          </td>
        </tr>

        <tr>
          <td><label>End Time:</label></td>
          <td>        
            <input type="text" v-model="course.Course_End_Time" placeholder="End Time" />
          </td>
        </tr>

        <tr>
          <td><label>Room:</label></td>
          <td>        
            <input type="text" v-model="course.Course_Room" placeholder="Room" />
          </td>
        </tr>

        <tr>
          <td><label>Description:</label></td>
          <td>        
            <input type="text" v-model="course.Course_Description" placeholder="Description" />
          </td>
        </tr>

        <tr>
          <td><label>Department:</label></td>
          <td>        
            <input type="text" v-model="course.Course_Description" placeholder="Description" />
          </td>
        </tr>

        <tr>
          <td><label>Level:</label></td>
          <td>        
            <input type="number" v-model="course.Course_Level" placeholder="Level" />
          </td>
        </tr>

      </tbody>
    </table>
      <div>
        <button v-on:click="cSave($route.params.new)">Save</button>
        <button v-on:click="backToList()">Cancel</button>
        <button
          v-on:click="cDelete($route.params.new)"
          v-if="$route.params.new != true"
        >
          Delete
        </button>
      </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      course: {
        Course_Number: "",
        Course_Name: "",
        Course_Professor_Full_Name: "",
        Course_Semester: "",
        Course_Credit: "",
        Course_Start_Time: "",
        Course_End_Time: "",
        Course_Room: "",
        Course_Description: "",
        Course_Department: "",
        Course_Level: "",
      }
    };
  },
  methods: {
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
              Course_Level: Number(this.course.Course_Number),
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
              Course_Credit: this.course.Course_Credit,
              Course_Start_Time: this.course.Course_Start_Time,
              Course_End_Time: this.course.Course_End_Time,
              Course_Room: this.course.Course_Room,
              Course_Description: this.course.Course_Description,
              Course_Department: this.course.Course_Department,
              Course_Level:this.course.Course_Number,
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
      this.$router.push("/");
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
    }
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