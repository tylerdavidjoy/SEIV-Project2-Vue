<template>
  <div>
    <h1 v-if="$route.params.new != true" style="font-size:60px">Edit Course {{ $route.params.id }}</h1>
    <h1 v-else style="font-size:60px">Add Course</h1>
    <div>
      <div>
        <label for="cNumber">Number:</label>
        <input id="cNumber" v-bind="course.Course_Number" value:course.Course_Number placeholder="Number" />
      </div>
      <div>
        <label for="cName">Name:</label>
        <input id="cName" v-bind="course.Course_Name" value:course.Course_Name placeholder="Name" />
      </div>
      <div>
        <label for="cProfessor">Professor:</label>
        <input id="cProfessor" v-bind="course.Course_Professor_Full_Name" value:course.Course_Course_Professor_Full_Name placeholder="Professor" />
      </div>
      <div>
        <label for="cSemester">Semester:</label>
        <input id="cSemester" v-bind="course.Course_Semester" value:course.Course_Semester placeholder="Semester" />
      </div>
      <div>
        <label for="cCredit">Credit:</label>
        <input id="cCredit" v-bind="course.Course_Credit" value:course.Course_Credit placeholder="Credit" />
      </div>
      <div>
        <label for="cStartTime">Start Time:</label>
        <input id="cStartTime" v-bind="course.Course_Start_Time" value:course.Course_Start_Time placeholder="Start Time" />
      </div>
      <div>
        <label for="cEndTime">End Time:</label>
        <input id="cEndTime" v-bind="course.Course_End_Time" value:course.Course_End_Start placeholder="End Time" />
      </div>
      <div>
        <label for="cRoom">Room:</label>
        <input id="cRoom" v-bind="course.Course_Room" value:course.Course_Room placeholder="Room" />
      </div>
      <div>
        <label for="cDescription">Description:</label>
        <input id="cDescription" v-bind="course.Course_Description" value:course.Course_Description placeholder="Description" />
      </div>
      <div>
        <label for="cDepartment">Department:</label>
        <input id="cDepartment" v-bind="course.Course_Department" value:course.Course_Department placeholder="Department" />
      </div>
      <div>
        <label for="cLevel">Level:</label>
        <input id="cLevel" v-bind="course.Course_Level" value:course.Course_Level placeholder="Level" />
      </div>
      <div>
        <button v-on:click="cSave($route.params.new)">Save</button>
        <button v-on:click="backToList()">Cancel</button>
        <button v-on:click="cDelete($route.params.new)" v-if="$route.params.new != true">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        course: {
          Course_Credit: ​​​"",
          Course_Department: "",​
          Course_Description: "",  ​​​
          Course_End_Time: "",  ​​​
          Course_Level: "", ​​​
          Course_Name: "",​​​
          Course_Number: "",​​
          Course_Professor_Full_Name: "",  ​​​
          Course_Room: "",  ​​​
          Course_Semester: "",
          Course_Start_Time: "",
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
    if(!this.$router.params.new)
    {
      axios
      .get("http://team2.eaglesoftwareteam.com/courses/" + this.$router.params.id)
      .then(response => {
        console.log(response.data)
        this.courses = response.data;
      })
      .catch(error => {
        console.log("ERROR: " + error.response)
      })
    }
  }
};
</script>
