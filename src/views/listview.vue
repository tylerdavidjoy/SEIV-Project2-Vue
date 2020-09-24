<template>
  <div class="hello">
    <Courses />
  </div>
</template>

<script>
import Courses from "@/components/Courses.vue";
import axios from 'axios'
export default {
  name: "listview",
  components: {
    Courses
  },
  created() {
    axios
    .get("http://team2.eaglesoftwareteam.com/courses")
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log("ERROR: " + error.response)
    })
  }
};
</script>
