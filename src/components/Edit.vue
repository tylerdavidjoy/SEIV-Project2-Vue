<template>
  <div>
    <h1 style="font-size:60px">Edit Course {{ $route.params.id }}</h1>
    <div>
      <div>
        <label for="cNumber">Number:</label>
        <input id="cNumber" v-bind="cNumber" placeholder="Number" />
      </div>
      <div>
        <label for="cName">Name:</label>
        <input id="cName" v-bind="cName" placeholder="Name" />
      </div>
      <div>
        <label for="cProfessor">Professor:</label>
        <input id="cProfessor" v-bind="cProfessor" placeholder="Professor" />
      </div>
      <div>
        <label for="cSemester">Semester:</label>
        <input id="cSemester" v-bind="cSemester" placeholder="Semester" />
      </div>
      <div>
        <label for="cCredit">Credit:</label>
        <input id="cCredit" v-bind="cCredit" placeholder="Credit" />
      </div>
      <div>
        <label for="cStartTime">Start Time:</label>
        <input id="cStartTime" v-bind="cStartTime" placeholder="Start Time" />
      </div>
      <div>
        <label for="cEndTime">End Time:</label>
        <input id="cEndTime" v-bind="cEndTime" placeholder="End Time" />
      </div>
      <div>
        <label for="cRoom">Room:</label>
        <input id="cRoom" v-bind="cRoom" placeholder="Room" />
      </div>
      <div>
        <label for="cDescription">Description:</label>
        <input id="cDescription" v-bind="cDescription" placeholder="Description" />
      </div>
      <div>
        <label for="cDepartment">Department:</label>
        <input id="cDepartment" v-bind="cDepartment" placeholder="Department" />
      </div>
      <div>
        <label for="cLevel">Level:</label>
        <input id="cLevel" v-bind="cLevel" placeholder="Level" />
      </div>
      <div>
        <button v-on:click="cSave()">Save</button>
        <button v-on:click="backToList()">Cancel</button>
        <button v-on:click="cDelete()">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
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
    }
  },
  methods: {
    cSave: function() {
      // Save the course

      // Go back to select page
      this.backToList();
    },
    cDelete: function() {
      // Delete the course

      // Go back to select page
      this.backToList();
    },
    backToList: function() {
      this.$router.push("/listview");
    },
  },
};
</script>
