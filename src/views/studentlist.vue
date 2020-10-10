<template>
  <div class="hello">
    <Students />
  </div>
</template>

<script>
import Students from "@/components/StudentList.vue";
export default {
  name: "studentlist",
  components: {
    Students
  }
};
</script>
