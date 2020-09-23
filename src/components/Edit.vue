<template>
  <div>
    <h1 style="font-size:60px">Edit Course</h1>
    <div>
      <p>Number:</p>
      <input v-model="cNumber" placeholder="Course Number" />

      <p>Name:</p>
      <input v-model="cName" placeholder="Course Name" />

      <p>Professor:</p>
      <input v-model="cProfessor" placeholder="Course Professor" />

      <p>Semester:</p>
      <input v-model="cSemester" placeholder="Course Semester" />

      <p>Credit:</p>
      <input v-model="cCredit" placeholder="Course Credit" />

      <p>Start Time:</p>
      <input v-model="cStartTime" placeholder="Course Start Time" />

      <p>End Time:</p>
      <input v-model="cEndTime" placeholder="Course End Time" />

      <p>Room:</p>
      <input v-model="cRoom" placeholder="Course Room" />

      <p>Description:</p>
      <input v-model="cDescription" placeholder="Course Description" />

      <p>Department:</p>
      <input v-model="cDepartment" placeholder="Course Department" />

      <p>Level:</p>
      <input v-model="cLevel" placeholder="Course Level" />

      <button v-on:click="cSave()">Save</button>
      <button v-on:click="backToList()">Cancel</button>
      <button v-on:click="cDelete()">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      cNumber: "",
      cName: "",
      cProfessor: "",
      cSemester: "",
      cCredit: "",
      cStartTime: "",
      cEndTime: "",
      cRoom: "",
      cDescription: "",
      cDepartment: "",
      cLevel: ""
    };
  },
  methods: {
        cSave: function(){
            // Save the course

            // Go back to select page
            this.backToList();
          },
        cDelete: function(){
            // Delete the course

            // Go back to select page
            this.backToList();
          },
        backToList: function(){
          this.$router.push('/listview');
        }
      }
};
</script>
