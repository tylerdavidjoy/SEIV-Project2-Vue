<template>
  <div class="main">
    <h1 style="font-size:60px">Course View</h1>
    <div v-for="(data,index) in courses" :key='index'>
      <button class="list" v-on:click="view()">
        <tbody>
          <tr> 
            <td class="list-content-large">{{data.name}}</td>
            <td></td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">Credits: {{data.credits}}</td>
          </tr>

          <tr> 
            <td class="list-content-large">{{data.code}}</td>
            <td></td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">{{data.semester}}</td>
          </tr>

          <tr> 
            <td></td>
            <td></td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">{{data.time}}</td>
          </tr>

          <tr> 
            <td></td>
            <td></td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">{{data.room}}</td>
          </tr>

          <tr> 
            <td></td>
            <td></td>
            <td style="color:#C0C0C0">______</td>
            <td class="list-content-small">{{data.professor}}</td>
          </tr>

          <tr> 
            <td class="list-content-description">{{data.desc}} </td>
          </tr>

        </tbody>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Courses",
  data() {
    return {
      courses: [
        {
            "code":"CMSC-2133",
            "name":"Object Oriented Programming",
            "desc":"Covers object oriented design and implementation issues. Topics include an introduction to modeling tools (e.g, UML), abstraction, inheritance, polymorphism, memory management, and common design patterns. The course also provides an introduction to event handling and GUI development using relevant class libraries",
            "credits":"4",
            "professor":"David North",
            "semester":"Fall 2020",
            "room":"PEC 233",
            "time":"MWF 10:00AM"
        },
        {
            "code":"CMSC-2413",
            "name":"Assembly Language",
            "desc":"An introduction to assembly language concepts and programming. The topics include binary and hexadecimal number systems, data representation methods, addressing techniques and subroutines. This course is normally offered in the fall semseter.",
            "credits":"4",
            "professor":"Don Leftwitch",
            "semester":"Fall 2020",
            "room":"PEC 233",
            "time":"MWF 9:15AM"
        },
        {
            "code":"CMSC-1113",
            "name":"Programming I",
            "desc":"An introduction to the discipline of computing. The course has three major objectives: to present computing as a discipline, to develop skills in problem solving using a computer and to teach the software development process. This course includes laboratory experiences in computer science.",
            "credits":"4",
            "professor":"Ralph Debord",
            "semester":"Fall 2020",
            "room":"HSH 207",
            "time":"MWF 10:00AM"
        }
        ],
        hover: false,
      }
    },
    methods: {
        view: function(){
            this.$router.push('/edit');
          }
      }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.list {
  margin-left:auto;
  margin-right:auto;
  margin-bottom: 10px;
  width: 45%;
  border: 6px solid #00D0DD;
  padding: 10px;
  background-color: #C0C0C0;
  text-align: left;
}

.main {
  background-color: #E5E5E5;
  }

.list-content-large{
  color: black;
  font-size: 20px;
  }

  .list-content-small{
  color: black;
  font-size: 16px;
  margin-left:30%;
  }

  .list-content-description{
  border: 2px solid black;
  background-color: white;  
  color: black;
  font-size: 15px;
  width:80%;
  margin-right:10px;
  }

  .listHighlight{
    background-color: #9E9E9E;
    }
</style>
