<template>
  <div>
    <h1 v-if="$route.params.new != true" style="font-size:60px">
      Edit Course {{ $route.params.id }}
    </h1>
    <h1 v-else style="font-size:60px">Add Course</h1>
    <div>
      <div>
        <label>Number:</label>
        <input
          type="text"
          v-model="course.Course_Number"
          placeholder="Number"
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          v-model="course.Course_Name"
          placeholder="Name"
        />
      </div>
      <div>
        <label>Professor:</label>
        <input
          type="text"
          v-model="course.Course_Professor_Full_Name"
          placeholder="Professor"
        />
      </div>
      <div>
        <label>Semester:</label>
        <input
          type="text"
          v-model="course.Course_Semester"
          placeholder="Semester"
        />
      </div>
      <div>
        <label>Credit:</label>
        <input
          type="text"
          v-model="course.Course_Credit"
          placeholder="Credit"
        />
      </div>
      <div>
        <label>Start Time:</label>
        <input
          type="text"
          v-model="course.Course_Start_Time"
          placeholder="Start Time"
        />
      </div>
      <div>
        <label>End Time:</label>
        <input
          type="text"
          v-model="course.Course_End_Time"
          placeholder="End Time"
        />
      </div>
      <div>
        <label>Room:</label>
        <input
          type="text"
          v-model="course.Course_Room"
          placeholder="Room"
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          v-model="course.Course_Description"
          placeholder="Description"
        />
      </div>
      <div>
        <label>Department:</label>
        <input
          type="text"
          v-model="course.Course_Department"
          placeholder="Department"
        />
      </div>
      <div>
        <label>Level:</label>
        <input
          type="text"
          v-model="course.Course_Level"
          placeholder="Level"
        />
      </div>
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
  </div>
</template>

<script>
import axios from "axios"

export default {
  data(){
    return{
        course: {
          Course_Number: "",
          Course_Name: "",
          Course_Professor_Full_Name: "",
          Course_Credit: "",
          Course_Department: "",
          Course_Description: "",
          Course_End_Time: "",
          Course_Start_Time: "",
          Course_Semester: "",
          Course_Level: "",
          Course_Room: ""
        }
    }
  },
  methods: {
    cSave: function(addNew) {
      // Save the course
      if(addNew)
      {
        // ToDo
      }
      else
      {
        // ToDo
      }
      // Go back to select page
      this.backToList();
    },
    cDelete: function(addNew) {
      // Delete the course
      if(addNew)
      {
        // ToDo
      }
      else
      {
        // ToDo
      }
      // Go back to select page
      this.backToList();
    },
    backToList: function() {
      this.$router.push("/listview");
    },
  },
  created() {
    if(!this.$route.params.new)
    {
      axios
      .get("http://team2.eaglesoftwareteam.com/courses/" + this.$route.params.id)
      .then(response => {
        console.log(response.data)
        this.course = response.data;
      })
      .catch(error => {
        console.log("ERROR: " + error.response)
      })
    }
  }
};
</script>
