<template>
  <div>
    <h1 style="font-size:60px">Edit Course</h1>
    <div>
      <p>Course Name:</p>
      <input v-model="cname" placeholder="Course Name" />

      <p>Course Code:</p>
      <input v-model="ccode" placeholder="Course Code" />

      <p>Course Credits:</p>
      <input v-model="ccred" placeholder="Course Credits" />

      <p>Course Semester:</p>
      <input v-model="cseme" placeholder="Course Semester" />

      <p>Course Days:</p>
      <input v-model="cdays" placeholder="Course Days" />

      <p>Course Time:</p>
      <input v-model="ctime" placeholder="Course Time" />

      <p>Course Room:</p>
      <input v-model="croom" placeholder="Course Room" />

      <p>Course Professor:</p>
      <input v-model="cprof" placeholder="Course Professor" />

      <p>Course Description:</p>
      <input v-model="cdesc" placeholder="Course Description" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      cname: "",
      ccode: "",
      ccred: "",
      cseme: "",
      cdays: "",
      ctime: "",
      croom: "",
      cprof: "",
      cdesc: "",
    };
  },
};
</script>
