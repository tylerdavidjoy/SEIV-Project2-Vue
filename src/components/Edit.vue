<template>
  <div>
    <h1 style="font-size:60px">Edit Course</h1>
    <div>
      <p>Number:</p>
      <input v-model="cNumber" placeholder="Number" />

      <p>Name:</p>
      <input v-model="cName" placeholder="Name" />

      <p>Professor:</p>
      <input v-model="cProfessor" placeholder="Professor" />

      <p>Semester:</p>
      <input v-model="cSemester" placeholder="Semester" />

      <p>Credit:</p>
      <input v-model="cCredit" placeholder="Credit" />

      <p>Start Time:</p>
      <input v-model="cStartTime" placeholder="Start Time" />

      <p>End Time:</p>
      <input v-model="cEndTime" placeholder="End Time" />

      <p>Room:</p>
      <input v-model="cRoom" placeholder="Room" />

      <p>Description:</p>
      <input v-model="cDescription" placeholder="Description" />

      <p>Department:</p>
      <input v-model="cDepartment" placeholder="Department" />

      <p>Level:</p>
      <input v-model="cLevel" placeholder="Level" />

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
